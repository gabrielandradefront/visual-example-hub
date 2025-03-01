
export const CursosComponent = {
  selector: 'app-cursos',
  template: `
    <div class="pt-24"> <!-- Padding top to avoid content being hidden by the fixed header -->
      <!-- Hero Section -->
      <section class="py-16 bg-gradient-to-r from-[#33C3F0] to-[#1E88E5] text-white">
        <div class="layout">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">Nossos Cursos</h1>
            <p class="text-xl opacity-90">Conheça todas as etapas educacionais oferecidas pelo Colégio Geração 200, da Educação Infantil ao Ensino Médio.</p>
          </div>
        </div>
      </section>
      
      <!-- Educação Infantil -->
      <section class="py-20 bg-white">
        <div class="layout">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="scroll-reveal">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Educação Infantil" 
                class="rounded-xl shadow-lg w-full h-auto object-cover"
              >
            </div>
            <div>
              <span class="text-sm font-bold uppercase tracking-wider text-[#ea384c] mb-4 inline-block scroll-reveal">
                EDUCAÇÃO INFANTIL
              </span>
              <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800 scroll-reveal">
                Primeiros passos na jornada do conhecimento
              </h2>
              <p class="text-gray-600 mb-6 scroll-reveal">
                Nossa Educação Infantil proporciona experiências significativas que estimulam a curiosidade natural das crianças. Através de atividades lúdicas e interativas, desenvolvemos habilidades fundamentais para toda a vida.
              </p>
              <ul class="space-y-3 mb-8 scroll-reveal">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#33C3F0] mr-3 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>Desenvolvimento socioemocional</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#33C3F0] mr-3 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>Estímulo à criatividade e imaginação</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#33C3F0] mr-3 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>Iniciação à alfabetização e ao raciocínio lógico</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#33C3F0] mr-3 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>Contato com artes, música e movimento</span>
                </li>
              </ul>
              <div class="scroll-reveal">
                <app-button variant="primary" size="lg" class="rounded-full">
                  Conheça mais
                </app-button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Ensino Fundamental -->
      <section class="py-20 bg-gray-50">
        <div class="layout">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1">
              <span class="text-sm font-bold uppercase tracking-wider text-[#ea384c] mb-4 inline-block scroll-reveal">
                ENSINO FUNDAMENTAL
              </span>
              <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800 scroll-reveal">
                Construindo bases sólidas para o futuro
              </h2>
              <p class="text-gray-600 mb-6 scroll-reveal">
                No Ensino Fundamental, consolidamos a alfabetização e desenvolvemos competências essenciais em todas as áreas do conhecimento. Nossa metodologia ativa incentiva o protagonismo e a autonomia dos estudantes.
              </p>
              <ul class="space-y-3 mb-8 scroll-reveal">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#33C3F0] mr-3 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>Alfabetização consolidada e letramento</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#33C3F0] mr-3 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>Pensamento matemático avançado</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#33C3F0] mr-3 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>Introdução às ciências e ao método científico</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#33C3F0] mr-3 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>Desenvolvimento do pensamento crítico</span>
                </li>
              </ul>
              <div class="scroll-reveal">
                <app-button variant="primary" size="lg" class="rounded-full">
                  Conheça mais
                </app-button>
              </div>
            </div>
            <div class="order-1 md:order-2 scroll-reveal">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Ensino Fundamental" 
                class="rounded-xl shadow-lg w-full h-auto object-cover"
              >
            </div>
          </div>
        </div>
      </section>
    </div>
  `
};

customElements.define('app-cursos', 
  class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = CursosComponent.template;
    }
  }
);
