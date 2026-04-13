import { useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      // Cambiamos el estado de mute directamente en el elemento nativo
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section
      className="hero-section"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000000",
      }}
    >
      {/* 1. POSTER DE FONDO (Se desvanece cuando el video carga) */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: 'url("/assets/hero-poster.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center 69%",
          opacity: isLoaded ? 0 : 1,
          transition: "opacity 0.8s ease-in-out",
          zIndex: 5
        }}
      />

      {/* 2. VIDEO NATIVO OPTIMIZADO */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedMetadata={() => setIsLoaded(true)}
        src="/public/assets/REEL_Optimizado.mp4"
        style={{
          /* 102vw asegura que el video desborde cualquier micro-margen lateral */
          width: "102vw", 
          height: "100dvh", 
          objectFit: "cover",
          /* center = centrado horizontal
             35% = sube el video para que no se corten las cabezas del reel
          */
          objectPosition: "center 5%", 
          position: "absolute",
          top: "67%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none", // Centrado físico perfecto
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.8s ease-in-out",
          zIndex: 10
        }}
      />

      {/* 3. BOTÓN DE MUTE */}
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
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM3 9v6h4l5 5V4L7 9H3z" />
            <line x1="1" y1="1" x2="23" y2="23" stroke="white" strokeWidth="2" />
          </svg>
        ) : (
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </button>
    </section>
  );
}