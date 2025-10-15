import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Evan Hilton",
    handle: "@hiltonvision",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=evan",
    quote: "BankkRoll is reliable, professional, and quick to respond whenever I have a problem that needs solving. He always explains clearly what he's doing so i understand and meets all my deadlines."
  },
  {
    name: "Gambalabs",
    handle: "@gambalabs",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=gamba",
    quote: "Bankk is a relentless worker and a self-starter who grew our business with almost no input or oversight from us. His impact was incredible—everything from our GitHub repo, to our docs, and even our customer satisfaction improved thanks to him."
  },
  {
    name: "NFT Engraver",
    handle: "@NFTEngraver",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=nft",
    quote: "Bank is exceptional at what he does. He has opened up new avenues of revenue for our business that encapsulates web3."
  },
  {
    name: "Carter",
    handle: "@0xCxrter",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carter",
    quote: "Ive worked with bank on multiple different projects over the past 4 years, bank is always my first suggestion because of the talent, professionalism and skills he provides for any team."
  },
  {
    name: "Buddha Alpha",
    handle: "@BuddhaAlpha432",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=buddha",
    quote: "Shoutout to the amazing @bankkroll_eth for being a great friend & developer! This is the second time I've hired him to do some dev work & another great experience all around! Knowledgeable, Quick response time & Trustful"
  },
  {
    name: "Petal Headz",
    handle: "@PetalHeadz",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=petal",
    quote: "Shoutout to my friend/Petal Headz dev @bankkroll_eth who's always quick to answer my questions and help me when I'm figuring out the tech side of things with the collection."
  },
  {
    name: "snax.eth",
    handle: "@snack_man",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=snax",
    quote: "Bankk jammed out a cool map to go with our sheeets.xyz event listings for NFT NYC 2024"
  },
  {
    name: "Crispy",
    handle: "@ChrisMGlenn",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=crispy",
    quote: "Shoutout to @bankkroll_eth for working behind the scenes and helping me."
  },
  {
    name: "Pach",
    handle: "@pachnoc",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pach",
    quote: "Shoutout to @bankkroll_eth for all his help with @OreSupply! I'm not mining just yet but, this has been just the little devvy side project I needed to get my mind right."
  },
  {
    name: "Logan",
    handle: "@fanboyz92",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=logan",
    quote: "So happy for @hiltonvision Minting out @PetalHeadz. Couldn't be more happy to support. Art is fireeee. Shoutout to @bankkroll_eth, He killed it with that work on the backend."
  },
  {
    name: "Mason",
    handle: "@_masoncrowe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mason",
    quote: "MAJOR thank you to @bankkroll_eth for connecting us to save our @alienfrens account. An absolute legend and the ultimate Fren."
  },
  {
    name: "Mvxswell",
    handle: "@mvxswell",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mvx",
    quote: "Working with Bankkroll was a very smooth process. We talked initially about what we wanted to do, he priced it out with a very fair price, and immediately got to work. His communication was immaculate and didn't stop working until the job was finished to perfection."
  }
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <Card className="flex-shrink-0 w-[350px] md:w-[400px] border-border/50 bg-card/50 backdrop-blur-md mx-3">
      <CardContent className="p-6">
        <p className="text-sm text-foreground mb-4 leading-relaxed">
          "{testimonial.quote}"
        </p>
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-border/30">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.handle}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="clients" className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Still in doubt? See for yourself
          </h2>
          <p className="text-lg text-muted-foreground">
            Yes we help clients, but most important is building long-lasting relationships.
          </p>
        </div>
      </div>

      <div className="relative group cursor-pointer">
        <div className="flex animate-marquee-slow group-hover:[animation-play-state:paused]">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`testimonial-${index}`} testimonial={testimonial} />
          ))}
        </div>
        <div className="flex absolute top-0 animate-marquee-slow group-hover:[animation-play-state:paused]" style={{ left: '100%' }}>
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`testimonial-duplicate-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
