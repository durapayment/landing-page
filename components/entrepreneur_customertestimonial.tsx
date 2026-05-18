"use client";

import { Check, ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

/* ── DESIGN TOKENS ── */
const SECTION =
  "w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 py-20 px-6 xl:px-0";
const IMG =
  "w-full max-w-[480px] h-[320px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0";
const H2 =
  "text-[26px] sm:text-[32px] md:text-[36px] font-bold text-[rgb(1,27,51)] leading-tight";
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

const Cta = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 mt-6 group cursor-pointer w-fit">
    <div className="w-7 h-7 rounded-full border border-green-500 flex items-center justify-center group-hover:bg-green-500 transition-colors">
      <ArrowRight className="w-3.5 h-3.5 text-green-600 group-hover:text-white transition-colors" />
    </div>
    <p className="text-[14px] font-semibold text-green-600 group-hover:underline">
      {text}
    </p>
  </div>
);

/* ── DATA ── */
const cards = [
  {
    logo: "/stripe.png",
    logoWidth: "w-[90px]",
    text: `${siteConfig.name} has been amazing for my business. I no longer worry over whether a customer will pay — I simply send them a ${siteConfig.name} Payment Page link.`,
    avatar: "/patrick.jpg",
    name: "Patrick Collison",
    role: "CEO, Stripe",
  },
  {
    logo: "/VISA.png",
    logoWidth: "w-[90px]",
    text: `${siteConfig.name} has helped us expand our business reach & accept payments from customers worldwide. It's also very easy to use, even for non-techies.`,
    avatar: "/otto-williams.jpeg",
    name: "Otto Williams",
    role: "CEO, Visa",
  },
  {
    logo: "/y.png",
    logoWidth: "w-[52px]",
    text: `Since we switched to ${siteConfig.name}, our customers always commend how easy payments have become. The website and mobile options are very easy to use.`,
    avatar: "/michael-siebel.jpeg",
    name: "Michael Seibel",
    role: "Partner, Y Combinator",
  },
];

const featureSections = [
  {
    tag: "Commerce Tools",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop",
    title: "Sell more online with free, powerful commerce tools",
    text: "Bring your ideas to market beautifully and boost sales with our toolkit of free commerce tools.",
    points: [
      "No website? No problem. Collect payments with customisable selling links",
      "Manage incoming orders on web and mobile",
      "Simple, powerful inventory management",
      "Easy plugins and integrations with thousands of world-class seller platforms",
    ],
    ctaText: `Sell more online with ${siteConfig.name} Commerce`,
  },
];

/* ── COMPONENT ── */
export const Testimonial = () => {
  return (
    <>
      {/* ══ TESTIMONIALS ══ */}
      <section className="w-full bg-[#011B33] py-24 px-6 relative overflow-hidden">
        {/* bg rings */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-white/[0.04]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

        <div className="w-full max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <Fade className="mb-14">
            <p className="text-[11px] font-black tracking-[0.22em] uppercase text-green-400 mb-4">
              Customer Testimonials
            </p>
            <h2
              className="text-white font-extrabold text-[28px] sm:text-[38px] md:text-[46px] leading-tight max-w-2xl mb-4"
              style={{
                fontFamily:
                  'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}>
              Trusted by{" "}
              <span className="text-green-400">40,000+ businesses</span>
            </h2>
            <p className="text-white/50 text-[15px] md:text-[17px] leading-[28px] max-w-xl">
              Over 40,000 businesses trust {siteConfig.name} to power payments.
              Here's what some of them have to say.
            </p>
          </Fade>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col justify-between hover:bg-white/8 transition-colors">
                {/* Quote icon */}
                <div className="mb-5">
                  <Quote className="w-6 h-6 text-green-400 opacity-60" />
                </div>

                {/* Text */}
                <p className="text-white/70 text-[14px] leading-7 flex-1 mb-6">
                  {card.text}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-5" />

                {/* Footer */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                      <img
                        src={card.avatar}
                        alt={card.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white text-[13px] font-semibold">
                        {card.name}
                      </h4>
                      <p className="text-white/40 text-[12px]">{card.role}</p>
                    </div>
                  </div>
                  <div
                    className={`${card.logoWidth} opacity-40 grayscale brightness-200`}>
                    <img
                      src={card.logo}
                      alt={card.name}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURE SECTIONS ══ */}
      <div className="w-full bg-white">
        {featureSections.map((item, index) => {
          const isOdd = index % 2 === 0;
          return (
            <div
              key={index}
              className={
                index % 2 !== 0 ? "w-full bg-[#f4f6f9]" : "w-full bg-white"
              }>
              <Fade className={SECTION}>
                {isOdd ? (
                  <>
                    <div className="flex-1 max-w-xl">
                      <p className={TAG}>{item.tag}</p>
                      <h3 className={H2}>{item.title}</h3>
                      {item.text && <p className={BODY}>{item.text}</p>}
                      {item.points && <List items={item.points} />}
                      {item.ctaText && <Cta text={item.ctaText} />}
                      <Accent />
                    </div>
                    <div className={IMG}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className={IMG}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 max-w-xl">
                      <p className={TAG}>{item.tag}</p>
                      <h3 className={H2}>{item.title}</h3>
                      {item.text && <p className={BODY}>{item.text}</p>}
                      {item.points && <List items={item.points} />}
                      {item.ctaText && <Cta text={item.ctaText} />}
                      <Accent />
                    </div>
                  </>
                )}
              </Fade>
            </div>
          );
        })}
      </div>
    </>
  );
};
