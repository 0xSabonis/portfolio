import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { TechStackMarquee } from "@/components/tech-stack-marquee";
import { ServicesSection } from "@/components/services-section";
import { ProjectsSection } from "@/components/projects-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { GitHubSection } from "@/components/github-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <TechStackMarquee />
        <ServicesSection />
        <ProjectsSection />
        <PricingSection />
        <TestimonialsSection />
        <GitHubSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
