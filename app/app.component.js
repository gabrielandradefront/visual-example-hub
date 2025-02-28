
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component.js';
import { FooterComponent } from './components/footer.component.js';

export const AppComponent = {
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <div class="flex flex-col min-h-screen">
      <app-navbar></app-navbar>
      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `
};

customElements.define('app-root', 
  class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = AppComponent.template;
    }
  }
);
