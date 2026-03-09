import { FileCheck, Search, Truck, Award, FileText } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Customs Clearance and Release",
    description:
      "JMiP assists in expediting the customs clearance process with the Bureau of Customs (BOC) through a licensed customs broker.",
  },
  {
    icon: Search,
    title: "Tariff Consultation",
    description:
      "JMiP provides specialized consulting services focused on tariff classification, including in-depth research and analysis.",
  },
  {
    icon: Truck,
    title: "Freight Forwarding",
    description:
      "JMiP manages the transportation of goods on behalf of exporters, importers, or cargo owners, ensuring smooth and efficient cargo movement.",
  },
  {
    icon: Award,
    title: "BOC Accreditation",
    description:
      "JMiP offers fast and efficient processing for new applications and renewals of importer and broker accreditations with the Bureau of Customs.",
  },
  {
    icon: FileText,
    title: "Other BOC-Related Services",
    description:
      "Assistance with Lifting of Abandonment, Entry Amendments, Cancellation of Entry, CP Processing, and consultancy on customs procedures under CMTA RA 10863.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
            Our <span className="text-brand-red">Services</span>
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive customs brokerage solutions tailored to your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow group border border-border"
            >
              <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center mb-5 group-hover:bg-brand-red transition-colors">
                <s.icon className="text-primary-foreground" size={26} />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
