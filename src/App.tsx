import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import ComoAjudar from './pages/ComoAjudar';
import Doacoes from './pages/Doacoes';
import Transparencia from './pages/Transparencia';
import Noticias from './pages/Noticias';
import Contato from './pages/Contato';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import AdminEquipe from './pages/admin/Equipe';
import { AuthProvider, useAuth } from './context/AuthContext';

// Protected Route wrapper for Admin area
function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user, isAdmin, loading } = useAuth();
  
  if (loading) return <div className="min-h-screen flex items-center justify-center">Carregando...</div>;
  if (!user || !isAdmin) return <Navigate to="/admin" />;
  
  return <>{children}</>;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen font-sans bg-gray-soft text-neutral-dark">
          <Routes>
            {/* Admin Routes without main Navbar/Footer */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/*" element={
              <AdminRoute>
                <Routes>
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="equipe" element={<AdminEquipe />} />
                </Routes>
              </AdminRoute>
            } />

            {/* Public Routes with Navbar/Footer */}
            <Route
              path="/*"
              element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/sobre" element={<Sobre />} />
                      <Route path="/como-ajudar" element={<ComoAjudar />} />
                      <Route path="/doacoes" element={<Doacoes />} />
                      <Route path="/transparencia" element={<Transparencia />} />
                      <Route path="/noticias" element={<Noticias />} />
                      <Route path="/contato" element={<Contato />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
