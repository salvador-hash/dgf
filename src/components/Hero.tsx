import { ArrowRight, MapPin, Home, Building, Sparkles, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-property.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Propiedad de lujo con vista panorámica"
          className="w-full h-full object-cover scale-105"
        />
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-dark/95 via-primary/85 to-purple-light/70" />
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-purple-glow/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Premium Badge - Floating */}
      <div className="absolute top-32 right-10 lg:right-20 hidden lg:block animate-float">
        <div className="glass rounded-2xl p-6 text-center">
          <Award className="w-10 h-10 text-accent mx-auto mb-2" />
          <div className="font-display text-2xl font-bold text-primary-foreground">#1</div>
          <div className="font-body text-xs text-primary-foreground/70">Inmobiliaria Premium</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-40 lg:pt-48 pb-32">
        <div className="max-w-4xl">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-8 animate-fade-up">
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <span className="font-body text-sm font-semibold text-primary-foreground tracking-wide">
              LA INMOBILIARIA MÁS EXCLUSIVA DEL PERÚ
            </span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-accent fill-accent" />
              ))}
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-8xl text-primary-foreground leading-[1.1] mb-8 animate-fade-up delay-100">
            Donde tus
            <span className="block text-accent">sueños</span>
            se hacen realidad
          </h1>

          {/* Subtitle */}
          <p className="font-body text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed animate-fade-up delay-200">
            En <span className="text-accent font-bold">dgf.</span> inmobiliaria transformamos espacios en hogares extraordinarios. 
            Experiencia premium y resultados excepcionales.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up delay-300">
            <Button variant="accent" size="xl" className="group">
              Ver Propiedades Premium
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Agendar Visita VIP
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 animate-fade-up delay-400">
            {[
              { value: "500+", label: "Propiedades vendidas" },
              { value: "15+", label: "Años de excelencia" },
              { value: "98%", label: "Clientes satisfechos" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left group">
                <div className="font-display text-4xl md:text-5xl lg:text-6xl text-accent font-bold mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="font-body text-sm md:text-base text-primary-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Search Box */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 container mx-auto px-6">
        <div className="bg-background rounded-3xl shadow-luxury p-8 md:p-10 max-w-5xl mx-auto border border-border/50">
          {/* Search Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-light rounded-xl flex items-center justify-center">
              <Home className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">Encuentra tu propiedad ideal</h3>
              <p className="font-body text-sm text-muted-foreground">Busca entre +200 propiedades exclusivas</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <label className="font-body text-sm text-muted-foreground font-medium">Ubicación</label>
              <div className="relative group">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="¿Dónde buscas?"
                  className="w-full pl-12 pr-4 py-4 border-2 border-border rounded-xl font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all bg-background"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-body text-sm text-muted-foreground font-medium">Tipo</label>
              <div className="relative group">
                <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select className="w-full pl-12 pr-4 py-4 border-2 border-border rounded-xl font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent appearance-none bg-background cursor-pointer">
                  <option>Casa</option>
                  <option>Departamento</option>
                  <option>Penthouse</option>
                  <option>Terreno</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-body text-sm text-muted-foreground font-medium">Operación</label>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select className="w-full pl-12 pr-4 py-4 border-2 border-border rounded-xl font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent appearance-none bg-background cursor-pointer">
                  <option>Comprar</option>
                  <option>Alquilar</option>
                </select>
              </div>
            </div>
            <Button variant="accent" size="lg" className="w-full h-[58px]">
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
