import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import LogoMarquee from "../components/LogoMarquee";
import SEO from "../components/SEO";

/**
 * Mide en tiempo real la altura del <header fixed> que vive en Layout.tsx
 * y devuelve ese número en px. Se actualiza automáticamente en resize
 * y cuando el header cambia de tamaño (breakpoints Tailwind).
 */
function useHeaderHeight() {
  const [h, setH] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const measure = () => setH(header.getBoundingClientRect().height);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(header);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return h;
}

export default function Home() {
  const headerH = useHeaderHeight();

  return (
    <>
      <SEO
        title="Inicio"
        description="Martillo Art Dept — Diseño de producción y dirección de arte para cine, series, comerciales y videoclips en México."
        url="/"
      />

      {/*
        Wrapper de Home:
        - height: 100dvh (toda la pantalla)
        - paddingTop = altura REAL del header → así el contenido interior
          empieza JUSTO debajo del header fijo, sin solaparse.
        - box-sizing: border-box → el padding NO suma al height total,
          o sea: contenido interior = 100dvh - headerH. Exactamente lo que queremos.
      */}
      <div
        style={{
          width: "100%",
          height: "100dvh",
          paddingTop: `${headerH}px`,
          backgroundColor: "#1b1b1b",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* 1. Contenedor del Reel — flex:1, ocupa TODO el espacio sobrante real */}
        <div
          style={{
            flex: 1,
            position: "relative",
            minHeight: 0,
            width: "100%",
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