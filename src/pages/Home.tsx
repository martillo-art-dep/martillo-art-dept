import HeroSection from "../components/HeroSection";
import LogoMarquee from "../components/LogoMarquee";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Inicio"
        description="Martillo Art Dept — Diseño de producción y dirección de arte para cine, series, comerciales y videoclips en México."
        url="/"
      />
      {/* ══ MOBILE: stacked layout (hero + marquee below) ══ */}
      <div className="block md:hidden">
        <HeroSection />
        <div style={{ marginTop: "-1px" }}>
          <LogoMarquee />
        </div>
      </div>

      {/* ══ DESKTOP: hero full viewport, marquee overlapping bottom ══ */}
      <div className="relative hidden md:block" style={{ height: "100vh" }}>
        <HeroSection />
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <LogoMarquee />
        </div>
      </div>
    </>
  );
}