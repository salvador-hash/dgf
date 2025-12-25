import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DGF Inmobiliaria | Tu Hogar Ideal en Lima</title>
        <meta
          name="description"
          content="DGF Inmobiliaria - Encuentra casas, departamentos y propiedades premium en Lima. Más de 15 años de experiencia en el mercado inmobiliario peruano."
        />
        <meta name="keywords" content="inmobiliaria, casas, departamentos, venta, alquiler, Lima, Perú, bienes raíces" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Properties />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
