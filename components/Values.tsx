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

const values = [
  {
    title: "Human Health",
    description:
      "Targeted herbicide application means dramatically lower chemical exposure for farming communities, rural water supplies, and the food chain.",
    detail: "Fewer chemicals. Safer food. Healthier communities.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Environmental Sustainability",
    description:
      "Precision application minimizes herbicide runoff into waterways, reduces harm to wildlife and pollinators, and curbs the biodiversity loss linked to blanket spraying.",
    detail: "Clean water. Thriving ecosystems. Less harm.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Food Democracy",
    description:
      "Enterprise-grade agronomic intelligence — previously available only to large agri-corporations — priced at $3/acre so every farmer, everywhere, can compete.",
    detail: "World-class tools. For every farm.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function Values() {
  return (
    <section id="values" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#86efac]/60 mb-4 block">
            Values
          </span>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0faf0] tracking-tight mb-4">
            Why it matters
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-[#8aab8a] text-lg max-w-xl mb-16">
            Better herbicide decisions ripple outward — from individual farms
            to entire food systems and ecosystems.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((val, i) => (
            <FadeUp key={val.title} delay={0.1 + i * 0.1}>
              <div className="flex flex-col h-full bg-[#111811] border border-[#1e2a1e] rounded-2xl p-7 hover:border-[#86efac]/30 transition-colors duration-300 group">
                <div className="text-[#86efac]/70 mb-5 group-hover:text-[#86efac] transition-colors duration-200">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-[#f0faf0] mb-3">
                  {val.title}
                </h3>
                <p className="text-sm text-[#8aab8a] leading-relaxed flex-1 mb-5">
                  {val.description}
                </p>
                <p className="text-xs font-semibold text-[#86efac]/70 border-t border-[#1e2a1e] pt-4">
                  {val.detail}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Trust signal */}
        <FadeUp delay={0.4}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <div className="h-px flex-1 bg-[#1e2a1e] hidden sm:block" />
            <p className="text-sm text-[#8aab8a] px-6">
              Built by weed scientists from{" "}
              <span className="text-[#f0faf0] font-medium">UC Davis</span> &amp;{" "}
              <span className="text-[#f0faf0] font-medium">Volcani Institute</span>
              {" "}· NSF SBIR Finalist
            </p>
            <div className="h-px flex-1 bg-[#1e2a1e] hidden sm:block" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
