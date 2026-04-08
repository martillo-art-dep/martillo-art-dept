import HeroSection from "../components/HeroSection";
import LogoMarquee from "../components/LogoMarquee";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <main style={{ 
      backgroundColor: "#1b1b1b", 
      width: "100%", 
      height: "100dvh", // Altura dinámica para móviles
      display: "flex",
      flexDirection: "column",
      overflow: "hidden" 
    }}>
      <SEO
        title="Inicio"
        description="Martillo Art Dept — Diseño de producción y dirección de arte para cine, series, comerciales y videoclips en México."
        url="/"
      />
      
      {/* 1. Contenedor del Reel */}
      <div style={{ flex: 1, position: "relative", minHeight: 0 }}>
        <HeroSection />
      </div>

      {/* 2. Contenedor de Marcas: Sello de seguridad */}
      <div style={{ 
        width: "100%", 
        backgroundColor: "#FBFEF9",
        flexShrink: 0,
        marginTop: "-2px", // Aumentamos el solapamiento para evitar el gap gris
        position: "relative",
        zIndex: 20
      }}>
        <LogoMarquee />
      </div>
    </main>
  );
}