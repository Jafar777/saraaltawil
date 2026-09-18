"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const EASE = [0.16, 1, 0.3, 1];

function handleSubmit(e) {
  e.preventDefault();
}

export default function Contact() {
  const { lang, t } = useLanguage();
  const rtl = lang === "ar";

  const fields = [
    { id: "name", label: t.contact.name, type: "text" },
    { id: "email", label: t.contact.email, type: "email" },
  ];

  return (
    <section id="contact" className="bg-black px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: EASE }}
          dir={rtl ? "rtl" : "ltr"}
          className="mb-12 flex flex-col items-center gap-3 text-center"
        >
          <span
            className={`text-xs tracking-[0.3em] text-rose-300/80 uppercase ${
              rtl ? "font-arabic-body" : ""
            }`}
          >
            {t.contact.eyebrow}
          </span>
          <h2
            className={`text-3xl font-semibold tracking-wide text-white uppercase sm:text-4xl ${
              rtl ? "font-arabic-heading tracking-normal normal-case" : ""
            }`}
          >
            {t.contact.heading}
          </h2>
          <p
            className={`max-w-md text-sm leading-6 text-zinc-400 ${
              rtl ? "font-arabic-body" : ""
            }`}
          >
            {t.contact.subtitle}
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          dir={rtl ? "rtl" : "ltr"}
          className="flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field.id} className="flex flex-col gap-2">
                <label
                  htmlFor={field.id}
                  className={`text-xs tracking-[0.2em] text-zinc-400 uppercase ${
                    rtl ? "font-arabic-body" : ""
                  }`}
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  required
                  className={`border-b border-zinc-700 bg-transparent py-2 text-sm text-white outline-none transition-colors focus:border-rose-300 ${
                    rtl ? "font-arabic-body" : ""
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="subject"
              className={`text-xs tracking-[0.2em] text-zinc-400 uppercase ${
                rtl ? "font-arabic-body" : ""
              }`}
            >
              {t.contact.subject}
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className={`border-b border-zinc-700 bg-transparent py-2 text-sm text-white outline-none transition-colors focus:border-rose-300 ${
                rtl ? "font-arabic-body" : ""
              }`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className={`text-xs tracking-[0.2em] text-zinc-400 uppercase ${
                rtl ? "font-arabic-body" : ""
              }`}
            >
              {t.contact.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className={`resize-none border-b border-zinc-700 bg-transparent py-2 text-sm text-white outline-none transition-colors focus:border-rose-300 ${
                rtl ? "font-arabic-body" : ""
              }`}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.97 }}
            className={`mt-2 w-fit border border-rose-300/60 px-7 py-3 text-xs tracking-[0.25em] text-white uppercase ${
              rtl ? "font-arabic-body" : ""
            }`}
          >
            {t.contact.send}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
