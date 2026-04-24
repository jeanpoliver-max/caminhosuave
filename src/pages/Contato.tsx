import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle, Youtube } from 'lucide-react';

export default function Contato() {
  return (
    <div className="bg-gray-soft min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6">Entre em <span className="text-secondary">Contato Conosco</span></h1>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">Tem dúvidas? Quer ser voluntário? Quer conversar sobre parcerias? Estamos aqui para ajudar!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-display font-bold text-primary mb-6">Envie sua mensagem</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-dark mb-2">Nome Completo *</label>
                <input type="text" className="w-full bg-gray-soft border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" placeholder="Seu nome" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">E-mail *</label>
                  <input type="email" className="w-full bg-gray-soft border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" placeholder="seu@email.com" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">Telefone</label>
                  <input type="tel" className="w-full bg-gray-soft border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-dark mb-2">Assunto *</label>
                <select className="w-full bg-gray-soft border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" required>
                  <option value="">Selecione um assunto</option>
                  <option value="doacao">Dúvida sobre doação</option>
                  <option value="voluntariado">Voluntariado</option>
                  <option value="adocao">Adoção</option>
                  <option value="parceria">Parceria</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-dark mb-2">Mensagem *</label>
                <textarea rows={5} className="w-full bg-gray-soft border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none" placeholder="Como podemos ajudar?" required></textarea>
              </div>
              <button type="submit" className="w-full bg-accent hover:bg-[#27ae60] text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-md">
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato e Mapa */}
          <div className="space-y-8">
            <div className="bg-primary text-white p-8 md:p-10 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
              <h2 className="text-2xl font-display font-bold mb-8">Informações Diretas</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <strong className="block text-sm text-secondary uppercase tracking-wider mb-1">Telefone</strong>
                    <span className="font-semibold text-lg">(17) 99999-1234</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <strong className="block text-sm text-secondary uppercase tracking-wider mb-1">E-mail</strong>
                    <span className="font-semibold text-lg">contato@caminhosuave.org.br</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <strong className="block text-sm text-secondary uppercase tracking-wider mb-1">Endereço</strong>
                    <span className="font-semibold text-lg block">Rua Minas Gerais, 602, Centro</span>
                    <span className="text-gray-300">Catanduva/SP - CEP 15800-210</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <strong className="block text-sm text-secondary uppercase tracking-wider mb-1">Horário de Funcionamento</strong>
                    <span className="font-semibold text-lg block">Seg-Sex: 8h às 18h</span>
                    <span className="text-gray-300">Sábados: 9h às 14h</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/20">
                <strong className="block text-sm text-secondary uppercase tracking-wider mb-4">Siga-nos nas Redes Sociais</strong>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/stories/assoccaminhosuave/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"><MessageCircle className="w-5 h-5" /></a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"><Youtube className="w-5 h-5" /></a>
                </div>
              </div>
            </div>

            {/* Mapa Placeholder */}
            <div className="bg-gray-200 h-64 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center border border-gray-300 relative group cursor-pointer">
               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
               <span className="text-neutral-dark font-semibold font-mono text-sm opacity-50 z-10">[ Mapa do Google Maps Incorporado Aqui ]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
