import { Check, Award, Users, Building2, Handshake, Trophy, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Trophy, value: "15+", label: "Años liderando" },
  { icon: Users, value: "1,200+", label: "Familias felices" },
  { icon: Building2, value: "500+", label: "Propiedades vendidas" },
  { icon: Award, value: "98%", label: "Satisfacción" },
];

const benefits = [
  "Equipo de élite con más de 50 profesionales",
  "Atención VIP personalizada 24/7",
  "Cartera exclusiva de propiedades premium",
  "Máxima transparencia y confidencialidad",
  "Asesoría legal y financiera sin costo adicional",
  "Red de contactos de alto nivel",
];

const About = () => {
  return (
    <section id="nosotros" className="py-40 bg-gradient-to-br from-purple-dark via-primary to-purple-light text-primary-foreground overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-glow/20 rounded-full blur-[150px]" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-8 animate-fade-up">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span className="font-body text-sm font-bold tracking-wider uppercase">
                Los Mejores del Perú
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl mb-8 animate-fade-up delay-100">
              Somos la
              <span className="text-accent"> referencia</span>
              <span className="block">en bienes raíces</span>
            </h2>

            <p className="font-body text-xl text-primary-foreground/80 mb-10 leading-relaxed animate-fade-up delay-200">
              En <span className="text-accent font-bold">dgf.</span> inmobiliaria no solo vendemos propiedades, 
              creamos legados. Con más de 15 años transformando el mercado inmobiliario peruano, 
              somos sinónimo de excelencia y confianza.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-12">
              {benefits.map((benefit, index) => (
                <li 
                  key={benefit} 
                  className="flex items-center gap-4 animate-fade-up"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-glow-orange">
                    <Check className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="font-body text-lg text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="accent" size="xl" className="animate-fade-up" style={{ animationDelay: "900ms" }}>
              Conoce Nuestro Equipo
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass rounded-3xl p-10 text-center hover:bg-white/20 transition-all duration-500 group animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-500">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="font-display text-5xl md:text-6xl text-accent font-bold mb-3 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <p className="font-body text-primary-foreground/70 text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
