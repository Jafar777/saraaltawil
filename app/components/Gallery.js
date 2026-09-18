"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const EASE = [0.16, 1, 0.3, 1];

const POSTERS = Array.from({ length: 13 }, (_, i) =>
  String(i + 1).padStart(2, "0")
);

export default function Gallery() {
  const { lang, t } = useLanguage();
  const rtl = lang === "ar";

  return (
    <section id="gallery" className="bg-black px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-7xl">
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
            {t.gallery.eyebrow}
          </span>
          <h2
            className={`text-3xl font-semibold tracking-wide text-white uppercase sm:text-4xl ${
              rtl ? "font-arabic-heading tracking-normal normal-case" : ""
            }`}
          >
            {t.gallery.heading}
          </h2>
          <p
            className={`max-w-xl text-sm leading-6 text-zinc-400 ${
              rtl ? "font-arabic-body" : ""
            }`}
          >
            {t.gallery.subtitle}
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {POSTERS.map((n, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: (i % 5) * 0.08,
                ease: EASE,
              }}
              whileHover={{ scale: 1.04 }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-zinc-900"
            >
              <Image
                src={`/gallery/poster-${n}.jpg`}
                alt="Sara Altawil — production poster"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
