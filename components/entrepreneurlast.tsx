"use client";

import { Check, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
/* =========================
   STYLES
========================= */
const HEADING_CLASS =
  "text-[52px] sm:text-[30px] md:text-[40px] font-bold text-[rgb(1,27,51)] leading-[1.1] mb-4";

const PARAGRAPH_CLASS =
  "text-[16px] md:text-[18px] text-[rgb(1,27,51)] leading-7";

/* ✅ FIXED: MATCH TryDurapayNow WIDTH */
const SECTION_WRAPPER =
  "w-full max-w-[1300px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 py-16 sm:py-20 md:py-28";

const IMAGE_BOX =
  "w-full max-w-[200px] h-[220px] sm:h-[240px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg";

const sections = [
  {
    image: "/videoframe_2.png",
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
    image: "/invoice.png",
    title: "Send fast invoices",
    text: "Say goodbye to delinquent customers. Request payment electronically with professional itemized invoices and get your money more quickly.",
    points: [
      "Track who has paid you",
      "Monitor how much you’re owed",
      "Send electronic reminders",
    ],
    ctaText: "Learn more about Invoices and other Commercial tools",
  },
  {
    image: "/notifies.jpg",
    title: "Get notified when you make a sale",
    text: "Receive automated email alerts every time a sale is made. Your customers also receive an automatic, beautiful receipt for their records.",
    points: [
      "Branded receipts for you and your customers",
      "Receive automated transaction email alerts",
      "Receive daily and weekly settlement reports",
    ],
  },
  {
    image: "/app.png",
    title: "Monitor your business performance while on the move",
    text: "Sign up for {siteConfig.name} and track your most important business metrics on your mobile device.",
    points: [
      "Signup for {siteConfig.name} in minutes",
      "Send invoices from your phone",
      "Look up transactions",
      "Get alerts for important updates",
      "Get instant support",
    ],
    ctaText: "Learn more about our {siteConfig.name} Mobile App",
  },
  {
    image: "/videoframe_1.png",
    title: "Get your money within 24 hours",
    text: "Receive your money automatically in your bank account within 24 hours after payment is made.",
  },
  {
    image: "/app.png",
    title: "Accept international payments via Apple Pay",
    points: [
      "Access millions of Apple Pay users in 60+ countries",
      "Enjoy improved success rates for international transactions",
      "Fast and secure payments experience",
    ],
    ctaText: "Learn more about Apple Pay",
  },
  {
    image: "/suya.jpg",
    title: "Use {siteConfig.name} with an unregistered business",
    text: "Get started even if your business isn't registered yet.",
    ctaText: "Learn more about {siteConfig.name} Starter Business",
  },
];

/* =========================
   COMPONENT
========================= */
export const EntrepreneurLast = () => {
  return (
    <>
      {sections.map((item, index) => {
        const isImageLeft = index % 2 === 0;

        return (
          <div key={index} className={SECTION_WRAPPER}>
            {/* IMAGE LEFT */}
            {isImageLeft && (
              <div className="flex-1 flex justify-center md:justify-start">
                <div className={IMAGE_BOX}>
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt="payment"
                  />
                </div>
              </div>
            )}

            {/* TEXT */}
            <div className="flex-1 max-w-xl">
              <h3 className={HEADING_CLASS}>{item.title}</h3>

              {item.text && <p className={PARAGRAPH_CLASS}>{item.text}</p>}

              {item.points && (
                <ul className="mt-6 space-y-3">
                  {item.points.map((text, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="text-green-600 w-4 h-4" />
                      <span className="font-bold">{text}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.ctaText && (
                <div className="flex items-center gap-2 mt-6 cursor-pointer">
                  <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-green-600 font-bold">{item.ctaText}</p>
                </div>
              )}
            </div>

            {/* IMAGE RIGHT */}
            {!isImageLeft && (
              <div className="flex-1 flex justify-center md:justify-end">
                <div className={IMAGE_BOX}>
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt="payment"
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
