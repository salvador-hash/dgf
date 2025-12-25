import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | DGF Inmobiliaria</title>
        <meta name="description" content="Política de privacidad y protección de datos de DGF Inmobiliaria." />
      </Helmet>
      <Header />
      <main className="pt-32 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Política de Privacidad
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg">
              Última actualización: Diciembre 2024
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Información que Recopilamos</h2>
              <p>
                En DGF Inmobiliaria recopilamos información personal que usted nos proporciona directamente, como nombre, correo electrónico, número de teléfono y preferencias de búsqueda de propiedades cuando utiliza nuestros formularios de contacto o solicita información.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Uso de la Información</h2>
              <p>
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responder a sus consultas sobre propiedades</li>
                <li>Enviarle información sobre proyectos que puedan ser de su interés</li>
                <li>Mejorar nuestros servicios y experiencia de usuario</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Protección de Datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra el acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Compartir Información</h2>
              <p>
                No vendemos, comercializamos ni transferimos su información personal a terceros sin su consentimiento, excepto cuando sea necesario para proporcionar nuestros servicios o cuando la ley lo requiera.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Cookies</h2>
              <p>
                Nuestro sitio web utiliza cookies para mejorar su experiencia de navegación. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades del sitio.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Sus Derechos</h2>
              <p>
                De acuerdo con la Ley de Protección de Datos Personales del Perú (Ley N° 29733), usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar información incorrecta</li>
                <li>Cancelar o solicitar la eliminación de sus datos</li>
                <li>Oponerse al tratamiento de sus datos</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. Contacto</h2>
              <p>
                Para ejercer sus derechos o si tiene preguntas sobre nuestra política de privacidad, puede contactarnos en info@dgfinmobiliaria.com o a través de nuestro formulario de contacto.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
