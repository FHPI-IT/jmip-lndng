import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <p className="font-heading text-brand-red-light text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-4">
            Reliable · Efficient · Professional
          </p>
          <h1 className="font-heading text-primary-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="inline-block italic" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.35)' }}>
              <span style={{ color: '#022d62' }}>J</span>
              <span style={{ color: '#022d62' }}>M</span>
              <span className="text-brand-red" style={{ WebkitTextStroke: 'none' }}>i</span>
              <span style={{ color: '#022d62' }}>P</span>
            </span>{" "}
            Customs
            <br />
            <span className="text-brand-red-light">Brokerage</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg md:text-xl mb-10 font-body">
            High-efficiency brokerage services designed to optimize supply chains
            and reduce client overhead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-block bg-brand-red hover:bg-brand-red-light text-primary-foreground font-heading font-bold uppercase tracking-wider px-8 py-4 rounded transition-colors"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-primary-foreground/30 hover:border-primary-foreground text-primary-foreground font-heading font-bold uppercase tracking-wider px-8 py-4 rounded transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(0 0% 100%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
