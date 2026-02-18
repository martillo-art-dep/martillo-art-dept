import { useTranslation } from "react-i18next";
import MartilloLogo from "../components/MartilloLogo";

/* Reel — Figma: padding 248px 561px, gap 10px, height 776px, top 96px */
/* Logo: 318x279px, drop-shadow(0px 4px 46.7px #000000) */
/* Scroll Infinito LOGOS — Figma: height 152px, padding 0 50px, gap 100px, bg #FBFEF9, shadow 0px -34px 24.3px rgba(0,0,0,0.1) */

const clients = [
  { name: "Netflix", width: 194, height: 59 },
  { name: "Prime Video", width: 194, height: 60 },
  { name: "Focus Features", width: 194, height: 82 },
  { name: "Habitant Productions", width: 194, height: 52 },
  { name: "Disney", width: 164, height: 84 },
] as const;

function ClientLogoPlaceholder({
  name,
  width,
  height,
}: {
  name: string;
  width: number;
  height: number;
}) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-[11px] bg-[#e5e7eb] font-sans text-xs font-medium text-[#6b7280]"
      style={{ width, height: Math.min(height, 84) }}
    >
      {name}
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* Reel — Figma: fondo gris #757780, logo centrado, padding 248px 561px, 776px height */}
      <section
        className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-6 py-16 md:min-h-[776px] md:px-[max(1.5rem,min(561px,39vw))] md:py-[248px]"
        style={{ backgroundColor: "#757780" }}
      >
        <div
          className="flex shrink-0 flex-col gap-2.5"
          style={{ filter: "drop-shadow(0px 4px 46.7px #000000)" }}
        >
          <MartilloLogo width={318} height={279} className="h-auto w-full" />
        </div>
      </section>

      {/* Scroll Infinito LOGOS — Figma: 152px height, 50px horizontal padding, 100px gap, #FBFEF9, shadow */}
      <section
        className="flex flex-row items-center justify-center gap-12 overflow-x-auto px-6 py-8 md:gap-[100px] md:px-[50px] md:py-0"
        style={{
          backgroundColor: "#FBFEF9",
          minHeight: 152,
          boxShadow: "0px -34px 24.3px rgba(0, 0, 0, 0.1)",
        }}
      >
        {clients.map((c) => (
          <ClientLogoPlaceholder key={c.name} name={c.name} width={c.width} height={c.height} />
        ))}
      </section>

      {/* Next section — dark contrast */}
      <section
        id="home-services"
        className="relative px-6 py-24 md:px-[50px] md:py-32"
        style={{ backgroundColor: "#010100" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.4em]"
            style={{ color: "#FB5000" }}
          >
            SERVICIOS
          </p>
          <h2 className="mt-4 font-display text-2xl font-normal uppercase tracking-[0.2em] md:text-3xl" style={{ color: "#F8F1CD" }}>
            {t("home.services_title")}
          </h2>
          <p className="mt-6 font-sans text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
            Diseño y dirección de arte con enfoque cinematográfico.
          </p>
        </div>
      </section>
    </>
  );
}
