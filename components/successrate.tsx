"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";

/* ---------------- STYLES ---------------- */
const SECTION_WRAPPER =
  "w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-16";

const IMAGE_BOX =
  "w-full max-w-[500px] h-[320px] md:h-[400px] rounded-2xl overflow-hidden";

const HEADING_CLASS =
  "text-[24px] sm:text-[30px] md:text-[40px] font-bold text-[rgb(1,27,51)] leading-tight";

const PARAGRAPH_CLASS =
  "text-[16px] md:text-[18px] text-[rgba(1,27,51,0.8)] leading-[28px] mt-4";

/* ---------------- Animated Tick ---------------- */
const AnimatedTick = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 text-green-500"
    fill="none"
    stroke="currentColor"
    strokeWidth="2">
    <motion.path
      d="M5 13l4 4L19 7"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    />
  </svg>
);

export const SuccessRates = () => {
  return (
    <section className="w-full">
      {/* HERO SECTION */}
      <div className="w-full bg-green-50 pt-20 pb-20 md:pt-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1
            className="mb-6 pt-20 text-[#011B33] font-extrabold tracking-[-0.03em]
            text-[30px] max-w-2xl mx-auto sm:text-[36px] md:text-[42px] lg:text-[48px]
            leading-tight lg:leading-[57.6px]"
            style={{
              fontFamily:
                'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            }}>
            Why do 200,000+ businesses love Durapayment?
          </h1>

          <p
            className="text-[#011B33]/80 text-sm sm:text-base md:text-lg lg:text-[20px]
            leading-7 lg:leading-[30px] pb-20 max-w-2xl mx-auto"
            style={{
              fontFamily:
                'Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            }}>
            Durapayment is the payment processor of choice for some of the
            fastest-growing businesses in Nigeria. Here’re 12 reasons why.
          </p>
        </div>
      </div>

      {/* WHITE CONTENT SECTIONS */}
      <div className="w-full  bg-white">
        {/* SECTION 01 */}
        <div className="w-full max-w-6xl mx-auto pt-12 sm:pt-16 md:pt-20">
          <div className="w-full max-w-2xl text-left mb-10 sm:mb-12 md:mb-14">
            <h1
              style={{
                fontFamily:
                  'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                fontWeight: 800,
                lineHeight: "1.2",
                color: "rgb(1, 27, 51)",
              }}
              className="mb-4 sm:mb-6 text-[24px] sm:text-[32px] md:text-[48px]">
              How Durapayment achieves stellar success rates
            </h1>
          </div>
        </div>
        <div className={`${SECTION_WRAPPER} mt-10`}>
          <div className="flex-1 flex justify-center md:justify-start">
            <div className={IMAGE_BOX}>
              <img
                src="/Direct.png"
                className="w-full h-full object-cover"
                alt="Start accepting payments"
              />
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <p className="text-[28px] font-bold text-[rgba(1,27,51,0.2)] mb-2">
              01
            </p>

            <h3 className={HEADING_CLASS}>Direct Bank Integrations</h3>

            <p className={PARAGRAPH_CLASS}>
              Durapayment is directly integrated into some of Nigeria’s largest
              banks, ensuring a near-100% success rates for many card
              transactions.
            </p>
          </div>
        </div>

        {/* SECTION 02 */}
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 max-w-xl">
            <p className="text-[28px] font-bold text-[rgba(1,27,51,0.2)] mb-2">
              02
            </p>

            <h3 className={HEADING_CLASS}>Intelligent Routing</h3>

            <p className={PARAGRAPH_CLASS}>
              Durapayment dynamically routes transactions through different
              gateways and processors, ensuring optimal payment pathways, and
              high success rates.
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-start">
            <div className={IMAGE_BOX}>
              <img
                src="/Smart-Routing.png"
                className="w-full h-full object-cover"
                alt="Fair pricing"
              />
            </div>
          </div>
        </div>

        {/* SECTION 03 */}
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 flex justify-center md:justify-start">
            <div className={IMAGE_BOX}>
              <img
                src="/Smart-Error.png"
                className="w-full h-full object-cover"
                alt="Fair pricing"
              />
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <p className="text-[28px] font-bold text-[rgba(1,27,51,0.2)] mb-2">
              03
            </p>

            <h3 className={HEADING_CLASS}>Smart Error Resolution</h3>

            <p className={PARAGRAPH_CLASS}>
              On the rare occasion that a transaction fails, Durapayment
              proactively suggests alternate payment channels to the customer,
              so they can try paying through a different method.
            </p>
            <p className={PARAGRAPH_CLASS}>
              For example, if the customer’s card fails, the Durapayment
              Checkout Form might suggest to the customer to try paying through
              QR code instead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
