import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buildWhatsAppLink, HOPSPOT } from "@/lib/contact";
import { MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Corporate", href: "#corporate" },
  { label: "Why Hopspot", href: "#why" },
  { label: "Contact", href: "#contact" },
] as const;

export function Footer() {
  return (
    <footer id="contact" className="bg-hopspot-bg pb-10 pt-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-hopspot-gold">
            {HOPSPOT.brand} Travel Technologies LLP
          </p>
        </div>

        <div className="mt-10 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="text-lg font-semibold text-white">
              {HOPSPOT.brand}
            </Link>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
              Hopspot — Your Trip. Your Way.
              <br />
              Premium Travel Management & Concierge Solutions.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-white">Quick Links</p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a className="hover:text-white" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <a className="hover:text-white" href={`mailto:${HOPSPOT.email}`}>
                  {HOPSPOT.email}
                </a>
              </li>
              <li>
                <a className="hover:text-white" href={`tel:${HOPSPOT.phoneWa}`}>
                  {HOPSPOT.phoneDisplay}
                </a>
              </li>
              <li>{HOPSPOT.location}</li>
            </ul>
            <p className="mt-3 text-xs text-white/50">
              For corporate partnerships and large-scale requirements, please mention &quot;B2B Enquiry&quot; in your subject line.
            </p>

            <a
              href={buildWhatsAppLink("Hi Hopspot! I'd like to get in touch.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70 hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <p>© 2026 {HOPSPOT.brand}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
