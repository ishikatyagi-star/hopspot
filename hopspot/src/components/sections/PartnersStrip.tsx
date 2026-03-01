import { Container } from "@/components/ui/Container";

const commitments = [
  "Transparent communication",
  "Professional conduct",
  "Structured processes",
  "Long-term relationships",
] as const;

export function PartnersStrip() {
  return (
    <section id="trust" className="bg-hopspot-bg py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built on Reliability
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base">
            Hopspot is trusted by business leaders, frequent travelers and corporate teams who value consistency and accountability.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {commitments.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80"
            >
              {c}
            </span>
          ))}
        </div>

        <p className="mt-8 text-center text-xs font-semibold tracking-[0.24em] text-white/50">
          (Designer can add airline logos, hotel logos and corporate partner logos here)
        </p>
      </Container>
    </section>
  );
}
