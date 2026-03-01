import { buildWhatsAppLink } from "@/lib/contact";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink(
        "Hi Hopspot! I’d like to get in touch."
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp: +91 62914 39202"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-hopspot-accent px-4 py-3 text-sm font-semibold text-black shadow-soft hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hopspot-accent focus-visible:ring-offset-2 focus-visible:ring-offset-hopspot-bg"
    >
      <MessageCircle className="h-5 w-5" />
      Chat
    </a>
  );
}

