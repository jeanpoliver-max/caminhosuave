import { Calendar, User } from 'lucide-react';

export default function Noticias() {
  return (
    <div className="bg-gray-soft min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6">Acompanhe Nossas <span className="text-secondary">Histórias</span></h1>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">Fique por dentro das últimas notícias, resgates e histórias de transformação. Cada semana temos novidades para compartilhar!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Post Exemplo */}
          <article className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col">
            <div className="relative h-48 overflow-hidden bg-gray-200">
              <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=600&auto=format&fit=crop" alt="Resgate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase py-1 px-3 rounded-full">Resgate</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-display font-bold text-primary mb-3">Luna Encontra Seu Lar Definitivo Após 60 Dias de Recuperação</h2>
              <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-wider font-semibold mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 15 de Abril de 2025</span>
                <span className="flex items-center gap-1"><User className="w-3 h-3" /> Equipe Caminho Suave</span>
              </div>
              <p className="text-neutral-dark text-sm mb-6 flex-grow">Depois de quase perder a perna e passar por semanas de fisioterapia intensiva, nossa guerreira Luna finalmente foi adotada por uma família maravilhosa...</p>
              <a href="#" className="font-bold text-secondary hover:text-primary transition-colors text-sm uppercase tracking-wider inline-flex items-center gap-1">Ler História Completa &rarr;</a>
            </div>
          </article>

          {/* Post Exemplo 2 */}
          <article className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col">
            <div className="relative h-48 overflow-hidden bg-gray-200">
              <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop" alt="Campanha" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold uppercase py-1 px-3 rounded-full">Campanha</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-display font-bold text-primary mb-3">Campanha do Agasalho Pet arrecada mais de 200 cobertores</h2>
              <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-wider font-semibold mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 02 de Abril de 2025</span>
                <span className="flex items-center gap-1"><User className="w-3 h-3" /> Voluntários</span>
              </div>
              <p className="text-neutral-dark text-sm mb-6 flex-grow">Com a chegada do frio, nossa comunidade se uniu para garantir que nenhum animal do abrigo passe as noites sem o conforto e calor de um cobertor...</p>
              <a href="#" className="font-bold text-secondary hover:text-primary transition-colors text-sm uppercase tracking-wider inline-flex items-center gap-1">Ler História Completa &rarr;</a>
            </div>
          </article>
          
          {/* Post Exemplo 3 */}
          <article className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col">
            <div className="relative h-48 overflow-hidden bg-gray-200">
              <img src="https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?q=80&w=600&auto=format&fit=crop" alt="Adoção" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold uppercase py-1 px-3 rounded-full">Adoção</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-display font-bold text-primary mb-3">Feira de Adoção no Centro bate recorde com 15 animais adotados</h2>
              <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-wider font-semibold mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 28 de Março de 2025</span>
                <span className="flex items-center gap-1"><User className="w-3 h-3" /> Eventos</span>
              </div>
              <p className="text-neutral-dark text-sm mb-6 flex-grow">Um fim de semana de muita alegria e lágrimas de emoção. Quase metade dos animais disponíveis encontraram suas famílias definitivas no último sábado...</p>
              <a href="#" className="font-bold text-secondary hover:text-primary transition-colors text-sm uppercase tracking-wider inline-flex items-center gap-1">Ler História Completa &rarr;</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
