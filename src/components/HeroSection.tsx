import { useState } from "react";
import MartilloLogo from "./MartilloLogo";

const LOGO_SRC = "/assets/logo-martillo-color.svg";

interface HeroSectionProps {
  /** URL del video de fondo (opcional). Si no se proporciona, se usa el color sólido de fallback. */
  videoSrc?: string;
}

export default function HeroSection({ videoSrc }: HeroSectionProps) {
  const [logoSrcError, setLogoSrcError] = useState(false);
  const useLogoSvg = logoSrcError || !LOGO_SRC;

  return (
    <section
      className="relative flex w-full items-center justify-center overflow-hidden"
      style={{
        height: "calc(100vh - 96px)",
        backgroundColor: "#757780",
      }}
    >
      {/* Video de fondo (opcional). Fallback: color sólido #757780 del section */}
      {videoSrc && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Logo centrado */}
      <div
        className="relative z-10 flex items-center justify-center px-4"
        style={{ filter: "drop-shadow(0px 4px 46.7px #000000)" }}
      >
        {useLogoSvg ? (
          <div className="max-w-[200px] sm:max-w-[260px] md:max-w-[318px]">
            <MartilloLogo width={318} height={279} className="h-auto w-full" />
          </div>
        ) : (
          <img
            src={LOGO_SRC}
            alt="Martillo Art Dept"
            className="h-auto max-w-[200px] sm:max-w-[260px] md:max-w-[318px] w-full"
            onError={() => setLogoSrcError(true)}
            loading="eager"
          />
        )}
      </div>
    </section>
  );
}
