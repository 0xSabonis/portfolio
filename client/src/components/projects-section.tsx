import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Repo2PDF",
    description: "A tool to convert GitHub repositories into PDF format for easier sharing and offline reading.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop",
    tags: ["TypeScript", "Node.js", "PDF Generation"]
  },
  {
    title: "BrandRisk Promotions",
    description: "The official website of Brand Risk Promotions. The ultimate streamer fighting championship by Adin Ross. Bringing the chaos of streaming culture to combat sports.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=450&fit=crop",
    tags: ["Next.js", "Tailwind CSS", "Streaming"]
  },
  {
    title: "Nano Studio 98",
    description: "Chrome Built‑in AI Chat (Gemini Nano) - Local, Private, Fast. A desktop-like interface with retro Windows XP aesthetic for local AI conversations.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    tags: ["AI", "Chrome Extension", "React"]
  },
  {
    title: "shaduxe/ui",
    description: "Beautifully designed, expertly crafted component variants. The perfect extension for your shadcn/ui components.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop",
    tags: ["React", "Component Library", "Tailwind"]
  }
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Project Gallery
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our latest creations and innovations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-700 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedProject(project)}
              data-testid={`card-project-${index}`}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="outline" className="backdrop-blur-lg bg-background/50" data-testid={`button-view-project-${index}`}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" data-testid="button-view-all-projects">
            View All Projects
          </Button>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-base">
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedProject?.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm px-3 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
