import { Check, Award, Users, Building2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Trophy, value: "15+", label: "Años de experiencia" },
  { icon: Users, value: "1,200+", label: "Clientes satisfechos" },
  { icon: Building2, value: "500+", label: "Propiedades vendidas" },
  { icon: Award, value: "98%", label: "Satisfacción" },
];

const benefits = [
  "Equipo de profesionales certificados",
  "Atención personalizada 24/7",
  "Amplia cartera de propiedades",
  "Máxima transparencia en cada operación",
  "Asesoría legal y financiera incluida",
];

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-accent text-accent-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 animate-fade-up">
              Sobre Nosotros
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-8 animate-fade-up delay-100">
              SOMOS TU MEJOR
              <span className="block text-primary">OPCIÓN INMOBILIARIA</span>
            </h2>

            <p className="text-lg text-accent-foreground/80 mb-10 leading-relaxed animate-fade-up delay-200">
              En DGF Inmobiliaria nos especializamos en conectar personas con su hogar ideal. 
              Con más de 15 años de experiencia, somos referentes en el mercado inmobiliario peruano.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li 
                  key={benefit} 
                  className="flex items-center gap-4 animate-fade-up"
                  style={{ animationDelay: `${300 + index * 80}ms` }}
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-accent-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="orange" size="lg" className="animate-fade-up" style={{ animationDelay: "700ms" }}>
              Conocer Más
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-navy-light rounded-lg p-8 text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl text-primary font-bold mb-2">
                  {stat.value}
                </div>
                <p className="text-accent-foreground/70 text-sm">
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