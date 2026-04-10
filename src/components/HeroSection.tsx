import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

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
      title: false,
      byline: false,
      portrait: false,
      dnt: true,
      background: true,
    });

    playerRef.current = player;

    player.on("play", () => setIsLoaded(true));

    player.setVolume(0).catch(() => {});
    player.play().catch(() => {});

    return () => {
      player.unload();
    };
  }, []);

  const toggleMute = () => {
    if (playerRef.current) {
      playerRef.current.setVolume(isMuted ? 1 : 0);
      setIsMuted(!isMuted);
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
        backgroundImage: 'url("/assets/hero-poster.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center 69%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ height: "var(--header-h)", flexShrink: 0, position: "relative", zIndex: 1 }} />

      <div
        ref={containerRef}
        className="vimeo-wrapper"
        style={{
          position: "absolute",
          inset: 0,
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.4s ease-out",
        }}
      />

      <button
        onClick={toggleMute}
        style={{
          position: "absolute",
          bottom: "30px",
          right: "30px",
          zIndex: 30,
          background: "rgba(0,0,0,0.5)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(10px)",
        }}
      >
        {isMuted ? (
          <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM3 9v6h4l5 5V4L7 9H3z" />
            <line x1="1" y1="1" x2="23" y2="23" stroke="white" strokeWidth="2" />
          </svg>
        ) : (
          <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </button>
    </section>
  );
}
