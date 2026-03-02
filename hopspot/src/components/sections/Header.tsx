import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { buildWhatsAppLink, HOPSPOT } from "@/lib/contact";
import { MessageCircle } from "lucide-react";

const nav = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Corporate", href: "#corporate" },
  { label: "Why Hopspot", href: "#why" },
  { label: "Contact", href: "#contact" },
  { label: "Flights", href: "/flights" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-hopspot-bg/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white"
        >
          <Image
            src="/hopspot-logo.jpeg"
            alt="Hopspot"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={buildWhatsAppLink("Hi Hopspot! I'd like to get in touch.")}
            variant="secondary"
            className="hidden md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Contact
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}

