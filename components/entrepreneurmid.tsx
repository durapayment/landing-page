"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
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

const defaultCards = [
  { image: "/wordpress.svg" },
  { image: "/shopify.svg" },
  { image: "/opencart.svg" },
  { image: "/joomla.svg" },
  { image: "/magento.svg" },
  { image: "/prestashop.svg" },
  { image: "/squarespace.svg" },
  { image: "/wix.svg" },
];

export const EntrepreneurMid = ({ cards = defaultCards }) => {
  return (
    <>
      {/* ══ SECTION 1 — Shopping Platforms ══ */}
      <section className="w-full bg-[#011B33] py-24 px-6 overflow-hidden relative">
        {/* bg decoration */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-white/[0.04]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

        <div className="w-full max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <Fade className="max-w-2xl mb-14">
            <p className="text-[11px] font-black tracking-[0.22em] uppercase text-green-400 mb-4">
              Platform Integrations
            </p>
            <h2
              className="text-white font-extrabold text-[28px] sm:text-[38px] md:text-[46px] leading-tight mb-4"
              style={{
                fontFamily:
                  'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}>
              Accept payments on all major{" "}
              <span className="text-green-400">shopping platforms</span>
            </h2>
            <p className="text-white/50 text-[15px] md:text-[17px] leading-[28px] max-w-xl">
              Do you have a website built on any of these platforms? If so, you
              can start accepting payments in minutes!
            </p>
          </Fade>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group bg-white/5 hover:bg-white border border-white/10 hover:border-transparent rounded-2xl h-[140px] flex items-center justify-center p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl">
                <img
                  src={card.image}
                  alt="platform logo"
                  className="w-[64px] h-auto object-contain brightness-100 group-hover:brightness-0 group-hover:scale-110 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* See all plugins */}
          <Fade delay={0.3} className="mt-8">
            <div className="flex items-center gap-2 cursor-pointer group w-fit">
              <div className="w-7 h-7 rounded-full border border-green-500 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                <ChevronRight className="w-3.5 h-3.5 text-green-500 group-hover:text-white" />
              </div>
              <p className="text-[14px] font-semibold text-green-400 group-hover:underline">
                See all plugins
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* ══ SECTION 2 — Global payments: text left, image right ══ */}
      <div className="w-full bg-white">
        <Fade className={SECTION}>
          <div className="flex-1 max-w-xl">
            <p className={TAG}>Global Reach</p>
            <h2 className={H2}>
              Get paid by customers from anywhere in the world
            </h2>
            <p className={BODY}>
              The internet has no borders, and neither should your business.
              With {siteConfig.name}, you can accept payments from international
              customers, wherever they are in the world.
            </p>
            <p className={BODY}>
              Accept payments from internationally-issued cards, display prices
              in USD, and get settled in USD.
            </p>
            <p className={BODY}>
              We also make available localized payment options — such as mobile
              money — that are popular in certain regions of the world.
            </p>
            <Accent />
          </div>

          <div className={IMG}>
            <img
              src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=900&auto=format&fit=crop"
              alt="Accept payments globally"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Fade>
      </div>
    </>
  );
};
