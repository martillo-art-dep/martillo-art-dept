import { useParams, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

// ─── Team member data ────────────────────────────────────────────────
interface TeamMemberData {
  id: string;
  firstNameEs: string;
  firstNameEn: string;
  lastNameEs: string;
  lastNameEn: string;
  roleEs: string;
  roleEn: string;
  image: string;
  bioEs: string;
  bioEn: string;
  filmography: { image: string; titleEs: string; titleEn: string }[];
  featuredImage: string;
  awards: { titleEs: string; titleEn: string; roleEs: string; roleEn: string }[];
}

const MEMBERS: Record<string, TeamMemberData> = {
  hector: {
    id: "hector",
    firstNameEs: "HECTOR",
    firstNameEn: "HECTOR",
    lastNameEs: "IRUEGAS",
    lastNameEn: "IRUEGAS",
    roleEs: "DIRECTOR DE ARTE",
    roleEn: "ART DIRECTOR",
    image: "/assets/team/hector.jpg",
    bioEs: "Lorem ipsum dolor sit amet consectetur adipiscing, elit quam curabitur habitasse vehicula, in fusce auctor varius sociosqu. Nullam cursus ad dis hendrerit curae suspendisse ante interdum curabitur parturient massa, volutpat lacus in donec ligula taciti viverra convallis luctus morbi, sed vivamus justo neque eu venenatis est felis nascetur pulvinar. Sapien ultricies convallis fames justo mi cras conubia pulvinar tincidunt, quisque libero platea volutpat magnis aenean nec netus vestibulum, arcu massa nam consequat purus congue augue at.\n\nQuis sociosqu lobortis feugiat egestas vulputate id suspendisse blandit curae habitasse, fermentum mollis urna posuere venenatis tincidunt netus cum litora justo primis, felis elementum aenean pellentesque sociis montes tristique nostra facilisi. Diam at fringilla netus molestie commodo tincidunt leo, feugiat pharetra ad posuere parturient ornare, nec taciti mattis ante viverra libero. Porta congue tincidunt erat nulla tempor mi bibendum, lobortis laoreet aptent inceptos aliquet euismod natoque fames, feugiat dis dui donec nam vestibulum.",
    bioEn: "Lorem ipsum dolor sit amet consectetur adipiscing, elit quam curabitur habitasse vehicula, in fusce auctor varius sociosqu. Nullam cursus ad dis hendrerit curae suspendisse ante interdum curabitur parturient massa, volutpat lacus in donec ligula taciti viverra convallis luctus morbi, sed vivamus justo neque eu venenatis est felis nascetur pulvinar. Sapien ultricies convallis fames justo mi cras conubia pulvinar tincidunt, quisque libero platea volutpat magnis aenean nec netus vestibulum, arcu massa nam consequat purus congue augue at.\n\nQuis sociosqu lobortis feugiat egestas vulputate id suspendisse blandit curae habitasse, fermentum mollis urna posuere venenatis tincidunt netus cum litora justo primis, felis elementum aenean pellentesque sociis montes tristique nostra facilisi. Diam at fringilla netus molestie commodo tincidunt leo, feugiat pharetra ad posuere parturient ornare, nec taciti mattis ante viverra libero. Porta congue tincidunt erat nulla tempor mi bibendum, lobortis laoreet aptent inceptos aliquet euismod natoque fames, feugiat dis dui donec nam vestibulum.",
    filmography: [
      { image: "/assets/filmography/film-1.jpg", titleEs: "Proyecto 1", titleEn: "Project 1" },
      { image: "/assets/filmography/film-2.jpg", titleEs: "Proyecto 2", titleEn: "Project 2" },
      { image: "/assets/filmography/film-3.jpg", titleEs: "Proyecto 3", titleEn: "Project 3" },
      { image: "/assets/filmography/film-4.jpg", titleEs: "Proyecto 4", titleEn: "Project 4" },
      { image: "/assets/filmography/film-5.jpg", titleEs: "Proyecto 5", titleEn: "Project 5" },
      { image: "/assets/filmography/film-6.jpg", titleEs: "Proyecto 6", titleEn: "Project 6" },
    ],
    featuredImage: "/assets/team/hector-featured.jpg",
    awards: [
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
    ],
  },
  claudio: {
    id: "claudio",
    firstNameEs: "CLAUDIO",
    firstNameEn: "CLAUDIO",
    lastNameEs: "MARTINEZ",
    lastNameEn: "MARTINEZ",
    roleEs: "PRODUCTOR",
    roleEn: "PRODUCER",
    image: "/assets/team/claudio.jpg",
    bioEs: "Lorem ipsum dolor sit amet consectetur adipiscing, elit quam curabitur habitasse vehicula, in fusce auctor varius sociosqu. Nullam cursus ad dis hendrerit curae suspendisse ante interdum curabitur parturient massa, volutpat lacus in donec ligula taciti viverra convallis luctus morbi, sed vivamus justo neque eu venenatis est felis nascetur pulvinar. Sapien ultricies convallis fames justo mi cras conubia pulvinar tincidunt, quisque libero platea volutpat magnis aenean nec netus vestibulum, arcu massa nam consequat purus congue augue at.\n\nQuis sociosqu lobortis feugiat egestas vulputate id suspendisse blandit curae habitasse, fermentum mollis urna posuere venenatis tincidunt netus cum litora justo primis, felis elementum aenean pellentesque sociis montes tristique nostra facilisi. Diam at fringilla netus molestie commodo tincidunt leo, feugiat pharetra ad posuere parturient ornare, nec taciti mattis ante viverra libero.",
    bioEn: "Lorem ipsum dolor sit amet consectetur adipiscing, elit quam curabitur habitasse vehicula, in fusce auctor varius sociosqu. Nullam cursus ad dis hendrerit curae suspendisse ante interdum curabitur parturient massa, volutpat lacus in donec ligula taciti viverra convallis luctus morbi, sed vivamus justo neque eu venenatis est felis nascetur pulvinar. Sapien ultricies convallis fames justo mi cras conubia pulvinar tincidunt, quisque libero platea volutpat magnis aenean nec netus vestibulum, arcu massa nam consequat purus congue augue at.\n\nQuis sociosqu lobortis feugiat egestas vulputate id suspendisse blandit curae habitasse, fermentum mollis urna posuere venenatis tincidunt netus cum litora justo primis, felis elementum aenean pellentesque sociis montes tristique nostra facilisi. Diam at fringilla netus molestie commodo tincidunt leo, feugiat pharetra ad posuere parturient ornare, nec taciti mattis ante viverra libero.",
    filmography: [
      { image: "/assets/filmography/film-1.jpg", titleEs: "Proyecto 1", titleEn: "Project 1" },
      { image: "/assets/filmography/film-2.jpg", titleEs: "Proyecto 2", titleEn: "Project 2" },
      { image: "/assets/filmography/film-3.jpg", titleEs: "Proyecto 3", titleEn: "Project 3" },
      { image: "/assets/filmography/film-4.jpg", titleEs: "Proyecto 4", titleEn: "Project 4" },
      { image: "/assets/filmography/film-5.jpg", titleEs: "Proyecto 5", titleEn: "Project 5" },
      { image: "/assets/filmography/film-6.jpg", titleEs: "Proyecto 6", titleEn: "Project 6" },
    ],
    featuredImage: "/assets/team/claudio-featured.jpg",
    awards: [
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
    ],
  },
};

// ─── Color strip colors (Figma Cobp dock) ────────────────────────────
const COLOR_STRIP = [
  "#F8F1CD", "#FB5000", "#FFDA44", "#338AF3", "#00FF8C",
  "#C32F27", "#F80078", "#751A46", "#338AF3",
];

const COLOR_STRIP_MOBILE = [
  "#F8F1CD", "#FB5000", "#FFDA44", "#338AF3", "#00FF8C",
  "#C32F27", "#F80078", "#751A46", "#338AF3",
];

// ─── CSS ─────────────────────────────────────────────────────────────
const memberCSS = `
/* Cobp dock for color strip */
.member-strip {
  display: flex;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  align-items: flex-end;
}
.member-swatch {
  position: relative;
  flex-shrink: 0;
  flex-grow: 1;
  height: 76px;
  border: none;
  outline: none;
  background-color: var(--color);
  transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  cursor: pointer;
  padding: 0;
  transform-origin: bottom center;
}
.member-swatch::before {
  position: absolute;
  content: attr(data-label);
  left: 50%;
  bottom: calc(100% + 8px);
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  line-height: 14px;
  font-weight: 500;
  transform: translateX(-50%);
  padding: 3px 8px;
  background-color: #ffffff;
  color: #1b1b1b;
  border-radius: 6px;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  white-space: nowrap;
  z-index: 100000;
  transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
}
.member-swatch:hover {
  transform: scaleY(1.5) scaleX(1.15);
  z-index: 99999;
  border-radius: 4px;
}
.member-swatch:hover::before { opacity: 1; visibility: visible; }
.member-swatch:active { transform: scaleY(1.35) scaleX(1.1); }
.member-swatch:hover + .member-swatch { transform: scaleY(1.3) scaleX(1.08); z-index: 9999; }
.member-swatch:hover + .member-swatch + .member-swatch { transform: scaleY(1.15) scaleX(1.04); z-index: 999; }
.member-swatch:has(+ .member-swatch:hover) { transform: scaleY(1.3) scaleX(1.08); z-index: 9999; }
.member-swatch:has(+ .member-swatch + .member-swatch:hover) { transform: scaleY(1.15) scaleX(1.04); z-index: 999; }

.member-strip-mobile {
  display: flex;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  align-items: flex-end;
}
.member-swatch-mobile {
  position: relative;
  flex-shrink: 0;
  flex: 1 1 0;
  min-width: 0;
  height: 55px;
  border: none;
  outline: none;
  background-color: var(--color);
  transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  cursor: pointer;
  padding: 0;
  transform-origin: bottom center;
}
.member-swatch-mobile:hover {
  transform: scaleY(1.5) scaleX(1.15);
  z-index: 99999;
  border-radius: 4px;
}
.member-swatch-mobile:active {
  transform: scaleY(1.35) scaleX(1.1);
}
.member-swatch-mobile:hover + .member-swatch-mobile {
  transform: scaleY(1.3) scaleX(1.08);
  z-index: 9999;
}
.member-swatch-mobile:hover + .member-swatch-mobile + .member-swatch-mobile {
  transform: scaleY(1.15) scaleX(1.04);
  z-index: 999;
}
.member-swatch-mobile:has(+ .member-swatch-mobile:hover) {
  transform: scaleY(1.3) scaleX(1.08);
  z-index: 9999;
}
.member-swatch-mobile:has(+ .member-swatch-mobile + .member-swatch-mobile:hover) {
  transform: scaleY(1.15) scaleX(1.04);
  z-index: 999;
}
`;

// ─── Component ───────────────────────────────────────────────────────
export default function TeamMember() {
  const { memberId } = useParams<{ memberId: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isEn = i18n.language.startsWith("en");

  const member = MEMBERS[memberId || ""];

  if (!member) {
    return (
      <div className="flex items-center justify-center" style={{ height: "100vh", backgroundColor: "#1b1b1b" }}>
        <div className="text-center">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "24px", color: "#FBFEF9", marginBottom: "20px" }}>
            {isEn ? "Member not found" : "Miembro no encontrado"}
          </p>
          <button
            onClick={() => navigate("/about")}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              color: "#FB5000",
              background: "none",
              border: "1px solid #FB5000",
              padding: "10px 24px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            ← {isEn ? "Back to About" : "Volver a Quienes Somos"}
          </button>
        </div>
      </div>
    );
  }

  const firstName = isEn ? member.firstNameEn : member.firstNameEs;
  const lastName = isEn ? member.lastNameEn : member.lastNameEs;
  const role = isEn ? member.roleEn : member.roleEs;
  const bio = isEn ? member.bioEn : member.bioEs;

  return (
    <>
      <style>{memberCSS}</style>

      {/* MOBILE LAYOUT */}
      <div className="block md:hidden" style={{
        backgroundColor: "#1b1b1b",
        backgroundImage: "url(/assets/bg-gradient-dark.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        paddingBottom: "40px",
      }}>

        {/* Name + Photo row */}
        <div style={{ padding: "116px 16px 0", display: "flex", gap: "0px" }}>
          {/* Left: Name + Role + Awards */}
          <div style={{ flex: 1, paddingTop: "16px" }}>
            {/* Name */}
            <h1 style={{
              fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400,
              fontSize: "28px", lineHeight: "32px", color: "#FFFFFF", marginBottom: "20px",
            }}>
              {firstName} {lastName}
            </h1>

            {/* Role */}
            <p style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 700,
              fontSize: "14px", lineHeight: "17px", color: "#FB5000", marginBottom: "16px",
            }}>
              {role}
            </p>

            {/* Awards mini list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
              {member.awards.slice(0, 4).map((award, idx) => (
                <div key={idx} style={{
                  display: "flex", alignItems: "center", gap: "8px",
                }}>
                  <img src="/assets/galardones.svg" alt="Award" style={{ width: "24px", height: "22px", objectFit: "contain" }} />
                  <span style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 400,
                    fontSize: "11px", lineHeight: "14px", color: "#FFFFFF",
                  }}>
                    {isEn ? award.titleEn : award.titleEs}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div style={{
            width: "214px", height: "319px", flexShrink: 0,
            backgroundColor: "#D9D9D9", overflow: "hidden",
          }}>
            <img src={member.image} alt={`${firstName} ${lastName}`}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = "none"; }} />
          </div>
        </div>

        {/* Bio text */}
        <div style={{ padding: "32px 16px 0" }}>
          {bio.split("\n\n").map((paragraph, idx) => (
            <p key={idx} style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: "14px", lineHeight: "18px", color: "#FBFEF9",
              marginBottom: "16px",
            }}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Featured image with arrows */}
        <div style={{ padding: "24px 22px 0" }}>
          <div style={{
            position: "relative", width: "100%", aspectRatio: "385 / 268",
            backgroundColor: "#D9D9D9", overflow: "hidden", marginBottom: "16px",
          }}>
            <img src={member.featuredImage} alt="" className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = "none"; }} />
            <button style={{
              position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)",
              width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.4)", borderRadius: "50%", border: "none", cursor: "pointer",
            }} aria-label="Previous">
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none"><path d="M14 3L6 10.5L14 18" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button style={{
              position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)",
              width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.4)", borderRadius: "50%", border: "none", cursor: "pointer",
            }} aria-label="Next">
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none"><path d="M8 3L16 10.5L8 18" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>

          {/* Filmography label */}
          <h3 style={{
            fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400,
            fontSize: "18px", lineHeight: "22px", color: "#FFFFFF",
            marginBottom: "12px", textAlign: "center",
          }}>
            {isEn ? "FEATURED FILMOGRAPHY" : "FILMOGRAFIA DESTACADA"}
          </h3>

          {/* Color dock strip */}
          <div className="member-strip-mobile" style={{ marginTop: "12px", paddingBottom: "16px" }}>
            {COLOR_STRIP_MOBILE.map((color, idx) => (
              <button
                key={`m-swatch-${idx}`}
                className="member-swatch-mobile"
                style={{ "--color": color } as React.CSSProperties}
              />
            ))}
          </div>
        </div>

        {/* Back button */}
        <div style={{ padding: "32px 16px 0" }}>
          <button
            onClick={() => navigate("/about")}
            style={{
              display: "flex", alignItems: "center", gap: "8px",
              fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px",
              color: "#FBFEF9", backgroundColor: "#1b1b1b", border: "1px solid #FBFEF9",
              padding: "10px 20px", borderRadius: "4px", cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#fb5000"; e.currentTarget.style.borderColor = "#fb5000"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#1b1b1b"; e.currentTarget.style.borderColor = "#FBFEF9"; }}
          >
            ← {isEn ? "Back to About" : "Volver a Quienes Somos"}
          </button>
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:block">
      <div
        className="w-full"
        style={{
          backgroundColor: "#1b1b1b",
          backgroundImage: "url(/assets/bg-gradient-dark.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >

        {/* ═══ HERO — 700px, Checker bg + giant name ═══
            Figma: Rectangle 39 with Checker.png + gradient overlay
            Name: Martillo Completa 180px, "DIRECTOR DE ARTE": Inter 55px bold
        */}
        <section
          className="relative w-full"
          style={{
            height: "700px",
            backgroundImage: "linear-gradient(180deg, rgba(102,102,102,0) 0%, rgba(0,0,0,0.2) 48.56%), url(/assets/Checker.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Name — left aligned, large */}
          <div
            className="absolute flex flex-col items-start"
            style={{
              left: "50px",
              top: "200px",
              width: "884px",
              filter: "drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.5))",
            }}
          >
            <span style={{
              fontFamily: "'Martillo Completa', sans-serif",
              fontWeight: 400,
              fontSize: "180px",
              lineHeight: "181px",
              color: "#FBFEF9",
              width: "100%",
            }}>
              {firstName}
            </span>
            <span style={{
              fontFamily: "'Martillo Completa', sans-serif",
              fontWeight: 400,
              fontSize: "180px",
              lineHeight: "181px",
              color: "#FBFEF9",
              width: "100%",
              textAlign: "right",
            }}>
              {lastName}
            </span>
          </div>

          {/* Role — positioned to the right of first name */}
          <div
            className="absolute"
            style={{
              left: "734px",
              top: "260px",
              width: "542px",
              textShadow: "0px 0px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "55px",
              lineHeight: "67px",
              color: "#FFFFFF",
              textAlign: "center",
              display: "block",
            }}>
              {role}
            </span>
          </div>
        </section>

        {/* ═══ GRADIENT OVERLAY — Figma Rectangle 41 ═══
            linear-gradient rotated 180deg:
            0% transparent → 79.81% solid black → 100% transparent
            Since it's rotated, actual = transparent top → solid ~80% → transparent bottom
        */}
        <div
          className="relative w-full"
          style={{
            backgroundImage: `linear-gradient(180deg,
              rgba(1, 1, 0, 0) 0%,
              rgba(1, 1, 0, 1) 20%,
              rgba(1, 1, 0, 1) 80%,
              rgba(0, 0, 0, 0) 100%
            )`,
          }}
        >

          {/* ═══ BIO SECTION ═══
              Figma: Text 770px left + Photo 543×814 right
          */}
          <div
            className="mx-auto flex"
            style={{ maxWidth: "1440px", padding: "0 50px", gap: "27px" }}
          >
            {/* Left: Bio text */}
            <div style={{ width: "770px", flexShrink: 0 }}>
              {bio.split("\n\n").map((paragraph, idx) => (
                <p
                  key={idx}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "25px",
                    lineHeight: "30px",
                    color: "#FFFFFF",
                    marginBottom: idx < bio.split("\n\n").length - 1 ? "30px" : "0",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Right: Photo */}
            <div
              style={{
                width: "543px",
                height: "814px",
                backgroundColor: "#D9D9D9",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              <img
                src={member.image}
                alt={`${firstName} ${lastName}`}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
          </div>

          {/* ═══ FILMOGRAPHY ═══
              Figma: Title 72px + 6 thumbnails (201×302, gap 27px)
          */}
          <div className="mx-auto" style={{ maxWidth: "1440px", padding: "80px 50px 0" }}>
            <h2 style={{
              fontFamily: "'Martillo Completa', sans-serif",
              fontWeight: 400,
              fontSize: "72px",
              lineHeight: "72px",
              color: "#FFFFFF",
              marginBottom: "76px",
            }}>
              {isEn ? "FEATURED FILMOGRAPHY" : "FILMOGRAFIA DESTACADA"}
            </h2>

            <div className="flex" style={{ gap: "27px" }}>
              {member.filmography.map((film, idx) => (
                <div
                  key={idx}
                  style={{
                    width: "201px",
                    height: "302px",
                    backgroundColor: "#D9D9D9",
                    flexShrink: 0,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={film.image}
                    alt={isEn ? film.titleEn : film.titleEs}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ═══ AWARDS + FEATURED IMAGE ═══
              Figma: Left side = featured image (770×513) + color strip (770×76)
                     Right side = 6 award rows (543px wide)
          */}
          <div
            className="mx-auto flex"
            style={{ maxWidth: "1440px", padding: "80px 50px 80px", gap: "27px" }}
          >
            {/* Left: Featured image + color strip */}
            <div style={{ width: "770px", flexShrink: 0 }}>
              {/* Featured image */}
              <div
                style={{
                  width: "770px",
                  height: "513px",
                  backgroundColor: "#D9D9D9",
                  overflow: "hidden",
                  marginBottom: "49px",
                }}
              >
                <img
                  src={member.featuredImage}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>

              {/* Color strip — Cobp dock effect */}
              <div
                className="member-strip"
                style={{ width: "770px" }}
              >
                {COLOR_STRIP.map((color, idx) => (
                  <button
                    key={idx}
                    className="member-swatch"
                    style={{ "--color": color } as React.CSSProperties}
                    data-label={color}
                    aria-label={color}
                  />
                ))}
              </div>
            </div>

            {/* Right: Awards list */}
            <div className="flex flex-col" style={{ width: "543px", gap: "19px" }}>
              {member.awards.map((award, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between"
                  style={{ height: "90px" }}
                >
                  <div className="flex flex-col">
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "40px",
                      lineHeight: "48px",
                      color: "#FFFFFF",
                    }}>
                      {isEn ? award.titleEn : award.titleEs}
                    </span>
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      fontSize: "24px",
                      lineHeight: "29px",
                      color: "#FFFFFF",
                    }}>
                      {isEn ? award.roleEn : award.roleEs}
                    </span>
                  </div>
                  <img
                    src="/assets/galardones.svg"
                    alt="Award"
                    style={{ width: "87px", height: "80px", objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      </div>
    </>
  );
}
