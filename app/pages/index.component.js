
import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero.component.js';
import { FeatureComponent } from '../components/feature.component.js';
import { CardComponent } from '../components/card.component.js';

export const IndexComponent = {
  selector: 'app-index',
  standalone: true,
  imports: [HeroComponent, FeatureComponent, CardComponent],
  template: `
    <div>
      <app-hero 
        title="Exemplos Visuais para Inspirar Seus Projetos"
        subtitle="Uma coleção cuidadosamente selecionada de interfaces e componentes para impulsionar sua criatividade"
        ctaText="Explorar Componentes">
      </app-hero>

      <section class="py-16 px-4 bg-gray-50">
        <div class="layout">
          <h2 class="text-3xl font-bold text-center mb-12 text-[#33C3F0]">Nossos Recursos</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <app-feature 
              title="Design Moderno" 
              description="Interfaces contemporâneas que seguem as mais recentes tendências de design e usabilidade.">
            </app-feature>
            
            <app-feature 
              title="Código Limpo" 
              description="Implementações eficientes e bem organizadas, seguindo as melhores práticas de desenvolvimento.">
            </app-feature>
            
            <app-feature 
              title="Responsivo" 
              description="Todos os componentes são totalmente adaptáveis a qualquer tamanho de tela ou dispositivo.">
            </app-feature>
            
            <app-feature 
              title="Acessibilidade" 
              description="Interfaces projetadas pensando na inclusão, seguindo as diretrizes WCAG.">
            </app-feature>
            
            <app-feature 
              title="Personalizável" 
              description="Componentes flexíveis que podem ser facilmente adaptados ao estilo da sua marca.">
            </app-feature>
            
            <app-feature 
              title="Documentação" 
              description="Guias detalhados e exemplos práticos para implementação rápida e eficiente.">
            </app-feature>
          </div>
        </div>
      </section>

      <section class="py-16 px-4">
        <div class="layout">
          <h2 class="text-3xl font-bold text-center mb-4 text-[#33C3F0]">Inspirações Populares</h2>
          <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Explore algumas das nossas inspirações mais populares e descubra como elas podem transformar seus projetos
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <app-card 
              title="Dashboard Analítico" 
              description="Um painel administrativo moderno com visualizações de dados interativas e insights acionáveis."
              imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=60"
              category="Dashboard">
            </app-card>
            
            <app-card 
              title="E-commerce Minimalista" 
              description="Uma experiência de compra simplificada com foco em conversão e exibição de produtos."
              imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=60"
              category="E-commerce">
            </app-card>
            
            <app-card 
              title="Aplicativo de Finanças" 
              description="Interface para gerenciamento financeiro pessoal com visualizações claras de transações e orçamentos."
              imageUrl="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=60"
              category="Fintech">
            </app-card>
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
