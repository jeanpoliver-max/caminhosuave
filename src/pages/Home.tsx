import { Link } from 'react-router-dom';
import { Heart, Activity, HomeIcon, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="flex-1 flex py-20 relative overflow-hidden min-h-[600px] items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[#0056a3]">
          <img 
            src="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=2574&auto=format&fit=crop" 
            alt="Dog looking hopefully" 
            className="w-full h-full object-cover object-center mix-blend-overlay opacity-60"
          />
          {/* Gradient Overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0056a3]/90 via-[#004a8d]/80 to-[#8fd3c1]/70 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-12 gap-12">
          <div className="w-full lg:w-3/5 text-white lg:pr-10">
            <span className="inline-block px-3 py-1 bg-white/20 rounded-md text-xs font-bold uppercase tracking-widest mb-4">Certificação OSCIP nº 27.342.722/0001-80</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              Cada Doação <br/><span className="text-[#8fd3c1]">Salva Uma Vida</span>
            </h1>
            <p className="text-lg text-blue-50/90 mb-8 max-w-lg leading-relaxed font-medium">
              Resgate, abrigo e cuidado para animais abandonados em Catanduva/SP. Transformamos histórias de abandono em finais felizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/doacoes" className="bg-[#2ecc71] hover:bg-[#27ae60] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transition-colors text-center inline-flex items-center justify-center">
                Quero Ajudar Agora
              </Link>
              <Link to="/transparencia" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm transition-colors text-center inline-flex items-center justify-center">
                Ver Transparência
              </Link>
            </div>
          </div>

          {/* Floating Impact Card */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-[#8fd3c1] text-[#0056a3] px-4 py-1.5 rounded-full font-bold text-xs uppercase shadow-md">
                90% vai para os animais
              </div>
              <h3 className="text-[#0056a3] font-bold text-xl mb-4">Impacto Real Comprovado</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-sm font-medium text-neutral-dark">Animais Resgatados</span>
                  <span className="text-[#0056a3] font-extrabold text-lg">+500</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-sm font-medium text-neutral-dark">Adoções Realizadas</span>
                  <span className="text-[#0056a3] font-extrabold text-lg">1.200</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-sm font-medium text-neutral-dark">Voluntários Ativos</span>
                  <span className="text-[#0056a3] font-extrabold text-lg">200+</span>
                </div>
                <div className="pt-4">
                  <p className="text-xs text-gray-400 text-center uppercase font-bold tracking-tighter">Auditoria anual por auditores independentes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Utility/Trust Bar */}
      <div className="bg-white border-t border-b border-gray-100 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-10 py-6 md:h-[100px] shrink-0 gap-6 md:gap-0">
        <div className="flex items-center gap-6 md:gap-10">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Nossa Localização</span>
            <span className="text-sm font-semibold text-neutral-dark">Rua Minas Gerais, 602, Catanduva/SP</span>
          </div>
          <div className="hidden md:block h-8 w-px bg-gray-200"></div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Contato Direto</span>
            <span className="text-sm font-semibold text-neutral-dark">(17) 99999-1234</span>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <span className="text-sm font-bold text-[#0056a3] hidden sm:inline">DOE VIA PIX:</span>
          <div className="bg-[#f8f9fa] border border-dashed border-[#0056a3] px-4 py-2 rounded-lg font-mono text-sm font-bold text-neutral-dark">
            27.342.722/0001-80
          </div>
        </div>
      </div>

      {/* PROVA SOCIAL - HISTÓRIAS DE VALOR (New Section) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#8fd3c1]/20 text-[#0056a3] rounded-full text-sm font-bold uppercase tracking-wider mb-4">
              Vidas Transformadas
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-[#0056a3] mb-6">
              O Seu Apoio Tem <span className="text-[#8fd3c1]">Nome e Rosto</span>
            </h2>
            <p className="text-lg text-neutral-dark max-w-2xl mx-auto font-medium">
              Conheça alguns dos animais que tiveram seus destinos reescritos graças aos nossos doadores e voluntários.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="bg-gray-soft rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col group">
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=600&auto=format&fit=crop" alt="Bolinha recuperado" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-[#0056a3] shadow-sm uppercase">Antes: Sarna severa</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#0056a3] mb-2 font-display">Bolinha</h3>
                <p className="text-sm font-semibold text-[#8fd3c1] mb-4 uppercase tracking-wider">Cão sem raça definida • 2 anos</p>
                <div className="text-neutral-dark text-sm space-y-3 mb-6 flex-grow">
                  <p><strong className="text-[#2c3e50]">O Resgate:</strong> Encontrado desnutrido, com sarna avançada cobrindo 80% do corpo, mal conseguia se levantar.</p>
                  <p><strong className="text-[#2c3e50]">A Recuperação:</strong> Foram 3 meses de tratamento veterinário intensivo, banhos medicamentosos e alimentação especial financiada por doadores.</p>
                  <p><strong className="text-[#2c3e50]">O Final Feliz:</strong> Hoje, Bolinha exibe uma pelagem brilhante e foi adotado por uma família com duas crianças. Corre livremente em um grande quintal.</p>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-gray-soft rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col group">
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=600&auto=format&fit=crop" alt="Luna recuperada" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-[#0056a3] shadow-sm uppercase">Antes: Perna fraturada</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#0056a3] mb-2 font-display">Luna</h3>
                <p className="text-sm font-semibold text-[#8fd3c1] mb-4 uppercase tracking-wider">Gata rajada • 1 ano</p>
                <div className="text-neutral-dark text-sm space-y-3 mb-6 flex-grow">
                  <p><strong className="text-[#2c3e50]">O Resgate:</strong> Um chamado desesperado nos levou a um bueiro durante uma tempestade. Luna estava assustada e com uma fratura exposta.</p>
                  <p><strong className="text-[#2c3e50]">A Recuperação:</strong> Passou por cirurgia ortopédica de urgência e semanas de fisioterapia na nossa clínica parceira.</p>
                  <p><strong className="text-[#2c3e50]">O Final Feliz:</strong> Adotada por um casal de idosos, Luna recuperou 100% da mobilidade e enche a casa de ronronados e alegria diária.</p>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-gray-soft rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col group">
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=600&auto=format&fit=crop" alt="Thor recuperado" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-[#0056a3] shadow-sm uppercase">Antes: Desnutrido e fóbico</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#0056a3] mb-2 font-display">Thor</h3>
                <p className="text-sm font-semibold text-[#8fd3c1] mb-4 uppercase tracking-wider">Mistura de Pitbull • 3 anos</p>
                <div className="text-neutral-dark text-sm space-y-3 mb-6 flex-grow">
                  <p><strong className="text-[#2c3e50]">O Resgate:</strong> Abandonado amarrado a um poste sob sol forte, extremamente magro e com medo profundo de humanos.</p>
                  <p><strong className="text-[#2c3e50]">A Recuperação:</strong> 6 meses de reabilitação comportamental com nossa equipe e adequação nutricional para ganhar peso de forma saudável.</p>
                  <p><strong className="text-[#2c3e50]">O Final Feliz:</strong> Thor superou seus traumas e hoje atua como cão de apoio emocional (não-oficial) para o filho autista de sua nova família amorosa.</p>
                </div>
              </div>
            </div>

            {/* Story 4 */}
            <div className="bg-gray-soft rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col group">
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img src="https://images.unsplash.com/photo-1593134257782-e89567b7718a?q=80&w=600&auto=format&fit=crop" alt="Mel e filhotes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-[#0056a3] shadow-sm uppercase">Antes: Grávida na rua</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#0056a3] mb-2 font-display">Mel</h3>
                <p className="text-sm font-semibold text-[#8fd3c1] mb-4 uppercase tracking-wider">Cadelinha porte pequeno • 2 anos</p>
                <div className="text-neutral-dark text-sm space-y-3 mb-6 flex-grow">
                  <p><strong className="text-[#2c3e50]">O Resgate:</strong> Encontrada abandonada dentro de uma caixa de papelão em um dia frio, prestes a dar à luz.</p>
                  <p><strong className="text-[#2c3e50]">A Recuperação:</strong> Acolhida imediatamente em nosso berçário aquecido. Teve um parto seguro acompanhado por veterinários, dando à luz 4 filhotes.</p>
                  <p><strong className="text-[#2c3e50]">O Final Feliz:</strong> Todos os filhotes foram vacinados, castrados e adotados. Mel, a mãe guerreira, foi finalmente adotada por uma enfermeira.</p>
                </div>
              </div>
            </div>

            {/* Story 5 */}
            <div className="bg-gray-soft rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col group">
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=600&auto=format&fit=crop" alt="Simba recuperado" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-[#0056a3] shadow-sm uppercase">Antes: Vítima de maus-tratos</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#0056a3] mb-2 font-display">Simba</h3>
                <p className="text-sm font-semibold text-[#8fd3c1] mb-4 uppercase tracking-wider">Gato laranja • 4 anos</p>
                <div className="text-neutral-dark text-sm space-y-3 mb-6 flex-grow">
                  <p><strong className="text-[#2c3e50]">O Resgate:</strong> Recolhido com queimaduras severas pelo corpo, vítima de crueldade humana intolerável.</p>
                  <p><strong className="text-[#2c3e50]">A Recuperação:</strong> Semanas de curativos diários, tratamento a laser e manejo da dor. Voluntários passavam horas apenas deitando perto para reconstruir sua confiança.</p>
                  <p><strong className="text-[#2c3e50]">O Final Feliz:</strong> Suas feridas físicas e emocionais cicatrizaram. Hoje é um gato carinhoso de apartamento, dormindo no travesseiro de seu novo tutor.</p>
                </div>
              </div>
            </div>

            {/* Story 6 */}
            <div className="bg-gray-soft rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col group">
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=600&auto=format&fit=crop" alt="Valentina idosa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-[#0056a3] shadow-sm uppercase">Antes: Idosa abandonada</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#0056a3] mb-2 font-display">Valentina</h3>
                <p className="text-sm font-semibold text-[#8fd3c1] mb-4 uppercase tracking-wider">Poodle • 11 anos</p>
                <div className="text-neutral-dark text-sm space-y-3 mb-6 flex-grow">
                  <p><strong className="text-[#2c3e50]">O Resgate:</strong> Deixada em nossa porta na calada da noite. Estava cega de um olho, com surdez parcial e severos problemas dentários.</p>
                  <p><strong className="text-[#2c3e50]">A Recuperação:</strong> Passou por limpeza de tártaro, extração de dentes infeccionados e exames geriátricos completos. Recebeu dieta pastosa hipercalórica.</p>
                  <p><strong className="text-[#2c3e50]">O Final Feliz:</strong> Animais idosos raramente são adotados, mas Valentina tocou o coração de uma professora aposentada. Hoje desfruta de um final de vida confortável em um sofá macio.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/como-ajudar" className="inline-flex items-center gap-2 text-[#0056a3] font-bold hover:text-[#2ecc71] transition-colors">
              Conheça mais histórias de sucesso no nosso Blog <Activity className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO SECTION - MECANISMO DE IMPACTO */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-12">Nosso Mecanismo de Impacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-soft p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Activity className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">1. Resgate</h3>
              <p className="text-neutral-dark">Identificamos e resgatamos animais em situação de rua extrema.</p>
            </div>
            <div className="bg-gray-soft p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <HomeIcon className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">2. Abrigo & Cuidado</h3>
              <p className="text-neutral-dark">Oferecemos abrigo seguro, alimentação e cuidados veterinários completos.</p>
            </div>
            <div className="bg-gray-soft p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">3. Adoção Responsável</h3>
              <p className="text-neutral-dark">Conectamos com famílias amorosas com rigoroso acompanhamento.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* VALUE STACK SECTION (Transparência Financeira / Investimento) */}
      <section className="py-24 bg-neutral-dark text-white relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Transparência é o nosso <span className="text-secondary">Pilar Principal</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
              Sabemos que a sua maior preocupação é o destino da sua doação. Na Caminho Suave, 
              cada centavo é auditado. Nosso custo mensal de abrigamento, alimentação e veterinário 
              ultrapassa os <strong className="text-white">R$ 6.500</strong>.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-white">90% Direto para os Animais</h4>
                  <p className="text-gray-400 text-sm">Alimentação (45%), Cuidados Veterinários (30%) e Manutenção do Abrigo (15%). Apenas 10% é retido para custos burocráticos e administrativos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center shrink-0">
                  <Activity className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-white">Auditoria Independente Anual</h4>
                  <p className="text-gray-400 text-sm">Somos uma OSCIP certificada. Nossos relatórios são públicos.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
               <Link to="/transparencia" className="bg-transparent border border-gray-500 hover:border-white text-white px-8 py-3 rounded-lg font-bold transition-all text-sm uppercase tracking-widest inline-flex items-center gap-2">
                 Ver Relatórios Completos
               </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl text-neutral-dark transform lg:scale-105 border-t-8 border-accent">
              <h3 className="text-2xl font-bold font-display text-primary text-center mb-2">O Seu Investimento Inicial</h3>
              <p className="text-center text-sm text-gray-500 mb-8 font-medium">O custo na rua é a vida deles. O seu custo para salvar é mínimo.</p>
              
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-primary">Doação Recorrente</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Impacto Constante</span>
                  </div>
                  <span className="text-2xl font-extrabold text-accent">A partir de R$ 25<span className="text-sm text-gray-500 font-medium">/mês</span></span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-primary">Doação Única</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Resgate Imediato</span>
                  </div>
                  <span className="text-2xl font-extrabold text-accent">A partir de R$ 50</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <Link to="/doacoes" className="w-full bg-accent hover:bg-[#d89f2a] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-yellow-100 text-center transition-colors uppercase tracking-wide">
                  COMEÇAR A SALVAR VIDAS
                </Link>
                <div className="text-center mt-2">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider"><Heart className="inline h-3 w-3 mr-1 text-accent"/> Garantia de Transparência de 100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ (OBJEÇÕES E DÚVIDAS) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-neutral-dark font-medium">Tem alguma dúvida? Nós respondemos as principais questões da nossa comunidade.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-soft rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">Eu não tenho dinheiro, como posso ajudar?</h3>
              <p className="text-neutral-dark text-sm leading-relaxed">Você pode ajudar sendo um Lar Temporário, atuando como voluntário nos finais de semana, ou doando jornais, cobertores usados e potes de sorvete para as refeições. Cada gesto de amor conta.</p>
            </div>

            <div className="bg-gray-soft rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">A Associação recebe ajuda da Prefeitura?</h3>
              <p className="text-neutral-dark text-sm leading-relaxed">Não. Somos uma ONG totalmente independente. O município não possui Canil Municipal, portanto todo o nosso trabalho é sustentado 100% por doações da sociedade civil.</p>
            </div>

            <div className="bg-gray-soft rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">Vocês recolhem gatos ou apenas cães?</h3>
              <p className="text-neutral-dark text-sm leading-relaxed">Nossa principal demanda e estrutura são voltadas para cães. Eventualmente, atendemos casos de extrema emergência com gatos com a ajuda de Clínicas Parceiras (como a Fofura), mas não temos abrigo felino estruturado.</p>
            </div>
            
            <div className="bg-gray-soft rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">Encontrei um animal na rua, posso levar para vocês?</h3>
              <p className="text-neutral-dark text-sm leading-relaxed">No momento estamos operando com superlotação no abrigo. Recomendamos que você ofereça Lar Temporário enquanto nós ajudamos na divulgação e nas despesas veterinárias se necessário. Entre em contato antes de fazer o recolhimento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CALL TO ACTION FINAL */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Pattern Map or subtle graphics */}
        <div className="absolute inset-0 opacity-5">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pet-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20 5C10 5 0 10 0 20C0 30 10 35 20 35C30 35 40 30 40 20C40 10 30 5 20 5ZM20 25C15 25 10 20 10 15C15 15 20 20 25 15C25 20 20 25 20 25Z" fill="currentColor"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pet-pattern)"></rect>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            Eles não têm mais de onde tirar ajuda. <br/><span className="text-accent">Apenas de você.</span>
          </h2>
          <p className="text-xl text-white/90 font-medium mb-10 max-w-2xl mx-auto">
            O inverno está chegando, e nossos estoques de ração estão no fim. Sem a sua doação agora, teremos que paralisar novos resgates amanhã.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/doacoes" className="bg-accent hover:bg-[#d89f2a] text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl transition-all transform hover:-translate-y-1">
               FAZER DOAÇÃO DE EMERGÊNCIA AGORA
            </Link>
          </div>
          <p className="text-white/60 text-sm mt-6 font-medium">Pagamento 100% Seguro. Doações via PIX ou Cartão.</p>
        </div>
      </section>
    </div>
  );
}
