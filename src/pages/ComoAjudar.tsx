import { Link } from 'react-router-dom';
import { Heart, Users, HomeIcon, Briefcase } from 'lucide-react';

export default function ComoAjudar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6">Existem Muitas Formas de <span className="text-secondary">Fazer Diferença</span></h1>
        <p className="text-lg text-neutral-dark max-w-2xl mx-auto">Escolha como você quer nos ajudar a continuar transformando a vida de centenas de animais abandonados.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white p-10 rounded-3xl shadow-lg border-t-8 border-accent flex flex-col hover:shadow-xl transition-shadow cursor-default group">
          <Heart className="h-12 w-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
          <h2 className="text-2xl font-display font-bold text-primary mb-4">Contribua Financeiramente</h2>
          <p className="text-neutral-dark mb-8 flex-grow">Sua doação, por menor que seja, salva vidas. Escolha entre doação única ou recorrente. Pix, PayPal ou PagSeguro. 100% transparente.</p>
          <Link to="/doacoes" className="bg-accent hover:bg-[#27ae60] text-white py-3 px-6 rounded-xl font-bold text-center transition-colors shadow-md">
            Fazer Doação
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-10 rounded-3xl shadow-lg border-t-8 border-secondary flex flex-col hover:shadow-xl transition-shadow cursor-default group">
          <Users className="h-12 w-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
          <h2 className="text-2xl font-display font-bold text-primary mb-4">Doe Seu Tempo</h2>
          <p className="text-neutral-dark mb-8 flex-grow">Ajude no abrigo, participe de resgates, socialize animais. Faça parte de uma comunidade de 200+ voluntários comprometidos.</p>
          <Link to="/contato" className="bg-primary hover:bg-[#004a8d] text-white py-3 px-6 rounded-xl font-bold text-center transition-colors shadow-md">
            Ser Voluntário
          </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-10 rounded-3xl shadow-lg border-t-8 border-secondary flex flex-col hover:shadow-xl transition-shadow cursor-default group">
          <HomeIcon className="h-12 w-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
          <h2 className="text-2xl font-display font-bold text-primary mb-4">Encontre Seu Novo Melhor Amigo</h2>
          <p className="text-neutral-dark mb-8 flex-grow">Adote um animal e ofereça um lar amoroso. Processo responsável com acompanhamento pós-adoção gratuito.</p>
          <Link to="/contato" className="bg-primary hover:bg-[#004a8d] text-white py-3 px-6 rounded-xl font-bold text-center transition-colors shadow-md">
            Ver Animais para Adoção
          </Link>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-10 rounded-3xl shadow-lg border-t-8 border-secondary flex flex-col hover:shadow-xl transition-shadow cursor-default group">
          <Briefcase className="h-12 w-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
          <h2 className="text-2xl font-display font-bold text-primary mb-4">Seja Parceiro</h2>
          <p className="text-neutral-dark mb-8 flex-grow">Empresas e profissionais podem se tornar parceiros. Doe produtos, serviços ou expertise. Vamos conversar!</p>
          <Link to="/contato" className="bg-primary hover:bg-[#004a8d] text-white py-3 px-6 rounded-xl font-bold text-center transition-colors shadow-md">
            Falar Sobre Parcerias
          </Link>
        </div>
      </div>
    </div>
  );
}
