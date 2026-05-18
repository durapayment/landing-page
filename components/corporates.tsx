"use client";

import { useState } from "react";
import { Play, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

/* ── DESIGN TOKENS ── */
const SECTION =
  "w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 py-20 px-6 xl:px-0";
const IMG =
  "w-full max-w-[520px] h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0";
const H2 =
  "text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[rgb(1,27,51)] leading-tight";
const BODY =
  "text-[15px] md:text-[17px] text-[rgba(1,27,51,0.65)] leading-[28px] mt-4";
const TAG =
  "text-[11px] font-black tracking-[0.22em] uppercase text-green-500 mb-3";

const Accent = () => (
  <div className="mt-8 w-10 h-1 rounded-full bg-green-400/50" />
);

const logos = [
  "/dominos-plain.svg",
  "/mtn-group-grayscale.svg",
  "/bolt.svg",
  "/axa.svg",
];

export const Corporates = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleRedirect = () => window.open("https://online.durapayment.com");

  return (
    <section className="w-full font-sans">
      {/* ══ HERO ══ */}
      <div className="relative w-full bg-[#011B33] overflow-hidden pt-36 pb-28 px-6">
        {/* bg rings */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-white/[0.04]" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-white/[0.04]" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-green-500/5 blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[11px] font-black tracking-[0.25em] uppercase text-green-400 mb-5">
            Durapayment for Corporates
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white font-extrabold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight max-w-3xl mb-6">
            A complete payments solution to{" "}
            <span className="text-green-400">power all scales of growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="text-white/50 text-[16px] md:text-[18px] leading-[30px] max-w-xl mb-10">
            {siteConfig.name} helps many of the largest corporate and government
            organizations in Nigeria get paid quickly and securely.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={handleRedirect}
              className="bg-green-500 hover:bg-green-400 text-white px-7 py-3 rounded-xl text-[15px] font-semibold transition-colors">
              Create a free account
            </button>
            <span className="text-green-400 text-[15px] font-medium cursor-pointer hover:underline">
              or Contact Sales
            </span>
          </motion.div>
        </div>

        {/* Partners bar */}
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div>
            <p className="text-white/40 text-sm mb-3">
              Built for over 200,000 businesses
            </p>
            <div className="flex items-center gap-6 opacity-40 grayscale brightness-200">
              {logos.slice(0, 3).map((logo, i) => (
                <img key={i} src={logo} className="h-6" alt="logo" />
              ))}
            </div>
          </div>

          <button
            onClick={() => setVideoOpen(true)}
            className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center group-hover:bg-green-500 transition-colors">
              <Play className="w-4 h-4 text-green-400 group-hover:text-white" />
            </div>
            <span className="text-white/50 text-sm font-medium group-hover:text-white transition-colors">
              Watch {siteConfig.name}
            </span>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
            onClick={() => setVideoOpen(false)}>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}>
              <div className="w-full h-full flex items-center justify-center text-white/30 text-sm">
                Video placeholder
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══ MID SECTION ══ */}
      <div className="w-full bg-white">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className={SECTION}>
          <div className="flex-1 max-w-xl">
            <p className={TAG}>Market Reach</p>
            <h2 className={H2}>
              {siteConfig.name} processes over 50% of all online transactions in
              Nigeria
            </h2>
            <p className={BODY}>
              From airlines to universities to state-wide tax collecting,{" "}
              {siteConfig.name} helps corporates and government bodies collect
              payments quickly and securely.
            </p>
            <Accent />
          </div>

          {/* Replaced /corporate.png → large-scale corporate/enterprise visual */}
          <div className={IMG}>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop"
              alt="Corporate enterprise buildings"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
