import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Términos y Condiciones | DGF Inmobiliaria</title>
        <meta name="description" content="Términos y condiciones de uso del sitio web de DGF Inmobiliaria." />
      </Helmet>
      <Header />
      <main className="pt-32 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Términos y Condiciones
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg">
              Última actualización: Diciembre 2024
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar el sitio web de DGF Inmobiliaria, usted acepta estar sujeto a estos términos y condiciones de uso. Si no está de acuerdo con alguno de estos términos, le rogamos que no utilice nuestro sitio web.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Uso del Sitio Web</h2>
              <p>
                El contenido de este sitio web es únicamente para su información general y uso personal. Está sujeto a cambios sin previo aviso. DGF Inmobiliaria no garantiza que el sitio web esté disponible de manera ininterrumpida o libre de errores.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Propiedad Intelectual</h2>
              <p>
                Todo el contenido incluido en este sitio, como textos, gráficos, logotipos, imágenes y software, es propiedad de DGF Inmobiliaria o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual del Perú.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Información de Propiedades</h2>
              <p>
                La información sobre propiedades, precios y disponibilidad mostrada en este sitio web es de carácter informativo y puede estar sujeta a cambios. Los precios finales y condiciones de venta serán los acordados en los contratos correspondientes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Limitación de Responsabilidad</h2>
              <p>
                DGF Inmobiliaria no será responsable por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de usar este sitio web o los servicios ofrecidos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Modificaciones</h2>
              <p>
                DGF Inmobiliaria se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. Contacto</h2>
              <p>
                Si tiene alguna pregunta sobre estos términos y condiciones, puede contactarnos a través de nuestro formulario de contacto o enviando un correo electrónico a info@dgfinmobiliaria.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
