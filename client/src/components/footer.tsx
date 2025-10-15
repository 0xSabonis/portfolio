import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Bankk</h3>
            <p className="text-sm text-muted-foreground">
              Full-Stack Development Delivered Fast and Flawlessly.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-md transition-colors"
                data-testid="link-footer-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-md transition-colors"
                data-testid="link-footer-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-md transition-colors"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="hover-elevate active-elevate-2 p-2 rounded-md transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bankk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
