import { Badge } from "@/components/ui/badge";

const techStacks = {
  row1: [
    "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
    "Framer Motion", "Three.js", "Chart.js", "Styled Components", "CSS"
  ],
  row2: [
    "Node.js", "Express", "Python", "GraphQL", "Microservices",
    "API Development", "Supabase", "Firebase", "Enmap", "REST APIs"
  ],
  row3: [
    "Twitter API", "Discord API", "Telegram API", "Stripe", "Axios",
    "GitHub", "Vercel", "Automation", "Puppeteer"
  ],
  row4: [
    "Ethereum", "Solana", "Bitcoin", "Web3.js", "Solidity", "Data Visualization"
  ]
};

function MarqueeRow({ items, speed = "marquee", reverse = false }: { items: string[], speed?: string, reverse?: boolean }) {
  return (
    <div className="relative flex overflow-hidden py-2">
      <div className={`flex gap-3 ${reverse ? 'animate-marquee-reverse' : `animate-${speed}`}`}>
        {[...items, ...items, ...items].map((tech, index) => (
          <Badge
            key={`${tech}-${index}`}
            variant="outline"
            className="whitespace-nowrap px-4 py-2 text-sm border-border/50 bg-card/50 backdrop-blur-sm"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function TechStackMarquee() {
  return (
    <section id="tech-stack" className="py-12 border-y border-border overflow-hidden">
      <div className="space-y-1">
        <MarqueeRow items={techStacks.row1} speed="marquee-fast" />
        <MarqueeRow items={techStacks.row2} speed="marquee-slow" reverse />
        <MarqueeRow items={techStacks.row3} speed="marquee" />
        <MarqueeRow items={techStacks.row4} speed="marquee-fast" reverse />
      </div>
    </section>
  );
}
