import { useState } from "react";

// ─── ASSETS ─────────────────────────────────────────────────────────────────
// Todos los logos viven en /public/assets/logos/
// IIMCINE: [PENDIENTE — CLIENTE] agregar iimcine.png cuando lo entreguen
// ────────────────────────────────────────────────────────────────────────────

// scale: multiplicador sobre el max-h base (1 = normal, 1.8 = 80% más grande)
const LOGOS = [
  { src: "/assets/logos/netflix.svg",                        alt: "Netflix",            rounded: false, scale: 1   },
  { src: "/assets/logos/prime-video-amazon-mgm-studios.svg", alt: "Amazon MGM Studios", rounded: false, scale: 1   },
  { src: "/assets/logos/focus-features.svg",                 alt: "Focus Features",     rounded: true,  scale: 1   },
  { src: "/assets/logos/warner-bros.svg",                    alt: "Warner Bros.",       rounded: false, scale: 1   },
  { src: "/assets/logos/21st-century-fox.svg",               alt: "21st Century Fox",   rounded: false, scale: 1.8 },
  { src: "/assets/logos/europacorp.svg",                     alt: "Europa Corp",        rounded: false, scale: 1   },
  { src: "/assets/logos/iimcine.png",                     alt: "IMCINE",             rounded: false, scale: 1   },
] as const;

function LogoImg({ src, alt, rounded }: { src: string; alt: string; rounded?: boolean }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="flex items-center justify-center border border-neutral-300 bg-white px-2 py-1 text-[9px] md:text-[11px] font-sans font-medium text-neutral-500"
        style={{ borderRadius: rounded ? 8 : 4 }}
      >
        {alt}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="eager"
      decoding="async"
      className="w-auto object-contain max-w-full"
      style={{ borderRadius: rounded ? 8 : undefined }}
      onError={() => setHasError(true)}
    />
  );
}

export default function LogoMarquee() {
  return (
    <>
      <style>{`
        .logo-item img {
          max-height: var(--logo-h-mobile);
        }
        @media (min-width: 768px) {
          .logo-item img {
            max-height: var(--logo-h-tablet);
          }
        }
        @media (min-width: 1024px) {
          .logo-item img {
            max-height: var(--logo-h-desktop);
          }
        }
      `}</style>

      <section
        className="w-full overflow-hidden h-[80px] md:h-[100px] lg:h-[130px]"
        style={{
          backgroundColor: "#FBFEF9",
          boxShadow: "0px -34px 24.3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="flex h-full items-center overflow-hidden">
          <div className="logo-marquee-track flex shrink-0 items-center gap-[24px] px-[12px] md:gap-[48px] md:px-[24px] lg:gap-[80px] lg:px-[40px]">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                className="logo-item flex shrink-0 items-center justify-center w-[72px] md:w-[120px] lg:w-[160px] h-[60px] md:h-[72px] lg:h-[84px]"
                style={{
                  "--logo-h-mobile":  `${Math.round(24 * logo.scale)}px`,
                  "--logo-h-tablet":  `${Math.round(40 * logo.scale)}px`,
                  "--logo-h-desktop": `${Math.round(56 * logo.scale)}px`,
                } as React.CSSProperties}
              >
                <LogoImg src={logo.src} alt={logo.alt} rounded={logo.rounded} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}