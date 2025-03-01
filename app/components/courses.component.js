
export const CoursesComponent = {
  selector: 'app-courses',
  template: `
    <section class="py-20 bg-gray-50">
      <div class="layout">
        <div class="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <span class="text-sm font-bold uppercase tracking-wider text-[#ea384c] mb-4 inline-block">
            NOSSOS CURSOS
          </span>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Educação de qualidade em todos os níveis
          </h2>
          <p class="text-gray-600">
            A Geração 200 oferece uma jornada educacional completa, desde a Educação Infantil até o Ensino Médio, 
            com metodologias adaptadas para cada fase do desenvolvimento.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group scroll-reveal">
            <div class="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1770&auto=format&fit=crop" 
                alt="Educação Infantil" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              >
            </div>
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <span class="bg-blue-50 text-[#33C3F0] px-3 py-1 rounded-full text-xs font-semibold">
                  2 a 5 anos
                </span>
                <span class="text-gray-400 text-sm">Período Integral Disponível</span>
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#33C3F0] transition-colors">
                Educação Infantil
              </h3>
              <p class="text-gray-600 mb-6">
                Ambiente acolhedor e estimulante onde as crianças desenvolvem habilidades sociais, 
                emocionais e cognitivas através de brincadeiras e atividades lúdicas.
              </p>
              <a href="/educacao-infantil" class="inline-flex items-center text-[#33C3F0] font-semibold hover:text-[#ea384c] transition-colors">
                Ver detalhes
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
          
          <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group scroll-reveal" style="transition-delay: 100ms;">
            <div class="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1722&auto=format&fit=crop" 
                alt="Ensino Fundamental" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              >
            </div>
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <span class="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                  6 a 14 anos
                </span>
                <span class="text-gray-400 text-sm">Manhã ou Tarde</span>
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#33C3F0] transition-colors">
                Ensino Fundamental
              </h3>
              <p class="text-gray-600 mb-6">
                Base sólida de conhecimentos com metodologia ativa que estimula o pensamento crítico e a autonomia, aliando conteúdo e habilidades socioemocionais.
              </p>
              <a href="/fundamental" class="inline-flex items-center text-[#33C3F0] font-semibold hover:text-[#ea384c] transition-colors">
                Ver detalhes
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
          
          <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group scroll-reveal" style="transition-delay: 200ms;">
            <div class="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1932&auto=format&fit=crop" 
                alt="Ensino Médio" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              >
            </div>
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <span class="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold">
                  15 a 17 anos
                </span>
                <span class="text-gray-400 text-sm">Integral ou Semi-integral</span>
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#33C3F0] transition-colors">
                Ensino Médio
              </h3>
              <p class="text-gray-600 mb-6">
                Preparação completa para o vestibular e para a vida, com foco em projetos, pesquisa científica e desenvolvimento de habilidades para o futuro profissional.
              </p>
              <a href="/ensino-medio" class="inline-flex items-center text-[#33C3F0] font-semibold hover:text-[#ea384c] transition-colors">
                Ver detalhes
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <app-button variant="primary" size="lg" class="rounded-full px-8">
            Ver todos os cursos
          </app-button>
        </div>
      </div>
    </section>
  `
};

customElements.define('app-courses', 
  class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = CoursesComponent.template;
      
      // Adiciona efeito de revelação no scroll
      setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.scroll-reveal').forEach(el => {
          observer.observe(el);
        });
      }, 100);
    }
  }
);
