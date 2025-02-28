
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Button from "../components/Button";
import Card from "../components/Card";
import Feature from "../components/Feature";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simular carregamento para demonstrar animações
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleExplore = () => {
    toast.success("Explorando exemplos visuais!");
    const examplesSection = document.getElementById("examples");
    examplesSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Features com ícones
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
        </svg>
      ),
      title: "Design Elegante",
      description: "Interfaces limpas e minimalistas que priorizam a experiência do usuário e tornam a navegação intuitiva."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
        </svg>
      ),
      title: "Componentes Modernos",
      description: "Elementos de interface que seguem as últimas tendências e práticas de design para criar experiências digitais cativantes."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Transições Suaves",
      description: "Animações cuidadosamente elaboradas para tornar a navegação fluida e agradável, melhorando a satisfação do usuário."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>
      ),
      title: "Responsividade",
      description: "Adaptação perfeita para todos os tamanhos de tela, de smartphones a desktops, garantindo uma experiência consistente."
    }
  ];

  // Cards de exemplo
  const examples = [
    {
      title: "Cartões de Produto",
      description: "Uma coleção de diferentes layouts de cartões de produto para e-commerce.",
      imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80",
      category: "E-commerce"
    },
    {
      title: "Dashboards",
      description: "Exemplos de painéis de controle com visualizações de dados elegantes.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Analytics"
    },
    {
      title: "Formulários",
      description: "Formulários intuitivos com validação e feedback visual em tempo real.",
      imageUrl: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      category: "UI/UX"
    },
    {
      title: "Navegação Mobile",
      description: "Padrões de navegação otimizados para experiências móveis excepcionais.",
      imageUrl: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1316&q=80",
      category: "Mobile"
    },
  ];

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <SmoothScroll />
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20">
          <Hero
            title="Exemplos Visuais para Interfaces Modernas"
            subtitle="Uma biblioteca curada de componentes, layouts e padrões de design para inspirar suas próximas criações digitais."
            ctaText="Explorar Exemplos"
            onCtaClick={handleExplore}
          />
        </section>

        {/* Features Section */}
        <section className="py-20 bg-blue-50">
          <div className="layout">
            <div className="max-w-3xl mx-auto text-center mb-16 scroll-reveal">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Design que Eleva a Experiência</h2>
              <p className="text-gray-600">
                Nossos exemplos são cuidadosamente elaborados seguindo princípios de design que combinam estética e funcionalidade.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                  <Feature 
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section id="examples" className="py-20">
          <div className="layout">
            <div className="max-w-3xl mx-auto text-center mb-16 scroll-reveal">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Explore Nossa Coleção</h2>
              <p className="text-gray-600">
                Descubra exemplos visuais que podem inspirar seu próximo projeto digital.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {examples.map((example, index) => (
                <div key={index} className="scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                  <Card 
                    title={example.title}
                    description={example.description}
                    imageUrl={example.imageUrl}
                    category={example.category}
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center scroll-reveal">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                onClick={() => {
                  toast.info("Veja mais exemplos em breve!");
                  // navigate("/componentes");
                }}
              >
                Ver mais exemplos
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="layout">
            <div className="max-w-4xl mx-auto text-center scroll-reveal">
              <span className="text-sm font-bold uppercase tracking-wider text-yellow-400 mb-4 inline-block">
                Comece a criar agora
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Transforme suas ideias em interfaces excepcionais
              </h2>
              <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
                Utilize nossos exemplos visuais como ponto de partida para criar experiências digitais memoráveis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-full font-bold"
                  onClick={() => {
                    toast.success("Você começou sua jornada criativa!");
                    // navigate("/componentes");
                  }}
                >
                  Começar agora
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 rounded-full"
                  onClick={() => {
                    toast.info("Saiba mais sobre nossos recursos!");
                    // navigate("/sobre");
                  }}
                >
                  Saiba mais
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Nova seção */}
        <section className="py-20 bg-gray-50">
          <div className="layout">
            <div className="max-w-3xl mx-auto text-center mb-16 scroll-reveal">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">O que Nossos Usuários Dizem</h2>
              <p className="text-gray-600">
                Veja como nossos exemplos visuais têm ajudado designers e desenvolvedores.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border-2 border-blue-100 shadow-sm scroll-reveal">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500">
                    ★★★★★
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  "Os exemplos visuais me ajudaram a melhorar o design do meu site em questão de horas. O código é limpo e fácil de adaptar."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    M
                  </div>
                  <div className="ml-3">
                    <p className="font-bold text-blue-900">Maria Silva</p>
                    <p className="text-sm text-gray-500">Designer UX</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl border-2 border-blue-100 shadow-sm scroll-reveal" style={{ transitionDelay: "100ms" }}>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500">
                    ★★★★★
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  "A qualidade dos componentes é impressionante. Economizei semanas de trabalho usando estes exemplos como base para meus projetos."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    J
                  </div>
                  <div className="ml-3">
                    <p className="font-bold text-blue-900">João Mendes</p>
                    <p className="text-sm text-gray-500">Desenvolvedor Front-end</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl border-2 border-blue-100 shadow-sm scroll-reveal" style={{ transitionDelay: "200ms" }}>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500">
                    ★★★★★
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  "Desde que comecei a usar estes exemplos, meus clientes ficam muito mais satisfeitos com o resultado final dos projetos."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    A
                  </div>
                  <div className="ml-3">
                    <p className="font-bold text-blue-900">Ana Costa</p>
                    <p className="text-sm text-gray-500">Product Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
