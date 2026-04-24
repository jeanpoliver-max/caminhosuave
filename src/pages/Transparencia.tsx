import { Download, FileText, PieChart, ShieldCheck } from 'lucide-react';

export default function Transparencia() {
  return (
    <div className="bg-gray-soft min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#8fd3c1]/20 text-[#0056a3] rounded-full text-sm font-bold uppercase tracking-wider mb-4">
            Prestação de Contas
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6">Somos <span className="text-secondary">100% Transparentes</span></h1>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">Entendemos sua desconfiança. Muitas ONGs não são transparentes. Nós somos diferentes. Você não está doando para uma caixa preta. Você está investindo em vidas reais.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Gráfico / Distribuição */}
          <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-8">
               <PieChart className="w-8 h-8 text-primary" />
               <h2 className="text-2xl font-display font-bold text-primary">Para onde vai sua doação</h2>
            </div>
            
            <div className="flex-grow flex flex-col justify-center space-y-6">
              <div className="relative pt-2">
                 <div className="flex justify-between mb-2">
                   <span className="text-sm font-bold text-neutral-dark uppercase tracking-wider">45% - Alimentação e Nutrição</span>
                 </div>
                 <div className="overflow-hidden h-3 mb-2 text-xs flex rounded bg-gray-200">
                   <div style={{ width: "45%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-accent"></div>
                 </div>
                 <p className="text-xs text-gray-500">Ração premium, frutas, vegetais, suplementos</p>
              </div>

              <div className="relative pt-2">
                 <div className="flex justify-between mb-2">
                   <span className="text-sm font-bold text-neutral-dark uppercase tracking-wider">30% - Cuidados Veterinários</span>
                 </div>
                 <div className="overflow-hidden h-3 mb-2 text-xs flex rounded bg-gray-200">
                   <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary"></div>
                 </div>
                 <p className="text-xs text-gray-500">Consultas, cirurgias, vacinação, medicamentos</p>
              </div>

              <div className="relative pt-2">
                 <div className="flex justify-between mb-2">
                   <span className="text-sm font-bold text-neutral-dark uppercase tracking-wider">15% - Abrigo e Infraestrutura</span>
                 </div>
                 <div className="overflow-hidden h-3 mb-2 text-xs flex rounded bg-gray-200">
                   <div style={{ width: "15%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                 </div>
                 <p className="text-xs text-gray-500">Aluguel, água, luz, higiene, conforto</p>
              </div>

              <div className="relative pt-2">
                 <div className="flex justify-between mb-2">
                   <span className="text-sm font-bold text-neutral-dark uppercase tracking-wider">10% - Operacional e Administrativo</span>
                 </div>
                 <div className="overflow-hidden h-3 mb-2 text-xs flex rounded bg-gray-200">
                   <div style={{ width: "10%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-neutral-dark"></div>
                 </div>
                 <p className="text-xs text-gray-500">Documentação, comunicação, gestão</p>
              </div>
            </div>
          </div>

          {/* Certificações */}
          <div className="bg-primary text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-8 relative z-10">
               <ShieldCheck className="w-8 h-8 text-secondary" />
               <h2 className="text-2xl font-display font-bold">Certificações e Credibilidade</h2>
            </div>
            <div className="space-y-6 relative z-10">
               <div className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shrink-0 font-bold mt-1">✓</div>
                 <div>
                   <h4 className="font-bold text-lg mb-1">OSCIP Registrada</h4>
                   <p className="text-sm text-gray-300">Certificação do Ministério da Justiça. Comprovação de seriedade e transparência administrativa.</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shrink-0 font-bold mt-1">✓</div>
                 <div>
                   <h4 className="font-bold text-lg mb-1">Estatuto Registrado em Cartório</h4>
                   <p className="text-sm text-gray-300">Documento oficial e público. Acesso completo para qualquer cidadão.</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shrink-0 font-bold mt-1">✓</div>
                 <div>
                   <h4 className="font-bold text-lg mb-1">Auditoria Externa Anual</h4>
                   <p className="text-sm text-gray-300">Contas verificadas por auditores independentes. Relatórios públicos e acessíveis.</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shrink-0 font-bold mt-1">✓</div>
                 <div>
                   <h4 className="font-bold text-lg mb-1">Relatórios Mensais Públicos</h4>
                   <p className="text-sm text-gray-300">Atividades, números, gastos. Histórias de animais resgatados. Acesso 100% gratuito.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Documentos para Download */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 md:p-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2 text-center">Acesso à Documentação Púbica</h2>
          <p className="text-center text-neutral-dark mb-10">Todos os nossos documentos estão disponíveis para download. Você pode verificar tudo.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="#" className="flex items-center justify-between p-4 bg-gray-soft rounded-xl hover:bg-gray-200 transition-colors group">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                <span className="font-semibold text-sm text-neutral-dark">Prestação de Contas Mensal</span>
              </div>
              <Download className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="flex items-center justify-between p-4 bg-gray-soft rounded-xl hover:bg-gray-200 transition-colors group">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                <span className="font-semibold text-sm text-neutral-dark">Relatório Anual 2025</span>
              </div>
              <Download className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="flex items-center justify-between p-4 bg-gray-soft rounded-xl hover:bg-gray-200 transition-colors group">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                <span className="font-semibold text-sm text-neutral-dark">Estatuto Registrado</span>
              </div>
              <Download className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="flex items-center justify-between p-4 bg-gray-soft rounded-xl hover:bg-gray-200 transition-colors group">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                <span className="font-semibold text-sm text-neutral-dark">Certificação OSCIP</span>
              </div>
              <Download className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="flex items-center justify-between p-4 bg-gray-soft rounded-xl hover:bg-gray-200 transition-colors group">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                <span className="font-semibold text-sm text-neutral-dark">Auditoria Externa 2025</span>
              </div>
              <Download className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="flex items-center justify-between p-4 bg-gray-soft rounded-xl hover:bg-gray-200 transition-colors group">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                <span className="font-semibold text-sm text-neutral-dark">Distribuição de Gastos</span>
              </div>
              <Download className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        <div className="text-center text-sm font-semibold text-gray-500">
           <p>Tem dúvidas sobre como usamos seu dinheiro? Envie um email para <a href="mailto:contato@caminhosuave.org.br" className="text-primary hover:text-secondary transition-colors">contato@caminhosuave.org.br</a> e responderemos em até 48 horas.</p>
        </div>

      </div>
    </div>
  );
}
