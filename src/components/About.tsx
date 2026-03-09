import { Target, Eye } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* About */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
            About <span className="text-brand-red">Us</span>
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
            JMiP Customs Brokerage is dedicated to streamlining logistics operations to minimize client costs. Our firm provides a comprehensive suite of services, including expert Customs Brokerage, Tariff Consultation, and BOC Accreditation assistance. By prioritizing management excellence and staff expertise, we have built a reputation for reliability, competitive pricing, and superior cargo handling.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            JMiP Customs Brokerage maintains client trust through a commitment to operational expertise, fair rates, and professional cargo management. We continuously invest in our team and management processes to deliver the consistent credibility our clients deserve.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <div className="bg-secondary rounded-lg p-8 border-t-4 border-brand-red">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center">
                <Eye className="text-accent-foreground" size={22} />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              To be recognized as a premier brokerage firm distinguished by outstanding client service, advanced technology, and deep investment expertise. We aim to become the top choice for investors who value comprehensive and dependable brokerage solutions. By continuously learning, adapting, and working collaboratively, we strive to stay ahead of industry developments and deliver exceptional value to our clients.
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-8 border-t-4 border-navy">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                <Target className="text-primary-foreground" size={22} />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              To provide exceptional brokerage services and investment solutions that help our clients achieve their financial goals. We also aim to support importers and exporters in minimizing their logistics expenses. In all areas of our operations, we are committed to upholding the highest standards of professionalism, integrity, and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Goals */}
        <div className="max-w-4xl mx-auto bg-navy rounded-lg p-8 md:p-12 text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
            Our <span className="text-brand-red-light">Goals</span>
          </h3>
          <p className="text-primary-foreground/70 leading-relaxed">
            Our ultimate objective is to deliver our services effectively and exceed the expectations of our valued clients, ensuring customer and stakeholder satisfaction at all times. We strive to reduce our clients' logistics costs across both import and export operations. With our extensive expertise in brokerage and supply chain management, we provide comprehensive solutions at competitive and cost-effective rates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
