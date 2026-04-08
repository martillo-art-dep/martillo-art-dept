import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import MartilloLogo from "./MartilloLogo";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;
    const player = new Player(containerRef.current, {
      id: 1181013005,
      autoplay: true,
      muted: true,
      loop: true,
      controls: false,
      background: true, 
      responsive: true,
    });
    playerRef.current = player;
    player.on("play", () => setIsLoaded(true));
    return () => { player.unload(); };
  }, []);

  const toggleMute = () => {
    if (playerRef.current) {
      playerRef.current.setVolume(isMuted ? 1 : 0);
      setIsMuted(!isMuted);
    }
  };

  return (
    <section style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", backgroundColor: "#1b1b1b" }}>
      {/* Logo de carga */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center",
        backgroundColor: "#1b1b1b", transition: "opacity 0.8s ease", opacity: isLoaded ? 0 : 1, pointerEvents: "none",
      }}>
        <MartilloLogo width={220} />
      </div>

      {/* Contenedor del Video con desborde hacia abajo */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "102%", zIndex: 5, pointerEvents: "none" }}>
        <div 
          ref={containerRef} 
          style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            width: "177.78vh", height: "102%", // Forzamos a que pise la marquesina
            minWidth: "100vw", minHeight: "56.25vw",
          }} 
        />
      </div>

      <style>{`iframe { width: 100% !important; height: 100% !important; pointer-events: none; }`}</style>

      {/* Botón de Audio */}
      <button onClick={toggleMute} style={{
        position: "absolute", bottom: "30px", right: "30px", zIndex: 30,
        background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "50%", width: "48px", height: "48px", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(10px)"
      }}>
        {isMuted ? (
          <svg width="22" height="22" fill="white" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM3 9v6h4l5 5V4L7 9H3z" /><line x1="1" y1="1" x2="23" y2="23" stroke="white" strokeWidth="2" /></svg>
        ) : (
          <svg width="22" height="22" fill="white" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>
        )}
      </button>
    </section>
  );
}