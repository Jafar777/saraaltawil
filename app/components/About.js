"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const EASE = [0.16, 1, 0.3, 1];
const FACT_KEYS = ["born", "nationality", "education"];

export default function About() {
  const { lang, t } = useLanguage();
  const rtl = lang === "ar";

  return (
    <section id="about" className="overflow-hidden bg-zinc-950 px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-zinc-900"
        >
          <Image
            src="/about.jpg"
            alt="Sara Altawil"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-[50%_20%]"
          />
        </motion.div>
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: EASE }}
            dir={rtl ? "rtl" : "ltr"}
            className={`text-xs tracking-[0.3em] text-rose-300/80 uppercase ${
              rtl ? "font-arabic-body" : ""
            }`}
          >
            {t.about.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
            dir={rtl ? "rtl" : "ltr"}
            className={`text-3xl font-semibold tracking-wide text-white uppercase sm:text-4xl ${
              rtl ? "font-arabic-heading tracking-normal normal-case" : ""
            }`}
          >
            {t.about.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            dir={rtl ? "rtl" : "ltr"}
            className={`text-sm tracking-wide text-zinc-400 ${
              rtl ? "font-arabic-body" : ""
            }`}
          >
            {t.about.tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            dir={rtl ? "rtl" : "ltr"}
            className={`text-sm leading-7 text-zinc-400 ${
              rtl ? "font-arabic-body" : ""
            }`}
          >
            {t.about.bio}
          </motion.p>
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            dir={rtl ? "rtl" : "ltr"}
            className="flex flex-wrap gap-x-8 gap-y-3 border-t border-zinc-800 pt-6"
          >
            {FACT_KEYS.map((key) => (
              <div key={key} className="flex flex-col gap-1">
                <dt
                  className={`text-[10px] tracking-[0.2em] text-zinc-500 uppercase ${
                    rtl ? "font-arabic-body" : ""
                  }`}
                >
                  {t.about.factsLabels[key]}
                </dt>
                <dd
                  className={`text-sm text-zinc-200 ${
                    rtl ? "font-arabic-body" : ""
                  }`}
                >
                  {t.about.factsValues[key]}
                </dd>
              </div>
            ))}
          </motion.dl>
          <motion.a
            href="https://www.instagram.com/saraeltawil/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`mt-2 w-fit border border-zinc-500 px-6 py-3 text-xs tracking-[0.25em] text-white uppercase transition-colors hover:bg-white hover:text-black ${
              rtl ? "font-arabic-body" : ""
            }`}
          >
            {t.about.cta}
          </motion.a>
        </div>
      </div>
    </section>
  );
}
