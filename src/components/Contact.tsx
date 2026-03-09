import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
            Get In <span className="text-brand-red">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="w-16 h-16 rounded-full bg-navy mx-auto flex items-center justify-center mb-4 group-hover:bg-brand-red transition-colors">
              <Phone className="text-primary-foreground" size={24} />
            </div>
            <h3 className="font-heading font-bold text-primary mb-2">Phone</h3>
            <p className="text-muted-foreground text-sm">0955-524-8823</p>
            <p className="text-muted-foreground text-sm">0920-753-7046</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 rounded-full bg-navy mx-auto flex items-center justify-center mb-4 group-hover:bg-brand-red transition-colors">
              <Mail className="text-primary-foreground" size={24} />
            </div>
            <h3 className="font-heading font-bold text-primary mb-2">Email</h3>
            <p className="text-muted-foreground text-sm break-all">
              info.jmip.customsbrokerage@gmail.com
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 rounded-full bg-navy mx-auto flex items-center justify-center mb-4 group-hover:bg-brand-red transition-colors">
              <MapPin className="text-primary-foreground" size={24} />
            </div>
            <h3 className="font-heading font-bold text-primary mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">
              Matina Crossing, Davao City
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
