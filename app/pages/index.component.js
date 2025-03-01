
import { HeroComponent } from '../components/hero.component.js';
import { FeaturesComponent } from '../components/features.component.js';
import { CoursesComponent } from '../components/courses.component.js';

export const IndexComponent = {
  selector: 'app-index',
  template: `
    <div>
      <app-hero></app-hero>
      <app-features></app-features>
      <app-courses></app-courses>
      
      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-[#33C3F0] to-[#1E88E5] text-white">
        <div class="layout">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Comece a jornada educacional do seu filho hoje mesmo
            </h2>
            <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Agende uma visita ao nosso campus e conheça de perto nossa metodologia inovadora e instalações modernas.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <app-button variant="secondary" size="lg" class="rounded-full font-bold px-8">
                Agendar Visita
              </app-button>
              <app-button variant="outline" size="lg" class="rounded-full font-bold px-8 border-white text-white hover:bg-white/20">
                Fale com um Consultor
              </app-button>
            </div>
            
            <div class="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-center">
              <div class="flex flex-col items-center">
                <div class="text-4xl font-bold mb-2">98%</div>
                <p class="text-sm opacity-80">Aprovação em universidades</p>
              </div>
              <div class="h-12 w-px bg-white/20 hidden md:block"></div>
              <div class="flex flex-col items-center">
                <div class="text-4xl font-bold mb-2">15+</div>
                <p class="text-sm opacity-80">Anos de excelência</p>
              </div>
              <div class="h-12 w-px bg-white/20 hidden md:block"></div>
              <div class="flex flex-col items-center">
                <div class="text-4xl font-bold mb-2">2000+</div>
                <p class="text-sm opacity-80">Alunos formados</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Testimonials -->
      <section class="py-20 bg-gray-50">
        <div class="layout">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-sm font-bold uppercase tracking-wider text-[#ea384c] mb-4 inline-block">
              DEPOIMENTOS
            </span>
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              O que dizem as famílias Geração 200
            </h2>
            <p class="text-gray-600">
              Veja como nossa metodologia transformou a vida de centenas de alunos e suas famílias.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl border border-gray-100 shadow">
              <div class="flex items-center mb-6">
                <img 
                  src="https://i.pravatar.cc/150?img=32" 
                  alt="Foto do depoimento" 
                  class="w-16 h-16 rounded-full mr-4"
                >
                <div>
                  <h4 class="font-bold text-gray-800">Ana Paula Silva</h4>
                  <p class="text-sm text-gray-500">Mãe do Pedro, 3º ano</p>
                </div>
              </div>
              <p class="text-gray-600 italic">
                "A Geração 200 transformou meu filho. Além do excelente desempenho acadêmico, ele desenvolveu habilidades sociais e emocionais que fazem toda diferença. Os professores são excepcionais e o acompanhamento é personalizado."
              </p>
              <div class="mt-6 text-yellow-400">
                ★★★★★
              </div>
            </div>
            
            <div class="bg-white p-8 rounded-xl border border-gray-100 shadow md:translate-y-4">
              <div class="flex items-center mb-6">
                <img 
                  src="https://i.pravatar.cc/150?img=59" 
                  alt="Foto do depoimento" 
                  class="w-16 h-16 rounded-full mr-4"
                >
                <div>
                  <h4 class="font-bold text-gray-800">Carlos Eduardo</h4>
                  <p class="text-sm text-gray-500">Pai da Mariana, 8º ano</p>
                </div>
              </div>
              <p class="text-gray-600 italic">
                "A metodologia aplicada na Geração 200 desperta o interesse pelo conhecimento de forma natural. Minha filha desenvolveu autonomia e responsabilidade, além de um amor genuíno pelo aprendizado."
              </p>
              <div class="mt-6 text-yellow-400">
                ★★★★★
              </div>
            </div>
            
            <div class="bg-white p-8 rounded-xl border border-gray-100 shadow">
              <div class="flex items-center mb-6">
                <img 
                  src="https://i.pravatar.cc/150?img=12" 
                  alt="Foto do depoimento" 
                  class="w-16 h-16 rounded-full mr-4"
                >
                <div>
                  <h4 class="font-bold text-gray-800">Juliana Mendes</h4>
                  <p class="text-sm text-gray-500">Ex-aluna, turma de 2021</p>
                </div>
              </div>
              <p class="text-gray-600 italic">
                "Sou eternamente grata à Geração 200 por me preparar não só para a universidade, mas para a vida. O ambiente acolhedor, os professores inspiradores e a metodologia inovadora me deram uma base sólida para meu sucesso profissional."
              </p>
              <div class="mt-6 text-yellow-400">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
};

customElements.define('app-index', 
  class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = IndexComponent.template;
    }
  }
);
