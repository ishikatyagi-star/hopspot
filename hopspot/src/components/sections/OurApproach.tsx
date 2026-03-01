import { Container } from "@/components/ui/Container";
import { ArrowRight, CheckCircle2, Headphones, Layout, Zap } from "lucide-react";

const steps = [
  {
    title: "Understand Your Requirement",
    description: "Every journey begins with clarity.",
    Icon: Headphones,
  },
  {
    title: "Structure the Best Options",
    description: "Optimised routes, pricing and service layers.",
    Icon: Layout,
  },
  {
    title: "Execute with Precision",
    description: "Confirmed bookings, coordination and monitoring.",
    Icon: Zap,
  },
  {
    title: "Ongoing Support",
    description: "Real-time assistance throughout the travel lifecycle.",
    Icon: CheckCircle2,
  },
] as const;

export function OurApproach() {
  return (
    <section id="approach" className="bg-hopspot-bg py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How We Work
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base">
            Our approach is simple: eliminate uncertainty and deliver confidence.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, description, Icon }, idx) => (
            <div key={title} className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-white/85" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                  <ArrowRight className="h-5 w-5 text-white/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
