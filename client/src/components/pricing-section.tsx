import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Info } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const plans = [
  {
    name: "Essentials",
    subtitle: "Foundational web development and automation solutions.",
    price: "$899",
    priceNote: "starting at*",
    features: [
      "SEO setup",
      "Analytics integration",
      "Performance optimization",
      "Custom automation scripts",
      "Basic security implementation"
    ]
  },
  {
    name: "Landing",
    subtitle: "Comprehensive landing page solutions for maximum impact.",
    price: "$1,499",
    priceNote: "starting at*",
    features: [
      "Responsive single-page website",
      "Custom domain setup",
      "Advanced SEO optimization",
      "Social media integration",
      "Contact form setup"
    ]
  },
  {
    name: "Applications",
    subtitle: "Full-featured web applications for complex business needs.",
    price: "$2,299",
    priceNote: "starting at*",
    features: [
      "Full-stack web application",
      "User authentication",
      "Database design and integration",
      "RESTful API development",
      "Payment gateway integration"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    subtitle: "Scalable, enterprise-grade solutions for large-scale operations.",
    price: "$2,999",
    priceNote: "starting at*",
    features: [
      "Priority support",
      "Microservices architecture",
      "Large data processing",
      "Custom AI/ML model integration",
      "High-availability system design"
    ]
  }
];

export function PricingSection() {
  const [retainerHours, setRetainerHours] = useState([40]);
  const retainerPrice = retainerHours[0] === 40 ? "$10,000" : "$15,000";
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's talk numbers.
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the development package that fits your needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:translate-y-[-4px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${
                plan.highlighted
                  ? "border-primary/50 bg-card/80 backdrop-blur-md"
                  : "border-border/50 bg-card/50 backdrop-blur-md"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`card-plan-${index}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.subtitle}
                </p>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                <p className="text-xs text-muted-foreground">{plan.priceNote}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                <div className="pt-4 flex gap-2">
                  <Button
                    className="flex-1"
                    variant={plan.highlighted ? "default" : "outline"}
                    onClick={() => scrollToSection("contact")}
                    data-testid={`button-book-call-${index}`}
                  >
                    Book a Call
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    data-testid={`button-info-${index}`}
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border/50 bg-card/50 backdrop-blur-md">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Retainer</h3>
                <p className="text-sm text-muted-foreground">
                  Ongoing, dedicated development and support services.
                </p>
              </div>
              <Badge variant="outline" className="border-primary/50 text-primary">
                Flexible
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold">{retainerPrice}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {retainerHours[0]} hours/month
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Hours per month</span>
                      <span className="text-sm text-muted-foreground">
                        {retainerHours[0]}h
                      </span>
                    </div>
                    <Slider
                      value={retainerHours}
                      onValueChange={setRetainerHours}
                      min={40}
                      max={60}
                      step={20}
                      className="mb-2"
                      data-testid="slider-retainer-hours"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>40h - $10,000</span>
                      <span>60h - $15,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Covers all services</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated support channel</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority support and quick turnaround</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Regular strategy and planning sessions</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Flexible allocation of development hours</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                className="flex-1"
                onClick={() => scrollToSection("contact")}
                data-testid="button-retainer-book-call"
              >
                Book a Call
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-retainer-info">
                <Info className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
