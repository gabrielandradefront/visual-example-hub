
export const FeaturesComponent = {
  selector: 'app-features',
  template: `
    <section class="py-20 bg-white">
      <div class="layout">
        <div class="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <span class="text-sm font-bold uppercase tracking-wider text-[#ea384c] mb-4 inline-block">
            NOSSO DIFERENCIAL
          </span>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Uma educação completa para formar cidadãos do mundo
          </h2>
          <p class="text-gray-600">
            Na Geração 200, acreditamos que a educação vai além do conteúdo acadêmico. 
            Formamos alunos preparados para os desafios globais com uma base sólida de conhecimentos e valores.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 scroll-reveal">
            <div class="w-16 h-16 bg-[#33C3F0]/10 rounded-lg flex items-center justify-center mb-6 text-[#33C3F0]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Programa Bilíngue</h3>
            <p class="text-gray-600 mb-6">
              Formação bilíngue integrada ao currículo, preparando os alunos para um mundo globalizado com fluência em inglês desde os primeiros anos.
            </p>
            <a href="/bilingue" class="inline-flex items-center text-[#33C3F0] font-semibold hover:text-[#ea384c] transition-colors">
              Saiba mais
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
          
          <div class="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 scroll-reveal" style="transition-delay: 100ms;">
            <div class="w-16 h-16 bg-[#ea384c]/10 rounded-lg flex items-center justify-center mb-6 text-[#ea384c]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Esportes e Cultura</h3>
            <p class="text-gray-600 mb-6">
              Atividades extracurriculares que desenvolvem habilidades físicas, trabalho em equipe e expressão artística, formando alunos completos.
            </p>
            <a href="/esportes-cultura" class="inline-flex items-center text-[#33C3F0] font-semibold hover:text-[#ea384c] transition-colors">
              Saiba mais
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
          
          <div class="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 scroll-reveal" style="transition-delay: 200ms;">
            <div class="w-16 h-16 bg-[#33C3F0]/10 rounded-lg flex items-center justify-center mb-6 text-[#33C3F0]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Tecnologia e Inovação</h3>
            <p class="text-gray-600 mb-6">
              Laboratórios equipados com tecnologia de ponta e currículo que inclui programação, robótica e desenvolvimento de projetos inovadores.
            </p>
            <a href="/tecnologia" class="inline-flex items-center text-[#33C3F0] font-semibold hover:text-[#ea384c] transition-colors">
              Saiba mais
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `
};

customElements.define('app-features', 
  class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = FeaturesComponent.template;
      
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
