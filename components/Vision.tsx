"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "$0.50", label: "per acre" },
  { value: "80%", label: "accuracy" },
  { value: "Seconds", label: "to insight" },
  { value: "Always-on", label: "monitoring" },
];

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

export default function Vision() {
  return (
    <section id="vision" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <FadeUp>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#86efac]/60 mb-12 block">
            Vision
          </span>
        </FadeUp>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <FadeUp delay={0.1}>
            <blockquote className="text-3xl sm:text-4xl font-bold leading-tight text-[#f0faf0] tracking-tight">
              &ldquo;$6.6B spent on herbicide annually in the US alone.
              <br />
              <span className="text-[#86efac]">Most of it is wasted.</span>
              &rdquo;
            </blockquote>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="space-y-5 text-[#8aab8a] text-base leading-relaxed">
              <p>
                Farmers today apply herbicides on arbitrary schedules across
                entire fields — regardless of where weeds actually are. The
                result is over-application: costly for farmers, toxic for
                ecosystems, and entirely avoidable.
              </p>
              <p>
                WeedWatch AI replaces guesswork with intelligence. By fusing
                high-resolution satellite data with field-trained machine
                learning models, we deliver precise infestation maps and
                optimized spray schedules — at a fraction of the cost of any
                alternative.
              </p>
              <p>
                The technology exists. The data is overhead. The only missing
                piece was the model to make sense of it — and that is what we
                built.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Stat strip */}
        <FadeUp delay={0.3}>
          <div className="grid grid-cols-2 sm:grid-cols-4 border border-[#1e2a1e] rounded-2xl overflow-hidden">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-8 py-8 text-center ${
                  i < stats.length - 1
                    ? "border-b sm:border-b-0 sm:border-r border-[#1e2a1e]"
                    : ""
                }`}
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#86efac] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[#8aab8a]">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
