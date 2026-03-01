import { AboutHopspot } from "@/components/sections/AboutHopspot";
import { CorporateSolutions } from "@/components/sections/CorporateSolutions";
import { CTASection } from "@/components/sections/CTASection";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { LuxuryHNI } from "@/components/sections/LuxuryHNI";
import { OurApproach } from "@/components/sections/OurApproach";
import { PartnersStrip } from "@/components/sections/PartnersStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyHopspot } from "@/components/sections/WhyHopspot";

export default function Home() {
  return (
    <div className="min-h-screen bg-hopspot-bg text-white">
      <Header />
      <main>
        <Hero />
        <AboutHopspot />
        <ServicesGrid />
        <Testimonials />
        <CorporateSolutions />
        <LuxuryHNI />
        <WhyHopspot />
        <OurApproach />
        <PartnersStrip />
        <CTASection />
        <Footer />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
