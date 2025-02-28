
import { routes } from './app.routes.js';

// Simple router implementation for vanilla JS
class Router {
  constructor(routes) {
    this.routes = routes;
    this.init();
  }

  init() {
    // Handle initial route
    this.handleRouteChange();
    
    // Listen for popstate event (browser back/forward)
    window.addEventListener('popstate', (e) => this.handleRouteChange());
    
    // Intercept link clicks to use history API
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && e.target.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        window.history.pushState({}, '', href);
        this.handleRouteChange();
      }
    });
  }

  handleRouteChange() {
    const path = window.location.pathname || '/';
    const route = this.findMatchingRoute(path);
    
    if (route) {
      this.renderRoute(route);
    }
  }

  findMatchingRoute(path) {
    // Find exact match first
    let route = this.routes.find(r => r.path === path);
    
    // If no exact match, check for root path
    if (!route && path === '/') {
      route = this.routes.find(r => r.path === '');
    }
    
    // If still no match, use wildcard
    if (!route) {
      route = this.routes.find(r => r.path === '**');
    }
    
    return route;
  }

  renderRoute(route) {
    const routeElement = document.createElement(route.component.selector);
    const outlet = document.querySelector('router-outlet');
    
    if (outlet) {
      // Clear current content
      outlet.innerHTML = '';
      
      // Add new component
      outlet.appendChild(routeElement);
    }
  }
}

// Initialize router when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  customElements.define('router-outlet', class extends HTMLElement {});
  new Router(routes);
});

export const router = {
  navigate(path) {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  }
};
