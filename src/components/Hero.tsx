import { ArrowRight, MapPin, Home, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-property.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Propiedad de lujo con vista panorámica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-32 lg:pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="font-body text-sm">Tu hogar ideal te espera</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Encuentra el{" "}
            <span className="text-gold">espacio perfecto</span>{" "}
            para tu vida
          </h1>

          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            En DGF Inmobiliaria te acompañamos en cada paso para encontrar la propiedad que se adapte a tus sueños y necesidades.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="gold" size="xl">
              Ver Propiedades
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Agendar Visita
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center sm:text-left">
              <div className="font-display text-3xl md:text-4xl text-gold font-bold">500+</div>
              <div className="font-body text-sm text-primary-foreground/70">Propiedades vendidas</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="font-display text-3xl md:text-4xl text-gold font-bold">15+</div>
              <div className="font-body text-sm text-primary-foreground/70">Años de experiencia</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="font-display text-3xl md:text-4xl text-gold font-bold">98%</div>
              <div className="font-body text-sm text-primary-foreground/70">Clientes satisfechos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Box */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 container mx-auto px-6">
        <div className="bg-background rounded-2xl shadow-lg p-6 md:p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <label className="font-body text-sm text-muted-foreground">Ubicación</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="¿Dónde buscas?"
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-body text-sm text-muted-foreground">Tipo de propiedad</label>
              <div className="relative">
                <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select className="w-full pl-10 pr-4 py-3 border border-border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent appearance-none bg-background">
                  <option>Casa</option>
                  <option>Departamento</option>
                  <option>Oficina</option>
                  <option>Terreno</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-body text-sm text-muted-foreground">Operación</label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select className="w-full pl-10 pr-4 py-3 border border-border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent appearance-none bg-background">
                  <option>Comprar</option>
                  <option>Alquilar</option>
                </select>
              </div>
            </div>
            <Button variant="gold" size="lg" className="w-full">
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
