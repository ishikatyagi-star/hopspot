import { Container } from "@/components/ui/Container";
import { Crown } from "lucide-react";

const benefits = [
  "Confidential handling",
  "Dedicated relationship manager",
  "Priority coordination",
  "Complex multi-city itinerary planning",
  "White-glove airport assistance",
  "Seamless door-to-door execution",
] as const;

export function LuxuryHNI() {
  return (
    <section id="luxury" className="bg-hopspot-bg py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            For Those Who Value Time and Certainty
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/70 sm:text-base">
            Luxury travel is not defined by price — it is defined by experience, discretion and execution.
          </p>
          <p className="mt-4 text-sm leading-6 text-white/70">
            Hopspot offers personalised travel coordination for high-net-worth individuals and families who require:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <Crown className="h-5 w-5 shrink-0 text-hopspot-gold" />
                <span className="text-sm text-white/80">{benefit}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm italic leading-6 text-white/60">
            We understand that for our HNI clients, time is the most valuable currency. Every journey is managed with precision and privacy.
          </p>
        </div>
      </Container>
    </section>
  );
}
