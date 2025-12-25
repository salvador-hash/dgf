import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
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
    { name: "Inicio", href: "#inicio" },
    { name: "Propiedades", href: "#propiedades" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      {/* Premium Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-purple-dark via-primary to-purple-light text-primary-foreground py-2.5">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-8">
            <a href="tel:+51999999999" className="flex items-center gap-2 hover:text-accent transition-all duration-300 group">
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-medium">+51 999 999 999</span>
            </a>
            <a href="mailto:info@dgfinmobiliaria.com" className="flex items-center gap-2 hover:text-accent transition-all duration-300 group">
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-medium">info@dgfinmobiliaria.com</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-primary-foreground/70">Síguenos:</span>
            <a href="#" className="hover:text-accent transition-colors font-medium">Facebook</a>
            <a href="#" className="hover:text-accent transition-colors font-medium">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors font-medium">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-0 lg:top-[52px] left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/98 backdrop-blur-xl shadow-luxury lg:top-0"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3 group">
              <div className={`relative overflow-hidden rounded-xl transition-all duration-500 ${
                isScrolled ? "bg-accent p-2" : "bg-accent p-2"
              }`}>
                <img 
                  src={logo} 
                  alt="DGF Inmobiliaria" 
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-5 py-2.5 font-body text-sm font-semibold transition-all duration-300 rounded-lg group ${
                    isScrolled 
                      ? "text-foreground hover:text-primary hover:bg-secondary" 
                      : "text-primary-foreground hover:text-accent hover:bg-white/10"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-1 left-5 right-5 h-0.5 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    isScrolled ? "bg-primary" : "bg-accent"
                  }`} />
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="accent" size="lg" className="group">
                Cotizar Ahora
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? "text-foreground bg-secondary hover:bg-primary hover:text-primary-foreground" 
                  : "text-primary-foreground bg-white/10 hover:bg-white/20"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl shadow-luxury transition-all duration-500 ${
            isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-body text-foreground text-lg font-semibold py-4 px-4 rounded-xl hover:bg-secondary hover:text-primary transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
            <Button variant="accent" size="xl" className="mt-6">
              Cotizar Ahora
              <ChevronRight className="w-5 h-5" />
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
