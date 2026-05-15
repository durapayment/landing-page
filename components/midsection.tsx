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
    <section className="w-full mt-20 bg-white px-6 sm:px-8 md:px-12 py-5  overflow-hidden">
      {/* MAIN ROW */}
      <div className="w-full max-w-6xl mx-auto  flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-100 sm:w-90 md:w-82 h-90 sm:h-105 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/seamless.png"
            alt="feature image"
            width={579}
            height={715}
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT: CONTENT */}
        <div className="flex-1 max-w-xl text-left mt-20">
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
              className="text-[24px] sm:text-[30px] md:text-[40px] leading-tight tracking-[-0.02em] mb-4 line-clamp-2">
              Deliver seamless payments that build customer trust
            </h3>

            <p className="text-[16px] md:text-[18px] text-[rgb(1,27,51)] leading-7">
              Give your customers a fast, reliable, and frictionless way to pay.
              With {siteConfig.name}, you can accept payments once and instantly
              support every preferred payment method in Nigeria.
            </p>
          </div>

          {/* FEATURE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 mb-10">
            {["Card", "Bank Account", "Bank Transfer", "USSD", "POS"].map(
              (item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <AnimatedTick />
                  <span className="text-[rgb(1,27,51)] font-bold">{item}</span>
                </div>
              ),
            )}
          </div>

          <div className="mb-8 mt-10">
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
      <div className="w-full max-w-6xl mx-auto mt-20 flex flex-col md:flex-row items-center justify-between gap-12">
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
            className="text-[24px] sm:text-[30px] md:text-[40px] leading-tight tracking-[-0.02em] mb-4 line-clamp-2">
            Achieve industry-leading success with smart routing
          </h3>

          <p className="text-[16px] md:text-[19px] text-[rgb(1,27,51)] leading-7 mb-8  ">
            Our smart payment infrastructure automatically selects the most
            reliable and cost-efficient processing routes to maximize approval
            rates and reduce failed transactions.
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
        <div>
          {/* LEFT: IMAGE */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-75 sm:w-90 md:w-82 h-90 sm:h-105 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/robust.png"
                alt="feature image"
                width={500}
                height={635}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Anti-fraud Section */}
      <div className="w-full max-w-6xl mx-auto mt-20 flex flex-col md:flex-row items-center justify-between gap-12 py-6">
        {/* LEFT: ANIMATION */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="relative w-75 md:w-95 h-115 hidden sm:block bg-blue-600 rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute w-16 h-25 bg-green-500 rounded-full animate-circleMove"></div>
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
            className="text-[24px] sm:text-[30px] md:text-[40px] leading-tight tracking-[-0.02em] mb-4 line-clamp-2">
            Gain full financial visibility with advanced reporting tools
          </h3>

          <p className="text-[16px] md:text-[18px] text-[rgb(1,27,51)] leading-7 mb-8">
            Track transactions, analyze customer behavior, and simplify
            accounting with powerful dashboards, downloadable reports, and
            automated reconciliation tools.
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
