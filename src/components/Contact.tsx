import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    content: "Av. Javier Prado Este 1234, San Isidro, Lima",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+51 999 999 999",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@dgfinmobiliaria.com",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun - Vie: 9:00 AM - 7:00 PM",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Un asesor VIP se pondrá en contacto contigo pronto.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contacto" className="py-40 bg-secondary relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-20 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2.5 mb-6 animate-fade-up">
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="font-body text-sm text-primary font-bold tracking-wider uppercase">
              Contáctanos
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6 animate-fade-up delay-100">
            Estamos para
            <span className="text-gradient-primary"> servirte</span>
          </h2>
          <p className="font-body text-muted-foreground text-xl animate-fade-up delay-200">
            Nuestro equipo de asesores VIP está listo para ayudarte a encontrar la propiedad perfecta.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-up delay-300">
            <h3 className="font-display text-2xl text-foreground mb-8">Información de Contacto</h3>
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="flex items-start gap-5 p-6 rounded-2xl bg-background hover:shadow-luxury transition-all duration-500 group border border-border hover:border-primary"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-glow-purple">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground font-semibold mb-1">
                    {info.title}
                  </h4>
                  <p className="font-body text-muted-foreground">
                    {info.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-up delay-400">
            <form onSubmit={handleSubmit} className="bg-background rounded-3xl p-10 shadow-luxury border border-border">
              <h3 className="font-display text-2xl text-foreground mb-8">Envíanos un mensaje</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-body text-sm text-foreground font-semibold mb-3">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-border rounded-xl font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all bg-background"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-foreground font-semibold mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-border rounded-xl font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all bg-background"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block font-body text-sm text-foreground font-semibold mb-3">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-border rounded-xl font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all bg-background"
                  placeholder="+51 999 999 999"
                />
              </div>
              <div className="mb-8">
                <label className="block font-body text-sm text-foreground font-semibold mb-3">
                  Mensaje
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-5 py-4 border-2 border-border rounded-xl font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent resize-none transition-all bg-background"
                  placeholder="Cuéntanos qué propiedad buscas..."
                  required
                />
              </div>
              <Button type="submit" variant="accent" size="xl" className="w-full md:w-auto group">
                Enviar Mensaje
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
