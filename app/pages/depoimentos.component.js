
export const DepoimentosComponent = {
  selector: 'app-depoimentos',
  template: `
    <div class="pt-24"> <!-- Padding top to avoid content being hidden by the fixed header -->
      <!-- Hero Section -->
      <section class="py-16 bg-gradient-to-r from-[#33C3F0] to-[#1E88E5] text-white">
        <div class="layout">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">Depoimentos</h1>
            <p class="text-xl opacity-90">Conheça as histórias de sucesso e experiências de nossa comunidade escolar.</p>
          </div>
        </div>
      </section>
      
      <!-- Depoimentos de Alunos -->
      <section class="py-20 bg-white">
        <div class="layout">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-sm font-bold uppercase tracking-wider text-[#ea384c] mb-4 inline-block scroll-reveal">
              ALUNOS E EX-ALUNOS
            </span>
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800 scroll-reveal">
              Experiências que transformam vidas
            </h2>
            <p class="text-gray-600 scroll-reveal">
              Nossos alunos e ex-alunos são os maiores testemunhos da eficácia de nossa proposta educacional. Confira algumas de suas histórias inspiradoras.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white p-8 rounded-xl border border-gray-100 shadow scroll-reveal">
              <p class="text-gray-600 italic mb-6">
                "O Colégio Geração 200 mudou minha forma de aprender e de ver o mundo. Os professores sempre acreditaram no meu potencial e me incentivaram a buscar meus sonhos. Hoje, estou cursando Medicina em uma das melhores universidades do país."
              </p>
              <div class="flex items-center">
                <img 
                  src="https://i.pravatar.cc/150?img=32" 
                  alt="Foto do depoimento" 
                  class="w-14 h-14 rounded-full mr-4"
                >
                <div>
                  <h4 class="font-bold text-gray-800">Mariana Silva</h4>
                  <p class="text-sm text-gray-500">Ex-aluna, turma de 2020</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-8 rounded-xl border border-gray-100 shadow md:translate-y-4 scroll-reveal">
              <p class="text-gray-600 italic mb-6">
                "A metodologia do colégio me ajudou a desenvolver autonomia e disciplina. Aprendi não apenas conteúdos, mas também como estudar de forma eficiente e me organizar. Isso foi fundamental para minha aprovação em Engenharia Aeroespacial."
              </p>
              <div class="flex items-center">
                <img 
                  src="https://i.pravatar.cc/150?img=59" 
                  alt="Foto do depoimento" 
                  class="w-14 h-14 rounded-full mr-4"
                >
                <div>
                  <h4 class="font-bold text-gray-800">Pedro Henrique</h4>
                  <p class="text-sm text-gray-500">Ex-aluno, turma de 2021</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-8 rounded-xl border border-gray-100 shadow scroll-reveal">
              <p class="text-gray-600 italic mb-6">
                "Além da excelência acadêmica, o Geração 200 me proporcionou experiências que contribuíram para meu desenvolvimento como pessoa. Os projetos sociais e culturais ampliaram minha visão de mundo e me inspiraram a fazer diferença na sociedade."
              </p>
              <div class="flex items-center">
                <img 
                  src="https://i.pravatar.cc/150?img=12" 
                  alt="Foto do depoimento" 
                  class="w-14 h-14 rounded-full mr-4"
                >
                <div>
                  <h4 class="font-bold text-gray-800">Juliana Mendes</h4>
                  <p class="text-sm text-gray-500">Ex-aluna, turma de 2022</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="text-center">
            <app-button variant="outline" size="lg" class="rounded-full border-[#33C3F0] text-[#33C3F0] hover:bg-[#33C3F0]/10">
              Ver mais depoimentos
            </app-button>
          </div>
        </div>
      </section>
      
      <!-- Depoimentos de Pais -->
      <section class="py-20 bg-gray-50">
        <div class="layout">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-sm font-bold uppercase tracking-wider text-[#ea384c] mb-4 inline-block scroll-reveal">
              FAMÍLIAS
            </span>
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800 scroll-reveal">
              O que dizem os pais e responsáveis
            </h2>
            <p class="text-gray-600 scroll-reveal">
              A confiança das famílias é nosso maior ativo. Confira o que os pais e responsáveis dizem sobre nossa escola.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1">
              <div class="space-y-8">
                <div class="bg-white p-6 rounded-xl shadow-md scroll-reveal">
                  <p class="text-gray-600 italic mb-4">
                    "Como pais, sempre buscamos uma escola que aliasse qualidade acadêmica com formação humana. No Geração 200, encontramos isso e muito mais. Os professores são atentos às necessidades individuais e a comunicação com as famílias é excelente."
                  </p>
                  <div class="flex items-center">
                    <h4 class="font-bold text-gray-800">Ana e Roberto</h4>
                    <p class="text-sm text-gray-500 ml-2">Pais da Laura, 5º ano</p>
                  </div>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-md scroll-reveal">
                  <p class="text-gray-600 italic mb-4">
                    "O desenvolvimento do meu filho desde que ingressou no colégio foi impressionante. Além do desempenho acadêmico, ele desenvolveu responsabilidade, organização e interesse genuíno pelo conhecimento."
                  </p>
                  <div class="flex items-center">
                    <h4 class="font-bold text-gray-800">Carla Mendonça</h4>
                    <p class="text-sm text-gray-500 ml-2">Mãe do Gabriel, 8º ano</p>
                  </div>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-md scroll-reveal">
                  <p class="text-gray-600 italic mb-4">
                    "A parceria entre escola e família que o Geração 200 promove é o diferencial. Nos sentimos parte do processo educativo e percebemos que os valores que cultivamos em casa são reforçados no ambiente escolar."
                  </p>
                  <div class="flex items-center">
                    <h4 class="font-bold text-gray-800">Fernando e Patrícia</h4>
                    <p class="text-sm text-gray-500 ml-2">Pais da Marina, 3º ano</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-1 md:order-2 scroll-reveal">
              <img 
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23" 
                alt="Depoimentos de pais" 
                class="rounded-xl shadow-lg w-full h-auto object-cover"
              >
            </div>
          </div>
        </div>
      </section>
    </div>
  `
};

customElements.define('app-depoimentos', 
  class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = DepoimentosComponent.template;
    }
  }
);
