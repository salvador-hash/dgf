import { Check, Award, Users, Building2, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Award, value: "15+", label: "Años de experiencia" },
  { icon: Users, value: "1,200+", label: "Clientes satisfechos" },
  { icon: Building2, value: "500+", label: "Propiedades vendidas" },
  { icon: Handshake, value: "98%", label: "Tasa de satisfacción" },
];

const benefits = [
  "Equipo de profesionales altamente capacitados",
  "Atención personalizada y exclusiva",
  "Amplia cartera de propiedades premium",
  "Transparencia en todas las transacciones",
  "Asesoría legal y financiera incluida",
];

const About = () => {
  return (
    <section id="nosotros" className="py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block font-body text-sm text-gold font-semibold tracking-wider uppercase mb-4">
              Sobre Nosotros
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-6">
              Tu socio de confianza en{" "}
              <span className="text-gold">bienes raíces</span>
            </h2>
            <p className="font-body text-primary-foreground/80 text-lg mb-8">
              En DGF Inmobiliaria nos dedicamos a convertir tus sueños en realidad. Con más de 15 años de experiencia en el mercado inmobiliario, hemos ayudado a cientos de familias a encontrar su hogar ideal.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="font-body text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="gold" size="lg">
              Conoce Más
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-gold/30 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-10 h-10 text-gold mb-4" />
                <div className="font-display text-4xl md:text-5xl text-gold font-bold mb-2">
                  {stat.value}
                </div>
                <p className="font-body text-primary-foreground/70 text-sm">
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
