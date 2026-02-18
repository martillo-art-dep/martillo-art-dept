import { useState } from "react";

const LOGOS = [
  { src: "/assets/logos/netflix.svg", alt: "Netflix", width: 194, height: "auto", rounded: false },
  {
    src: "/assets/logos/prime-video.svg",
    alt: "Prime Video",
    width: 194,
    height: "auto",
    rounded: false,
  },
  {
    src: "/assets/logos/focus-features.png",
    alt: "Focus Features",
    width: 194,
    height: "auto",
    rounded: true,
  },
  {
    src: "/assets/logos/habitant.svg",
    alt: "Habitant Productions",
    width: 194,
    height: "auto",
    rounded: false,
  },
  {
    src: "/assets/logos/disney-plus.svg",
    alt: "Disney+",
    width: 164,
    height: 84,
    rounded: true,
  },
] as const;

function LogoItem({
  src,
  alt,
  width,
  height,
  rounded,
}: {
  src: string;
  alt: string;
  width: number;
  height: number | "auto";
  rounded: boolean;
}) {
  const [hasError, setHasError] = useState(false);
  return (
    <div
      className="flex shrink-0 items-center justify-center"
      style={{ width, height: height === "auto" ? 84 : height, minHeight: 84 }}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-auto max-h-[84px] w-full object-contain object-center"
          style={{
            width,
            height: height === "auto" ? "auto" : height,
            borderRadius: rounded ? 11 : undefined,
          }}
          onError={() => setHasError(true)}
        />
      ) : (
        <div
          className="flex items-center justify-center rounded-[11px] bg-neutral-200 px-3 py-2 font-sans text-xs font-medium text-neutral-500"
          style={{ width, borderRadius: rounded ? 11 : 4 }}
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
      className="logo-marquee w-full overflow-hidden"
      style={{
        height: 152,
        backgroundColor: "#FBFEF9",
        boxShadow: "0px -34px 24.3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex h-full items-center overflow-x-hidden px-[50px] py-0">
        <div className="logo-marquee-track flex shrink-0 items-center gap-[100px]">
          {/* Primera copia */}
          {LOGOS.map((logo) => (
            <LogoItem key={`a-${logo.alt}`} {...logo} />
          ))}
          {/* Segunda copia para efecto seamless */}
          {LOGOS.map((logo) => (
            <LogoItem key={`b-${logo.alt}`} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
