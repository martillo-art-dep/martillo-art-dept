import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  return (
    <section
      className="px-6 py-24 md:px-[50px] md:py-32"
      style={{ backgroundColor: "#010100" }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1
          className="font-display text-3xl font-normal uppercase tracking-[0.2em] md:text-4xl"
          style={{ color: "#F8F1CD" }}
        >
          {t("nav.services")}
        </h1>
        <p className="mt-6 font-sans text-[#9ca3af]">Contenido próximamente.</p>
      </div>
    </section>
  );
}
