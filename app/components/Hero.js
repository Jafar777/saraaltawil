"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const EASE = [0.16, 1, 0.3, 1];

const petals = Array.from({ length: 7 }, (_, i) => ({
  id: i,
  left: 8 + i * 13 + (i % 2) * 5,
  size: 6 + (i % 3) * 4,
  duration: 9 + (i % 4) * 3,
  delay: i * 1.4,
}));

export default function Hero() {
  const { lang, t } = useLanguage();
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsFirst(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });
  const imageX = useTransform(springX, [-1, 1], [-16, 16]);
  const imageY = useTransform(springY, [-1, 1], [-10, 10]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }

  const titleBaseDelay = isFirst ? 1.5 : 0;
  const titleStagger = isFirst ? 0.08 : 0.02;

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex h-screen w-full items-center overflow-hidden bg-black"
    >
      {/* full-bleed sunlit landscape backdrop */}
      <motion.div
        style={{ x: imageX, y: imageY }}
        initial={{ opacity: 0, scale: 1.12 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: 1, ease: EASE }}
        className="absolute inset-0 h-full w-full"
        data-hero-image
      >
        <Image
          src="/herogirlimage.png"
          alt="Sara Altawil"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_35%]"
        />
      </motion.div>

      {/* soft top scrim so the nav stays legible over bright sky */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />

      {/* floating petals, nodding to the flower in her hand */}
      {petals.map((p) => (
        <motion.span
          key={p.id}
          className="pointer-events-none absolute bottom-0 rounded-full bg-rose-500/70"
          style={{ left: `${p.left}%`, width: p.size, height: p.size * 1.3 }}
          animate={{
            y: ["0vh", "-95vh"],
            x: [0, p.id % 2 === 0 ? 30 : -30, 0],
            opacity: [0, 0.8, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />

      <div className="relative z-10 flex w-full flex-col gap-6 px-6 sm:px-10 md:max-w-xl md:px-16">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          dir={lang === "ar" ? "rtl" : "ltr"}
          className={`text-xs tracking-[0.35em] text-rose-300/90 uppercase ${
            lang === "ar" ? "font-arabic-body" : ""
          }`}
        >
          {t.hero.eyebrow}
        </motion.span>

        <h1
          key={lang}
          dir={lang === "ar" ? "rtl" : "ltr"}
          className={`flex flex-col text-5xl font-bold leading-[0.95] tracking-[0.08em] text-white uppercase sm:text-7xl md:text-8xl ${
            lang === "ar" ? "font-arabic-heading tracking-normal normal-case" : ""
          }`}
        >
          {t.hero.nameLines.map((word, wi) => {
            if (lang === "en") {
              const offset = t.hero.nameLines.slice(0, wi).join("").length;
              return (
                <span key={wi} className="flex overflow-hidden">
                  {word.split("").map((letter, li) => (
                    <motion.span
                      key={li}
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: titleBaseDelay + (offset + li) * titleStagger,
                        duration: 0.8,
                        ease: EASE,
                      }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              );
            }
            return (
              <span key={wi} className="overflow-hidden">
                <motion.span
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: titleBaseDelay + wi * titleStagger * 4,
                    duration: 0.8,
                    ease: EASE,
                  }}
                  className="block"
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          dir={lang === "ar" ? "rtl" : "ltr"}
          className={`max-w-sm text-sm leading-6 tracking-wide text-zinc-300 ${
            lang === "ar" ? "font-arabic-body" : ""
          }`}
        >
          {t.hero.tagline}
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          whileHover={{ scale: 1.04, backgroundColor: "#fff", color: "#000" }}
          whileTap={{ scale: 0.97 }}
          className={`mt-2 w-fit border border-rose-300/60 px-7 py-3 text-xs tracking-[0.25em] text-white uppercase ${
            lang === "ar" ? "font-arabic-body" : ""
          }`}
        >
          {t.hero.cta}
        </motion.a>
      </div>
    </section>
  );
}
