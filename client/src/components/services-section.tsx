import { Card, CardContent } from "@/components/ui/card";
import { Code2, Zap, Database, Figma, Gauge, Users } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Exploring modern full-stack development with cutting-edge technologies.",
    highlight: "React Hooks",
    className: "md:col-span-2"
  },
  {
    icon: Zap,
    title: "Scripts & Automation",
    description: "Designing custom automation scripts to streamline your workflow, optimize operations, and free up valuable time for growth.",
    className: "md:col-span-1"
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "We seamlessly integrate your data sources, ensuring smooth flow of information across your systems and applications.",
    className: "md:col-span-1"
  },
  {
    icon: Figma,
    title: "Figma to Code",
    description: "Turning your Figma designs into fully responsive, pixel-perfect, and production-ready code with attention to every detail.",
    className: "md:col-span-2"
  },
  {
    icon: Gauge,
    title: "Rapid Quality Development",
    description: "Delivering lightning-fast, modular solutions with high quality, ensuring scalable applications that exceed your expectations.",
    className: "md:col-span-2"
  },
  {
    icon: Users,
    title: "Satisfied Clients",
    description: "Building strong partnerships by delivering exceptional results, fostering trust, and creating long-lasting value.",
    className: "md:col-span-2"
  }
];

export function ServicesSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I Provide
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transforming bold ideas into powerful and innovative digital solutions, tailored to meet your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:translate-y-[-4px] transition-all duration-700 border-border/50 bg-card/50 backdrop-blur-md ${service.className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`card-service-${index}`}
            >
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                {service.highlight && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <code className="text-xs font-mono text-primary">
                      import {`{ useState, use`}
                    </code>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
