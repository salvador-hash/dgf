import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";
import logo from "@/assets/logo-dgf.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Propiedades", href: "#propiedades" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ];

  const propertyTypes = [
    { name: "Casas de Lujo", href: "#" },
    { name: "Departamentos Premium", href: "#" },
    { name: "Penthouses", href: "#" },
    { name: "Oficinas Prime", href: "#" },
    { name: "Terrenos Exclusivos", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-dark via-primary to-purple-light text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
      
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="bg-accent p-3 rounded-xl inline-block mb-6">
              <img src={logo} alt="DGF Inmobiliaria" className="h-12 w-auto" />
            </div>
            <p className="font-body text-primary-foreground/70 mb-8 leading-relaxed">
              La inmobiliaria líder del Perú. Transformamos espacios en hogares extraordinarios desde 2009.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-8">Enlaces</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-8">Propiedades</h4>
            <ul className="space-y-4">
              {propertyTypes.map((type) => (
                <li key={type.name}>
                  <a
                    href={type.href}
                    className="font-body text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-300" />
                    {type.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-8">Contacto</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span className="font-body text-primary-foreground/70">
                  Av. Javier Prado Este 1234, San Isidro, Lima
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <a
                  href="tel:+51999999999"
                  className="font-body text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  +51 999 999 999
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <a
                  href="mailto:info@dgfinmobiliaria.com"
                  className="font-body text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  info@dgfinmobiliaria.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-primary-foreground/50 text-sm text-center md:text-left">
            © {currentYear} dgf. Inmobiliaria. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="font-body text-primary-foreground/50 text-sm hover:text-accent transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="font-body text-primary-foreground/50 text-sm hover:text-accent transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-accent rounded-xl shadow-glow-orange flex items-center justify-center hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-6 h-6 text-accent-foreground group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;
