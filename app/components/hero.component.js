
export const HeroComponent = {
  selector: 'app-hero',
  template: `
    <section class="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-[#33C3F0] to-[#1E88E5] text-white overflow-hidden relative">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000')] bg-cover bg-center opacity-10"></div>
      <div class="layout relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="flex flex-col items-start animate-fade-in">
            <span class="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
              EDUCAÇÃO TRANSFORMADORA
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Preparando líderes para o <span class="text-yellow-300">futuro</span>
            </h1>
            <p class="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
              Na Geração 200, acreditamos no potencial de cada aluno e oferecemos uma educação integrada que prepara para a vida e para os desafios do século XXI.
            </p>
            <div class="flex flex-wrap gap-4">
              <app-button variant="secondary" size="lg" class="rounded-full font-bold px-8 py-4">
                Conheça nossos cursos
              </app-button>
              <app-button variant="outline" size="lg" class="rounded-full font-bold px-8 py-4 border-white text-white hover:bg-white/20">
                Agende uma visita
              </app-button>
            </div>
            
            <div class="flex items-center mt-12 gap-8">
              <div class="flex -space-x-4">
                <img class="w-12 h-12 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?img=1" alt="Aluno">
                <img class="w-12 h-12 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?img=2" alt="Aluno">
                <img class="w-12 h-12 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?img=3" alt="Aluno">
                <div class="w-12 h-12 rounded-full border-2 border-white bg-[#ea384c] flex items-center justify-center text-white font-bold">
                  99+
                </div>
              </div>
              <p class="text-sm">
                Mais de <span class="font-bold">2000 alunos</span> transformaram suas vidas conosco
              </p>
            </div>
          </div>
          
          <div class="hidden md:block relative animate-fade-in animation-delay-300">
            <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#ea384c] rounded-full opacity-20 blur-3xl"></div>
            <div class="relative z-10 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop" 
                alt="Estudantes Geração 200" 
                class="w-full h-auto rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
              >
              <div class="mt-6 flex justify-between items-start">
                <div>
                  <h3 class="font-bold text-xl">Formação completa</h3>
                  <p class="text-white/70">Desenvolvimento acadêmico e socioemocional</p>
                </div>
                <span class="flex h-10 w-10 items-center justify-center rounded-full bg-[#ea384c]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in animation-delay-500">
          <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-2">Professores Qualificados</h3>
            <p class="text-white/70">Equipe docente com mestrado e doutorado nas melhores universidades</p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-2">Metodologia Inovadora</h3>
            <p class="text-white/70">Abordagem pedagógica que estimula o pensamento crítico e criativo</p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-2">Tecnologia Avançada</h3>
            <p class="text-white/70">Recursos tecnológicos de ponta para uma aprendizagem interativa</p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-2">Resultados Comprovados</h3>
            <p class="text-white/70">Altos índices de aprovação em vestibulares e universidades internacionais</p>
          </div>
        </div>
      </div>
      
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  `
};

customElements.define('app-hero', 
  class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = HeroComponent.template;
    }
  }
);
