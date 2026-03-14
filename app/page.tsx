import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { Benefits } from "@/components/sections/benefits";
import { ContactForm } from "@/components/sections/contact-form";
import { FaqSection } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Industries } from "@/components/sections/industries";
import { LogoStrip } from "@/components/sections/logo-strip";
import { Manufacturers } from "@/components/sections/manufacturers";
import { Navbar } from "@/components/sections/navbar";
import { ProcessSection } from "@/components/sections/process";
import { Solutions } from "@/components/sections/solutions";
import { ValueProposition } from "@/components/sections/value-proposition";
import { WhyQts } from "@/components/sections/why-qts";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <ValueProposition />
        <Solutions />
        <Benefits />
        <Industries />
        <Manufacturers />
        <ProcessSection />
        <WhyQts />
        <FaqSection />
        <ContactForm />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
