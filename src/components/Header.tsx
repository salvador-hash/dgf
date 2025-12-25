import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-dgf.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "INICIO", href: "#inicio" },
    { name: "PROYECTOS", href: "#propiedades" },
    { name: "SERVICIOS", href: "#servicios" },
    { name: "NOSOTROS", href: "#nosotros" },
    { name: "CONTACTO", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-elegant py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <div className={`rounded-lg overflow-hidden transition-all duration-300 ${
              isScrolled ? "bg-primary p-2" : "bg-primary p-2"
            }`}>
              <img 
                src={logo} 
                alt="DGF Inmobiliaria" 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-5 py-2 text-xs font-semibold tracking-widest transition-all duration-300 ${
                  isScrolled 
                    ? "text-foreground hover:text-primary" 
                    : "text-white hover:text-primary"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="orange" size="default">
              Cotizar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? "text-foreground" 
                : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-luxury transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground text-sm font-semibold tracking-widest py-3 px-4 hover:bg-secondary hover:text-primary transition-all duration-300 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <Button variant="orange" size="lg" className="mt-4">
            Cotizar
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;