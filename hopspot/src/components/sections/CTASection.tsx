import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { buildWhatsAppLink } from "@/lib/contact";
import { MessageCircle, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section id="cta" className="bg-hopspot-bg py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-[radial-gradient(800px_circle_at_50%_50%,rgba(245,185,66,0.12),transparent_55%)] p-8 text-center shadow-soft sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Let's Build Your Next Journey
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/70 sm:text-base">
            Whether you are planning executive travel, managing corporate movement or organising a high-value itinerary, Hopspot is ready to support you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <ButtonLink
              href={buildWhatsAppLink(
                "Hi Hopspot! I'd like to request a callback."
              )}
              variant="primary"
            >
              <Phone className="h-4 w-4" />
              Request a Callback
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
            <ButtonLink
              href={buildWhatsAppLink(
                "Hi Hopspot! I'd like to partner with Hopspot."
              )}
              variant="secondary"
            >
              <MessageCircle className="h-4 w-4" />
              Partner With Hopspot
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
