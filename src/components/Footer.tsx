
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="layout py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-medium">
              ExemplosVisuais
            </Link>
            <p className="mt-4 text-gray-600 text-sm max-w-md">
              Uma coleção de exemplos visuais de alta qualidade para inspirar e auxiliar no desenvolvimento de interfaces modernas.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <FooterLink to="/">Início</FooterLink>
              <FooterLink to="/componentes">Componentes</FooterLink>
              <FooterLink to="/inspiracoes">Inspirações</FooterLink>
              <FooterLink to="/sobre">Sobre</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <FooterLink to="/termos">Termos de Uso</FooterLink>
              <FooterLink to="/privacidade">Privacidade</FooterLink>
              <FooterLink to="/cookies">Cookies</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ExemplosVisuais. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <SocialLink href="https://twitter.com" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </SocialLink>
            <SocialLink href="https://github.com" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </SocialLink>
            <SocialLink href="https://dribbble.com" aria-label="Dribbble">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.206c.34.007 4.121.064 8.07-1.118.21.408.41.801.615 1.212-1.4.416-2.65.952-3.77 1.608-2.32 1.351-3.584 2.767-3.76 2.993a8.496 8.496 0 01-1.155-4.489zm6.644 6.646c-.834-.277-1.6-.673-2.273-1.167.146-.158 1.304-1.43 3.413-2.48.912 2.48 1.293 4.557 1.387 5.152a8.596 8.596 0 01-2.527-1.505zm4.303-1.289c-.068-.45-.39-2.603-1.2-5.122 2.646-.39 4.973.242 5.247.308a8.562 8.562 0 01-4.047 4.814z" clipRule="evenodd"></path>
              </svg>
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link 
        to={to} 
        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
      >
        {children}
      </Link>
    </li>
  );
};

const SocialLink = ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a 
      href={href} 
      className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

export default Footer;
