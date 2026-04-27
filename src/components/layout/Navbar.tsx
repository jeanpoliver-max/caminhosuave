import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="h-[80px] bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-10 shrink-0 sticky top-0 z-50">
      {/* Mobile menu toggle e logo */}
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="w-48 md:w-56 h-16 flex items-center justify-start overflow-hidden shrink-0">
            <img src="https://i.imgur.com/rrnArMo.png" alt="Caminho Suave Logo" className="w-full h-full object-contain object-left scale-[1.35] origin-left" />
          </div>
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

      <button 
        className="md:hidden text-neutral-dark p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Alternar menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white border-b border-gray-100 shadow-lg md:hidden flex flex-col px-6 py-6 gap-4">
          <Link to="/" className="text-lg font-semibold text-neutral-dark hover:text-primary" onClick={closeMenu}>Home</Link>
          <Link to="/sobre" className="text-lg font-semibold text-neutral-dark hover:text-primary" onClick={closeMenu}>Sobre</Link>
          <Link to="/como-ajudar" className="text-lg font-semibold text-neutral-dark hover:text-primary" onClick={closeMenu}>Como Ajudar</Link>
          <Link to="/transparencia" className="text-lg font-semibold text-neutral-dark hover:text-primary" onClick={closeMenu}>Transparência</Link>
          <Link to="/noticias" className="text-lg font-semibold text-neutral-dark hover:text-primary" onClick={closeMenu}>Notícias</Link>
          <Link to="/contato" className="text-lg font-semibold text-neutral-dark hover:text-primary" onClick={closeMenu}>Contato</Link>
          
          <div className="pt-4 mt-2 border-t border-gray-100">
            <Link 
              to="/doacoes" 
              className="flex justify-center items-center bg-accent hover:bg-[#27ae60] text-white px-6 py-3 rounded-xl font-bold text-base shadow-lg uppercase tracking-wider transition-colors"
              onClick={closeMenu}
            >
              Fazer Doação
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
