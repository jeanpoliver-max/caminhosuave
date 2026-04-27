import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../lib/firebase';
import { collection, query, getDocs, doc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { Users, UserPlus, Trash2, Mail, ShieldAlert } from 'lucide-react';
import AdminSidebar from '../../components/layout/AdminSidebar';

interface AdminUser {
  email: string;
  role: string;
  createdAt: any;
}

export default function AdminEquipe() {
  const { user, isAdmin } = useAuth();
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [newEmail, setNewEmail] = useState('');
  const [newRole, setNewRole] = useState('volunteer');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const fetchAdmins = async () => {
    try {
      const q = query(collection(db, 'admins'));
      const querySnapshot = await getDocs(q);
      const adminsList: AdminUser[] = [];
      querySnapshot.forEach((doc) => {
        adminsList.push(doc.data() as AdminUser);
      });
      setAdmins(adminsList);
    } catch (err) {
      console.error("Erro ao buscar equipe:", err);
      setError("Erro ao carregar lista de equipe.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      fetchAdmins();
    }
  }, [isAdmin]);

  const handleAddMember = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!newEmail || !newEmail.includes('@')) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }
    
    const isAlreadyAdmin = admins.some(a => a.email.toLowerCase() === newEmail.toLowerCase());
    if (isAlreadyAdmin) {
      setError("Este usuário já faz parte da equipe.");
      return;
    }

    try {
      const docRef = doc(db, 'admins', newEmail.toLowerCase());
      await setDoc(docRef, {
        email: newEmail.toLowerCase(),
        role: newRole,
        createdAt: serverTimestamp()
      });
      
      setSuccess(`Usuário ${newEmail} adicionado com sucesso!`);
      setNewEmail('');
      fetchAdmins(); 
    } catch (err: any) {
      console.error(err);
      setError("Erro ao adicionar usuário. Verifique suas permissões.");
    }
  };

  const handleRemoveMember = async (email: string) => {
    if (email === user?.email || email === 'jeanp.oliver@gmail.com') {
      setError("Você não pode remover este administrador.");
      return;
    }
    
    if (window.confirm(`Tem certeza que deseja remover ${email}? Eles perderão o acesso ao painel.`)) {
      try {
        await deleteDoc(doc(db, 'admins', email));
        setSuccess(`Usuário ${email} removido.`);
        fetchAdmins();
      } catch (err) {
        console.error(err);
        setError("Erro ao remover usuário.");
      }
    }
  };

  if (loading) {
    return <AdminSidebar><div className="p-8">Carregando equipe...</div></AdminSidebar>;
  }

  return (
    <AdminSidebar>
      <div className="p-8 max-w-5xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-primary flex items-center gap-3">
            <Users className="w-8 h-8" />
            Gerenciar Equipe
          </h1>
          <p className="text-neutral-dark mt-2">
            Somente usuários cadastrados nesta lista têm acesso à área administrativa do sistema.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-3 border border-red-200">
            <ShieldAlert className="w-5 h-5 flex-shrink-0" />
            <p className="font-medium">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl font-medium border border-green-200">
            {success}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário de Adição */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 lg:col-span-1 h-fit">
            <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <UserPlus className="w-5 h-5" />
              Adicionar Membro
            </h2>
            
            <form onSubmit={handleAddMember} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail do Usuário</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    required
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="email@exemplo.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nível de Acesso</label>
                <select
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white"
                >
                  <option value="volunteer">Voluntário (Básico)</option>
                  <option value="editor">Editor (Conteúdo)</option>
                  <option value="owner">Administrador (Total)</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-3 rounded-xl transition-colors mt-2"
              >
                Conceder Acesso
              </button>
            </form>
          </div>

          {/* Lista de Equipe */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden lg:col-span-2">
            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Membros Autorizados</h2>
              <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                {admins.length} membros
              </span>
            </div>
            
            <div className="divide-y divide-gray-100">
              {/* Owner fixo */}
              <div className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                    JS
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">jeanp.oliver@gmail.com</p>
                    <p className="text-xs text-gray-500 font-medium">Fundador / Master</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Sistema
                </span>
              </div>

              {admins.map((admin) => (
                <div key={admin.email} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold uppercase">
                      {admin.email.substring(0, 2)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{admin.email}</p>
                      <p className="text-xs text-gray-500 font-medium capitalize">{admin.role}</p>
                    </div>
                  </div>
                  
                  {admin.email !== user?.email && (
                    <button
                      onClick={() => handleRemoveMember(admin.email)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Revogar Acesso"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
              
              {admins.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  Apenas o perfil principal está cadastrado no sistema.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminSidebar>
  );
}
