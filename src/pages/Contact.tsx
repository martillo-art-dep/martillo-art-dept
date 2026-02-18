import type { FormEvent } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: integrate with backend or service
  };

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-neutral-900 sm:text-4xl">
            {t("contact.title")}
          </h1>
          <p className="mt-4 text-neutral-600">{t("contact.subtitle")}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-6"
          noValidate
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-neutral-700"
            >
              {t("contact.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder={t("contact.name_placeholder")}
              className="mt-2 block w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm transition-colors placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-700"
            >
              {t("contact.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder={t("contact.email_placeholder")}
              className="mt-2 block w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm transition-colors placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-700"
            >
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder={t("contact.message_placeholder")}
              className="mt-2 block w-full resize-none rounded-lg border border-neutral-300 px-4 py-3 text-sm transition-colors placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            {t("contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
}
