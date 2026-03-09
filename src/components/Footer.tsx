import logo from "@/assets/jmip-logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="JMiP" className="h-10 w-auto" />
          </div>
          <p className="text-primary-foreground/50 text-sm text-center">
            © {new Date().getFullYear()} JMiP Customs Brokerage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
