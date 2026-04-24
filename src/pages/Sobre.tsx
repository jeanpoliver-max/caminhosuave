export default function Sobre() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6">Quem Somos: Uma Missão de <span className="text-secondary">Amor e Proteção</span></h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="text-3xl font-display font-bold text-primary mb-6">Nossa História</h2>
          <div className="space-y-4 text-lg text-neutral-dark">
            <p>A Associação Caminho Suave nasceu da convicção de que todo animal merece uma chance. Começamos em 2025 com um grupo de voluntários apaixonados por animais, determinados a fazer diferença na vida de cães e gatos abandonados na região de Catanduva.</p>
            <p>Desde então, resgatamos mais de 500 animais, oferecemos abrigo seguro, cuidados veterinários completos, e promovemos adoções responsáveis. Cada história de transformação nos motiva a continuar.</p>
            <p>Hoje, somos uma OSCIP registrada, auditada anualmente, com 200+ voluntários comprometidos com nossa causa.</p>
          </div>
        </div>
        <div className="bg-gray-soft p-10 rounded-3xl shadow-sm border border-gray-100">
          <div className="mb-8">
            <h3 className="text-2xl font-display font-bold text-primary mb-3">Nossa Missão</h3>
            <p className="text-neutral-dark">Proteger, resgatar, abrigar e promover a adoção responsável de animais abandonados, oferecendo-lhes dignidade, cuidado e uma segunda chance de vida.</p>
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold text-primary mb-3">Nossa Visão</h3>
            <p className="text-neutral-dark">Ser referência em proteção animal na região de Catanduva/SP, criando uma comunidade consciente sobre o valor e direitos dos animais.</p>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-display font-bold text-primary mb-10 text-center">Nossos Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-secondary">
            <h4 className="font-bold text-xl text-primary mb-2">Compaixão</h4>
            <p className="text-neutral-dark text-sm">Tratamos cada animal com amor e respeito.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-secondary">
            <h4 className="font-bold text-xl text-primary mb-2">Transparência</h4>
            <p className="text-neutral-dark text-sm">Você sabe exatamente para onde vai sua doação.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-secondary">
            <h4 className="font-bold text-xl text-primary mb-2">Responsabilidade</h4>
            <p className="text-neutral-dark text-sm">Garantimos adoções seguras e acompanhamento.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-secondary">
            <h4 className="font-bold text-xl text-primary mb-2">Comunidade</h4>
            <p className="text-neutral-dark text-sm">Somos fortes juntos, voluntários e doadores.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-secondary">
            <h4 className="font-bold text-xl text-primary mb-2">Excelência</h4>
            <p className="text-neutral-dark text-sm">Oferecemos os melhores cuidados possíveis.</p>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white rounded-3xl p-12 text-center shadow-xl">
        <h2 className="text-3xl font-display font-bold mb-10">Impacto em Números</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-extrabold text-secondary mb-2">500+</div>
            <div className="uppercase tracking-wider text-xs font-semibold">Animais resgatados</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-secondary mb-2">1.200+</div>
            <div className="uppercase tracking-wider text-xs font-semibold">Adoções bem-sucedidas</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-secondary mb-2">200+</div>
            <div className="uppercase tracking-wider text-xs font-semibold">Voluntários ativos</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-secondary mb-2">90%</div>
            <div className="uppercase tracking-wider text-xs font-semibold">Dinheiro para animais</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-secondary mb-2">12+</div>
            <div className="uppercase tracking-wider text-xs font-semibold">Meses de operação</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-secondary mb-2">100%</div>
            <div className="uppercase tracking-wider text-xs font-semibold">OSCIP certificada</div>
          </div>
        </div>
      </div>
    </div>
  );
}
