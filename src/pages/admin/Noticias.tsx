import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../lib/firebase';
import { collection, query, getDocs, doc, setDoc, deleteDoc, serverTimestamp, orderBy } from 'firebase/firestore';
import { FileText, Plus, Trash2, Edit2, CheckCircle2, XCircle } from 'lucide-react';
import AdminSidebar from '../../components/layout/AdminSidebar';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  status: 'draft' | 'published';
  authorEmail: string;
  createdAt: any;
  updatedAt: any;
}

export default function AdminNoticias() {
  const { user } = useAuth();
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentNews, setCurrentNews] = useState<Partial<NewsItem>>({
    title: '',
    content: '',
    imageUrl: '',
    status: 'draft'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const fetchNews = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, 'news'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const list: NewsItem[] = [];
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() } as NewsItem);
      });
      setNewsList(list);
    } catch (err) {
      console.error("Erro ao buscar notícias:", err);
      setError("Erro ao carregar a lista de notícias.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleCreateOrUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!currentNews.title || !currentNews.content) {
      setError("Título e conteúdo são obrigatórios.");
      return;
    }

    try {
      const isNew = !currentNews.id;
      const newsId = currentNews.id || Date.now().toString() + Math.random().toString(36).substring(2, 5);
      
      const payload: any = {
        title: currentNews.title,
        content: currentNews.content,
        status: currentNews.status || 'draft',
        updatedAt: serverTimestamp()
      };

      if (currentNews.imageUrl) {
        payload.imageUrl = currentNews.imageUrl;
      }

      if (isNew) {
        payload.authorEmail = user?.email || 'admin@admin.com';
        payload.createdAt = serverTimestamp();
      }

      const docRef = doc(db, 'news', newsId);
      await setDoc(docRef, payload, { merge: true });
      
      setSuccess(`Notícia ${isNew ? 'criada' : 'atualizada'} com sucesso!`);
      setIsEditing(false);
      setCurrentNews({ title: '', content: '', imageUrl: '', status: 'draft' });
      fetchNews();
    } catch (err: any) {
      console.error(err);
      setError("Erro ao salvar notícia. Verifique suas permissões.");
    }
  };

  const handleEdit = (news: NewsItem) => {
    setCurrentNews(news);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string, title: string) => {
    if (window.confirm(`Tem certeza que deseja apagar a notícia "${title}"?`)) {
      try {
        await deleteDoc(doc(db, 'news', id));
        setSuccess(`Notícia removida com sucesso.`);
        fetchNews();
      } catch (err) {
        console.error(err);
        setError("Erro ao remover notícia.");
      }
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setCurrentNews({ title: '', content: '', imageUrl: '', status: 'draft' });
    setError('');
    setSuccess('');
  };

  if (loading && !isEditing && newsList.length === 0) {
    return <AdminSidebar><div className="p-8">Carregando notícias...</div></AdminSidebar>;
  }

  return (
    <AdminSidebar>
      <div className="p-8 max-w-5xl mx-auto w-full">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-primary flex items-center gap-3">
              <FileText className="w-8 h-8" />
              Notícias
            </h1>
            <p className="text-neutral-dark mt-2">
              Gerencie os artigos e notícias da associação.
            </p>
          </div>
          {!isEditing && (
            <button 
              onClick={() => setIsEditing(true)}
              className="bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-xl flex items-center gap-2 transition-colors"
            >
              <Plus className="w-5 h-5" /> Nova Notícia
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
              {currentNews.id ? "Editar Notícia" : "Criar Nova Notícia"}
            </h2>
            <form onSubmit={handleCreateOrUpdate} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                <input
                  type="text"
                  required
                  value={currentNews.title}
                  onChange={(e) => setCurrentNews({ ...currentNews, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  placeholder="Título da notícia"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL da Imagem (Opcional)</label>
                <input
                  type="url"
                  value={currentNews.imageUrl || ''}
                  onChange={(e) => setCurrentNews({ ...currentNews, imageUrl: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  placeholder="https://exemplo.com/imagem.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={currentNews.status}
                  onChange={(e) => setCurrentNews({ ...currentNews, status: e.target.value as any })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none bg-white"
                >
                  <option value="draft">Rascunho (Privado)</option>
                  <option value="published">Publicado (Visível no site)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Conteúdo</label>
                <textarea
                  required
                  rows={10}
                  value={currentNews.content}
                  onChange={(e) => setCurrentNews({ ...currentNews, content: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none resize-y"
                  placeholder="Escreva o conteúdo da notícia..."
                />
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
                  {currentNews.id ? "Salvar Alterações" : "Publicar Notícia"}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Todas as Notícias</h2>
              <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                {newsList.length} itens
              </span>
            </div>
            
            <div className="divide-y divide-gray-100">
              {newsList.map((news) => (
                <div key={news.id} className="p-6 flex items-start gap-4 hover:bg-gray-50 transition-colors">
                  {news.imageUrl ? (
                    <div className="w-24 h-24 rounded-lg bg-gray-200 shrink-0 overflow-hidden">
                      <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-lg bg-gray-100 shrink-0 flex items-center justify-center text-gray-400">
                      <FileText className="w-8 h-8" />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 truncate">{news.title}</h3>
                        <div className="flex items-center gap-3 mt-1 mb-2">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                            news.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {news.status === 'published' ? 'Publicado' : 'Rascunho'}
                          </span>
                          <span className="text-xs text-gray-500">
                            {news.createdAt?.seconds ? new Date(news.createdAt.seconds * 1000).toLocaleDateString() : 'Nova'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">{news.content}</p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleEdit(news)}
                          className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                          title="Editar"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(news.id, news.title)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Excluir"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {newsList.length === 0 && !loading && (
                <div className="p-12 text-center text-gray-500 flex flex-col items-center">
                  <FileText className="w-12 h-12 text-gray-300 mb-4" />
                  <p className="text-lg font-medium text-gray-900 mb-1">Nenhuma notícia encontrada</p>
                  <p>Crie sua primeira notícia clicando no botão acima.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </AdminSidebar>
  );
}
