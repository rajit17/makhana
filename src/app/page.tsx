import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceRibbon } from "@/components/sections/ExperienceRibbon";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { HeroSection } from "@/components/sections/HeroSection";
import { OrderForm } from "@/components/sections/OrderForm";
import { ProductSection } from "@/components/sections/ProductSection";
import { TrustBadges } from "@/components/sections/TrustBadges";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceRibbon />
        <TrustBadges />
        <ProductSection />
        <OrderForm />
        <AboutSection />
        <AudienceSection />
        <FAQAccordion />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
