import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { buildWhatsAppLink } from "@/lib/contact";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(245,185,66,0.18),transparent_55%),radial-gradient(700px_circle_at_85%_35%,rgba(34,197,94,0.14),transparent_55%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

      <Container className="relative py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-white/80">
            Serving HNIs, Business Leaders, Corporates & Global Travelers
            <span className="h-1 w-1 rounded-full bg-white/40" />
            24×7 Dedicated Travel Assistance
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Redefining the Way the{" "}
            <span className="text-hopspot-gold">World Travels</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Premium travel management and concierge solutions for individuals, corporates and enterprises — powered by technology and delivered with precision.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60">
            From executive business travel to luxury family holidays and large-scale corporate movements, Hopspot simplifies complex travel through intelligent systems, global partnerships and dedicated human support.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#services" variant="primary">
              Plan Your Journey
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              href={buildWhatsAppLink(
                "Hi Hopspot! I'd like to make a corporate enquiry."
              )}
              variant="secondary"
            >
              <MessageCircle className="h-4 w-4" />
              Corporate Enquiry
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
