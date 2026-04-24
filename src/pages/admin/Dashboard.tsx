import { LayoutDashboard, FileText, DownloadCloud, Heart, Users, DollarSign, Activity, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AdminSidebar from '../../components/layout/AdminSidebar';

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <AdminSidebar>
        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Doações este Mês</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">45</p>
                <p className="text-xs text-green-500 font-medium mt-1">+12% vs último mês</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="p-3 bg-accent/10 text-accent rounded-xl">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Valor Arrecadado</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">R$ 2.450</p>
                <p className="text-xs text-green-500 font-medium mt-1">+8% vs último mês</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-xl">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Notícias Publicadas</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
                <p className="text-xs text-gray-400 font-medium mt-1">Última há 2 dias</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="p-3 bg-[#EAB308]/10 text-[#EAB308] rounded-xl">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Visitantes (Hoje)</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">128</p>
                <p className="text-xs text-green-500 font-medium mt-1">Normal</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Atividades Recentes */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-primary mb-6">Atividades Recentes</h3>
              <div className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start gap-4 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <Heart className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Nova doação recebida</p>
                      <p className="text-xs text-gray-500 mt-1">João Silva doou R$ 50,00 via PIX.</p>
                      <p className="text-xs text-gray-400 mt-1">Há {i * 2} horas</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-2 text-sm font-bold text-primary bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors">
                Ver Todas as Atividades
              </button>
            </div>

            {/* Ações Rápidas */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-primary mb-6">Ações Rápidas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex flex-col items-center justify-center p-6 bg-gray-50 hover:bg-white border-2 border-transparent hover:border-primary/20 rounded-2xl transition-all group">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-gray-900">Nova Notícia</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 bg-gray-50 hover:bg-white border-2 border-transparent hover:border-secondary/20 rounded-2xl transition-all group">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <DownloadCloud className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-gray-900">Novo Relatório PDF</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 bg-gray-50 hover:bg-white border-2 border-transparent hover:border-accent/20 rounded-2xl transition-all group">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Heart className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-gray-900">Ver Doações</span>
                </button>
                <Link to="/admin/equipe" className="flex flex-col items-center justify-center p-6 bg-gray-50 hover:bg-white border-2 border-transparent hover:border-gray-200 rounded-2xl transition-all group">
                  <div className="w-12 h-12 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-gray-900">Gerenciar Equipe</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </AdminSidebar>
  );
}
