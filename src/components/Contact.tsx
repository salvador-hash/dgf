import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
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
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contacto" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-body text-sm text-gold font-semibold tracking-wider uppercase mb-4">
            Contacto
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Estamos aquí para <span className="text-gold">ayudarte</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            ¿Tienes preguntas o necesitas más información? Contáctanos y con gusto te atenderemos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-background hover:shadow-elegant transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-display text-foreground font-semibold mb-1">
                    {info.title}
                  </h4>
                  <p className="font-body text-muted-foreground text-sm">
                    {info.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 shadow-elegant">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-body text-sm text-foreground font-medium mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-foreground font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block font-body text-sm text-foreground font-medium mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="+51 999 999 999"
                />
              </div>
              <div className="mb-6">
                <label className="block font-body text-sm text-foreground font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                  required
                />
              </div>
              <Button type="submit" variant="gold" size="lg" className="w-full md:w-auto">
                Enviar Mensaje
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
