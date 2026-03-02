import { Container } from "@/components/ui/Container";
import {
  Car,
  Hotel,
  MapPin,
  Plane,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Flights",
    description:
      "Domestic and international flight bookings across all cabin classes — Economy, Premium Economy, Business and First.",
    bullets: [
      "Corporate fare management",
      "Group and bulk ticketing",
      "Last-minute travel support",
      "Route optimisation",
      "Fare protection strategies",
    ],
    Icon: Plane,
  },
  {
    title: "Hotels & Accommodations",
    description:
      "Access to premium global inventory, business hotels and luxury stays.",
    bullets: [
      "Corporate contracted rates",
      "Luxury leisure properties",
      "Extended stay solutions",
      "Group accommodation planning",
      "VIP handling requests",
    ],
    Icon: Hotel,
  },
  {
    title: "Airport Concierge Services",
    description:
      "Designed for travelers who value time, efficiency and comfort.",
    bullets: [
      "Airport lounge access",
      "Meet & Greet services",
      "Fast-track immigration assistance",
      "Porter support",
      "Check-in coordination",
    ],
    Icon: Sparkles,
  },
  {
    title: "Transfers & Ground Mobility",
    description:
      "Reliable and premium mobility solutions across cities and countries.",
    bullets: [
      "Chauffeur-driven sedans",
      "Executive airport transfers",
      "Corporate fleet coordination",
      "Event transport management",
    ],
    Icon: Car,
  },
  {
    title: "Travel Add-On Services",
    description:
      "Complete journey management beyond bookings.",
    bullets: [
      "Visa assistance",
      "Travel insurance",
      "Special assistance services",
      "Priority requests",
      "Custom travel arrangements",
    ],
    Icon: MapPin,
  },
] as const;

export function ServicesGrid() {
  return (
    <section id="services" className="bg-hopspot-bg py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Comprehensive Travel Solutions
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base">
            End-to-end travel management for individuals, corporates and enterprises
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, bullets, Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft transition hover:bg-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-white/85" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {description}
                  </p>
                  <ul className="mt-3 space-y-1 text-xs leading-5 text-white/55">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-hopspot-gold/70" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
