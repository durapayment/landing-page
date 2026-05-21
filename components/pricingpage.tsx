"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Globe } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const features = {
  local: [
    "₦100 fee waived for transactions under ₦2,500",
    "Fees capped at ₦2,000 — that's the maximum per transaction",
    "Instant settlement to your bank account",
    "Zero setup or maintenance fees",
  ],
  international: [
    "Accept payments from customers anywhere in the world",
    "Transparent pricing with zero hidden charges",
    "Display prices and settle in USD",
    "Covers all internationally-issued cards",
  ],
};

const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={className}>
    {children}
  </motion.div>
);

export const PricingPage = () => {
  return (
    <section className="w-full min-h-screen bg-[#f4f6f9] overflow-hidden">
      {/* ── HERO ── */}
      <div className="relative w-full bg-[#011B33] overflow-hidden pt-36 pb-24 px-6 text-center">
        {/* decorative rings */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.04]" />
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full border border-white/[0.04]" />
        <div className="absolute bottom-0 right-10 w-72 h-72 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

        <FadeIn className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-[11px] font-bold tracking-widest uppercase">
              Simple, fair pricing
            </span>
          </div>

          <h1 className="text-white font-extrabold text-[36px] sm:text-[48px] md:text-[58px] leading-[1.1] tracking-tight mb-5">
            We only make money{" "}
            <span className="text-green-400">when you do</span>
          </h1>

          <p className="text-white/50 text-[16px] md:text-[18px] leading-[30px] max-w-lg mx-auto">
            No setup fees. No monthly fees. No hidden charges. Just a small fee
            per successful transaction.
          </p>
        </FadeIn>
      </div>

      {/* ── PRICING CARDS ── */}
      <div className="max-w-6xl mx-auto py-25 px-6 xl:px-0 -mt-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LOCAL */}
          <FadeIn delay={0.05}>
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-full flex flex-col">
              <div className="h-1.5 w-full bg-gradient-to-r from-green-400 to-emerald-500" />

              <div className="p-8 sm:p-10 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-[12px] font-black tracking-[0.2em] uppercase text-green-600">
                    Local Transactions
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[48px] sm:text-[56px] font-extrabold text-[#011B33] leading-none tracking-tight">
                    1.5%
                  </span>
                  <span className="text-[22px] font-bold text-[rgba(1,27,51,0.4)] ml-2">
                    + ₦100
                  </span>
                </div>
                <p className="text-[13px] text-gray-400 mb-8">
                  per successful transaction
                </p>

                <div className="w-full h-px bg-gray-100 mb-8" />

                <ul className="space-y-4 flex-1">
                  {features.local.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.07 }}
                      className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </span>
                      <span className="text-[14px] text-[rgba(1,27,51,0.75)] leading-6">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={siteConfig.links.register}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 w-full bg-[#011B33] hover:bg-[#02284d] active:scale-[0.98] text-white py-3.5 rounded-xl font-semibold text-[14px] flex items-center justify-center gap-2 transition-all touch-manipulation">
                  Get started free
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* INTERNATIONAL */}
          <FadeIn delay={0.12}>
            <div className="bg-[#011B33] rounded-3xl shadow-lg overflow-hidden h-full flex flex-col">
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-400 to-indigo-500" />

              <div className="p-8 sm:p-10 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-[12px] font-black tracking-[0.2em] uppercase text-blue-400">
                    International Transactions
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[48px] sm:text-[56px] font-extrabold text-white leading-none tracking-tight">
                    3.9%
                  </span>
                  <span className="text-[22px] font-bold text-white/30 ml-2">
                    + ₦100
                  </span>
                </div>
                <p className="text-[13px] text-white/30 mb-8">
                  per successful transaction
                </p>

                <div className="w-full h-px bg-white/10 mb-8" />

                <ul className="space-y-4 flex-1">
                  {features.international.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.07 }}
                      className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-blue-400" />
                      </span>
                      <span className="text-[14px] text-white/60 leading-6">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={siteConfig.links.register}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 w-full bg-white hover:bg-gray-100 active:scale-[0.98] text-[#011B33] py-3.5 rounded-xl font-semibold text-[14px] flex items-center justify-center gap-2 transition-all touch-manipulation">
                  Get started free
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── BOTTOM NOTE ── */}
        <FadeIn delay={0.2}>
          <div className="mt-10 text-center">
            <p className="text-[13px] text-gray-400">
              Need a custom plan for high-volume transactions?{" "}
              <Link
                href="/contactsales"
                className="text-green-600 font-semibold hover:underline transition-colors">
                Talk to our sales team →
              </Link>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
