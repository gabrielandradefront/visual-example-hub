
export const MetodologiaComponent = {
  selector: 'app-metodologia',
  template: `
    <div class="pt-24"> <!-- Padding top to avoid content being hidden by the fixed header -->
      <!-- Hero Section -->
      <section class="py-16 bg-gradient-to-r from-[#33C3F0] to-[#1E88E5] text-white">
        <div class="layout">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">Nossa Metodologia</h1>
            <p class="text-xl opacity-90">Conheça a abordagem pedagógica inovadora que faz do Colégio Geração 200 referência em educação.</p>
          </div>
        </div>
      </section>
      
      <!-- Abordagem Pedagógica -->
      <section class="py-20 bg-white">
        <div class="layout">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="scroll-reveal">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                alt="Metodologia Ativa" 
                class="rounded-xl shadow-lg w-full h-auto object-cover"
              >
            </div>
            <div>
              <span class="text-sm font-bold uppercase tracking-wider text-[#ea384c] mb-4 inline-block scroll-reveal">
                METODOLOGIA ATIVA
              </span>
              <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800 scroll-reveal">
                Aprendizagem significativa e contextualizada
              </h2>
              <p class="text-gray-600 mb-6 scroll-reveal">
                Nossa metodologia coloca o aluno como protagonista do processo de aprendizagem. Através de projetos interdisciplinares, resolução de problemas e investigações científicas, os estudantes desenvolvem competências essenciais para os desafios do século XXI.
              </p>
              <p class="text-gray-600 mb-8 scroll-reveal">
                Integramos tecnologia, cooperação e pensamento crítico em um ambiente que estimula a curiosidade e a autonomia. Os conteúdos curriculares são trabalhados de forma contextualizada, estabelecendo conexões com situações reais.
              </p>
              <div class="scroll-reveal">
                <app-button variant="primary" size="lg" class="rounded-full">
                  Conheça mais
                </app-button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Pilares Metodológicos -->
      <section class="py-20 bg-gray-50">
        <div class="layout">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-sm font-bold uppercase tracking-wider text-[#ea384c] mb-4 inline-block scroll-reveal">
              PILARES METODOLÓGICOS
            </span>
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800 scroll-reveal">
              Bases da nossa abordagem educacional
            </h2>
            <p class="text-gray-600 scroll-reveal">
              Nossa metodologia é estruturada em quatro pilares fundamentais que se complementam e integram todas as dimensões do processo educativo.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-8 rounded-xl border border-gray-100 shadow scroll-reveal">
              <div class="w-16 h-16 rounded-full bg-[#D3E4FD] flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#33C3F0]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4 text-[#33C3F0]">Pensamento Investigativo</h3>
              <p class="text-gray-600">
                Incentivamos os alunos a questionar, formular hipóteses e buscar soluções para problemas reais. O conhecimento é construído a partir da curiosidade e da investigação.
              </p>
            </div>
            
            <div class="bg-white p-8 rounded-xl border border-gray-100 shadow scroll-reveal">
              <div class="w-16 h-16 rounded-full bg-[#D3E4FD] flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#33C3F0]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4 text-[#33C3F0]">Aprendizagem Colaborativa</h3>
              <p class="text-gray-600">
                Promovemos o trabalho em equipe e a colaboração como formas de desenvolver habilidades sociais e potencializar a construção coletiva do conhecimento.
              </p>
            </div>
            
            <div class="bg-white p-8 rounded-xl border border-gray-100 shadow scroll-reveal">
              <div class="w-16 h-16 rounded-full bg-[#D3E4FD] flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#33C3F0]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4 text-[#33C3F0]">Protagonismo Estudantil</h3>
              <p class="text-gray-600">
                Valorizamos a autonomia e o protagonismo dos alunos, incentivando-os a tomar decisões, desenvolver projetos próprios e assumir responsabilidade por sua aprendizagem.
              </p>
            </div>
            
            <div class="bg-white p-8 rounded-xl border border-gray-100 shadow scroll-reveal">
              <div class="w-16 h-16 rounded-full bg-[#D3E4FD] flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#33C3F0]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4 text-[#33C3F0]">Integração Tecnológica</h3>
              <p class="text-gray-600">
                A tecnologia é incorporada de forma inteligente e crítica em nossos processos educativos, preparando os estudantes para um mundo cada vez mais digital e conectado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
};

customElements.define('app-metodologia', 
  class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = MetodologiaComponent.template;
    }
  }
);
