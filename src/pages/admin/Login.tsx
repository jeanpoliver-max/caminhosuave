import { Lock, Mail, KeyRound, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import React, { useEffect, useState } from 'react';

export default function AdminLogin() {
  const { signInWithGoogle, signInWithEmailAndPassword, resetPassword, user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user && isAdmin) {
      navigate('/admin/dashboard');
    }
  }, [user, isAdmin, navigate]);

  const handleGoogleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLocalError('');
    try {
      await signInWithGoogle();
    } catch (error: any) {
      console.error('Firebase login error:', error);
      alert(`Erro ao fazer login corporativo: ${error.message}\nSe você estiver vendo essa página no Preview do painel, experimente usar o link no canto superior direito para abrir em uma nova janela (Open in new tab).`);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');
    if (!email || !password) {
      setLocalError('Por favor, preencha o email e senha.');
      return;
    }
    
    try {
      await signInWithEmailAndPassword(email, password);
    } catch (error: any) {
      console.error('Firebase email login error:', error);
      let errorMsg = 'Erro ao fazer login. Verifique as credenciais.';
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        errorMsg = 'Usuário ou senha inválidos.';
      } else if (error.code === 'auth/operation-not-allowed') {
        errorMsg = 'Autenticação por email e senha não está habilitada no Firebase Console.';
      }
      setLocalError(errorMsg);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');
    setResetMessage('');
    
    if (!email) {
      setLocalError('Por favor, informe seu e-mail para recuperar a senha.');
      return;
    }

    try {
      await resetPassword(email);
      setResetMessage('Um e-mail de redefinição de senha foi enviado para você.');
      // Opcional: Voltar para a tela de login após alguns segundos, ou manter a mensagem.
    } catch (error: any) {
      console.error('Firebase password reset error:', error);
      let errorMsg = 'Erro ao enviar e-mail de redefinição. Verifique o e-mail informado.';
      if (error.code === 'auth/user-not-found') {
         errorMsg = 'Nenhum usuário encontrado com este e-mail.';
      }
      setLocalError(errorMsg);
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
          <div className="mx-auto flex items-center justify-center">
            <img src="https://i.imgur.com/rrnArMo.png" alt="Logotipo Caminho Suave" className="h-24 w-auto object-contain" />
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
          
          {localError && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-center text-sm mb-4">
              {localError}
            </div>
          )}

          {resetMessage && (
            <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-center text-sm mb-4">
              {resetMessage}
            </div>
          )}
          
          {!isResettingPassword ? (
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-dark mb-1">E-mail</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="usuario@dominio.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-neutral-dark">Senha</label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsResettingPassword(true);
                      setLocalError('');
                      setResetMessage('');
                    }}
                    className="text-sm text-primary hover:text-primary-dark font-medium transition-colors"
                  >
                    Esqueceu a senha?
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <KeyRound className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-xl focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="********"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Entrar com E-mail
              </button>
            </form>
          ) : (
            <form onSubmit={handlePasswordReset} className="space-y-4">
              <p className="text-sm text-gray-600 mb-4">
                Informe seu e-mail abaixo e enviaremos um link para você redefinir sua senha.
              </p>
              <div>
                <label className="block text-sm font-medium text-neutral-dark mb-1">E-mail</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="usuario@dominio.com"
                    required
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 mb-2"
              >
                Enviar link de recuperação
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsResettingPassword(false);
                  setLocalError('');
                  setResetMessage('');
                }}
                className="w-full flex justify-center py-3 px-4 border border-gray-300 text-sm font-bold rounded-xl text-neutral-dark bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all shadow-sm hover:shadow transform hover:-translate-y-0.5"
              >
                Voltar para o login
              </button>
            </form>
          )}

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">ou</span>
            </div>
          </div>
          
          <div>
            <button 
              onClick={handleGoogleLogin}
              type="button"
              className="group relative w-full flex justify-center py-3 px-4 border border-gray-300 text-sm font-bold rounded-xl text-neutral-dark bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all shadow-sm hover:shadow transform hover:-translate-y-0.5"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
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
