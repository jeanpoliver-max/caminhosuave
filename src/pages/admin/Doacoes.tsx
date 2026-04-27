import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../lib/firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { Heart, CheckCircle2, XCircle, Save } from 'lucide-react';
import AdminSidebar from '../../components/layout/AdminSidebar';

interface DonationSettings {
  pixKey: string;
  paypalLink: string;
}

export default function AdminDoacoes() {
  const { user } = useAuth();
  const [settings, setSettings] = useState<DonationSettings>({
    pixKey: '',
    paypalLink: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const docRef = doc(db, 'settings', 'donations');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setSettings({
            pixKey: data.pixKey || '',
            paypalLink: data.paypalLink || ''
          });
        }
      } catch (err) {
        console.error("Erro ao buscar configurações:", err);
        setError("Erro ao carregar as configurações de doação.");
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSaving(true);

    try {
      const docRef = doc(db, 'settings', 'donations');
      await setDoc(docRef, {
        ...settings,
        updatedAt: serverTimestamp()
      }, { merge: true });
      
      setSuccess("Configurações atualizadas com sucesso!");
    } catch (err: any) {
      console.error(err);
      setError("Erro ao salvar configurações. Verifique suas permissões.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <AdminSidebar><div className="p-8">Carregando configurações...</div></AdminSidebar>;
  }

  return (
    <AdminSidebar>
      <div className="p-8 max-w-3xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-primary flex items-center gap-3">
            <Heart className="w-8 h-8" />
            Configurações de Doações
          </h1>
          <p className="text-neutral-dark mt-2">
            Gerencie as informações de pagamento exibidas na página pública de doações.
          </p>
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

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <form onSubmit={handleSave} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Chave PIX (CNPJ, Email, Telefone, ou Aleatória)</label>
              <input
                type="text"
                required
                value={settings.pixKey}
                onChange={(e) => setSettings({ ...settings, pixKey: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                placeholder="Ex: 27.342.722/0001-80"
              />
              <p className="text-xs text-gray-500 mt-1">Esta chave será exibida na seção de PIX na página de doações.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Link do PayPal</label>
              <input
                type="text"
                required
                value={settings.paypalLink}
                onChange={(e) => setSettings({ ...settings, paypalLink: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                placeholder="Ex: paypal.me/caminhosuave"
              />
              <p className="text-xs text-gray-500 mt-1">Este link será usado na seção PayPal da página de doações.</p>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <button
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-opacity-90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Save className="w-5 h-5" />
                {saving ? "Salvando..." : "Salvar Configurações"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminSidebar>
  );
}
