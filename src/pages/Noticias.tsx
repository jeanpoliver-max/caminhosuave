import { Calendar, User, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  authorEmail: string;
  createdAt: any;
}

export default function Noticias() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const q = query(
          collection(db, 'news'),
          where('status', '==', 'published'),
          orderBy('createdAt', 'desc')
        );
        const querySnapshot = await getDocs(q);
        const newsList: NewsItem[] = [];
        querySnapshot.forEach((doc) => {
          newsList.push({ id: doc.id, ...doc.data() } as NewsItem);
        });
        setNews(newsList);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="bg-gray-soft min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6">Acompanhe Nossas <span className="text-secondary">Histórias</span></h1>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">Fique por dentro das últimas notícias, resgates e histórias de transformação. Cada semana temos novidades para compartilhar!</p>
        </div>

        {loading ? (
          <div className="text-center text-gray-500 py-12">Carregando notícias...</div>
        ) : news.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <article key={item.id} className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col">
                {item.imageUrl ? (
                  <div className="relative h-48 overflow-hidden bg-gray-200 shrink-0">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase py-1 px-3 rounded-full">Notícia</div>
                  </div>
                ) : (
                  <div className="relative h-48 overflow-hidden bg-gray-100 shrink-0 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-gray-300" />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase py-1 px-3 rounded-full">Notícia</div>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h2>
                  <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-wider font-semibold mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> 
                      {item.createdAt?.seconds ? new Date(item.createdAt.seconds * 1000).toLocaleDateString() : 'Recente'}
                    </span>
                    <span className="flex items-center gap-1 truncate" title={item.authorEmail}>
                      <User className="w-3 h-3 shrink-0" /> {item.authorEmail.split('@')[0]}
                    </span>
                  </div>
                  <p className="text-neutral-dark text-sm mb-6 flex-grow whitespace-pre-line line-clamp-4">{item.content}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">Nenhuma notícia publicada</h3>
            <p className="text-gray-500">Volte em breve para conferir as novidades da associação.</p>
          </div>
        )}
      </div>
    </div>
  );
}
