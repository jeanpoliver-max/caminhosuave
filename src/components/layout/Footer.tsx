import { Link } from 'react-router-dom';
import { Heart, Instagram, FacebookIcon, MessageCircle, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2c3e50] text-[#a0aec0] pt-12 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand/Contact */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-[#8fd3c1]" />
              <span className="font-display font-bold text-lg text-white">Caminho <span className="text-[#8fd3c1]">Suave</span></span>
            </Link>
            <p className="text-sm mb-2 text-[#cbd5e1]">Rua Minas Gerais, 602, Centro<br/>Catanduva/SP - CEP 15800-210</p>
            <p className="text-sm mb-2 text-[#cbd5e1]">(17) 99999-1234</p>
            <p className="text-sm text-[#cbd5e1]">contato@caminhosuave.org.br</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white mb-4 uppercase text-sm tracking-wider">Links Rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre a Associação</Link></li>
              <li><Link to="/como-ajudar" className="hover:text-white transition-colors">Como Ajudar</Link></li>
              <li><Link to="/transparencia" className="hover:text-white transition-colors">Portal da Transparência</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display font-bold text-white mb-4 uppercase text-sm tracking-wider">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/stories/assoccaminhosuave/" target="_blank" rel="noopener noreferrer" className="hover:text-[#8fd3c1] transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#8fd3c1] transition-colors"><FacebookIcon className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#8fd3c1] transition-colors"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#8fd3c1] transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-bold text-white mb-4 uppercase text-sm tracking-wider">Institucional</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/transparencia" className="hover:text-white transition-colors">Estatuto OSCIP</Link></li>
              <li><Link to="/transparencia" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/admin" className="hover:text-[#8fd3c1] transition-colors">Área Restrita</Link></li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Institutional Footer Bar */}
      <div className="bg-[#1e2a36] text-[#a0aec0] text-[11px] py-4 px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between border-t border-[#374c63]">
        <p className="mb-4 md:mb-0 text-center md:text-left">© 2025 Associação Caminho Suave - OSCIP Organização da Sociedade Civil de Interesse Público</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 uppercase font-bold tracking-wider">
          <Link to="/transparencia" className="hover:text-white transition-colors">Transparência</Link>
          <Link to="/transparencia" className="hover:text-white transition-colors">Política de Privacidade</Link>
          <Link to="/transparencia" className="hover:text-white transition-colors">Estatuto</Link>
        </div>
      </div>
    </footer>
  );
}
