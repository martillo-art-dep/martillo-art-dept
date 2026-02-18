import { useTranslation } from "react-i18next";
import HeroSection from "../components/HeroSection";
import LogoMarquee from "../components/LogoMarquee";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection />

      <LogoMarquee />

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
