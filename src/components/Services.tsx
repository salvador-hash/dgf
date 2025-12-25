import { Home, Key, TrendingUp, FileText, Shield, Users, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Venta de Propiedades",
    description: "Vendemos tu propiedad al mejor precio con estrategias de marketing premium y exclusivas.",
  },
  {
    icon: Key,
    title: "Alquiler Premium",
    description: "Conectamos propietarios con inquilinos de alto perfil para garantizar tranquilidad.",
  },
  {
    icon: TrendingUp,
    title: "Inversiones",
    description: "Identificamos oportunidades de inversión con los mejores retornos del mercado.",
  },
  {
    icon: FileText,
    title: "Asesoría Legal",
    description: "Acompañamiento legal completo con los mejores abogados especializados.",
  },
  {
    icon: Shield,
    title: "Valuación Profesional",
    description: "Valuación precisa basada en análisis de mercado y tendencias actuales.",
  },
  {
    icon: Users,
    title: "Gestión Integral",
    description: "Administración completa de propiedades para maximizar su rentabilidad.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-40 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(270 60% 35%) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2.5 mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="font-body text-sm text-accent font-bold tracking-wider uppercase">
                Servicios Premium
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-foreground animate-fade-up delay-100">
              Excelencia en cada
              <span className="block text-gradient-primary">servicio</span>
            </h2>
          </div>
          <p className="font-body text-muted-foreground text-xl leading-relaxed animate-fade-up delay-200">
            Ofrecemos un servicio integral y personalizado de clase mundial. 
            Cada cliente recibe atención exclusiva de nuestro equipo de expertos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-10 rounded-3xl border-2 border-border bg-background hover:border-primary hover:shadow-luxury transition-all duration-700 animate-fade-up cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-purple-light rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-glow-purple transition-all duration-500">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="relative font-display text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="relative font-body text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="relative flex items-center gap-2 text-primary font-body font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span>Conocer más</span>
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
