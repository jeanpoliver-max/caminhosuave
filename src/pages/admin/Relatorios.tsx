import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../lib/firebase';
import { collection, query, getDocs, doc, setDoc, deleteDoc, serverTimestamp, orderBy } from 'firebase/firestore';
import { FileText, Plus, Trash2, Edit2, CheckCircle2, XCircle, Link as LinkIcon } from 'lucide-react';
import AdminSidebar from '../../components/layout/AdminSidebar';

interface ReportItem {
  id: string;
  title: string;
  url: string;
  period?: string;
  authorEmail: string;
  createdAt: any;
}

export default function AdminRelatorios() {
  const { user } = useAuth();
  const [reports, setReports] = useState<ReportItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentReport, setCurrentReport] = useState<Partial<ReportItem>>({
    title: '',
    url: '',
    period: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const fetchReports = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, 'reports'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const list: ReportItem[] = [];
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() } as ReportItem);
      });
      setReports(list);
    } catch (err) {
      console.error("Erro ao buscar relatórios:", err);
      setError("Erro ao carregar a lista de relatórios.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleCreateOrUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!currentReport.title || !currentReport.url) {
      setError("Título e URL são obrigatórios.");
      return;
    }

    try {
      const isNew = !currentReport.id;
      const reportId = currentReport.id || Date.now().toString() + Math.random().toString(36).substring(2, 5);
      
      const payload: any = {
        title: currentReport.title,
        url: currentReport.url,
      };

      if (currentReport.period) {
        payload.period = currentReport.period;
      }

      if (isNew) {
        payload.authorEmail = user?.email || 'admin@admin.com';
        payload.createdAt = serverTimestamp();
      }

      const docRef = doc(db, 'reports', reportId);
      await setDoc(docRef, payload, { merge: true });
      
      setSuccess(`Relatório ${isNew ? 'criado' : 'atualizado'} com sucesso!`);
      setIsEditing(false);
      setCurrentReport({ title: '', url: '', period: '' });
      fetchReports();
    } catch (err: any) {
      console.error(err);
      setError("Erro ao salvar relatório. Verifique suas permissões.");
    }
  };

  const handleEdit = (report: ReportItem) => {
    setCurrentReport(report);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string, title: string) => {
    if (window.confirm(`Tem certeza que deseja apagar o relatório "${title}"?`)) {
      try {
        await deleteDoc(doc(db, 'reports', id));
        setSuccess(`Relatório removido com sucesso.`);
        fetchReports();
      } catch (err) {
        console.error(err);
        setError("Erro ao remover relatório.");
      }
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setCurrentReport({ title: '', url: '', period: '' });
    setError('');
    setSuccess('');
  };

  if (loading && !isEditing && reports.length === 0) {
    return <AdminSidebar><div className="p-8">Carregando relatórios...</div></AdminSidebar>;
  }

  return (
    <AdminSidebar>
      <div className="p-8 max-w-5xl mx-auto w-full">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-primary flex items-center gap-3">
              <FileText className="w-8 h-8" />
              Relatórios de Transparência
            </h1>
            <p className="text-neutral-dark mt-2">
              Gerencie os links para relatórios em PDF (ex: Google Drive).
            </p>
          </div>
          {!isEditing && (
            <button 
              onClick={() => setIsEditing(true)}
              className="bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-xl flex items-center gap-2 transition-colors"
            >
              <Plus className="w-5 h-5" /> Novo Relatório
            </button>
          )}
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-3 border border-red-200">
            <XCircle className="w-5 h-5 flex-shrink-0" />
            <p className="font-medium">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 border border-green-200">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <p className="font-medium">{success}</p>
          </div>
        )}

        {isEditing ? (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-xl font-bold text-primary mb-6">
              {currentReport.id ? "Editar Relatório" : "Adicionar Novo Relatório"}
            </h2>
            <form onSubmit={handleCreateOrUpdate} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Título do Relatório</label>
                <input
                  type="text"
                  required
                  value={currentReport.title}
                  onChange={(e) => setCurrentReport({ ...currentReport, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  placeholder="Ex: Prestação de Contas Anual"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Período (Opcional)</label>
                <input
                  type="text"
                  value={currentReport.period || ''}
                  onChange={(e) => setCurrentReport({ ...currentReport, period: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  placeholder="Ex: 2025 ou Março de 2025"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Link do Arquivo (PDF no Google Drive, etc)</label>
                <input
                  type="url"
                  required
                  value={currentReport.url}
                  onChange={(e) => setCurrentReport({ ...currentReport, url: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  placeholder="https://drive.google.com/file/d/..."
                />
                <p className="text-xs text-gray-500 mt-1">Certifique-se de que o link do Google Drive está configurado como "Qualquer pessoa com o link pode visualizar".</p>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="px-6 py-2 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white rounded-xl font-medium hover:bg-opacity-90 transition-colors"
                >
                  {currentReport.id ? "Salvar Alterações" : "Adicionar Relatório"}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Documentos Disponíveis</h2>
              <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                {reports.length} itens
              </span>
            </div>
            
            <div className="divide-y divide-gray-100">
              {reports.map((report) => (
                <div key={report.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{report.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1 text-sm text-gray-500">
                        {report.period && <span>Período: {report.period}</span>}
                        <span className="flex items-center gap-1">
                          <LinkIcon className="w-3 h-3" />
                          <a href={report.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Acessar Link
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleEdit(report)}
                      className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                      title="Editar"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(report.id, report.title)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Excluir"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
              
              {reports.length === 0 && !loading && (
                <div className="p-12 text-center text-gray-500 flex flex-col items-center">
                  <FileText className="w-12 h-12 text-gray-300 mb-4" />
                  <p className="text-lg font-medium text-gray-900 mb-1">Nenhum relatório encontrado</p>
                  <p>Adicione relatórios de transparência clicando no botão acima.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </AdminSidebar>
  );
}
