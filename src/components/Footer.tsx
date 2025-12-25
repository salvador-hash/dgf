import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Propiedades", href: "#propiedades" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ];

  const propertyTypes = [
    { name: "Casas", href: "#" },
    { name: "Departamentos", href: "#" },
    { name: "Oficinas", href: "#" },
    { name: "Terrenos", href: "#" },
    { name: "Locales Comerciales", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display text-2xl font-bold mb-4">
              DGF <span className="text-gold">Inmobiliaria</span>
            </div>
            <p className="font-body text-primary-foreground/70 text-sm mb-6">
              Tu socio de confianza en bienes raíces. Hacemos realidad el sueño de tu hogar ideal.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Propiedades</h4>
            <ul className="space-y-3">
              {propertyTypes.map((type) => (
                <li key={type.name}>
                  <a
                    href={type.href}
                    className="font-body text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {type.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="font-body text-primary-foreground/70 text-sm">
                  Av. Javier Prado Este 1234, San Isidro, Lima
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+51999999999"
                  className="font-body text-primary-foreground/70 text-sm hover:text-gold transition-colors"
                >
                  +51 999 999 999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@dgfinmobiliaria.com"
                  className="font-body text-primary-foreground/70 text-sm hover:text-gold transition-colors"
                >
                  info@dgfinmobiliaria.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-primary-foreground/50 text-sm">
              © {currentYear} DGF Inmobiliaria. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-body text-primary-foreground/50 text-sm hover:text-gold transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="font-body text-primary-foreground/50 text-sm hover:text-gold transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
