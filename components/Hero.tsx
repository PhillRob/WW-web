"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(74,222,128,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Satellite grid motif */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(134,239,172,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(134,239,172,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#86efac] border border-[#86efac]/30 rounded-full px-3 py-1 mb-8">
            Crop Health for the 21st Century
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-7xl font-bold leading-[1.05] tracking-tight text-[#f0faf0] mb-6"
        >
          Precision herbicide.
          <br />
          <span className="text-[#86efac]">Planet-scale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg sm:text-xl text-[#8aab8a] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          WeedWatch AI combines satellite imagery and machine learning to tell
          farmers exactly where weeds are and exactly when to act — cutting
          costs, chemical use, and environmental harm.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:hello@weedwatch.ai"
            className="px-7 py-3 rounded-full bg-[#86efac] text-[#080c08] font-semibold text-sm hover:bg-[#4ade80] transition-colors duration-200"
          >
            Request Early Access
          </a>
          <a
            href="#vision"
            className="px-7 py-3 rounded-full border border-[#1e2a1e] text-[#8aab8a] font-medium text-sm hover:border-[#86efac]/40 hover:text-[#f0faf0] transition-all duration-200"
          >
            Learn more
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ animation: "scroll-bounce 2s ease-in-out infinite" }}
      >
        <div className="w-px h-8 bg-gradient-to-b from-[#86efac]/40 to-transparent" />
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          className="text-[#86efac]/40"
        >
          <path
            d="M1 1L6 6L11 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
