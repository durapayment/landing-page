"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const logos = [
  { src: "/Ariiya.svg", small: true },
  { src: "/mtn-group-grayscale.svg", small: true },
  { src: "/piggyvest.svg", small: false },
  { src: "/Ibom.svg", small: false },
  { src: "/Kuda.svg", small: false },
  { src: "/bolt.svg", small: true },
  { src: "/Dominos-Plain.svg", small: false },
  { src: "/Lagos-Internal.svg", small: false },
  { src: "/Betway-Plain.svg", small: false },
  { src: "/Carbon-dark.svg", small: false },
  { src: "/Axa.svg", small: false },
  { src: "/Abia-State-University.svg", small: false },
  { src: "/GIGM.svg", small: false },
  { src: "/Smile.svg", small: true },
  { src: "/Cowrywise.svg", small: false },
];

// duplicate for infinite scroll
const marqueeLogos = [...logos, ...logos];

const LogoItem = ({ src, small }: { src: string; small: boolean }) => (
  <div className="flex items-center justify-center shrink-0 px-8">
    <img
      src={src}
      alt="partner logo"
      className={`h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 ${
        small ? "w-10" : "w-24"
      }`}
    />
  </div>
);

export const OurPartners = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 xl:px-0 mb-14">
        {/* ── TEXT ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[11px] font-black tracking-[0.22em] uppercase text-green-500 mb-3">
              Our Partners
            </p>
            <h2
              className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-[#011B33] leading-tight max-w-[22ch]"
              style={{
                fontFamily:
                  'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}>
              Powering growth for{" "}
              <span className="text-green-500">amazing businesses</span>
            </h2>
          </div>

          <p className="text-[15px] md:text-[17px] text-[rgba(1,27,51,0.6)] leading-[28px] max-w-[42ch] md:text-right">
            {siteConfig.name} is a growth engine for a new generation of
            innovative, forward-looking organizations operating in Africa.
          </p>
        </motion.div>
      </div>

      {/* ── MARQUEE ROW 1 ── */}
      <div className="relative w-full">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}>
          {marqueeLogos.map((logo, i) => (
            <LogoItem key={i} src={logo.src} small={logo.small} />
          ))}
        </motion.div>
      </div>

      {/* ── MARQUEE ROW 2 (reverse) ── */}
      <div className="relative w-full mt-8">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}>
          {[...marqueeLogos].reverse().map((logo, i) => (
            <LogoItem key={i} src={logo.src} small={logo.small} />
          ))}
        </motion.div>
      </div>

      {/* ── STAT STRIP ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-6xl mx-auto px-6 xl:px-0 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "200,000+", label: "Businesses powered" },
            { value: "50%+", label: "Of Nigerian online payments" },
            { value: "$20M+", label: "Paid out monthly" },
            { value: "99.9%", label: "Platform uptime" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#f4f6f9] rounded-2xl px-6 py-5 border border-gray-100">
              <p className="text-[24px] sm:text-[28px] font-extrabold text-[#011B33] leading-tight">
                {stat.value}
              </p>
              <p className="text-[12px] text-[rgba(1,27,51,0.5)] mt-1 leading-5">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
