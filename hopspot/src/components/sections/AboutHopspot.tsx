import { Container } from "@/components/ui/Container";

export function AboutHopspot() {
  return (
    <section id="about" className="bg-hopspot-bg py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            About Hopspot
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-6 text-white/70 sm:text-base">
            <p>
              Hopspot Travel Technologies LLP was built to solve one of the biggest challenges in modern mobility — travel complexity.
            </p>
            <p>
              Today's travel environment demands speed, accuracy, discretion and control. Whether managing high-value individual journeys or coordinating large corporate travel requirements, precision is non-negotiable.
            </p>
            <p>
              Hopspot operates at the intersection of technology and concierge expertise. We combine strong global supplier networks, negotiated partnerships, structured operations and relationship-driven service to deliver seamless travel management.
            </p>
            <p className="font-semibold text-white/90">
              We are not a transactional travel agency.
            </p>
            <p>
              We are a long-term travel partner — committed to reliability, accountability and consistent execution.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
