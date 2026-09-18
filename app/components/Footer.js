"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const EASE = [0.16, 1, 0.3, 1];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/saraeltawil/" },
  { label: "elCinema", href: "https://elcinema.com/person/2118920/" },
];

export default function Footer() {
  const { lang, t } = useLanguage();
  const rtl = lang === "ar";

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-16 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center"
      >
        <span
          className={`text-xl font-semibold tracking-[0.15em] text-white uppercase sm:text-2xl ${
            rtl ? "font-arabic-body" : ""
          }`}
        >
          {t.footer.brand}
        </span>
        <p
          dir={rtl ? "rtl" : "ltr"}
          className={`max-w-md text-sm leading-6 text-zinc-500 ${
            rtl ? "font-arabic-body" : ""
          }`}
        >
          {t.footer.tagline}
        </p>
        <ul className="flex flex-wrap justify-center gap-6 text-xs tracking-[0.2em] text-zinc-400 uppercase">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
        <p
          dir={rtl ? "rtl" : "ltr"}
          className={`text-[11px] tracking-[0.15em] text-zinc-600 uppercase ${
            rtl ? "font-arabic-body" : ""
          }`}
        >
          © {new Date().getFullYear()} {t.footer.brand}. {t.footer.rights}
        </p>
      </motion.div>
    </footer>
  );
}
