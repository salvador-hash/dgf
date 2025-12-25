import { Search, MapPin, Home, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-accent overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-32 pb-48">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.1] mb-8 animate-fade-up tracking-tight">
            ENCUENTRA TU
            <span className="block text-primary mt-2">HOGAR IDEAL</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-16 animate-fade-up delay-100 font-light">
            Descubre los mejores proyectos inmobiliarios en Lima y todo el Perú.
            Departamentos, casas y oficinas de primer nivel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-200">
            <Button variant="teal" size="xl">
              Ver Proyectos
            </Button>
            <Button variant="white-outline" size="xl">
              Contactar Asesor
            </Button>
          </div>
        </div>
      </div>

      {/* Search Box */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 container mx-auto px-6 z-10">
        <div className="bg-white rounded-lg shadow-luxury p-6 md:p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Location */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Ubicación
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="¿Dónde buscas?"
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
              </div>
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Tipo
              </label>
              <div className="relative">
                <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select className="w-full pl-10 pr-10 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary appearance-none bg-white cursor-pointer">
                  <option>Departamento</option>
                  <option>Casa</option>
                  <option>Oficina</option>
                  <option>Terreno</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Operation */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Operación
              </label>
              <div className="relative">
                <select className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary appearance-none bg-white cursor-pointer">
                  <option>Comprar</option>
                  <option>Alquilar</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Search Button */}
            <Button variant="teal" size="lg" className="w-full h-[46px]">
              <Search className="w-5 h-5" />
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;