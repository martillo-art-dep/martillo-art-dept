import { useState } from "react";

// ─── ASSETS ─────────────────────────────────────────────────────────────────
// Todos los logos viven en /public/assets/logos/
// IIMCINE: [PENDIENTE — CLIENTE] agregar iimcine.png cuando lo entreguen
// ────────────────────────────────────────────────────────────────────────────

const LOGOS = [
  { src: "/assets/logos/netflix.svg",                        alt: "Netflix",             width: 194 },
  { src: "/assets/logos/prime-video-amazon-mgm-studios.svg", alt: "Amazon MGM Studios",  width: 220 },
  { src: "/assets/logos/focus-features.svg",                 alt: "Focus Features",      width: 194, rounded: true },
  { src: "/assets/logos/warner-bros.svg",                    alt: "Warner Bros.",        width: 194 },
  { src: "/assets/logos/21st-century-fox.svg",               alt: "21st Century Fox",    width: 200 },
  { src: "/assets/logos/europacorp.svg",                     alt: "Europa Corp",         width: 180 },
  { src: "/assets/logos/iimcine.png",                     alt: "IMCINE",              width: 160 },
] as const;

interface LogoItemProps {
  src: string;
  alt: string;
  width: number;
  rounded?: boolean;
}

function LogoItem({ src, alt, width, rounded = false }: LogoItemProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="flex shrink-0 items-center justify-center w-[120px] md:w-[160px] lg:w-[194px]"
      style={{ height: 84, minHeight: 84 }}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
          className="h-auto max-h-[45px] w-auto object-contain md:max-h-[55px] lg:max-h-[70px]"
          style={{
            maxWidth: width,
            borderRadius: rounded ? 11 : undefined,
          }}
          onError={() => setHasError(true)}
        />
      ) : (
        <div
          className="flex items-center justify-center border border-neutral-300 bg-white px-4 py-2 font-sans text-xs font-medium text-neutral-500"
          style={{ borderRadius: rounded ? 11 : 4, minWidth: 100 }}
        >
          {alt}
        </div>
      )}
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section
      className="w-full overflow-hidden h-[118px] md:h-[120px] lg:h-[152px]"
      style={{
        backgroundColor: "#FBFEF9",
        boxShadow: "0px -34px 24.3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex h-full items-center overflow-hidden">
        <div className="logo-marquee-track flex shrink-0 items-center gap-[40px] px-[20px] md:gap-[70px] md:px-[30px] lg:gap-[100px] lg:px-[50px]">
          {LOGOS.map((logo) => (
            <LogoItem key={`a-${logo.alt}`} {...logo} />
          ))}
          {LOGOS.map((logo) => (
            <LogoItem key={`b-${logo.alt}`} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}