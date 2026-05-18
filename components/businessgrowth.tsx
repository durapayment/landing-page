"use client";

import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// ─── Visual 1: Global Brands — world currency ping ────────────────────────────
const GlobalVisual = () => (
  <div className="w-full h-32 rounded-xl bg-[#f0f9f6] border border-emerald-100 relative overflow-hidden flex items-center justify-center">
    {[1, 2, 3].map((ring) => (
      <motion.div
        key={ring}
        className="absolute rounded-full border border-emerald-300"
        style={{ width: ring * 36, height: ring * 36 }}
        animate={{ opacity: [0.4, 0, 0.4], scale: [1, 1.15, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: ring * 0.3 }}
      />
    ))}

    <motion.div
      className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center z-10"
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 2.5, repeat: Infinity }}>
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="none"
        stroke="white"
        strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
      </svg>
    </motion.div>

    {[
      {
        label: "USD",
        color: "bg-blue-50 text-blue-600 border-blue-100",
        pos: "left-3 top-3",
      },
      {
        label: "EUR",
        color: "bg-purple-50 text-purple-600 border-purple-100",
        pos: "right-3 top-3",
      },
      {
        label: "GBP",
        color: "bg-amber-50 text-amber-600 border-amber-100",
        pos: "left-3 bottom-3",
      },
      {
        label: "NGN",
        color: "bg-emerald-50 text-emerald-700 border-emerald-100",
        pos: "right-3 bottom-3",
      },
    ].map((pill, i) => (
      <motion.div
        key={pill.label}
        className={`absolute ${pill.pos} px-2 py-1 rounded-full border text-[10px] font-semibold ${pill.color}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.15, duration: 0.4 }}>
        {pill.label}
      </motion.div>
    ))}
  </div>
);

// ─── Visual 2: Entrepreneurs — first sale bar chart ───────────────────────────
const EntrepreneurVisual = () => (
  <div className="w-full h-32 rounded-xl bg-[#f8fafb] border border-gray-100 overflow-hidden p-4 flex flex-col justify-between">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
        </div>
        <p className="text-[10px] font-medium text-[#011B33]">First payment</p>
      </div>
      <motion.span
        className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}>
        ✓ Received
      </motion.span>
    </div>

    <div className="flex items-end gap-1.5 h-10">
      {[30, 45, 38, 60, 55, 75, 90].map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm bg-emerald-400"
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
          style={{ alignSelf: "flex-end" }}
        />
      ))}
    </div>

    <div className="flex items-center justify-between">
      <p className="text-[9px] text-gray-400 uppercase tracking-widest">
        Revenue today
      </p>
      <motion.p
        className="text-xs font-semibold text-[#011B33]"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ fontFamily: "Boing, Georgia, serif" }}>
        ₦184,200
      </motion.p>
    </div>
  </div>
);

// ─── Visual 3: Enterprises — dark scale dashboard ─────────────────────────────
const EnterpriseVisual = () => (
  <div className="w-full h-32 rounded-xl bg-[#011B33] overflow-hidden p-4 flex flex-col justify-between">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-[9px] text-white/40 uppercase tracking-widest mb-0.5">
          Monthly volume
        </p>
        <p
          className="text-sm font-semibold text-white"
          style={{
            fontFamily: "Boing, Georgia, serif",
            letterSpacing: "-0.02em",
          }}>
          ₦4.8B
        </p>
      </div>
      <div className="flex items-center gap-1.5">
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-emerald-400"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        />
        <p className="text-[10px] text-white/50">All systems normal</p>
      </div>
    </div>

    <div className="flex flex-col gap-1.5">
      {[
        { label: "Uptime", value: 99.9, color: "bg-emerald-400" },
        { label: "Security", value: 100, color: "bg-blue-400" },
      ].map((metric) => (
        <div key={metric.label} className="flex items-center gap-2">
          <p className="text-[9px] text-white/40 w-12 shrink-0">
            {metric.label}
          </p>
          <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${metric.color}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${metric.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
          <p className="text-[9px] text-white/50 w-8 text-right">
            {metric.value}%
          </p>
        </div>
      ))}
    </div>

    <div className="flex items-center justify-between">
      <div className="flex -space-x-2">
        {["#3B82F6", "#8B5CF6", "#EC4899", "#F59E0B"].map((color, i) => (
          <div
            key={i}
            className="w-5 h-5 rounded-full border-2 border-[#011B33]"
            style={{ background: color }}
          />
        ))}
      </div>
      <p className="text-[9px] text-white/40">Dedicated account team</p>
    </div>
  </div>
);

// ─── Card data ────────────────────────────────────────────────────────────────
const cards = [
  {
    Visual: GlobalVisual,
    title: "Durapayment for Global Brands",
    text: "Accept payments from customers anywhere in the world — with multi-currency support and localised checkout experiences built in.",
    href: "#",
  },
  {
    Visual: EntrepreneurVisual,
    title: "Durapayment for Entrepreneurs",
    text: "Launch fast and grow confidently. Our intuitive payment tools are designed to get you paid from day one, with no technical complexity.",
    href: "#",
  },
  {
    Visual: EnterpriseVisual,
    title: "Durapayment for Enterprises",
    text: `${siteConfig.name} helps large organisations and institutions collect payments quickly, securely, and at scale — with dedicated support.`,
    href: "#",
  },
];

export const BusinessGrowth = () => {
  return (
    <section className="w-full bg-[#eaf6fc] px-5 sm:px-8 md:px-12 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 bg-white/70 text-[#0F6E56] text-[11px] font-medium tracking-widest uppercase rounded-full px-3 py-1.5 mb-5 border border-emerald-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Built for every business
          </div>

          <h2
            style={{
              fontFamily: "Boing, Georgia, serif",
              fontWeight: 700,
              lineHeight: "1.1",
              color: "rgb(1, 27, 51)",
              letterSpacing: "-0.025em",
            }}
            className="text-[28px] sm:text-[38px] md:text-[46px] mb-4">
            Payments that grow with your business
          </h2>

          <p className="text-base md:text-lg text-gray-500 leading-relaxed font-light">
            Thousands of organisations of all sizes trust {siteConfig.name} to
            power their payments — from first sale to global scale.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map(({ Visual, title, text, href }, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-white/80 p-7 flex flex-col gap-5 hover:shadow-md transition-shadow duration-300">
              <Visual />

              <h3
                style={{
                  fontFamily: "Boing, Georgia, serif",
                  fontWeight: 700,
                  color: "rgb(1, 27, 51)",
                  letterSpacing: "-0.015em",
                }}
                className="text-[18px] sm:text-[20px] leading-snug">
                {title}
              </h3>

              <p className="text-sm leading-6 text-gray-500 font-light flex-grow">
                {text}
              </p>

              <a
                href={href}
                className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-800 transition mt-auto group">
                <span className="w-6 h-6 rounded-full border border-emerald-500 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:border-emerald-600 transition">
                  <ArrowRight className="w-3 h-3 text-emerald-600 group-hover:text-white transition" />
                </span>
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
