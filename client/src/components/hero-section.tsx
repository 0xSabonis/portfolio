import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <p className="text-sm sm:text-base text-muted-foreground mb-4 animate-fade-in-up">
          Modern Full-Stack Development
        </p>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-primary via-chart-3 to-chart-2 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
            Full-Stack
          </span>
          <br />
          <span className="bg-gradient-to-r from-chart-2 via-primary to-chart-3 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
            Development
          </span>
          <br />
          <span className="text-foreground">Delivered Fast and</span>
          <br />
          <span className="text-foreground">Flawlessly.</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up">
          Converting Your Unique Ideas into Fully Functional, Cutting-Edge Digital Products and Experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <Button
            size="lg"
            onClick={() => scrollToSection("pricing")}
            className="w-full sm:w-auto text-base"
            data-testid="button-view-plans"
          >
            View Plans
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto text-base backdrop-blur-lg bg-background/50"
            data-testid="button-hero-book-call"
          >
            Book a Call
          </Button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("tech-stack")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hover-elevate active-elevate-2 rounded-full p-2 transition-all hover:translate-y-1"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground animate-bounce" />
      </button>
    </section>
  );
}
