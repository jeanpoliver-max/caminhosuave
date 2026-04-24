import { Dog, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';

export default function AdminLogin() {
  const { signInWithGoogle, user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && isAdmin) {
      navigate('/admin/dashboard');
    }
  }, [user, isAdmin, navigate]);

  const handleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error(error);
      alert('Erro ao fazer login.');
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-gray-soft flex items-center justify-center">Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-soft flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '2000ms' }}></div>

      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl relative z-10 border border-gray-100">
        <div>
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <Dog className="h-8 w-8 text-white" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-display font-extrabold text-primary">
            Acesso Restrito
          </h2>
          <p className="mt-2 text-center text-sm text-neutral-dark">
            Área exclusiva para voluntários e administração
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {user && !isAdmin && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-center text-sm mb-4 font-bold">
              Você não tem permissão para acessar esta área.
            </div>
          )}
          
          <div>
            <button 
              onClick={handleLogin}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-white/50 group-hover:text-white/80 transition-colors" />
              </span>
              Entrar com Google
            </button>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Link to="/" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors inline-flex items-center gap-1">
            &larr; Voltar para o site
          </Link>
        </div>
      </div>
    </div>
  );
}
