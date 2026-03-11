import MartilloLogo from "./MartilloLogo";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1b1b1b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "320px", maxWidth: "60vw" }}>
        <MartilloLogo />
      </div>
    </section>
  );
}