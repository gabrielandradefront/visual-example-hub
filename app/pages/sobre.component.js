
export const SobreComponent = {
  selector: 'app-sobre',
  template: `
    <div class="pt-24"> <!-- Padding top to avoid content being hidden by the fixed header -->
      <!-- Hero Section -->
      <section class="py-16 bg-gradient-to-r from-[#33C3F0] to-[#1E88E5] text-white">
        <div class="layout">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">Sobre o Colégio Geração 200</h1>
            <p class="text-xl opacity-90">Conheça nossa trajetória de excelência na educação e os valores que norteiam nossa missão pedagógica.</p>
          </div>
        </div>
      </section>
      
      <!-- Seção História -->
      <section class="py-20 bg-white">
        <div class="layout">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1">
              <span class="text-sm font-bold uppercase tracking-wider text-[#ea384c] mb-4 inline-block scroll-reveal">
                NOSSA HISTÓRIA
              </span>
              <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800 scroll-reveal">
                Uma trajetória de compromisso com a educação
              </h2>
              <p class="text-gray-600 mb-6 scroll-reveal">
                Fundado em 2005, o Colégio Geração 200 nasceu do sonho de criar uma instituição de ensino que combinasse excelência acadêmica com formação humana integral. Nossos fundadores, educadores com vasta experiência, identificaram a necessidade de uma abordagem educacional que preparasse os estudantes não apenas para exames, mas para a vida.
              </p>
              <p class="text-gray-600 scroll-reveal">
                Ao longo desses anos, construímos uma reputação sólida baseada em resultados consistentes e no desenvolvimento de alunos autônomos, críticos e socialmente responsáveis. O que começou como uma pequena escola familiar hoje é referência em educação transformadora na região.
              </p>
            </div>
            <div class="order-1 md:order-2 scroll-reveal">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="História do Colégio Geração 200" 
                class="rounded-xl shadow-lg w-full h-auto object-cover"
              >
            </div>
          </div>
        </div>
      </section>
      
      <!-- Seção Valores -->
      <section class="py-20 bg-gray-50">
        <div class="layout">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-sm font-bold uppercase tracking-wider text-[#ea384c] mb-4 inline-block scroll-reveal">
              NOSSOS VALORES
            </span>
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800 scroll-reveal">
              Princípios que guiam nossa jornada educativa
            </h2>
            <p class="text-gray-600 scroll-reveal">
              Nossa filosofia educacional é sustentada por valores fundamentais que permeiam todas as dimensões do processo de ensino-aprendizagem.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl border border-gray-100 shadow scroll-reveal">
              <div class="w-16 h-16 rounded-full bg-[#D3E4FD] flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#33C3F0]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4 text-[#33C3F0]">Excelência Acadêmica</h3>
              <p class="text-gray-600">
                Buscamos o mais alto padrão de qualidade em todas as dimensões do processo educativo, com professores qualificados e metodologias inovadoras.
              </p>
            </div>
            
            <div class="bg-white p-8 rounded-xl border border-gray-100 shadow scroll-reveal">
              <div class="w-16 h-16 rounded-full bg-[#D3E4FD] flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#33C3F0]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4 text-[#33C3F0]">Formação Integral</h3>
              <p class="text-gray-600">
                Valorizamos o desenvolvimento completo do ser humano, contemplando as dimensões intelectual, emocional, física, social e ética.
              </p>
            </div>
            
            <div class="bg-white p-8 rounded-xl border border-gray-100 shadow scroll-reveal">
              <div class="w-16 h-16 rounded-full bg-[#D3E4FD] flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#33C3F0]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4 text-[#33C3F0]">Inovação</h3>
              <p class="text-gray-600">
                Estamos sempre em busca de novas abordagens pedagógicas e tecnológicas que potencializem o aprendizado e preparem nossos alunos para os desafios do século XXI.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
};

customElements.define('app-sobre', 
  class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = SobreComponent.template;
    }
  }
);
