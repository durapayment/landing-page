"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

// 🧩 Animated SVG
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

export const MidSection = () => {
  return (
    <section className="w-full bg-white px-6 sm:px-8 md:px-12 py-5  overflow-hidden">
      {/* SECTION HEADING */}
      <div className="w-full flex flex-col gap-1 max-w-310 mx-auto text-left mb-14">
        <h2
          style={{
            fontFamily:
              'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            fontWeight: 800,
            color: "rgb(1, 27, 51)",
          }}
          className="text-[25px] md:text-[48px] leading-tight tracking-[-0.02em]"
        >
          Simple, easy payments
        </h2>

        <p
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            fontWeight: 400,
            color: "rgb(1, 27, 51)",
          }}
          className="text-base sm:text-lg md:text-[20px] max-w-[45ch]"
        >
          Building a business is hard. Getting paid shouldn't be.
        </p>
      </div>

      {/* MAIN ROW */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT: ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-start"
        >
          <motion.div
            animate={{
              y: [0, -18, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-65 sm:w-[320px] md:w-105 h-125 md:h-150"
          >
            <div className="absolute inset-0 bg-green-100 rounded-full blur-3xl opacity-50" />

            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="w-45 sm:w-55 md:w-65 h-85 md:h-105 bg-white rounded-[40px] shadow-xl border border-green-100 flex flex-col items-center justify-center">
                <div className="w-[85%] h-[70%] bg-green-50 rounded-2xl flex items-center justify-center text-green-700 text-sm font-medium">
                  Payment Now
                </div>
                <div className="w-16 h-1 bg-gray-300 rounded-full mt-4" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: CONTENT */}
        <div className="flex-1 max-w-xl text-left">
          {/* FIRST BLOCK */}
          <div className="mb-8">
            <h3
              style={{
                fontFamily:
                  'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                fontWeight: 700,
                lineHeight: "1.2",
                color: "rgb(1, 27, 51)",
              }}
              className="text-[24px] sm:text-[30px] md:text-[40px] leading-tight tracking-[-0.02em] mb-4"
            >
              Delight customers with a seamless payments experience
            </h3>

            <p className="text-[16px] md:text-[18px] text-[rgb(1,27,51)] leading-7">
              Give your customers the gift of modern, frictionless, painless
              payments. Integrate {siteConfig.name} once and let your customers
              pay you however they want.
            </p>
          </div>

          {/* FEATURE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 mb-10">
            {[
              "Card",
              "Bank Account",
              "Bank Transfer",
              "USSD",
              "Apple Pay",
              "Visa QR",
              "Mobile Money",
              "POS",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <AnimatedTick />
                <span className="text-[rgb(1,27,51)] font-bold">{item}</span>
              </div>
            ))}
          </div>

          <div className="mb-8 mt-10">
            <h3
              style={{
                fontFamily:
                  'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                fontWeight: 700,
                lineHeight: "1.2",
                color: "rgb(1, 27, 51)",
              }}
              className="text-[24px] sm:text-[30px] md:text-[40px] leading-tight tracking-[-0.02em] mb-4"
            >
              Enjoy phenomenal transaction success rates
            </h3>

            <p className="text-[16px] md:text-[18px] text-[rgb(1,27,51)] leading-7 mb-6">
              We automatically route payments through the most optimal channels,
              ensuring the highest transaction success rates in the market.
            </p>

            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center group-hover:scale-105 transition">
                <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none">
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="text-green-600 font-medium group-hover:underline">
                Find out how we achieve high rates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="w-full max-w-6xl mx-auto mt-15 flex flex-col md:flex-row items-center justify-between gap-12">
        <div>
          {/* LEFT: IMAGE */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-75 sm:w-90 md:w-82 h-90 sm:h-105 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/Robust.png"
                alt="feature image"
                width={500}
                height={635}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* RIGHT: CONTENT */}
        <div className="flex-1 max-w-xl text-left">
          <h3
            style={{
              fontFamily:
                'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 700,
              lineHeight: "1.2",
              color: "rgb(1, 27, 51)",
            }}
            className="text-[24px] sm:text-[30px] md:text-[40px] leading-tight tracking-[-0.02em] mb-4"
          >
            Build custom payments experiences with well-documented APIs
          </h3>

          <p className="text-[16px] md:text-[19px] text-[rgb(1,27,51)] leading-7 mb-8  ">
            Developers love our thorough, well-documented APIs that let you to
            build everything from simple weekend projects, to complex financial
            products serving hundreds of thousands of customers. If you can
            imagine it, you can build it with Paystack.
          </p>

          <div className="flex flex-col gap-5 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <p className="text-[rgb(1,27,51)] font-bold">
                Collect one-time and recurring payments from your app or website
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <p className="text-[rgb(1,27,51)] font-bold">
                Make instant transfers
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <p className="text-[rgb(1,27,51)] font-bold">
                Retrieve all your transaction and customer data
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <p className="text-[rgb(1,27,51)] font-bold">
                Verify the identity of customers
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center transition group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="text-green-600 font-medium group-hover:underline">
              Durapayment Api quick start guide
            </p>
          </div>
        </div>
        {/* RIGHT CONTENT */}
      </div>

      {/* Anti-fraud Section */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-6">
        {/* LEFT: ANIMATION */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="relative w-75 md:w-95 h-80 hidden sm:block bg-blue-600 rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute w-16 h-16 bg-green-500 rounded-full animate-circleMove"></div>
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="flex-1 max-w-xl text-left">
          <h3
            style={{
              fontFamily:
                'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 700,
              lineHeight: "1.2",
              color: "rgb(1, 27, 51)",
            }}
            className="text-[24px] sm:text-[30px] md:text-[40px] leading-tight tracking-[-0.02em] mb-4"
          >
            Protect yourself and your customers with advanced fraud detection
          </h3>

          <p className="text-[16px] md:text-[18px] text-[rgb(1,27,51)] leading-7 mb-8">
            Paystack’s combination of automated and manual fraud systems protect
            you from fraudulent transactions and associated chargeback claims.
          </p>
          <h3
            style={{
              fontFamily:
                'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 700,
              lineHeight: "1.2",
              color: "rgb(1, 27, 51)",
            }}
            className="text-[24px] sm:text-[30px] md:text-[40px] leading-tight tracking-[-0.02em] mb-4"
          >
            Detailed reporting for accounting, reconciliation, and audits
          </h3>

          <p className="text-[16px] md:text-[18px] text-[rgb(1,27,51)] leading-7 mb-8">
            Understand your customers’ purchase patterns and do easy
            reconciliations with a robust data Dashboard and easy exports.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes circleMove {
          0% {
            top: 0;
            left: 0;
          }
          25% {
            top: 0;
            left: calc(100% - 64px);
          }
          50% {
            top: calc(100% - 64px);
            left: calc(100% - 64px);
          }
          75% {
            top: calc(100% - 64px);
            left: 0;
          }
          100% {
            top: 45%;
            left: 45%;
          }
        }

        .animate-circleMove {
          animation: circleMove 4s linear infinite;
        }
      `}</style>
    </section>
  );
};
