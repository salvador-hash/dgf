import { Link } from "react-router-dom";
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
      <div className="relative container mx-auto px-6 pt-32 pb-24">
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
            <Link to="/proyectos">
              <Button variant="orange" size="xl">
                Ver Proyectos
              </Button>
            </Link>
            <a href="#contacto">
              <Button variant="white-outline" size="xl">
                Contactar Asesor
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;