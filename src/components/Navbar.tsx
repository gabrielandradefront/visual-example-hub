
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="layout flex items-center justify-between">
        <Link 
          to="/" 
          className="font-bold text-2xl transition-colors duration-200 text-[#0c2340] hover:text-[#c8a035]"
        >
          ExemplosVisuais
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Início</NavLink>
          <NavLink to="/componentes">Componentes</NavLink>
          <NavLink to="/inspiracoes">Inspirações</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <Button
            variant="primary"
            size="sm"
            className="ml-4 rounded-full"
            onClick={() => {}}
          >
            Contato
          </Button>
        </nav>

        <button 
          className="md:hidden flex items-center"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden ${
        mobileMenuOpen ? "max-h-64" : "max-h-0"
      }`}>
        <div className="p-4 flex flex-col space-y-4">
          <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Início</MobileNavLink>
          <MobileNavLink to="/componentes" onClick={() => setMobileMenuOpen(false)}>Componentes</MobileNavLink>
          <MobileNavLink to="/inspiracoes" onClick={() => setMobileMenuOpen(false)}>Inspirações</MobileNavLink>
          <MobileNavLink to="/sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</MobileNavLink>
          <Button
            variant="primary"
            size="sm"
            className="w-full rounded-md"
            onClick={() => {
              setMobileMenuOpen(false);
            }}
          >
            Contato
          </Button>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link
      to={to}
      className="relative py-1 text-sm font-bold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#c8a035] after:transition-all after:duration-300 hover:text-[#c8a035] hover:after:w-full"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => {
  return (
    <Link
      to={to}
      className="text-base font-medium py-2 border-b border-gray-100 hover:text-[#c8a035]"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
