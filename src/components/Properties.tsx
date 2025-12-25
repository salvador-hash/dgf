import { MapPin, Bed, Bath, Square, ArrowRight, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Villa de Playa Exclusiva",
    location: "Asia, Lima",
    price: "$850,000",
    beds: 4,
    baths: 3,
    area: 320,
    tag: "Premium",
    featured: true,
  },
  {
    id: 2,
    image: property2,
    title: "Penthouse con Vista 360°",
    location: "San Isidro, Lima",
    price: "$1,200,000",
    beds: 3,
    baths: 3,
    area: 250,
    tag: "Nuevo",
    featured: false,
  },
  {
    id: 3,
    image: property3,
    title: "Residencia Moderna de Lujo",
    location: "La Molina, Lima",
    price: "$650,000",
    beds: 5,
    baths: 4,
    area: 400,
    tag: "Exclusivo",
    featured: false,
  },
];

const Properties = () => {
  return (
    <section id="propiedades" className="py-40 bg-secondary relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2.5 mb-6 animate-fade-up">
            <Crown className="w-5 h-5 text-primary" />
            <span className="font-body text-sm text-primary font-bold tracking-wider uppercase">
              Colección Exclusiva
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6 animate-fade-up delay-100">
            Propiedades que
            <span className="text-gradient-primary"> inspiran</span>
          </h2>
          <p className="font-body text-muted-foreground text-xl animate-fade-up delay-200">
            Descubre nuestra selección curada de las propiedades más exclusivas del mercado peruano.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <article
              key={property.id}
              className={`group bg-background rounded-3xl overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-700 animate-fade-up ${
                property.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-body text-sm font-bold ${
                    property.tag === "Premium" 
                      ? "bg-gradient-to-r from-orange to-orange-light text-accent-foreground" 
                      : "bg-primary text-primary-foreground"
                  }`}>
                    {property.tag === "Premium" && <Sparkles className="w-4 h-4" />}
                    {property.tag}
                  </span>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-4 right-4">
                  <span className="bg-background/95 backdrop-blur-md text-foreground px-5 py-3 rounded-xl font-display text-2xl font-bold shadow-elegant">
                    {property.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="font-body">{property.location}</span>
                </div>

                {/* Features */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                    <Bed className="w-5 h-5" />
                    <span className="font-body font-medium">{property.beds} Hab.</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                    <Bath className="w-5 h-5" />
                    <span className="font-body font-medium">{property.baths} Baños</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                    <Square className="w-5 h-5" />
                    <span className="font-body font-medium">{property.area} m²</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-up">
          <Button variant="premium" size="xl" className="group">
            Ver Todas las Propiedades
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Properties;
