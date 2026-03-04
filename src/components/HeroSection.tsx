import { useState } from "react";

interface HeroSectionProps {
  videoSrc?: string;
}

export default function HeroSection({ videoSrc }: HeroSectionProps) {
  const [logoError, setLogoError] = useState(false);

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .hero-section { height: 100vh !important; min-height: 600px !important; }
        }
      `}</style>
      <section
        className="hero-section relative flex w-full items-center justify-center overflow-hidden"
        style={{
          height: "calc(100vh - 118px)",
          minHeight: 400,
          backgroundColor: "#757780",
        }}
      >
        {videoSrc && (
          <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" aria-hidden>
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        <div
          className="relative z-10 flex items-center justify-center px-4 pb-8 md:pb-32 lg:pb-40"
          style={{ filter: "drop-shadow(0px 4px 46.7px #000000)" }}
        >
          {!logoError ? (
            <img
              src="/assets/logo-martillo-color.svg"
              alt="Martillo Art Dept"
              className="h-auto w-full max-w-[200px] sm:max-w-[260px] md:max-w-[318px]"
              onError={() => setLogoError(true)}
              loading="eager"
            />
          ) : (
            <div className="text-center text-white">
              <p className="text-2xl font-bold">MARTILLO</p>
              <p className="text-sm">ART DEPT</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
