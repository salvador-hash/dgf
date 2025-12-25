import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Casa de Playa Premium",
    location: "Asia, Lima",
    price: "$850,000",
    beds: 4,
    baths: 3,
    area: 320,
    tag: "Destacado",
  },
  {
    id: 2,
    image: property2,
    title: "Penthouse con Vista Panorámica",
    location: "San Isidro, Lima",
    price: "$1,200,000",
    beds: 3,
    baths: 3,
    area: 250,
    tag: "Nuevo",
  },
  {
    id: 3,
    image: property3,
    title: "Casa Moderna con Piscina",
    location: "La Molina, Lima",
    price: "$650,000",
    beds: 5,
    baths: 4,
    area: 400,
    tag: "Exclusivo",
  },
];

const Properties = () => {
  return (
    <section id="propiedades" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-body text-sm text-gold font-semibold tracking-wider uppercase mb-4">
            Propiedades Destacadas
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Descubre tu próximo <span className="text-gold">hogar ideal</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Explora nuestra selección exclusiva de propiedades premium en las mejores ubicaciones.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <article
              key={property.id}
              className="group bg-background rounded-2xl overflow-hidden shadow-elegant hover:shadow-lg transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-primary px-4 py-1.5 rounded-full font-body text-sm font-medium">
                    {property.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-lg font-display text-xl font-bold">
                    {property.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-gold transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="font-body text-sm">{property.location}</span>
                </div>

                {/* Features */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Bed className="w-4 h-4" />
                    <span className="font-body text-sm">{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Bath className="w-4 h-4" />
                    <span className="font-body text-sm">{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Square className="w-4 h-4" />
                    <span className="font-body text-sm">{property.area} m²</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="premium-outline" size="lg">
            Ver Todas las Propiedades
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Properties;
