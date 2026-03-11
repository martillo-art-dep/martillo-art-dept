import { memo } from "react";

// Inline SVG components for each client logo
// All logos use #1b1b1b (dark) to match the site's design system

function NetflixLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 111 30"
      className={className}
      fill="#E50914"
      aria-label="Netflix"
    >
      <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z" />
    </svg>
  );
}

function AmazonMGMLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 60"
      className={className}
      fill="#1b1b1b"
      aria-label="Prime Amazon MGM Studios"
    >
      {/* "prime" text */}
      <g>
        <path d="M8.5 35.5c0 2.5.1 4.6.4 6.2h-4l-.3-3.3h-.1c-1.1 1.7-3.2 3.8-7 3.8-3.3 0-7.3-1.9-7.3-9.4V18.5h4.6v13.3c0 4.1 1.2 6.8 4.7 6.8 2.6 0 4.4-1.8 5.1-3.5.2-.6.3-1.3.3-2V18.5h4.6v17zm6.5-9.3c0-3-.1-5.5-.2-7.7h4l.2 4.6h.2c1.1-3.2 3.9-5.1 6.9-5.1.5 0 .9 0 1.3.1v4.3c-.5-.1-1-.1-1.6-.1-3.2 0-5.5 2.4-6.1 5.8-.1.6-.2 1.3-.2 2.1v13.2h-4.6V26.2zm18.2-7.7h4.6v23.4h-4.6V18.5zm2.3-8.8c1.6 0 2.9 1.3 2.9 2.9s-1.3 2.9-2.9 2.9-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9zm8.8 16.5c0-3-.1-5.5-.2-7.7h4l.2 4h.1c1.4-2.4 3.8-4.5 8-4.5 3.5 0 6.1 2.1 7.2 5.1h.1c.8-1.4 1.8-2.5 2.8-3.3 1.5-1.2 3.1-1.8 5.5-1.8 3.3 0 8.1 2.1 8.1 10.7v14.5h-4.5V29.3c0-4.7-1.7-7.6-5.3-7.6-2.5 0-4.5 1.9-5.2 4-.2.6-.4 1.5-.4 2.3v13.8h-4.5V28.5c0-3.9-1.7-6.8-5.1-6.8-2.8 0-4.8 2.2-5.5 4.4-.2.6-.4 1.4-.4 2.2v13.6h-4.5V26.2zm49.8 2.3c.1 5.9 3.8 8.4 8.2 8.4 3.1 0 5-.5 6.6-1.2l.7 3.3c-1.5.7-4.1 1.5-8 1.5-7.4 0-11.8-4.9-11.8-12.1 0-7.2 4.3-13 11.3-13 7.9 0 9.9 6.9 9.9 11.3 0 .9-.1 1.6-.1 2h-16.8zm12.7-3.3c0-2.8-1.1-7.1-6.1-7.1-4.4 0-6.4 4.1-6.7 7.1h12.8z" transform="translate(10, 12)" />
        {/* Amazon smile arrow */}
        <path d="M35 52c-8.2 4.8-20.1 7.3-30.3 7.3-14.3 0-27.2-5.3-37-14.1-.8-.7-.1-1.7.8-1.1 10.5 6.1 23.6 9.8 37.1 9.8 9.1 0 19.1-1.9 28.3-5.8 1.4-.6 2.6 1 1.1 1.9z" transform="translate(10, 5)" />
        <path d="M38 48.3c-1.1-1.4-7.1-.7-9.8-.3-.8.1-1-.6-.2-1.1 4.8-3.4 12.7-2.4 13.6-1.3.9 1.1-.2 9.1-4.8 12.9-.7.6-1.4.3-1.1-.5 1.1-2.6 3.4-8.3 2.3-9.7z" transform="translate(10, 5)" />
      </g>
      {/* Vertical divider */}
      <line x1="125" y1="12" x2="125" y2="48" stroke="#1b1b1b" strokeWidth="1" />
      {/* "AMAZON MGM STUDIOS" text */}
      <text x="135" y="28" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="400" letterSpacing="3" fill="#1b1b1b">AMAZON</text>
      <text x="135" y="44" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" letterSpacing="2" fill="#1b1b1b">MGM STUDIOS</text>
    </svg>
  );
}

function FocusFeaturesLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 50"
      className={className}
      fill="#1b1b1b"
      aria-label="Focus Features"
    >
      <text
        x="100"
        y="24"
        fontFamily="Arial, sans-serif"
        fontSize="22"
        fontWeight="400"
        letterSpacing="8"
        textAnchor="middle"
        fill="#1b1b1b"
      >
        FOCUS
      </text>
      <text
        x="100"
        y="44"
        fontFamily="Arial, sans-serif"
        fontSize="12"
        fontWeight="400"
        letterSpacing="6"
        textAnchor="middle"
        fill="#1b1b1b"
      >
        FEATURES
      </text>
      {/* Dot in the O */}
      <circle cx="100" cy="17" r="2" fill="#1b1b1b" />
    </svg>
  );
}

function WarnerBrosLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="#1b1b1b"
      aria-label="Warner Bros."
    >
      {/* WB Shield shape */}
      <path d="M50 5C25 5 10 20 10 45c0 20 15 40 40 50 25-10 40-30 40-50C90 20 75 5 50 5z" fill="none" stroke="#1b1b1b" strokeWidth="3"/>
      {/* W letter */}
      <path d="M25 35l8 30 7-20 7 20 8-30h-5l-5 18-6-18h-4l-6 18-4-18h-5z" fill="#1b1b1b"/>
      {/* B letter */}
      <path d="M55 35v30h10c5 0 9-3 9-8 0-3-2-6-5-7 2-1 4-3 4-6 0-5-4-9-9-9H55zm6 5h4c2 0 3 1 3 3s-1 3-3 3h-4v-6zm0 11h5c2 0 4 2 4 4s-2 4-4 4h-5v-8z" fill="#1b1b1b"/>
    </svg>
  );
}

function FoxLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 80"
      className={className}
      fill="#1b1b1b"
      aria-label="21st Century Fox"
    >
      {/* Simplified stylized FOX text */}
      <text
        x="90"
        y="35"
        fontFamily="Arial Black, sans-serif"
        fontSize="28"
        fontWeight="900"
        letterSpacing="2"
        textAnchor="middle"
        fill="#1b1b1b"
      >
        21ST CENTURY
      </text>
      <text
        x="90"
        y="65"
        fontFamily="Arial Black, sans-serif"
        fontSize="32"
        fontWeight="900"
        letterSpacing="4"
        textAnchor="middle"
        fill="#1b1b1b"
      >
        FOX
      </text>
    </svg>
  );
}

function EuropaCorpLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 70"
      className={className}
      fill="#1b1b1b"
      aria-label="EuropaCorp"
    >
      {/* Winged figure simplified */}
      <g transform="translate(110, 5)">
        {/* Wings */}
        <path d="M-25 20C-35 10 -40 5 -30 15C-25 18 -20 22 -15 25" stroke="#1b1b1b" strokeWidth="1.5" fill="none"/>
        <path d="M25 20C35 10 40 5 30 15C25 18 20 22 15 25" stroke="#1b1b1b" strokeWidth="1.5" fill="none"/>
        <path d="M-20 18C-28 12 -32 8 -24 14" stroke="#1b1b1b" strokeWidth="1" fill="none"/>
        <path d="M20 18C28 12 32 8 24 14" stroke="#1b1b1b" strokeWidth="1" fill="none"/>
        {/* Body */}
        <ellipse cx="0" cy="28" rx="3" ry="8" fill="#1b1b1b"/>
        {/* Head */}
        <circle cx="0" cy="18" r="3" fill="#1b1b1b"/>
      </g>
      {/* Text */}
      <text
        x="110"
        y="60"
        fontFamily="Times New Roman, serif"
        fontSize="20"
        fontWeight="400"
        letterSpacing="4"
        textAnchor="middle"
        fill="#1b1b1b"
      >
        EUROPACORP
      </text>
      {/* Underline */}
      <line x1="30" y1="65" x2="190" y2="65" stroke="#1b1b1b" strokeWidth="1"/>
    </svg>
  );
}

function IMCINELogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      fill="#1b1b1b"
      aria-label="IMCINE"
    >
      {/* IMCINE letters stylized */}
      <text
        x="100"
        y="30"
        fontFamily="Arial Black, sans-serif"
        fontSize="32"
        fontWeight="900"
        letterSpacing="6"
        textAnchor="middle"
        fill="#1b1b1b"
      >
        IMCINE
      </text>
      <text
        x="100"
        y="50"
        fontFamily="Arial, sans-serif"
        fontSize="6"
        fontWeight="400"
        letterSpacing="1"
        textAnchor="middle"
        fill="#1b1b1b"
      >
        INSTITUTO MEXICANO DE CINEMATOGRAFÍA
      </text>
    </svg>
  );
}

// Memoized logo item to prevent unnecessary re-renders
const LogoItem = memo(function LogoItem({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className="flex shrink-0 items-center justify-center w-[100px] md:w-[140px] lg:w-[180px]"
      style={{ height: 84, minHeight: 84 }}
      aria-label={label}
    >
      {children}
    </div>
  );
});

// All logos configuration
const LOGOS = [
  { id: "netflix", Component: NetflixLogo, label: "Netflix" },
  { id: "amazon-mgm", Component: AmazonMGMLogo, label: "Amazon MGM Studios" },
  { id: "focus", Component: FocusFeaturesLogo, label: "Focus Features" },
  { id: "warner", Component: WarnerBrosLogo, label: "Warner Bros." },
  { id: "fox", Component: FoxLogo, label: "21st Century Fox" },
  { id: "europacorp", Component: EuropaCorpLogo, label: "EuropaCorp" },
  { id: "imcine", Component: IMCINELogo, label: "IMCINE" },
] as const;

export default function LogoMarquee() {
  return (
    <section
      className="w-full overflow-hidden h-[118px] md:h-[120px] lg:h-[152px]"
      style={{
        backgroundColor: "#FBFEF9",
        boxShadow: "0px -34px 24.3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex h-full items-center overflow-hidden">
        <div className="logo-marquee-track flex shrink-0 items-center gap-[32px] px-[16px] md:gap-[50px] md:px-[25px] lg:gap-[70px] lg:px-[35px]">
          {/* Primera copia */}
          {LOGOS.map(({ id, Component, label }) => (
            <LogoItem key={`a-${id}`} label={label}>
              <Component className="h-auto max-h-[40px] w-auto object-contain md:max-h-[50px] lg:max-h-[65px]" />
            </LogoItem>
          ))}
          {/* Segunda copia para efecto seamless */}
          {LOGOS.map(({ id, Component, label }) => (
            <LogoItem key={`b-${id}`} label={label}>
              <Component className="h-auto max-h-[40px] w-auto object-contain md:max-h-[50px] lg:max-h-[65px]" />
            </LogoItem>
          ))}
        </div>
      </div>
    </section>
  );
}