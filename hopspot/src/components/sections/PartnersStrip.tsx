import Image from "next/image";
import { Container } from "@/components/ui/Container";

const partners = [
  { name: "Yocket", logo: "/partners/yocket.svg" },
  { name: "TETR College of Business", logo: "/partners/tetr.svg" },
  { name: "LEAPSCHOLAR", logo: "/partners/leapscholar.svg" },
  { name: "MASTERS' UNION SCHOOL OF BUSINESS", logo: "/partners/masters-union.svg" },
  { name: "SaveSage", logo: "/partners/savesage.svg" },
] as const;

export function PartnersStrip() {
  return (
    <section id="trust" className="bg-hopspot-bg py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Brands We&apos;ve Worked With
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base">
            Trusted by leading organizations and institutions
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {partners.slice(0, 4).map(({ name, logo }) => (
              <div
                key={name}
                className="flex min-h-[100px] items-center justify-center rounded-xl border border-white/10 bg-white/5 p-6 shadow-soft transition hover:bg-white/10"
              >
                <div className="relative h-12 w-full">
                  <Image
                    src={logo}
                    alt={name}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="flex min-h-[100px] min-w-[200px] items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-6 shadow-soft transition hover:bg-white/10">
              <div className="relative h-12 w-40">
                <Image
                  src={partners[4].logo}
                  alt={partners[4].name}
                  fill
                  className="object-contain object-center"
                  sizes="200px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
