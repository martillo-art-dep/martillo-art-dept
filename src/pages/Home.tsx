import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const services = [
  { key: "branding", icon: "palette" },
  { key: "illustration", icon: "brush" },
  { key: "design", icon: "layers" },
] as const;

const clients = [
  "Netflix",
  "Prime Video",
  "Focus Features",
  "HBO",
  "A24",
  "Sony",
] as const;

const ServiceIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "palette":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072"
          />
        </svg>
      );
    case "brush":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
          />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.43 9.75m11.142 0l4.179 2.25L12 17.25 2.25 12l4.179-2.25m11.142 0l4.179 2.25-9.75 5.25-9.75-5.25 4.179-2.25"
          />
        </svg>
      );
  }
};

export default function Home() {
  const { t } = useTranslation();

  const handleScrollDown = () => {
    const el = document.getElementById("home-services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Hero full viewport */}
      <section className="relative overflow-hidden bg-black px-4 py-16 text-center sm:px-6 lg:px-8">
        {/* Textured dark background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#1f2933,_#020617_55%,_#000000_100%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='noStitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center">
          <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-neutral-400">
            DEPARTAMENTO DE ARTE PARA CINE · SERIES · PUBLICIDAD
          </p>

          <h1 className="font-display text-4xl uppercase tracking-[0.3em] text-white sm:text-5xl lg:text-6xl">
            <span className="block text-[0.9em]">MARTILLO</span>
            <span className="mt-3 block text-[0.7em] text-brand-500">
              ART&nbsp;DEPT
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-sm text-neutral-300 sm:text-base">
            {t("home.hero_subtitle")}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-10 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-[0_0_0_1px_rgba(0,0,0,0.8)] transition-transform transition-colors hover:-translate-y-0.5 hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {t("home.cta")}
            </Link>
            <span className="text-[0.7rem] uppercase tracking-[0.25em] text-neutral-500">
              {t("home.hero_title")}
            </span>
          </div>

          {/* Client logos bar */}
          <div className="mt-16 w-full border-t border-neutral-800 pt-6">
            <div className="flex items-center justify-between gap-4 text-left sm:items-center sm:gap-8">
              <div className="flex flex-col items-start text-left">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-brand-500">
                  CLIENTES
                </span>
                <span className="mt-1 text-xs text-neutral-400">
                  Selección de estudios y plataformas.
                </span>
              </div>

              <div className="flex-1 overflow-x-auto">
                <div className="flex min-w-max items-center gap-6 pl-4 sm:pl-0">
                  {clients.map((client) => (
                    <div
                      key={client}
                      className="whitespace-nowrap rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-neutral-200 shadow-[0_0_0_1px_rgba(0,0,0,0.7)]"
                    >
                      {client}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <button
            type="button"
            onClick={handleScrollDown}
            className="mt-10 inline-flex flex-col items-center text-[0.6rem] uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-brand-500"
          >
            <span>SCROLL</span>
            <span className="mt-2 inline-flex h-9 w-px items-center justify-center bg-gradient-to-b from-transparent via-neutral-600 to-brand-600">
              <span className="h-2 w-2 translate-y-3 rotate-45 border-b border-r border-brand-600" />
            </span>
          </button>
        </div>
      </section>

      {/* Services / capabilities */}
      <section
        id="home-services"
        className="bg-neutral-950 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-brand-500">
                SERVICIOS
              </p>
              <h2 className="mt-3 font-display text-2xl uppercase tracking-[0.25em] text-neutral-50 sm:text-3xl">
                {t("home.services_title")}
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-neutral-400 sm:text-sm">
              Diseño y dirección de arte con enfoque cinematográfico: desde
              la conceptualización hasta la entrega final en set o post.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ key, icon }) => (
              <article
                key={key}
                className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.8)] transition-transform transition-shadow hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.75)]"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(251,80,0,0.18),_transparent_55%)]" />
                </div>
                <div className="relative z-10">
                  <div className="mb-5 inline-flex rounded-md border border-neutral-700 bg-neutral-900/70 p-3 text-brand-500">
                    <ServiceIcon type={icon} />
                  </div>
                  <h3 className="font-display text-base font-semibold uppercase tracking-[0.2em] text-neutral-50">
                    {t(`home.service_${key}`)}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-neutral-400 sm:text-sm">
                    {t(`home.service_${key}_desc`)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
