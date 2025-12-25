import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-dgf.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Proyectos", href: "#propiedades" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ];

  const propertyTypes = [
    { name: "Departamentos", href: "#" },
    { name: "Casas", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/dgfinmobiliaria.peru/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/dgf.inmobiliaria/", label: "Instagram" },
    { icon: Linkedin, href: "https://pe.linkedin.com/company/dgfinmobiliaria", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="bg-primary p-2 rounded-lg inline-block mb-6">
              <img src={logo} alt="DGF Inmobiliaria" className="h-10 w-auto" />
            </div>
            <p className="text-accent-foreground/70 mb-6 text-sm leading-relaxed">
              Tu socio estratégico en el mercado inmobiliario peruano. Más de 15 años creando hogares.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-navy-light rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Enlaces</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-accent-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Propiedades</h4>
            <ul className="space-y-3">
              {propertyTypes.map((type) => (
                <li key={type.name}>
                  <a
                    href={type.href}
                    className="text-accent-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {type.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-accent-foreground/70 text-sm">
                  Av. Javier Prado Este 1234, San Isidro, Lima
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+51999999999"
                  className="text-accent-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  +51 999 999 999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@dgfinmobiliaria.com"
                  className="text-accent-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  info@dgfinmobiliaria.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-accent-foreground/50 text-xs text-center md:text-left">
              © {currentYear} DGF Inmobiliaria. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/terminos" className="text-accent-foreground/50 text-xs hover:text-primary transition-colors">
                Términos y Condiciones
              </Link>
              <Link to="/privacidad" className="text-accent-foreground/50 text-xs hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-orange rounded-lg shadow-lg flex items-center justify-center hover:bg-orange-dark transition-all duration-300 z-50"
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-5 h-5 text-primary-foreground" />
      </button>
    </footer>
  );
};

export default Footer;