import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors"
            data-testid="link-logo"
          >
            Bankk
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm text-foreground hover:text-primary transition-colors"
              data-testid="link-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-foreground hover:text-primary transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-foreground hover:text-primary transition-colors"
              data-testid="link-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm text-foreground hover:text-primary transition-colors"
              data-testid="link-pricing"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("clients")}
              className="text-sm text-foreground hover:text-primary transition-colors"
              data-testid="link-clients"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-foreground hover:text-primary transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex"
              data-testid="button-book-call"
            >
              Book a Call
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="flex flex-col gap-4 py-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-sm text-foreground hover:text-primary transition-colors text-left px-2"
                data-testid="mobile-link-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-foreground hover:text-primary transition-colors text-left px-2"
                data-testid="mobile-link-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm text-foreground hover:text-primary transition-colors text-left px-2"
                data-testid="mobile-link-projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm text-foreground hover:text-primary transition-colors text-left px-2"
                data-testid="mobile-link-pricing"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("clients")}
                className="text-sm text-foreground hover:text-primary transition-colors text-left px-2"
                data-testid="mobile-link-clients"
              >
                Clients
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm text-foreground hover:text-primary transition-colors text-left px-2"
                data-testid="mobile-link-contact"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full"
                data-testid="mobile-button-book-call"
              >
                Book a Call
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
