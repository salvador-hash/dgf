import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Square, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const projects = [
  {
    id: 1,
    image: property1,
    title: "Residencial Las Palmas",
    location: "Asia, Lima",
    price: "Desde $850,000",
    beds: 4,
    baths: 3,
    area: 320,
    status: "En venta",
  },
  {
    id: 2,
    image: property2,
    title: "Torre Diamante",
    location: "San Isidro, Lima",
    price: "Desde $1,200,000",
    beds: 3,
    baths: 3,
    area: 250,
    status: "Entrega inmediata",
  },
  {
    id: 3,
    image: property3,
    title: "Parque Central",
    location: "La Molina, Lima",
    price: "Desde $650,000",
    beds: 5,
    baths: 4,
    area: 400,
    status: "Pre-venta",
  },
  {
    id: 4,
    image: property1,
    title: "Vista Mar Residence",
    location: "Miraflores, Lima",
    price: "Desde $980,000",
    beds: 3,
    baths: 2,
    area: 280,
    status: "En construcción",
  },
  {
    id: 5,
    image: property2,
    title: "Bosques del Norte",
    location: "Surco, Lima",
    price: "Desde $720,000",
    beds: 4,
    baths: 3,
    area: 350,
    status: "Pre-venta",
  },
  {
    id: 6,
    image: property3,
    title: "Costa Verde Premium",
    location: "Barranco, Lima",
    price: "Desde $1,500,000",
    beds: 5,
    baths: 4,
    area: 450,
    status: "Entrega inmediata",
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Proyectos | DGF Inmobiliaria</title>
        <meta
          name="description"
          content="Descubre nuestra selección de proyectos inmobiliarios premium en Lima y todo el Perú. Departamentos, casas y oficinas de primer nivel."
        />
      </Helmet>
      <Header />
      <main className="pt-32 pb-20 bg-secondary min-h-screen">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 animate-fade-up">
              Todos los Proyectos
            </p>
            <h1 className="text-3xl md:text-5xl text-foreground font-bold mb-6 animate-fade-up delay-100">
              NUESTROS PROYECTOS
            </h1>
            <p className="text-muted-foreground text-lg animate-fade-up delay-200">
              Descubre nuestra selección de proyectos inmobiliarios premium en las mejores ubicaciones de Lima y todo el Perú.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded text-xs font-semibold uppercase tracking-wider">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Location */}
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl text-foreground font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>

                  {/* Price */}
                  <p className="text-primary font-bold text-lg mb-4">
                    {project.price}
                  </p>

                  {/* Features */}
                  <div className="flex items-center gap-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm">{project.beds} Hab.</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Bath className="w-4 h-4" />
                      <span className="text-sm">{project.baths} Baños</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Square className="w-4 h-4" />
                      <span className="text-sm">{project.area} m²</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Back Button */}
          <div className="text-center mt-12 animate-fade-up">
            <Link to="/">
              <Button variant="outline" size="lg" className="group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
