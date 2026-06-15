"use client";

import { Check, ArrowRight } from "lucide-react";
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
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5 }}
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

const ImgBox = ({ src, alt }: { src: string; alt: string }) => (
  <div className={IMG}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
    />
  </div>
);

/* ── DATA ── */
const sections = [
  {
    tag: "In-Person Payments",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop",
    title: "Delight customers with memorable, in-person payment experiences",
    text: "Simple, reliable POS systems that keep customers coming back.",
    points: [
      "Multiple payment channels (Card, Bank Transfer, USSD)",
      "Easy end-of-day accounting",
      "Track all payments from your phone",
      "Blazing fast connection",
      "Split payments, and more!",
    ],
    ctaText: "Learn more about Durapayment Terminal",
  },
  {
    tag: "Invoicing",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&auto=format&fit=crop",
    title: "Send fast invoices",
    text: "Say goodbye to delinquent customers. Request payment electronically with professional itemized invoices and get your money more quickly.",
    points: [
      "Track who has paid you",
      "Monitor how much you're owed",
      "Send electronic reminders",
    ],
    ctaText: "Learn more about Invoices and other Commercial tools",
  },
  {
    tag: "Notifications",
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&auto=format&fit=crop",
    title: "Get notified when you make a sale",
    text: "Receive automated email alerts every time a sale is made. Your customers also receive an automatic, beautiful receipt for their records.",
    points: [
      "Branded receipts for you and your customers",
      "Receive automated transaction email alerts",
      "Receive daily and weekly settlement reports",
    ],
  },
  {
    tag: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&auto=format&fit=crop",
    title: "Monitor your business performance while on the move",
    text: `Sign up for ${siteConfig.name} and track your most important business metrics on your mobile device.`,
    points: [
      `Signup for ${siteConfig.name} in minutes`,
      "Send invoices from your phone",
      "Look up transactions",
      "Get alerts for important updates",
      "Get instant support",
    ],
    ctaText: `Learn more about our ${siteConfig.name} Mobile App`,
  },
  {
    tag: "Fast Settlement",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=900&auto=format&fit=crop",
    title: "Get your money within 24 hours",
    text: "Receive your money automatically in your bank account within 24 hours after payment is made.",
  },
  {
    tag: "Apple Pay",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop",
    title: "Accept international payments via Apple Pay",
    points: [
      "Access millions of Apple Pay users in 60+ countries",
      "Enjoy improved success rates for international transactions",
      "Fast and secure payments experience",
    ],
    ctaText: "Learn more about Apple Pay",
  },
  {
    tag: "Starter Business",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop",
    title: `Use ${siteConfig.name} with an unregistered business`,
    text: "Get started even if your business isn't registered yet.",
    ctaText: `Learn more about ${siteConfig.name} Starter Business`,
  },
];

/* ── COMPONENT ── */
export const EntrepreneurLast = () => {
  return (
    <div className="w-full bg-white">
      {sections.map((item, index) => {
        const isOdd = index % 2 === 0; // odd = text left, image right
        const hasBg = index % 2 !== 0;

        return (
          <div
            key={index}
            className={hasBg ? "w-full bg-[#f4f6f9]" : "w-full bg-white"}>
            <Fade className={SECTION}>
              {/* Text always left on odd, right on even */}
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
                  <ImgBox src={item.image} alt={item.title} />
                </>
              ) : (
                <>
                  <ImgBox src={item.image} alt={item.title} />
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
  );
};
