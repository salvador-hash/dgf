import { Home, Key, TrendingUp, FileText, Shield, Users } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Venta de Inmuebles",
    description: "Comercializamos propiedades al mejor precio del mercado con estrategias efectivas.",
  },
  {
    icon: Key,
    title: "Alquiler",
    description: "Conectamos propietarios con inquilinos calificados de manera rápida y segura.",
  },
  {
    icon: TrendingUp,
    title: "Inversiones",
    description: "Identificamos oportunidades de inversión con los mejores retornos.",
  },
  {
    icon: FileText,
    title: "Asesoría Legal",
    description: "Acompañamiento legal completo en todo el proceso de compra-venta.",
  },
  {
    icon: Shield,
    title: "Valuación",
    description: "Valuación profesional basada en análisis de mercado actualizado.",
  },
  {
    icon: Users,
    title: "Administración",
    description: "Gestión integral de propiedades para maximizar rentabilidad.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 animate-fade-up">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl md:text-5xl text-foreground font-bold mb-6 animate-fade-up delay-100">
            ¿QUÉ HACEMOS?
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-up delay-200">
            Ofrecemos un servicio integral para todas tus necesidades inmobiliarias.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-lg border border-border bg-white hover:border-primary hover:shadow-elegant transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-lg text-foreground font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;