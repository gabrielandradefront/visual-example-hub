
// Importação de componentes
import { AppComponent } from './app/app.component.js';

// Importando os components das páginas
import { IndexComponent } from './app/pages/index.component.js';
import { ButtonComponent } from './app/components/button.component.js';
import { SobreComponent } from './app/pages/sobre.component.js';
import { CursosComponent } from './app/pages/cursos.component.js';
import { MetodologiaComponent } from './app/pages/metodologia.component.js';
import { DepoimentosComponent } from './app/pages/depoimentos.component.js';

// Função para renderizar a página correta com base na URL
function renderPage() {
  const routerOutlet = document.getElementById('router-outlet');
  if (!routerOutlet) return;
  
  const path = window.location.pathname;
  
  if (path === '/' || path === '/index.html') {
    routerOutlet.innerHTML = '<app-index></app-index>';
  } else if (path === '/sobre') {
    routerOutlet.innerHTML = '<app-sobre></app-sobre>';
  } else if (path === '/cursos') {
    routerOutlet.innerHTML = '<app-cursos></app-cursos>';
  } else if (path === '/metodologia') {
    routerOutlet.innerHTML = '<app-metodologia></app-metodologia>';
  } else if (path === '/depoimentos') {
    routerOutlet.innerHTML = '<app-depoimentos></app-depoimentos>';
  } else {
    routerOutlet.innerHTML = '<div class="py-20 text-center"><h1>Página em Construção</h1><p>Esta página será implementada em breve!</p></div>';
  }
}

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', () => {
  renderPage();
  
  // Adiciona efeito de revelação no scroll para todos os elementos
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
});

// Navegação SPA (Single Page Application)
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a');
  if (anchor && anchor.href.includes(window.location.origin) && !anchor.hasAttribute('target')) {
    e.preventDefault();
    window.history.pushState({}, '', anchor.href);
    renderPage();
  }
});

// Lidar com os botões de voltar/avançar do navegador
window.addEventListener('popstate', renderPage);
