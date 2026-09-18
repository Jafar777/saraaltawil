"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const EASE = [0.16, 1, 0.3, 1];

const CREDITS = [
  { title: "Portrait", original: "بورتريه", year: "2020", type: "Series" },
  { title: "The Harem", original: "الحرملك", year: "2019", type: "Series" },
  {
    title: "The Harem — Season 2",
    original: "الحرملك ج٢",
    year: "2020",
    type: "Series",
  },
  {
    title: "Chicago Street",
    original: "شارع شيكاغو",
    year: "2020",
    type: "Series",
  },
  {
    title: "A Trace of Someone",
    original: "بصمة حدا",
    year: "2020",
    type: "Series",
  },
  {
    title: "Tomorrow Comes April",
    original: "بكرا بيجي نيسان",
    year: "2021",
    type: "Series",
  },
  {
    title: "On Hot Tin",
    original: "على صفيح ساخن",
    year: "2021",
    type: "Series",
  },
  {
    title: "The World Is a Party",
    original: "الدنيا حفلة",
    year: "2019",
    type: "Film",
  },
  {
    title: "Searching for Juliet",
    original: "البحث عن جولييت",
    year: "2020",
    type: "Film",
  },
  {
    title: "Beehive Road",
    original: "طريق النحل",
    year: "2017",
    type: "Film",
  },
  { title: "Tent 56", original: "خيمة 56", year: "2022", type: "Short Film" },
];

export default function Filmography() {
  const { lang, t } = useLanguage();
  const rtl = lang === "ar";

  return (
    <section id="filmography" className="bg-zinc-950 px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-4xl">
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
            {t.filmography.eyebrow}
          </span>
          <h2
            className={`text-3xl font-semibold tracking-wide text-white uppercase sm:text-4xl ${
              rtl ? "font-arabic-heading tracking-normal normal-case" : ""
            }`}
          >
            {t.filmography.heading}
          </h2>
        </motion.div>
        <ul className="divide-y divide-zinc-800 border-y border-zinc-800">
          {CREDITS.map((credit, i) => {
            const primary = rtl ? credit.original : credit.title;
            const secondary = rtl ? credit.title : credit.original;
            return (
              <motion.li
                key={credit.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: EASE }}
                dir={rtl ? "rtl" : "ltr"}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <div className="flex flex-col gap-0.5">
                  <span
                    className={`text-base text-zinc-100 ${
                      rtl ? "font-arabic-body" : ""
                    }`}
                  >
                    {primary}
                  </span>
                  <span
                    dir={rtl ? "ltr" : "rtl"}
                    className={`text-sm text-zinc-500 ${
                      rtl ? "" : "font-arabic-body"
                    }`}
                  >
                    {secondary}
                  </span>
                </div>
                <div
                  className={`flex items-center gap-4 text-xs tracking-[0.15em] text-zinc-500 uppercase ${
                    rtl ? "font-arabic-body" : ""
                  }`}
                >
                  <span>{t.filmography.types[credit.type]}</span>
                  <span className="text-zinc-600">{credit.year}</span>
                </div>
              </motion.li>
            );
          })}
        </ul>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://elcinema.com/person/2118920/"
            target="_blank"
            rel="noopener noreferrer"
            className={`border border-zinc-500 px-6 py-3 text-xs tracking-[0.25em] text-white uppercase transition-colors hover:bg-white hover:text-black ${
              rtl ? "font-arabic-body" : ""
            }`}
          >
            {t.filmography.viewProfile}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
