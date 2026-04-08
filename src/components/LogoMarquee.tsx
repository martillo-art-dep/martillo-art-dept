import { useState } from "react";

const LOGOS = [
  { src: "/assets/logos/netflix.svg",                        alt: "Netflix",            rounded: false, scale: 1   },
  { src: "/assets/logos/prime-video-amazon-mgm-studios.svg", alt: "Amazon MGM Studios", rounded: false, scale: 1   },
  { src: "/assets/logos/hbo-max.svg",                        alt: "HBO Max",            rounded: false, scale: 1   },
  { src: "/assets/logos/focus-features.svg",                 alt: "Focus Features",     rounded: true,  scale: 1   },
  { src: "/assets/logos/warner-bros.svg",                    alt: "Warner Bros.",       rounded: false, scale: 1   },
  { src: "/assets/logos/21st-century-fox.svg",               alt: "21st Century Fox",   rounded: false, scale: 1.8 },
  { src: "/assets/logos/europacorp.svg",                     alt: "Europa Corp",        rounded: false, scale: 1   },
  { src: "/assets/logos/iimcine.png",                        alt: "IMCINE",             rounded: false, scale: 1   },
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
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .logo-marquee-track {
          display: flex;
          width: max-content;
          /* 1. Velocidad ajustada a 60s */
          animation: scroll 60s linear infinite;
        }

        /* 2. Pausa al hacer hover */
        .logo-marquee-track:hover {
          animation-play-state: paused;
        }

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
          boxShadow: "inset 0px 33px 30px -10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex h-full items-center overflow-hidden">
          <div className="logo-marquee-track items-center gap-[24px] px-[12px] md:gap-[48px] md:px-[24px] lg:gap-[80px] lg:px-[40px]">
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