import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Radio } from "lucide-react";

const testimonials = [
  {
    quote:
      `Got business class tickets to London at economy prices. Still can't believe the deal I got!`,
    initials: "RM",
    name: "Rahul Mehta",
    city: "Delhi",
    image: "/testimonials/testimonial-1.jpeg",
  },
  {
    quote:
      "The complimentary airport pickup and hotel upgrade made our anniversary truly special.",
    initials: "AV",
    name: "Anita & Vikram",
    city: "Bangalore",
    image: "/testimonials/testimonial-2.jpeg",
  },
  {
    quote:
      "Best travel agency experience ever. The WhatsApp support is incredibly responsive!",
    initials: "SP",
    name: "Sneha Patil",
    city: "Mumbai",
    image: "/testimonials/testimonial-3.jpeg",
  },
  {
    quote:
      "Managed to get a last-minute upgrade to first class. Hopspot made it happen seamlessly.",
    initials: "AK",
    name: "Arjun Kapoor",
    city: "Pune",
    image: "/testimonials/testimonial-4.jpeg",
  },
  {
    quote:
      "Our entire team's travel is now managed by Hopspot. Consolidated billing is a lifesaver.",
    initials: "PS",
    name: "Priya Sharma",
    city: "Hyderabad",
    image: "/testimonials/testimonial-5.jpeg",
  },
  {
    quote:
      "Exceptional service and attention to detail. Hopspot exceeded our expectations.",
    initials: "DK",
    name: "Deepak Kumar",
    city: "Chennai",
    image: "/testimonials/testimonial-6.jpeg",
  },
] as const;

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-hopspot-bg py-16 sm:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
      >
        <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,185,66,0.12),transparent_60%)] blur-2xl" />
        <div className="absolute -right-28 bottom-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_60%)] blur-2xl" />
      </div>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Join thousands of happy travelers
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base">
            Who saved big with Hopspot
          </p>
        </div>

        <div className="group relative mt-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-hopspot-bg to-transparent sm:w-24"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-hopspot-bg to-transparent sm:w-24"
          />

          <div className="relative overflow-hidden">
            <div
              className="flex w-max animate-marquee gap-5 pb-3 pt-1 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
              style={
                {
                  ["--marquee-duration"]: "42s",
                } as React.CSSProperties
              }
            >
              {[...testimonials, ...testimonials].map((t, idx) => (
                <figure
                  key={`${t.name}-${idx}`}
                  className="min-w-[280px] max-w-[360px] flex-1 rounded-2xl border border-hopspot-border/80 bg-white/[0.06] p-6 shadow-soft backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="h-5 w-5 rounded-full bg-hopspot-gold/90 shadow-[0_0_0_6px_rgba(245,185,66,0.06)]" />
                    <Radio className="h-5 w-5 text-white/35" />
                  </div>
                  <blockquote className="text-sm leading-6 text-white/75">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {t.name}
                      </div>
                      <div className="text-xs text-white/60">{t.city}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

