
// Inicialização do módulo Angular principal
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component.js';

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
