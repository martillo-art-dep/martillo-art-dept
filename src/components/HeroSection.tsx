import { useRef, useState, useEffect } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Forzamos el play manualmente por si el autoPlay falla en el deploy
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

  return (
    <section style={{ width: "100%", height: "100%", position: "relative", backgroundColor: "#000" }}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        /* Añadimos el poster directamente al tag de video */
        poster="/assets/hero-poster.jpg"
        src="/assets/REEL_Optimizado.mp4"
        style={{
          width: "102vw",
          height: "100dvh",
          objectFit: "cover",
          objectPosition: "center 20%",
          position: "absolute",
          top: "68%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(1.01)",
          pointerEvents: "none",
          zIndex: 10
        }}
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