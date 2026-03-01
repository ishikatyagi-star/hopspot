export const HOPSPOT = {
  brand: "Hopspot",
  email: "partnerships@hopspot.in",
  phoneDisplay: "+91 62914 39202",
  // wa.me expects country code + number with no +, spaces, or punctuation
  phoneWa: "916291439202",
  location: "Mumbai, India",
} as const;

export function buildWhatsAppLink(message: string) {
  const url = new URL(`https://wa.me/${HOPSPOT.phoneWa}`);
  url.searchParams.set("text", message);
  return url.toString();
}

