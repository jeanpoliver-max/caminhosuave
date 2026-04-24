import { LayoutDashboard, FileText, DownloadCloud, Heart, Users, LogOut } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ReactNode } from 'react';

export default function AdminSidebar({ children }: { children?: ReactNode }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  const navItemClass = (path: string) => {
    const isActive = location.pathname.includes(path);
    return `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5 hover:text-white'}`;
  };

  return (
    <div className="min-h-screen bg-gray-soft flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white flex flex-col shadow-xl z-20 hidden md:flex">
        <div className="p-6">
          <h2 className="text-2xl font-display font-extrabold tracking-tight">Painel Admin</h2>
          <p className="text-white/70 text-sm mt-1">Caminho Suave</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link to="/admin/dashboard" className={navItemClass('/admin/dashboard')}>
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <Link to="/admin/noticias" className={navItemClass('/admin/noticias')}>
            <FileText className="w-5 h-5" /> Notícias
          </Link>
          <Link to="/admin/relatorios" className={navItemClass('/admin/relatorios')}>
            <DownloadCloud className="w-5 h-5" /> Relatórios / PDFs
          </Link>
          <Link to="/admin/doacoes" className={navItemClass('/admin/doacoes')}>
            <Heart className="w-5 h-5" /> Doações
          </Link>
          <Link to="/admin/equipe" className={navItemClass('/admin/equipe')}>
            <Users className="w-5 h-5" /> Voluntários / Equipe
          </Link>
        </nav>
        
        <div className="p-4 mt-auto">
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-white/80 hover:text-white font-medium transition-colors w-full text-left">
            <LogOut className="w-5 h-5" /> Sair
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header (Mobile) & Topbar */}
        <header className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between">
          <div>
            {/* Page title could be dynamic based on routing, but we will keep it simple for now */}
            <h1 className="text-xl md:text-2xl font-display font-bold text-primary">Área Administrativa</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-500 hidden sm:block">
              Bem-vindo, {user?.displayName || user?.email?.split('@')[0] || 'Admin'}
            </span>
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-sm overflow-hidden">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                (user?.email?.[0] || "A").toUpperCase()
              )}
            </div>
            <button onClick={handleLogout} className="md:hidden text-gray-500 hover:text-primary">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Dashboard Content injected here */}
        <div className="flex-1 overflow-y-auto w-full">
          {children || <div className="p-8">Selecione uma opção no menu lateral.</div>}
        </div>
      </main>
    </div>
  );
}
