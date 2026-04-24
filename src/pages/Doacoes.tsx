import { Link } from 'react-router-dom';
import { Heart, CreditCard, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function Doacoes() {
  const [pixKey, setPixKey] = useState('27.342.722/0001-80');
  const [paypalLink, setPaypalLink] = useState('paypal.me/caminhosuave');

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const docRef = doc(db, 'settings', 'donations');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.pixKey) setPixKey(data.pixKey);
          if (data.paypalLink) setPaypalLink(data.paypalLink);
        }
      } catch (err) {
        console.error("Erro ao buscar configurações de doação:", err);
      }
    };
    fetchSettings();
  }, []);

  return (
    <div className="bg-gray-soft min-h-screen py-20 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-4">Escolha Como Você Quer <span className="text-secondary">Ajudar</span></h1>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">Sua doação é segura, transparente e 100% dedicada aos animais. Não existe valor mínimo para fazer diferença.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Doação Única */}
          <div className="bg-white rounded-3xl shadow-md border-t-8 border-primary p-8 flex flex-col hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-display font-bold text-primary mb-2 text-center">Doação Única</h3>
            <p className="text-sm text-gray-500 text-center mb-6 uppercase tracking-wider font-semibold">Resgate Imediato</p>
            <div className="space-y-4 mb-8 flex-grow text-sm text-neutral-dark">
               <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                 <span><strong className="text-accent text-lg">R$ 50</strong></span>
                 <span className="text-right">Alimentação p/ 5 animais por 1 semana</span>
               </div>
               <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                 <span><strong className="text-accent text-lg">R$ 100</strong></span>
                 <span className="text-right">Consulta veterinária + Medicação</span>
               </div>
               <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                 <span><strong className="text-accent text-lg">R$ 250</strong></span>
                 <span className="text-right">Castração + Acompanhamento</span>
               </div>
               <div className="flex justify-between items-center pb-2">
                 <span><strong className="text-accent text-lg">R$ 500</strong></span>
                 <span className="text-right">1 Mês de abrigo + Saúde completa</span>
               </div>
            </div>
            <button className="w-full bg-primary hover:bg-[#004a8d] text-white py-4 rounded-xl font-bold text-lg shadow-md transition-colors uppercase tracking-wide">
              Fazer Doação Única
            </button>
          </div>

          {/* Doação Recorrente */}
          <div className="bg-white rounded-3xl shadow-xl border-t-8 border-accent p-8 flex flex-col transform md:-translate-y-4 relative">
            <div className="absolute top-0 right-0 -mt-3 -mr-3">
               <span className="bg-accent text-white text-xs font-bold uppercase py-1 px-3 rounded-full shadow-sm">Maior Impacto</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-primary mb-2 text-center">Doação Recorrente</h3>
            <p className="text-sm text-gray-500 text-center mb-6 uppercase tracking-wider font-semibold">Impacto Constante</p>
            <div className="space-y-4 mb-8 flex-grow text-sm text-neutral-dark">
               <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                 <span><strong className="text-accent text-lg">R$ 25</strong>/mês</span>
                 <span className="text-right">Alimentação contínua p/ 5 animais</span>
               </div>
               <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                 <span><strong className="text-accent text-lg">R$ 50</strong>/mês</span>
                 <span className="text-right">Cuidados e Medicação contínua</span>
               </div>
               <div className="flex flex-col justify-center border-b border-gray-100 pb-4 pt-2">
                 <div className="flex justify-between items-center mb-1">
                    <span><strong className="text-accent text-xl">R$ 100</strong>/mês</span>
                    <span className="text-right font-bold text-primary">Apadrinhamento Completo</span>
                 </div>
                 <span className="text-xs text-gray-500 text-right">Acompanhe seu afilhado, ganhe relatórios semanais e certificado.</span>
               </div>
            </div>
            <button className="w-full bg-accent hover:bg-[#27ae60] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-100 transition-colors uppercase tracking-wide flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" /> Assinar Apoio Mensal
            </button>
          </div>
        </div>

        {/* Métodos de Pagamento */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 mb-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-primary mb-6 text-center">Métodos de Pagamento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-[#32BCAD]/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-[#32BCAD] font-bold text-xs uppercase">PIX</span>
              </div>
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Doação Imediata</span>
              <strong className="font-mono text-sm text-neutral-dark text-center break-all">{pixKey}</strong>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-[#003087]/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-[#003087] font-bold text-xs">PayPal</span>
              </div>
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Cartão de Crédito</span>
              <a href={paypalLink.startsWith('http') ? paypalLink : `https://${paypalLink}`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline text-center break-all">{paypalLink.replace(/^https?:\/\//, '')}</a>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                <CreditCard className="w-5 h-5 text-gray-600" />
              </div>
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">PagSeguro</span>
              <span className="text-sm font-semibold text-neutral-dark text-center">Via formulário seguro</span>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500 font-semibold bg-green-50 p-3 rounded-lg border border-green-100">
             <ShieldCheck className="w-5 h-5 text-accent" />
             Todos os métodos são seguros e criptografados.
          </div>
        </div>

      </div>
    </div>
  );
}
