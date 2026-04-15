import { useRef, useState, useEffect } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  // Cambiamos a un estado de "modo" para mayor precisión
  const [viewMode, setViewMode] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width > 1024) {
        setViewMode("desktop");
      } else if (height > width) {
        setViewMode("mobilePortrait");
      } else {
        // Si el ancho es mayor al alto y estamos en una pantalla "pequeña"
        setViewMode("mobileLandscape");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay preventivo:", error);
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // ==========================================
  // 1. BLOQUE DESKTOP (Intacto como lo pediste)
  // ==========================================
  const desktopStyle: React.CSSProperties = {
    width: "102vw",
    height: "100dvh",
    objectFit: "cover",
    objectPosition: "center 20%",
    position: "absolute",
    top: "66%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(1)",
    pointerEvents: "none",
    zIndex: 10
  };

  // ==========================================
  // 2. BLOQUE MOBILE VERTICAL (El que ya te gusta)
  // ==========================================
  const mobilePortraitStyle: React.CSSProperties = {
    width: "100vh", 
    height: "100vw",
    objectFit: "contain",
    position: "absolute",
    top: "55%",               // El valor que tienes en tu captura
    left: "50%",
    transform: "translate(-50%, -50%) rotate(90deg) scale(1.7)", // El scale de tu captura
    pointerEvents: "none",
    zIndex: 10
  };

  // ==========================================
  // 3. BLOQUE MOBILE HORIZONTAL (Para corregir el recorte)
  // Ajusta Scale y Top aquí hasta que lo veas perfecto
  // ==========================================
  const mobileLandscapeStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "contain",     // <--- Aquí forzamos el CONTAIN para que no recorte
    position: "absolute",
    top: "57%",               // Juega con este valor para centrarlo visualmente
    left: "50%",
    transform: "translate(-50%, -50%) scale(.73)", // Juega con el Zoom aquí
    pointerEvents: "none",
    zIndex: 10
  };

  // Selector de estilo
  const currentStyle = 
    viewMode === "desktop" ? desktopStyle : 
    viewMode === "mobilePortrait" ? mobilePortraitStyle : 
    mobileLandscapeStyle;

  return (
    <section style={{ width: "100%", height: "100%", position: "relative", backgroundColor: "#000" }}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/hero-poster.jpg"
        src="/assets/REEL_Optimizado.mp4"
        style={currentStyle}
      />

      <button
        onClick={toggleMute}
        style={{
          position: "absolute",
          bottom: "30px",
          right: "30px",
          zIndex: 30,
          background: "rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(8px)",
        }}
      >
        {isMuted ? (
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM3 9v6h4l5 5V4L7 9H3z" /><line x1="1" y1="1" x2="23" y2="23" stroke="white" strokeWidth="2" /></svg>
        ) : (
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>
        )}
      </button>
    </section>
  );
}