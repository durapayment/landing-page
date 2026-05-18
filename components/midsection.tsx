"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ─── Animated checkmark ───────────────────────────────────────────────────────
const AnimatedTick = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
    <motion.path
      d="M20 6L9 17l-5-5"
      stroke="#059669"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
    />
  </svg>
);

// ─── Section label pill ────────────────────────────────────────────────────────
const Eyebrow = ({ label }: { label: string }) => (
  <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-[11px] font-medium tracking-widest uppercase rounded-full px-3 py-1.5 mb-5">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
    {label}
  </div>
);

// ─── Link button ───────────────────────────────────────────────────────────────
const LinkButton = ({
  label,
  href = "#",
}: {
  label: string;
  href?: string;
}) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-800 transition group">
    <span className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center group-hover:bg-emerald-700 transition shrink-0">
      <ArrowRight className="text-white w-3 h-3" />
    </span>
    {label}
  </a>
);

// ─── Section heading ───────────────────────────────────────────────────────────
const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h3
    style={{
      fontFamily: "Boing, Georgia, serif",
      fontWeight: 700,
      lineHeight: "1.1",
      color: "rgb(1, 27, 51)",
      letterSpacing: "-0.025em",
    }}
    className="text-[26px] sm:text-[32px] md:text-[38px] mb-4">
    {children}
  </h3>
);

// ─── Feature image card ────────────────────────────────────────────────────────
const ImageCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full sm:w-80 md:w-[340px] aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-100 shrink-0">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

// ─── Payment methods ───────────────────────────────────────────────────────────
const paymentMethods = [
  "Card payments",
  "Bank transfers",
  "Direct debit",
  "USSD",
  "Point of sale",
  "Digital wallets",
];

// ─── Smart routing features ────────────────────────────────────────────────────
const routingFeatures = [
  "Collect one-time and recurring payments from your app or website",
  "Send instant payouts to any bank account worldwide",
  "Access full transaction and customer data in real time",
  "Verify customer identity with built-in KYC tools",
];

