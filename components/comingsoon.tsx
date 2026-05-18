"use client";

import { motion } from "framer-motion";
import { Mail, Clock3, ArrowRight, Zap, Shield, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

/* ── COUNTDOWN HOOK ── */
const LAUNCH_DATE = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now

function useCountdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const diff = LAUNCH_DATE.getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

/* ── COUNTDOWN UNIT ── */
const CountUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white/5 border border-white/10 rounded-2xl w-16 h-16 flex items-center justify-center">
      <motion.span
        key={value}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[28px] font-extrabold text-white tabular-nums">
        {String(value).padStart(2, "0")}
      </motion.span>
    </div>
    <span className="text-[10px] font-bold tracking-widest uppercase text-white/30 mt-2">
      {label}
    </span>
  </div>
);

/* ── STATS ── */
const stats = [
  { icon: Zap, value: "99.9%", label: "Platform Uptime" },
  { icon: Globe, value: "10x", label: "Faster Workflows" },
  { icon: Shield, value: "PCI-DSS", label: "Certified Security" },
];

/* ── COMPONENT ── */
export const ComingSoonPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { days, hours, minutes, seconds } = useCountdown();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="min-h-screen w-full bg-[#011B33] text-white flex items-center justify-center px-6 md:px-12 overflow-hidden relative">
      {/* bg decoration */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-white/[0.03]" />
      <div className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full border border-white/[0.03]" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-green-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-20 w-64 h-64 rounded-full bg-green-500/8 blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center py-24 relative z-10">
        {/* ── LEFT ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8">
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
            <Clock3 className="w-3.5 h-3.5 text-green-400" />
            <span className="text-green-400 text-[11px] font-bold tracking-widest uppercase">
              Launching Soon
            </span>
          </div>

          {/* heading */}
          <div>
            <h1
              className="text-[36px] sm:text-[46px] md:text-[54px] font-extrabold leading-[1.1] tracking-tight"
              style={{
                fontFamily:
                  'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}>
              Something amazing is{" "}
              <span className="text-green-400">coming soon.</span>
            </h1>
            <p className="text-white/50 mt-5 text-[15px] md:text-[17px] leading-[28px] max-w-md">
              We're building a powerful payments platform that helps businesses
              scale faster, automate workflows, and increase revenue — all in
              one place.
            </p>
          </div>

          {/* countdown */}
          <div className="flex items-center gap-4">
            <CountUnit value={days} label="Days" />
            <span className="text-white/20 text-2xl font-bold mb-4">:</span>
            <CountUnit value={hours} label="Hours" />
            <span className="text-white/20 text-2xl font-bold mb-4">:</span>
            <CountUnit value={minutes} label="Mins" />
            <span className="text-white/20 text-2xl font-bold mb-4">:</span>
            <CountUnit value={seconds} label="Secs" />
          </div>

          {/* email form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 text-white text-[14px] placeholder:text-white/25 transition-all"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-3.5 rounded-xl bg-green-500 hover:bg-green-400 text-white font-semibold text-[14px] flex items-center gap-2 transition-colors whitespace-nowrap">
                Notify Me
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-xl px-5 py-4 max-w-md">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 12 10" className="w-3 h-3" fill="none">
                  <path
                    d="M1 5l4 4 6-8"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-green-400 text-[14px] font-medium">
                You're on the list! We'll notify you at launch 🚀
              </p>
            </motion.div>
          )}

          <p className="text-white/25 text-[12px]">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>

        {/* ── RIGHT ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative">
          {/* card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7 shadow-2xl space-y-4">
            {/* top stat row */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center">
                  <s.icon className="w-4 h-4 text-green-400 mb-2" />
                  <span className="text-[18px] font-extrabold text-white">
                    {s.value}
                  </span>
                  <span className="text-white/40 text-[10px] mt-1 leading-4">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* feature highlight */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-green-400">
                  In Development
                </span>
              </div>
              <h3 className="text-[18px] font-bold text-white mb-2">
                Built for modern teams
              </h3>
              <p className="text-white/50 text-[13px] leading-6">
                Manage payments, analytics, automation, and growth tools from
                one unified dashboard.
              </p>
            </div>

            {/* progress bar */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white/50 text-[12px]">
                  Launch progress
                </span>
                <span className="text-green-400 text-[12px] font-bold">
                  78%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "78%" }}
                  transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-white/25">
                <span>Started</span>
                <span>Launch</span>
              </div>
            </div>
          </div>

          {/* glow */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-48 h-48 bg-green-500/20 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
