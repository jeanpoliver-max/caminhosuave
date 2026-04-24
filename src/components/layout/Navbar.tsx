import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="h-[70px] bg-white border-b border-gray-100 flex items-center justify-between px-10 shrink-0 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-primary">Caminho <span className="text-secondary">Suave</span></span>
        </Link>
      </div>
      
      <nav className="hidden md:flex gap-8 text-sm font-semibold text-neutral-dark">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <Link to="/sobre" className="hover:text-primary transition-colors">Sobre</Link>
        <Link to="/como-ajudar" className="hover:text-primary transition-colors">Como Ajudar</Link>
        <Link to="/transparencia" className="hover:text-primary transition-colors">Transparência</Link>
        <Link to="/noticias" className="hover:text-primary transition-colors">Notícias</Link>
        <Link to="/contato" className="hover:text-primary transition-colors">Contato</Link>
      </nav>

      <div className="hidden md:flex items-center">
        <Link 
          to="/doacoes" 
          className="bg-accent hover:bg-[#27ae60] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-green-100 uppercase tracking-wider transition-colors"
        >
          Fazer Doação
        </Link>
      </div>
    </header>
  );
}
