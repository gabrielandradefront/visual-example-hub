
import { AppComponent } from './app.component.js';
import './app.router.js';
import './components/button.component.js';
import './components/card.component.js';
import './components/feature.component.js';
import './components/footer.component.js';
import './components/hero.component.js';
import './components/navbar.component.js';
import './pages/index.component.js';
import './pages/not-found.component.js';

// Export as a module for simplification
export const AppModule = {
  bootstrap: () => {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('Angular-like application bootstrapped');
    });
  }
};

// Initialize the app
AppModule.bootstrap();
