import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const current = i18n.language.startsWith("es") ? "es" : "en";

  const toggle = () => {
    i18n.changeLanguage(current === "es" ? "en" : "es");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Switch language"
      className="inline-flex items-center gap-1 rounded-full border border-neutral-700 bg-neutral-900/60 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-200 transition-colors hover:border-brand-500 hover:bg-brand-600/10 hover:text-brand-500"
    >
      {current === "es" ? t("language.en") : t("language.es")}
    </button>
  );
}
