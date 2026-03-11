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
      {/* ══ Hero + marquee pegado al fondo — mobile y desktop ══ */}
      <div className="relative" style={{ height: "100vh" }}>
        <HeroSection />
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <LogoMarquee />
        </div>
      </div>
    </>
  );
}