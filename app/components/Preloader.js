"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

export default function Preloader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const openTimer = setTimeout(() => setOpen(true), 1000);
    const releaseTimer = setTimeout(() => {
      document.body.style.overflow = "";
    }, 2100);
    return () => {
      clearTimeout(openTimer);
      clearTimeout(releaseTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[999] flex ${
        open ? "pointer-events-none" : ""
      }`}
    >
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: open ? "-100%" : 0 }}
        transition={{ duration: 1.1, ease: EASE }}
        className="relative h-full w-1/2 overflow-hidden bg-black"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute top-1/2 right-0 -translate-y-1/2 pr-1 text-2xl font-semibold tracking-[0.2em] text-white uppercase sm:text-4xl"
        >
          Sara
        </motion.span>
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: open ? "100%" : 0 }}
        transition={{ duration: 1.1, ease: EASE }}
        className="relative h-full w-1/2 overflow-hidden bg-black"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute top-1/2 left-0 -translate-y-1/2 pl-1 text-2xl font-semibold tracking-[0.2em] text-white uppercase sm:text-4xl"
        >
          Altawil
        </motion.span>
      </motion.div>
    </div>
  );
}
