import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { buildWhatsAppLink, HOPSPOT } from "@/lib/contact";
import { CreditCard, MessageCircle, ReceiptText, Users } from "lucide-react";

const clientTypes = [
  "Corporates",
  "Enterprises",
  "Startups",
  "Event companies",
  "Travel partners",
  "High-volume booking clients",
] as const;

const solutions = [
  {
    title: "Dedicated account manager",
    Icon: Users,
  },
  {
    title: "Centralised billing & reporting",
    Icon: ReceiptText,
  },
  {
    title: "Credit support (subject to approval)",
    Icon: CreditCard,
  },
] as const;

const bulletPoints = [
  "Custom negotiated pricing",
  "Bulk and recurring travel management",
  "Priority escalation channels",
] as const;

export function CorporateSolutions() {
  return (
    <section id="corporate" className="bg-hopspot-bg py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-wide text-hopspot-gold">
            B2B & Corporate Travel
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Travel Infrastructure for Businesses
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/65 sm:text-base">
            Hopspot supports organisations that require structured, scalable and accountable travel management.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm font-semibold text-white">We work with:</p>
          <ul className="mt-3 flex flex-wrap gap-2 justify-center">
            {clientTypes.map((type) => (
              <li
                key={type}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
              >
                {type}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
            Our corporate solutions include:
          </h3>
          <div className="grid gap-5 lg:grid-cols-3">
          {solutions.map(({ title, Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-white/85" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
            </div>
          ))}
          </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {bulletPoints.map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft"
            >
              <p className="text-sm font-medium text-white/90">{point}</p>
            </div>
          ))}
        </div>
        </div>

        <div
          id="contact"
          className="mt-14 rounded-2xl border border-white/10 bg-[radial-gradient(800px_circle_at_25%_0%,rgba(34,197,94,0.16),transparent_55%),radial-gradient(800px_circle_at_75%_100%,rgba(245,185,66,0.14),transparent_55%)] p-8 shadow-soft"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center md:justify-center">
            <div>
              <p className="text-sm font-semibold text-white">For Partnerships</p>
              <p className="mt-2 text-sm text-white/70">
                <a className="underline decoration-white/20 underline-offset-4" href={`mailto:${HOPSPOT.email}`}>
                  {HOPSPOT.email}
                </a>
              </p>
              <p className="mt-1 text-sm text-white/60">{HOPSPOT.location}</p>
            </div>
            <ButtonLink
              href={buildWhatsAppLink(
                "Hi Hopspot! We'd like to discuss a corporate travel partnership. B2B Enquiry"
              )}
              variant="secondary"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </ButtonLink>
          </div>

          <p className="mt-8 text-center text-xs font-semibold tracking-[0.24em] text-white/60">
            TRUSTED BY LEADING ORGANIZATIONS
          </p>
        </div>
      </Container>
    </section>
  );
}
