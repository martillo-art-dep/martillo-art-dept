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

      <div
        style={{
          width: "100%",
          height: "100dvh",
          position: "relative",
          backgroundColor: "#000000",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* 1. Contenedor del Reel — flex:1, ocupa TODO el espacio sobrante real */}
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <HeroSection />
        </div>

        {/* 2. Marcas — altura propia (la define LogoMarquee con sus clases h-[...]) */}
        <div
          style={{
            width: "100%",
            flexShrink: 0,
            position: "relative",
            zIndex: 20,
          }}
        >
          <LogoMarquee />
        </div>
      </div>
    </>
  );
}