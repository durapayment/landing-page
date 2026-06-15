"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

/* ---------------- STYLES ---------------- */
const SECTION_WRAPPER =
  "w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 py-20";

const IMAGE_BOX =
  "w-full max-w-[520px] h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl";

const HEADING_CLASS =
  "text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[rgb(1,27,51)] leading-tight";

const PARAGRAPH_CLASS =
  "text-[15px] md:text-[17px] text-[rgba(1,27,51,0.65)] leading-[28px] mt-4";

const NUMBER_CLASS =
  "text-[13px] font-black tracking-[0.2em] uppercase text-green-500 mb-3";

const sections = [
  {
    num: "01",
    title: "Direct Bank Integrations",
    body: [
      "Durapayment is directly integrated into some of Nigeria's largest banks, ensuring near-100% success rates for many card transactions.",
    ],
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=900&auto=format&fit=crop",
    alt: "Direct bank integrations",
    reverse: false,
  },
  {
    num: "02",
    title: "Intelligent Routing",
    body: [
      "Durapayment dynamically routes transactions through different gateways and processors, ensuring optimal payment pathways and high success rates.",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop",
    alt: "Intelligent routing dashboard",
    reverse: true,
  },
  {
    num: "03",
    title: "Smart Error Resolution",
    body: [
      "On the rare occasion that a transaction fails, Durapayment proactively suggests alternate payment channels so customers can try a different method.",
      "For example, if a card fails, the Checkout Form might suggest paying via QR code instead.",
    ],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&auto=format&fit=crop",
    alt: "Smart error resolution on checkout",
    reverse: false,
  },
];

export const SuccessRates = () => {
  return (
    <section className="w-full font-sans">
      {/* ── HERO ── */}
      <div className="relative w-full overflow-hidden bg-[#011B33] pt-32 pb-28 px-6">
        {/* decorative rings */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-white/5" />
        <div className="absolute -top-16 -right-16 w-[340px] h-[340px] rounded-full border border-white/5" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-green-500/5 blur-3xl" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-[12px] font-semibold tracking-widest uppercase">
              Why 200,000+ businesses choose us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white font-extrabold text-[32px] sm:text-[42px] md:text-[52px] leading-[1.15] tracking-tight mb-6">
            Why do 200,000+
            <br className="hidden sm:block" /> businesses love{" "}
            <span className="text-green-400">{siteConfig.name}?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/50 text-[16px] md:text-[18px] leading-[30px] max-w-xl mx-auto">
            {siteConfig.name} is the payment processor of choice for the
            fastest-growing businesses in Nigeria. Here are 12 reasons why.
          </motion.p>
        </div>
      </div>

      {/* ── INTRO HEADING ── */}
      <div className="w-full bg-white">
        <div className="w-full max-w-6xl mx-auto px-6 pt-20 pb-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[12px] font-black tracking-[0.25em] uppercase text-green-500 mb-3">
            Success Rates
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold text-[rgb(1,27,51)] leading-tight max-w-2xl">
            How {siteConfig.name} achieves stellar success rates
          </motion.h2>
        </div>

        {/* ── SECTIONS ── */}
        <div className="px-6 pb-24">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className={`${SECTION_WRAPPER} ${s.reverse ? "md:flex-row-reverse" : ""}`}>
              {/* Image */}
              <div className="flex-1 flex justify-center">
                <div className={IMAGE_BOX}>
                  <img
                    src={s.image}
                    alt={s.alt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 max-w-xl">
                <p className={NUMBER_CLASS}>{s.num}</p>
                <h3 className={HEADING_CLASS}>{s.title}</h3>
                {s.body.map((para, j) => (
                  <p key={j} className={PARAGRAPH_CLASS}>
                    {para}
                  </p>
                ))}

                {/* subtle divider accent */}
                <div className="mt-8 w-12 h-1 rounded-full bg-green-500/40" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