export const MidSection = () => {
  return (
    <section className="w-full bg-white px-5 sm:px-8 md:px-12 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-28">
        {/* ── BLOCK 1: Seamless payments ── */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <ImageCard src="/seamless.png" alt="Seamless payment experience" />

          {/* Content */}
          <div className="flex-1 ">
            <Eyebrow label="Checkout experience" />
            <SectionHeading>
              Deliver seamless payments that build customer trust
            </SectionHeading>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-8 font-light">
              Give your customers a fast, reliable, and frictionless way to pay.
              With {siteConfig.name}, accept every preferred payment method with
              a single integration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mb-10">
              {paymentMethods.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <AnimatedTick />
                  <span className="text-sm font-medium text-[rgb(1,27,51)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <LinkButton label="See how we achieve high approval rates" />
          </div>
        </div>

        {/* ── BLOCK 2: Smart routing ── */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
          {/* Animated routing visual */}
          <div className="w-full sm:w-80 md:w-[340px] aspect-[4/5] rounded-2xl bg-[#f8fafb] border border-gray-100 shadow-sm shrink-0 p-5 flex flex-col justify-between">
            {/* Payment request header */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-2">
                Incoming payment
              </p>
              <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center text-[10px] font-semibold text-emerald-700">
                    DP
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#011B33]">
                      ₦24,500.00
                    </p>
                    <p className="text-[10px] text-gray-400">Checkout · Card</p>
                  </div>
                </div>
                <motion.div
                  className="w-2 h-2 rounded-full bg-emerald-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Route scoring */}
            <div className="flex flex-col gap-2">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-1">
                Route scoring
              </p>
              {[
                { label: "Processor A", score: 99, active: true, delay: 0 },
                { label: "Processor B", score: 87, active: false, delay: 0.15 },
                { label: "Processor C", score: 74, active: false, delay: 0.3 },
              ].map((route) => (
                <div
                  key={route.label}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 border ${
                    route.active
                      ? "bg-emerald-50 border-emerald-200"
                      : "bg-white border-gray-100"
                  }`}>
                  <div className="flex items-center gap-2">
                    <motion.div
                      className={`w-2 h-2 rounded-full ${route.active ? "bg-emerald-500" : "bg-gray-300"}`}
                      animate={route.active ? { scale: [1, 1.5, 1] } : {}}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: route.delay,
                      }}
                    />
                    <p
                      className={`text-xs font-medium ${route.active ? "text-emerald-700" : "text-gray-400"}`}>
                      {route.label}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-14 h-1 rounded-full bg-gray-100 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${route.active ? "bg-emerald-400" : "bg-gray-200"}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${route.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 + route.delay }}
                      />
                    </div>
                    <p
                      className={`text-[10px] font-semibold w-6 text-right ${route.active ? "text-emerald-600" : "text-gray-300"}`}>
                      {route.score}%
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Result */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-2">
                Outcome
              </p>
              <div className="bg-[#011B33] rounded-xl px-4 py-3 flex items-center justify-between mb-2">
                <div>
                  <p className="text-[10px] text-white/50 mb-0.5">
                    Best route selected
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Processor A · 99%
                  </p>
                </div>
                <motion.div
                  className="bg-emerald-500 rounded-full px-2.5 py-1"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}>
                  <p className="text-[10px] font-semibold text-white">
                    Approved
                  </p>
                </motion.div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Latency", value: "180ms" },
                  { label: "Fallback", value: "Auto" },
                  { label: "Uptime", value: "99.9%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white border border-gray-100 rounded-xl px-2 py-2 text-center">
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-0.5">
                      {stat.label}
                    </p>
                    <p className="text-xs font-semibold text-[#011B33]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 ">
            <Eyebrow label="Smart infrastructure" />
            <SectionHeading>
              Maximise approval rates with intelligent routing
            </SectionHeading>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-8 font-light">
              Our infrastructure automatically selects the most reliable and
              cost-efficient processing routes — reducing failed transactions
              and increasing revenue on every payment.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {routingFeatures.map((feat) => (
                <div key={feat} className="flex items-start gap-3">
                  <AnimatedTick />
                  <p className="text-sm font-medium text-[rgb(1,27,51)] leading-relaxed">
                    {feat}
                  </p>
                </div>
              ))}
            </div>

            <LinkButton
              label="Read the API quick-start guide"
              href="/docs/quickstart"
            />
          </div>
        </div>

        {/* ── BLOCK 3: Reporting & visibility ── */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Animated visual */}
          <div className="w-full sm:w-80 md:w-[340px] aspect-[4/5] rounded-2xl overflow-hidden bg-[#011B33] shadow-sm border border-[#011B33]/10 shrink-0 relative hidden sm:block">
            {/* Floating stat cards */}
            <motion.div
              className="absolute top-8 left-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}>
              <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">
                Monthly volume
              </p>
              <p
                className="text-2xl font-semibold text-white"
                style={{
                  fontFamily: "Boing, Georgia, serif",
                  letterSpacing: "-0.02em",
                }}>
                ₦1.84M
              </p>
              <p className="text-[10px] text-emerald-400 mt-1">
                ↑ 18% vs last month
              </p>
            </motion.div>

            <motion.div
              className="absolute top-44 left-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}>
              <p className="text-[10px] uppercase tracking-widest text-white/50 mb-3">
                Success rate
              </p>
              <div className="w-full bg-white/10 rounded-full h-1.5 mb-1">
                <motion.div
                  className="bg-emerald-400 h-1.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "99%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </div>
              <p className="text-right text-[10px] text-white/60">99.4%</p>
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}>
              <p className="text-[10px] uppercase tracking-widest text-white/50 mb-2">
                Top channels
              </p>
              <div className="flex gap-1.5">
                {[
                  ["Card", "52%", "bg-emerald-400"],
                  ["Transfer", "31%", "bg-blue-400"],
                  ["USSD", "17%", "bg-amber-400"],
                ].map(([label, pct, color]) => (
                  <div key={label} className="flex-1 text-center">
                    <div className={`${color} rounded-md h-1 mb-1`} />
                    <p className="text-[9px] text-white/60">{label}</p>
                    <p className="text-[10px] text-white font-medium">{pct}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-1 ">
            <Eyebrow label="Reporting & analytics" />
            <SectionHeading>
              Full financial visibility with powerful reporting tools
            </SectionHeading>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-8 font-light">
              Track transactions, analyse customer behaviour, and simplify
              reconciliation with real-time dashboards, downloadable reports,
              and automated accounting integrations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                {
                  title: "Real-time dashboard",
                  desc: "Live transaction monitoring across all channels.",
                },
                {
                  title: "Downloadable reports",
                  desc: "Export data in CSV, PDF, or Excel formats.",
                },
                {
                  title: "Auto-reconciliation",
                  desc: "Match settlements to transactions automatically.",
                },
                {
                  title: "Customer insights",
                  desc: "Understand behaviour and payment preferences.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <p className="text-sm font-semibold text-[rgb(1,27,51)] mb-1">
                    {card.title}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            <LinkButton
              label="Explore the analytics dashboard"
              href="/docs/analytics"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
