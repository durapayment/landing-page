"use client";
import { siteConfig } from "@/config/site";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Search, Lock } from "lucide-react";

const FloatingInput = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  maxLength?: number;
}) => (
  <div className="relative">
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder=" "
      maxLength={maxLength}
      className="peer w-full border border-gray-200 rounded-xl px-4 pt-5 pb-2 text-[15px] text-gray-900 bg-white outline-none focus:border-[#011B33] transition-colors placeholder-transparent"
    />
    <label className="absolute left-4 top-2 text-[11px] font-semibold tracking-wide text-gray-400 uppercase transition-all peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-[14px] peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:tracking-wide peer-focus:uppercase peer-focus:text-[#011B33]">
      {label}
    </label>
    {placeholder && (
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-300 pointer-events-none peer-focus:hidden">
        {placeholder}
      </span>
    )}
  </div>
);

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    desc: "Your card details are never stored — used only to locate your transaction.",
  },
  {
    icon: CreditCard,
    title: "200,000+ Merchants",
    desc: "We power payments for businesses across Nigeria.",
  },
  {
    icon: Lock,
    title: "PCI-DSS Certified",
    desc: "Industry-standard encryption protects every query.",
  },
];

export const WhyWasIDebitedPage = () => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [first6, setFirst6] = useState("");
  const [last4, setLast4] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [reason, setReason] = useState("");

  const cardDisplay = {
    first: first6 ? first6.padEnd(6, "•") : "••••••",
    last: last4 ? last4.padEnd(4, "•") : "••••",
    expiry: expiry || "MM/YY",
  };

  return (
    <section className="min-h-screen w-full bg-[#f4f6f9] flex items-center justify-center px-4 py-16 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-5xl flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl">
        {/* ── LEFT PANEL ── */}
        <div className="bg-[#011B33] text-white lg:w-[42%] flex flex-col justify-between p-10 lg:p-12">
          <div>
            {/* Brand */}
            <div className="flex items-center gap-2 mb-10">
              <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
                <Search className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold tracking-wide uppercase text-white/70">
                {siteConfig.name}
              </span>
            </div>

            <h1 className="text-[28px] lg:text-[34px] font-bold leading-[1.2] mb-4">
              Why was I<br />
              debited?
            </h1>
            <p className="text-white/60 text-[14px] leading-7 max-w-xs">
              {siteConfig.name} processes payments for over{" "}
              <span className="text-white font-medium">200,000 businesses</span>{" "}
              in Nigeria. Fill the form to identify the merchant behind your
              debit.
            </p>

            {/* Mini card visualizer */}
            <div className="mt-10 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 font-mono text-sm">
              <div className="text-white/40 text-[10px] uppercase tracking-widest mb-3">
                Your Card
              </div>
              <div className="flex gap-3 text-white text-[15px] tracking-widest mb-4">
                <span>{cardDisplay.first}</span>
                <span className="text-white/30">••••</span>
                <span className="text-white/30">••••</span>
                <span>{cardDisplay.last}</span>
              </div>
              <div className="flex items-center justify-between text-white/50 text-[11px]">
                <span>VALID THRU {cardDisplay.expiry}</span>
                <div className="flex gap-0.5">
                  <div className="w-5 h-5 rounded-full bg-red-400/60" />
                  <div className="w-5 h-5 rounded-full bg-yellow-400/60 -ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Trust signals */}
          <div className="mt-10 space-y-5">
            {trustPoints.map((pt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <pt.icon className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white text-[13px] font-semibold">
                    {pt.title}
                  </p>
                  <p className="text-white/50 text-[12px] leading-5">
                    {pt.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="bg-white lg:w-[58%] flex flex-col p-8 lg:p-12 overflow-y-auto">
          <h2 className="text-[20px] font-bold text-[#011B33] mb-1">
            Look up your transaction
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            All fields are required to locate your debit.
          </p>

          <div className="space-y-5 flex-1">
            {/* Amount */}
            <div className="flex items-stretch border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#011B33] transition-colors">
              <span className="px-4 bg-gray-50 text-gray-400 text-sm font-medium flex items-center border-r border-gray-200 shrink-0">
                NGN
              </span>
              <div className="relative flex-1">
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 text-[15px] text-gray-900 outline-none bg-white placeholder-transparent"
                />
                <label className="absolute left-4 top-2 text-[11px] font-semibold tracking-wide text-gray-400 uppercase transition-all peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-[14px] peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:tracking-wide peer-focus:uppercase peer-focus:text-[#011B33]">
                  Debited Amount
                </label>
              </div>
            </div>

            {/* Date */}
            <FloatingInput
              label="Date of Debit"
              type="date"
              value={date}
              onChange={setDate}
            />

            {/* Card info */}
            <div className="border border-gray-100 rounded-2xl p-5 bg-[#fafafa] space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                Card Details
              </p>
              <div className="grid grid-cols-2 gap-4">
                <FloatingInput
                  label="First 6 Digits"
                  value={first6}
                  onChange={setFirst6}
                  maxLength={6}
                  placeholder="123456"
                />
                <FloatingInput
                  label="Last 4 Digits"
                  value={last4}
                  onChange={setLast4}
                  maxLength={4}
                  placeholder="1234"
                />
                <FloatingInput
                  label="Expiry"
                  value={expiry}
                  onChange={setExpiry}
                  placeholder="MM/YY"
                  maxLength={5}
                />
                <FloatingInput
                  label="CVV"
                  value={cvv}
                  onChange={setCvv}
                  maxLength={3}
                  placeholder="•••"
                />
              </div>
            </div>

            {/* Reason */}
            <div className="relative">
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="peer w-full border border-gray-200 rounded-xl px-4 pt-5 pb-2 text-[15px] text-gray-900 bg-white outline-none focus:border-[#011B33] transition-colors appearance-none">
                <option value="" disabled />
                <option value="unknown">I don't recognize this debit</option>
                <option value="refund">I want a refund</option>
                <option value="duplicate">Duplicate transaction</option>
                <option value="fraud">Suspected fraud</option>
                <option value="other">Other</option>
              </select>
              <label
                className={`absolute left-4 transition-all pointer-events-none ${
                  reason
                    ? "top-2 text-[11px] font-semibold tracking-wide uppercase text-[#011B33]"
                    : "top-[14px] text-[14px] text-gray-400"
                }`}>
                Reason for lookup
              </label>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path
                    d="M1 1l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#011B33] text-white py-4 rounded-xl font-semibold text-[15px] flex items-center justify-center gap-2 hover:bg-[#02284d] transition-colors mt-2">
              <Search className="w-4 h-4" />
              Find Transaction
            </motion.button>

            <p className="text-center text-[12px] text-gray-400">
              Need more help?{" "}
              <span className="text-green-600 font-medium cursor-pointer hover:underline">
                Contact Support
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
