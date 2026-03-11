import { useEffect, useState } from "react";

export default function HeroSection() {
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    // Carga el iframe después del primer paint
    const timer = setTimeout(() => setVideoReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", backgroundColor: "#1b1b1b" }}>
      {videoReady && (
        <iframe
          title="Martillo Art Dept — Showreel"
          src="https://player.vimeo.com/video/1172001317?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "177.78vh",
            minWidth: "100%",
            minHeight: "56.25vw",
            height: "100%",
            border: "none",
          }}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      )}
    </section>
  );
}