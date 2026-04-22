"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const steps = [
  {
    number: "01",
    title: "Observe",
    headline: "Satellite eyes on every field",
    description:
      "High-resolution satellite imagery gives us continuous, planet-wide coverage. Cheap, scalable, and unaffected by weather or physical access constraints.",
    tags: ["Always-on", "Global coverage", "$0.50 / acre"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Analyse",
    headline: "Intelligence trained on real fields",
    description:
      "Our ML models integrate weed typology, weather patterns, and field conditions. Trained on ground-truth field data by veteran weed scientists from UC Davis and the Volcani Institute.",
    tags: ["Field-validated", "Adaptive models", "Holistic inputs"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Act",
    headline: "Precision maps, delivered in seconds",
    description:
      "Farmers receive a spatial infestation map plus an optimized spray schedule: treat only the affected zones, at exactly the right time. 80% accuracy. No guesswork.",
    tags: ["80% accuracy", "Zone-level maps", "Timing optimization"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-32 px-6 bg-[#0a0e0a]">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#86efac]/60 mb-4 block">
            Approach
          </span>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0faf0] tracking-tight mb-4">
            How it works
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-[#8aab8a] text-lg max-w-xl mb-16">
            Three steps from orbit to action — faster and cheaper than any
            alternative on the market.
          </p>
        </FadeUp>

        {/* Bento grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <FadeUp key={step.number} delay={0.1 + i * 0.1}>
              <div className="relative h-full flex flex-col bg-[#111811] border border-[#1e2a1e] rounded-2xl p-7 hover:border-[#86efac]/30 transition-colors duration-300 group">
                {/* Step number */}
                <span className="text-xs font-semibold text-[#86efac]/40 tracking-widest mb-6">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="text-[#86efac]/70 mb-5 group-hover:text-[#86efac] transition-colors duration-200">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#f0faf0] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm font-medium text-[#86efac]/80 mb-3">
                  {step.headline}
                </p>

                {/* Description */}
                <p className="text-sm text-[#8aab8a] leading-relaxed flex-1 mb-6">
                  {step.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#1a231a] text-[#8aab8a] border border-[#1e2a1e]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
