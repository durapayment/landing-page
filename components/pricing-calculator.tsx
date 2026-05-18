"use client";

import { useState, useMemo } from "react";
import { Check, Calculator } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= CALCULATOR ================= */

const FEE_RATE = 0.015;
const FEE_CAP = 2000;
const FLAT_FEE = 100;

const perks = [
  "Free, automatic settlement within 24 hours",
  "Local fees capped at NGN 2,000",
  "No hidden fees or charges",
  "Zero integration fee",
  "Zero maintenance fee",
];

function fmt(n: number) {
  return n.toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function FeeCalculator() {
  const [raw, setRaw] = useState("10000");

  const amount = Number(raw.replace(/\D/g, "")) || 0;

  const fee = useMemo(() => {
    if (amount === 0) return 0;
    const calculated = amount * FEE_RATE + FLAT_FEE;
    return Math.min(calculated, FEE_CAP);
  }, [amount]);

  const settlement = useMemo(() => Math.max(amount - fee, 0), [amount, fee]);

  const pct = amount > 0 ? ((fee / amount) * 100).toFixed(2) : "0.00";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.replace(/\D/g, "").slice(0, 11);
    setRaw(cleaned);
  };

  return (
    <div className="w-full max-w-lg bg-[#011B33] rounded-3xl overflow-hidden shadow-2xl">
      {/* header bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-green-400 to-emerald-500" />

      <div className="px-8 py-10">
        {/* title */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
            <Calculator className="w-4 h-4 text-green-400" />
          </div>
          <h2 className="text-white font-bold text-[17px]">Fee Calculator</h2>
        </div>

        {/* input */}
        <div className="mb-8">
          <label className="text-[11px] font-black tracking-[0.2em] uppercase text-white/40 mb-2 block">
            Your Customer Pays
          </label>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus-within:border-green-500/50 transition-colors">
            <span className="text-white/40 text-sm font-semibold shrink-0">
              NGN
            </span>
            <input
              type="text"
              value={raw}
              onChange={handleChange}
              placeholder="0"
              className="w-full outline-none bg-transparent text-white text-[22px] font-bold placeholder-white/20"
            />
          </div>
        </div>

        {/* results */}
        <div className="bg-white/5 rounded-2xl p-5 mb-6 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-white/50 text-[13px]">You'll receive</p>
            <AnimatePresence mode="wait">
              <motion.p
                key={settlement}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white font-bold text-[18px]">
                NGN {fmt(settlement)}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="w-full h-px bg-white/10" />

          <div className="flex items-center justify-between">
            <p className="text-white/50 text-[13px]">
              Durapayment fee{" "}
              <span className="text-white/30 text-[11px]">({pct}%)</span>
            </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={fee}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 font-semibold text-[15px]">
                NGN {fmt(fee)}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* progress bar: fee vs settlement */}
        {amount > 0 && (
          <div className="mb-6">
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-green-400 rounded-full"
                initial={{ width: 0 }}
                animate={{
                  width: `${((settlement / amount) * 100).toFixed(1)}%`,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between mt-1.5 text-[10px] text-white/30">
              <span>You keep {((settlement / amount) * 100).toFixed(1)}%</span>
              <span>Fee {pct}%</span>
            </div>
          </div>
        )}

        {/* perks list */}
        <div className="space-y-3 border-t border-white/10 pt-6">
          {perks.map((perk, i) => (
            <div key={i} className="flex items-center justify-between gap-3">
              <p className="text-white/50 text-[12px] leading-5">{perk}</p>
              <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-green-400" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= PAGE SECTION ================= */

export default function CalculatorSection() {
  return (
    <section className="w-full bg-[#f4f6f9] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex-1 max-w-md">
            <p className="text-[11px] font-black tracking-[0.22em] uppercase text-green-600 mb-4">
              Pricing Calculator
            </p>

            <h2
              className="text-[36px] sm:text-[44px] md:text-[52px] font-extrabold text-[#011B33] leading-[1.1] tracking-tight mb-6"
              style={{
                fontFamily:
                  'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              }}>
              Do the <span className="text-green-500">math</span>
            </h2>

            <p className="text-[rgba(1,27,51,0.65)] text-[16px] md:text-[17px] leading-[28px] mb-8">
              Enter any amount to see exactly how much you keep. We believe in
              complete transparency — what you see is what you get.
            </p>

            <div className="space-y-3">
              {[
                "No monthly fees or commitments",
                "Pay only when you earn",
                "Fees capped at ₦2,000 per transaction",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-green-600" />
                  </span>
                  <span className="text-[14px] text-[rgba(1,27,51,0.75)]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CALCULATOR */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex-1 w-full flex justify-center md:justify-end">
            <FeeCalculator />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
