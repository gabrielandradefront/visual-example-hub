
import { IndexComponent } from './pages/index.component.js';
import { NotFoundComponent } from './pages/not-found.component.js';

export const routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'componentes',
    component: IndexComponent // Placeholder - poderia ser sua própria página
  },
  {
    path: 'inspiracoes',
    component: IndexComponent // Placeholder - poderia ser sua própria página
  },
  {
    path: 'sobre',
    component: IndexComponent // Placeholder - poderia ser sua própria página
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
