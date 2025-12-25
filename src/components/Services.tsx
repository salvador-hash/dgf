import { Home, Key, TrendingUp, FileText, Shield, Users } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Venta de Propiedades",
    description: "Te ayudamos a vender tu propiedad al mejor precio del mercado con estrategias de marketing efectivas.",
  },
  {
    icon: Key,
    title: "Alquiler",
    description: "Encuentra el inquilino ideal o el espacio perfecto para alquilar con nuestra asesoría especializada.",
  },
  {
    icon: TrendingUp,
    title: "Inversiones",
    description: "Identificamos las mejores oportunidades de inversión inmobiliaria para maximizar tu retorno.",
  },
  {
    icon: FileText,
    title: "Asesoría Legal",
    description: "Acompañamiento legal completo en todas las transacciones para garantizar tu tranquilidad.",
  },
  {
    icon: Shield,
    title: "Valuación",
    description: "Valuación profesional de propiedades basada en análisis de mercado actualizado.",
  },
  {
    icon: Users,
    title: "Administración",
    description: "Gestión integral de propiedades para maximizar su valor y rentabilidad a largo plazo.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block font-body text-sm text-gold font-semibold tracking-wider uppercase mb-4">
              Nuestros Servicios
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
              Soluciones inmobiliarias{" "}
              <span className="text-gold">a tu medida</span>
            </h2>
          </div>
          <p className="font-body text-muted-foreground text-lg">
            Ofrecemos un servicio integral y personalizado para cubrir todas tus necesidades inmobiliarias, desde la compra hasta la administración de propiedades.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl border border-border bg-background hover:bg-secondary hover:border-gold/30 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground">
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
