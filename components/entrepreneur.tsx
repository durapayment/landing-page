"use client";

import { useState } from "react";
import { Play, ChevronRight, Check, ArrowRight } from "lucide-react";
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

const Fade = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay }}
    className={className}>
    {children}
  </motion.div>
);

const Img = ({ src, alt }: { src: string; alt: string }) => (
  <div className={IMG}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
    />
  </div>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="mt-6 space-y-3">
    {items.map((item, i) => (
      <motion.li
        key={i}
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.07 }}
        className="flex items-start gap-3">
        <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
          <Check className="w-3 h-3 text-green-600" />
        </span>
        <span className="text-[14px] text-[rgb(1,27,51)] leading-6">
          {item}
        </span>
      </motion.li>
    ))}
  </ul>
);

const logos = [
  "/dominos-plain.svg",
  "/mtn-group-grayscale.svg",
  "/bolt.svg",
  "/axa.svg",
];

export const Entrepreneur = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const handleRedirect = () =>
    window.open("https://online.durapayment.com", "_blank");

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
            Durapayment for Entrepreneurs
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white font-extrabold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight max-w-3xl mb-6">
            Get paid quickly with{" "}
            <span className="text-green-400">simple, powerful tools</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="text-white/50 text-[16px] md:text-[18px] leading-[30px] max-w-xl mb-10">
            {siteConfig.name} helps entrepreneurs like you accept payments
            online. Fast set up. Quick payouts. No long stories.
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

      {/* ══ CONTENT ══ */}
      <div className="w-full bg-white">
        {/* Intro — text left, image right */}
        <Fade className={SECTION}>
          <div className="flex-1 max-w-xl">
            <p className={TAG}>Our Impact</p>
            <h2 className={H2}>
              {siteConfig.name} pays out over $20 million to Nigerian businesses
              every month
            </h2>
            <p className={BODY}>
              {siteConfig.name} helps businesses like yours get paid quickly and
              securely from anyone, anywhere in the world. Whether you're
              selling on Instagram, in a physical store, or even without a
              website — we've got the tools.
            </p>
            <Accent />
          </div>
          <Img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop"
            alt="Entrepreneurs getting paid"
          />
        </Fade>

        {/* 01 — No website needed: image left, text right */}
        <div className="w-full bg-[#f4f6f9]">
          <Fade className={SECTION}>
            <Img
              src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&auto=format&fit=crop"
              alt="Payment link on phone"
            />
            <div className="flex-1 max-w-xl">
              <p className={TAG}>01 — Payment Pages</p>
              <h2 className={H2}>Get paid even if you don't have a website</h2>
              <p className={BODY}>
                Create a Payment Page in 2 mins, and share that link via SMS,
                Instagram DM, WhatsApp chat, or however you communicate with
                your customers.
              </p>
              <List
                items={[
                  "No developers needed",
                  "Your customers will be able to click and pay you instantly",
                ]}
              />
              <div className="flex items-center gap-2 mt-6 group cursor-pointer">
                <div className="w-7 h-7 rounded-full border border-green-500 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-green-600 group-hover:text-white" />
                </div>
                <p className="text-[14px] font-semibold text-green-600 group-hover:underline">
                  Learn more about payment pages
                </p>
              </div>
              <Accent />
            </div>
          </Fade>
        </div>

        {/* 02 — Checkout form: text left, image right */}
        <Fade className={SECTION}>
          <div className="flex-1 max-w-xl">
            <p className={TAG}>02 — Checkout</p>
            <h2 className={H2}>
              Build trust with a beautiful, branded Checkout Form
            </h2>
            <p className={BODY}>
              Give customers confidence in your business with a beautiful
              checkout form that shows off your brand.
            </p>
            <List
              items={[
                "No redirects — keep customers on the same page",
                "Multiple payment channels",
                "Smart suggestions when a transaction fails",
                "Automatic translation (Coming Soon)",
              ]}
            />
            <Accent />
          </div>
          <Img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop"
            alt="Beautiful branded checkout form"
          />
        </Fade>

        {/* 03 — Seamless experience: image left, text right */}
        <div className="w-full bg-[#f4f6f9]">
          <Fade className={`${SECTION} pb-24`}>
            <Img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&auto=format&fit=crop"
              alt="Seamless payment experience"
            />
            <div className="flex-1 max-w-xl">
              <p className={TAG}>03 — Payment Channels</p>
              <h2 className={H2}>
                Delight customers with a seamless payments experience
              </h2>
              <p className={BODY}>
                Give your customers the gift of modern, frictionless, painless
                payments. Integrate {siteConfig.name} once and let your
                customers pay you however they want.
              </p>
              <List
                items={[
                  "Mobile Money",
                  "Card",
                  "Apple Pay",
                  "Bank Transfer",
                  "USSD",
                ]}
              />
              <Accent />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};
