"use client";

import { motion } from "framer-motion";
import { ArrowLeftRight, Landmark, CreditCard } from "lucide-react";
import Link from "next/link";

/* ── DATA ── */
const sections = [
  {
    icon: ArrowLeftRight,
    label: "Transfers",
    color: "text-green-500",
    bg: "bg-green-50",
    accent: "from-green-400 to-emerald-500",
    rows: [
      { desc: "Transfers of NGN 5,000 and below", price: "NGN 10 / transfer" },
      {
        desc: "Transfers between NGN 5,001 – NGN 50,000",
        price: "NGN 25 / transfer",
      },
      { desc: "Transfers above NGN 50,000", price: "NGN 50 / transfer" },
    ],
  },
  {
    icon: Landmark,
    label: "Virtual Accounts",
    color: "text-blue-500",
    bg: "bg-blue-50",
    accent: "from-blue-400 to-indigo-500",
    rows: [
      {
        desc: "Dedicated Virtual Accounts (DVA)",
        price: "1% per transaction (capped at NGN 300)",
      },
    ],
  },
  {
    icon: CreditCard,
    label: "Digital Payments",
    color: "text-purple-500",
    bg: "bg-purple-50",
    accent: "from-purple-400 to-violet-500",
    rows: [
      {
        desc: "Local Card Transactions",
        price: "1.5% + NGN 100 (capped at NGN 2,000)",
      },
      { desc: "International Card Transactions", price: "3.9% + NGN 100" },
    ],
  },
];

/* ── COMPONENT ── */
export const TransfersSection = () => {
  return (
    <section className="w-full bg-[#f4f6f9] py-10 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12">
          <p className="text-[11px] font-black tracking-[0.22em] uppercase text-green-600 mb-3">
            Full Breakdown
          </p>
          <h2
            className="text-[32px] sm:text-[40px] font-extrabold text-[#011B33] leading-tight"
            style={{
              fontFamily:
                'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            }}>
            All fees, clearly explained
          </h2>
        </motion.div>

        {/* cards */}
        {sections.map((section, si) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={si}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: si * 0.07 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm">
              {/* top gradient bar */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${section.accent}`}
              />

              <div className="px-8 py-7">
                {/* section header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-9 h-9 rounded-xl ${section.bg} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${section.color}`} />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#011B33]">
                    {section.label}
                  </h3>
                </div>

                {/* rows */}
                <div className="divide-y divide-gray-100">
                  {section.rows.map((row, ri) => (
                    <motion.div
                      key={ri}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.07 + ri * 0.06 }}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-5">
                      <p className="text-[14px] text-[rgba(1,27,51,0.7)] leading-6 max-w-sm">
                        {row.desc}
                      </p>
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[13px] font-semibold text-[#011B33] whitespace-nowrap self-start sm:self-auto">
                        {row.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[13px] text-gray-400 pt-4">
          Need a custom plan for high volumes?{" "}
          <Link
            href="/contactsales"
            className="text-green-600 font-semibold hover:underline transition-colors">
            Talk to our sales team →
          </Link>
        </motion.p>
      </div>
    </section>
  );
};
