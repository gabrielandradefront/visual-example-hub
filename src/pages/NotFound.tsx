
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center bg-white px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-8xl font-bold text-gray-900 mb-4 animate-fade-in">404</h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{animationDelay: '100ms'}}>
            Ops! A página que você procura parece não existir.
          </p>
          <div className="animate-fade-in" style={{animationDelay: '200ms'}}>
            <Button 
              onClick={() => navigate("/")}
              size="lg"
            >
              Voltar para a página inicial
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
