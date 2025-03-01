
// Importando os componentes necessários
import { NavbarComponent } from './components/navbar.component.js';
import { FooterComponent } from './components/footer.component.js';

// Definindo o componente principal da aplicação
export const AppComponent = {
  selector: 'app-root',
  template: `
    <div class="flex flex-col min-h-screen">
      <app-navbar></app-navbar>
      <main class="flex-grow">
        <div id="router-outlet"></div>
      </main>
      <app-footer></app-footer>
    </div>
  `
};

// Registrando o componente como um web component
customElements.define('app-root', 
  class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = AppComponent.template;
    }
  }
);
