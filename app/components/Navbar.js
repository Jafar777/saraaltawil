"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const LINK_IDS = ["home", "about", "gallery", "filmography", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const rtl = lang === "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className={`text-base font-semibold tracking-[0.15em] text-white uppercase sm:text-lg ${
            rtl ? "font-arabic-body" : ""
          }`}
        >
          {t.footer.brand}
        </a>
        <ul
          className={`hidden gap-10 text-xs font-medium tracking-[0.2em] text-zinc-200 uppercase sm:flex ${
            rtl ? "font-arabic-body" : ""
          }`}
        >
          {LINK_IDS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="transition-colors hover:text-white"
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Toggle language"
            className={`rounded-full border border-zinc-600 px-4 py-1.5 text-xs tracking-[0.15em] text-zinc-200 uppercase transition-colors hover:border-rose-300/60 hover:text-white ${
              lang === "en" ? "font-arabic-body" : ""
            }`}
          >
            {t.nav.langButton}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative z-50 flex h-4 w-6 flex-col justify-between sm:hidden"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="h-px w-6 origin-center bg-white"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="h-px w-6 bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="h-px w-6 origin-center bg-white"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-black/95 backdrop-blur-sm sm:hidden"
          >
            <ul
              dir={rtl ? "rtl" : "ltr"}
              className={`flex flex-col px-6 py-2 text-sm tracking-[0.2em] text-zinc-200 uppercase ${
                rtl ? "font-arabic-body" : ""
              }`}
            >
              {LINK_IDS.map((id) => (
                <li key={id} className="border-b border-zinc-800">
                  <a
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 transition-colors hover:text-white"
                  >
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
