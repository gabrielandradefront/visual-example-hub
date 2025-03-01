
export const FooterComponent = {
  selector: 'app-footer',
  template: `
    <footer class="bg-[#33C3F0] text-white">
      <div class="layout py-12 md:py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div class="md:col-span-2">
            <a href="/" class="text-2xl font-bold">
              Geração<span class="text-[#ea384c]">200</span>
            </a>
            <p class="mt-4 text-blue-100 max-w-md">
              Uma instituição de ensino comprometida com a formação integral dos alunos, preparando-os para os desafios do século XXI com valores éticos e excelência acadêmica.
            </p>
          </div>
          
          <div>
            <h4 class="font-bold text-sm uppercase tracking-wider text-[#ea384c] mb-4">
              Links Rápidos
            </h4>
            <ul class="space-y-2">
              <li>
                <a href="/" class="text-blue-100 hover:text-[#ea384c] transition-colors duration-200 text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="/sobre" class="text-blue-100 hover:text-[#ea384c] transition-colors duration-200 text-sm">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/cursos" class="text-blue-100 hover:text-[#ea384c] transition-colors duration-200 text-sm">
                  Cursos
                </a>
              </li>
              <li>
                <a href="/metodologia" class="text-blue-100 hover:text-[#ea384c] transition-colors duration-200 text-sm">
                  Metodologia
                </a>
              </li>
              <li>
                <a href="/matriculas" class="text-blue-100 hover:text-[#ea384c] transition-colors duration-200 text-sm">
                  Matrículas
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-bold text-sm uppercase tracking-wider text-[#ea384c] mb-4">
              Contato
            </h4>
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-3 text-blue-100 flex-shrink-0 mt-0.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span class="text-blue-100 text-sm">
                  Av. Principal, 1234 - Cidade, Estado
                </span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-3 text-blue-100 flex-shrink-0 mt-0.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span class="text-blue-100 text-sm">
                  (11) 9999-9999
                </span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-3 text-blue-100 flex-shrink-0 mt-0.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span class="text-blue-100 text-sm">
                  contato@geracao200.com.br
                </span>
              </li>
            </ul>
            
            <div class="mt-6">
              <h4 class="font-bold text-sm uppercase tracking-wider text-[#ea384c] mb-4">
                Siga-nos
              </h4>
              <div class="flex space-x-4">
                <a href="https://facebook.com" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://instagram.com" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://youtube.com" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-12 pt-8 border-t border-[#1EAEDB] flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-blue-100">
            © ${new Date().getFullYear()} Geração 200. Todos os direitos reservados.
          </p>
          <div class="flex space-x-6">
            <a href="/termos" class="text-blue-100 hover:text-[#ea384c] transition-colors duration-200 text-sm">
              Termos de Uso
            </a>
            <a href="/privacidade" class="text-blue-100 hover:text-[#ea384c] transition-colors duration-200 text-sm">
              Política de Privacidade
            </a>
            <a href="/cookies" class="text-blue-100 hover:text-[#ea384c] transition-colors duration-200 text-sm">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  `
};

customElements.define('app-footer', 
  class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = FooterComponent.template;
    }
  }
);
