"use client";

import { useState } from "react";
import { Play, ChevronRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Image from "next/image";

// MID SECTION STYLES
const HEADING_CLASS =
  "text-[52px] sm:text-[30px] md:text-[40px] font-bold text-[rgb(1,27,51)] leading-[0,5] mb-4";

const PARAGRAPH_CLASS =
  "text-[16px] md:text-[18px] text-[rgb(1,27,51)] leading-7";

const SECTION_WRAPPER =
  "w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-16";

const IMAGE_BOX =
  "w-full max-w-[200px] h-[220px] sm:h-[240px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg";

const AnimatedTick = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <motion.path
      d="M20 6L9 17l-5-5"
      stroke="#00a650"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    />
  </svg>
);

export const Entrepreneur = () => {
  const handleRedirect = () => {
    window.open("https://online.durapayment.com", "_blank");
  };
  const [videoOpen, setVideoOpen] = useState(false);

  const logos = [
    "/Dominos-Plain.svg",
    "/mtn-group-grayscale.svg",
    "/Bolt.svg",
    "/axa.svg",
  ];

  const setOpenVideo = (open: boolean) => {
    setVideoOpen(open);
  };

  return (
    <section className="w-full bg-tertiary/10">
      {/* NAV */}
      <div className="max-w-310 mx-auto flex items-center justify-between py-5 px-5 sm:px-8 md:px-12 lg:px-0">
        <button className="lg:hidden"></button>
      </div>

      {/* HERO */}
      <div className="max-w-310 mx-auto px-5 sm:px-8 md:px-12 lg:px-6 xl:px-0">
        <div className="py-15 md:py-30 lg:grid lg:grid-cols-2 items-center gap-10 lg:gap-20">
          <div className="w-full text-left justify-self-start">
            <p className="text-xs font-bold mb-4">
              DURAPAYMENT FOR ENTREPRENEURS
            </p>

            <h1
              style={{
                fontFamily:
                  'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                fontWeight: 800,
                lineHeight: "1.1",
                color: "rgb(1, 27, 51)",
              }}
              className="max-w-150 mb-5 sm:mb-6 tracking-[-0.03em] text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] md:leading-[1.1]">
              Get paid quickly with simple, powerful tools
            </h1>

            <p className="text-[#011B33] mb-7 text-sm sm:text-base md:text-lg leading-7">
              Durapayment helps entrepreneurs like you accept payments online.
              <br />
              Fast set up. Quick payouts. No long stories.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              <button
                onClick={handleRedirect}
                className="bg-accent cursor-pointer text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-md text-sm font-medium hover:bg-tertiary transition w-full sm:w-auto">
                Create a free account
              </button>
            </div>
          </div>
        </div>

        {/* PARTNERS */}
        <div className="border-t border-green-20 py-10">
          <div className="flex flex-col md:flex-row items-start lg:items-center justify-between gap-8">
            <div className="text-left w-full lg:w-auto">
              <p className="text-sm font-medium text-[#011B33] mb-3">
                Trusted by over 200,000 businesses
              </p>

              <div className="flex flex-nowrap items-center gap-3 sm:gap-4">
                {logos.slice(0, 3).map((logo, i) => (
                  <div
                    key={i}
                    className="w-22.5 sm:w-25 h-7 flex items-center justify-center shrink-0">
                    <img
                      src={logo}
                      className="object-contain max-h-full"
                      alt="logo"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full flex justify-start lg:justify-end">
              <div className="flex flex-row items-center gap-3 max-w-117.5">
                <p className="text-sm sm:text-base text-[#011B33] md:text-end font-semibold leading-6 sm:leading-7 md:max-w-[320px]">
                  Watch {siteConfig.name}
                </p>

                <button
                  onClick={() => setOpenVideo(true)}
                  className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center">
                  <Play className="text-white w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MID SECTION */}
      <section className="w-full bg-white px-6 sm:px-8 md:px-12">
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              Durapayment pays out over $20 million to Nigerian businesses every
              month
            </h3>

            <p className={PARAGRAPH_CLASS}>
              Durapayment helps businesses like yours get paid quickly and
              securely from anyone, anywhere in the world. Whether you're
              selling on Instagram, in a physical store, or even without a
              website, Paystack's collection of payments tools will help you get
              paid.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-start">
            <div className={IMAGE_BOX}>
              <img
                src="/acceptpay.jpg"
                className="w-full h-full object-cover"
                alt="payment"
              />
            </div>
          </div>
        </div>

        {/* SECTION 01 */}
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 flex justify-center md:justify-start">
            <div className={IMAGE_BOX}>
              <img
                src="/gettingpaid.jpg"
                className="w-full h-full object-cover"
                alt="payment"
              />
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              Get paid even if you don’t have a website
            </h3>

            <p className={PARAGRAPH_CLASS}>
              Create a Payment Page in 2 mins, and share that link via SMS,
              Instagram DM, WhatsApp chat, or however you communicate with your
              customers.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "No developers needed",
                "Your customers will be able to click and pay you instantly",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="text-green-600 w-4 h-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 mt-6 cursor-pointer">
              <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-green-600" />
              </div>
              <p>Learn more about payment pages and other commercial tools</p>
            </div>
          </div>
        </div>
        {/* SECTION 02 */}
        <div className={`${SECTION_WRAPPER} mt-10`}>
          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              Build trust with a beautiful, branded Checkout Form
            </h3>

            <p className={PARAGRAPH_CLASS}>
              Give customers confidence in your business with a beautiful
              checkout form that shows off your brand.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "No redirects - keep customers on the same page",
                "Multiple payment channels",
                "If transaction fails, the Paystack Checkout Form smartly suggests other payment channels",
                "Automatic translation (Coming Soon)",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="text-green-600 w-4 h-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex justify-center md:justify-start">
            <div className={IMAGE_BOX}>
              <img
                src="/checkoutform.png"
                className="w-full h-full object-cover"
                alt="payment"
              />
            </div>
          </div>
        </div>
        {/* SECTION 03 */}
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 flex justify-center md:justify-start">
            <div className={IMAGE_BOX}>
              <img
                src="/getpaid.gif"
                className="w-full h-full object-cover"
                alt="payment"
              />
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              Delight customers with a seamless payments experience
            </h3>

            <p className={PARAGRAPH_CLASS}>
              Give your customers the gift of modern, frictionless, painless
              payments. Integrate Paystack once and let your customers pay you
              however they want.
            </p>

            <ul className="mt-6 space-y-3">
              {["Mobile Money", "Card", "Apple Pay"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="text-green-600 w-4 h-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};
