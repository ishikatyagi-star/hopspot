import { Container } from "@/components/ui/Container";
import {
  CheckCircle2,
  Cpu,
  Headphones,
  Lock,
  Scale,
  Users,
} from "lucide-react";

const reasons = [
  {
    title: "End-to-End Travel Control",
    description: "From booking to arrival and beyond.",
    Icon: CheckCircle2,
  },
  {
    title: "Technology-Backed Operations",
    description: "Structured systems that reduce error and increase efficiency.",
    Icon: Cpu,
  },
  {
    title: "Real Human Support",
    description: "24×7 access to dedicated assistance when it matters most.",
    Icon: Headphones,
  },
  {
    title: "Scalable Execution",
    description: "From single journeys to large corporate travel movements.",
    Icon: Scale,
  },
  {
    title: "Confidential & Professional Handling",
    description: "Trusted by high-value travelers and business leaders.",
    Icon: Lock,
  },
  {
    title: "Strong Supplier Ecosystem",
    description: "Airlines, hotels, ground operators and global partners.",
    Icon: Users,
  },
] as const;

export function WhyHopspot() {
  return (
    <section id="why" className="bg-hopspot-bg py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Why Choose Hopspot
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base">
            Built for reliability, scale and precision
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft transition hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-white/85" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
