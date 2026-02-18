import { useTranslation } from "react-i18next";

const values = ["creativity", "quality", "collaboration"] as const;

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Intro */}
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-neutral-900 sm:text-4xl">
            {t("about.title")}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            {t("about.intro")}
          </p>
        </div>

        {/* Mission */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 p-8 sm:p-12">
          <h2 className="font-display text-2xl font-bold text-neutral-900">
            {t("about.mission_title")}
          </h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            {t("about.mission_text")}
          </p>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h2 className="font-display text-center text-2xl font-bold text-neutral-900">
            {t("about.values_title")}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <span className="text-xl font-bold">
                    {t(`about.value_${value}`).charAt(0)}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-neutral-900">
                  {t(`about.value_${value}`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {t(`about.value_${value}_desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
