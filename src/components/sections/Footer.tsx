import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buildWhatsAppLink, HOPSPOT } from "@/lib/contact";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services", external: false },
  { label: "Testimonials", href: "#testimonials", external: false },
  { label: "Corporate", href: "#corporate", external: false },
  {
    label: "WhatsApp",
    href: buildWhatsAppLink("Hi Hopspot! I'd like to get in touch."),
    external: true,
  },
] as const;

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden pb-10 pt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 15, 25, 0.92), rgba(10, 15, 25, 0.92)), url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-block">
              <Image
                src="/hopspot-logo.jpeg"
                alt="Hopspot"
                width={140}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
              Redefining travel experiences for discerning individuals and forward-thinking enterprises.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-white">Quick Links</p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      className="inline-flex items-center gap-2 hover:text-white"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      {item.label}
                    </a>
                  ) : (
                    <a className="inline-flex items-center hover:text-white" href={item.href}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <a
                  className="inline-flex items-center gap-2 hover:text-white"
                  href={`mailto:${HOPSPOT.email}`}
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {HOPSPOT.email}
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 hover:text-white"
                  href={`tel:${HOPSPOT.phoneWa}`}
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {HOPSPOT.phoneDisplay}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                {HOPSPOT.location}
              </li>
            </ul>
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
