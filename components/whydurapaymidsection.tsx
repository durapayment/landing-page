"use client";

import { siteConfig } from "@/config/site";

export const WhyDurapayMidSection = () => {
  return (
    <section className="w-full bg-white px-6 sm:px-8 md:px-12 py-10 overflow-hidden">
      {/* HEADER SECTION (01) */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-12 py-8">
        {/* IMAGE */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="w-full max-w-[220px] h-[220px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/Robust.png"
              alt="side feature"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="flex-1 max-w-xl text-left">
          <p className="text-[28px] font-bold leading-[42px] text-[rgba(1,27,51,0.2)]">
            01
          </p>

          <h3 className="text-[24px] sm:text-[30px] md:text-[40px] font-bold mb-4 text-[rgb(1,27,51)]">
            Delight customers with a seamless payments experience
          </h3>

          <p className="text-[16px] md:text-[18px] text-[rgb(1,27,51)] leading-7">
            Give your customers the gift of modern, frictionless, painless
            payments. Integrate {siteConfig.name} once and let your customers
            pay you however they want.
          </p>
        </div>
      </div>

      {/* SECTION 02 */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-16">
        {/* IMAGE */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="w-full max-w-md h-[320px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/Robust.png"
              alt="feature image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="flex-1 max-w-xl text-left">
          <p className="text-[28px] font-bold leading-[42px] text-[rgba(1,27,51,0.2)]">
            02
          </p>

          <h3 className="text-[24px] sm:text-[30px] md:text-[36px] font-bold mb-4 text-[rgb(1,27,51)]">
            Build custom payments experiences with well-documented APIs
          </h3>

          <p className="text-[16px] md:text-[18px] text-[rgb(1,27,51)] leading-7">
            Developers love our thorough, well-documented APIs that let you
            build everything from simple weekend projects to complex financial
            products serving hundreds of thousands of customers.
          </p>
        </div>
      </div>

      {/* SECTION 03 (ANTI-FRAUD) */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-16">
        {/* IMAGE */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="relative w-full max-w-md h-[320px] hidden sm:block bg-blue-600 rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute w-16 h-16 bg-green-500 rounded-full animate-circleMove"></div>
          </div>
        </div>

        {/* TEXT */}
        <div className="flex-1 max-w-xl text-left">
          <p className="text-[28px] font-bold leading-[42px] text-[rgba(1,27,51,0.2)]">
            03
          </p>

          <h3 className="text-[24px] sm:text-[30px] md:text-[36px] font-bold mb-4 text-[rgb(1,27,51)]">
            Protect yourself and your customers with advanced fraud detection
          </h3>

          <p className="text-[16px] md:text-[18px] mb-6 text-[rgb(1,27,51)]">
            Paystack’s combination of automated and manual fraud systems protect
            you from fraudulent transactions and chargebacks.
          </p>

          <h3 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold mb-4 text-[rgb(1,27,51)]">
            Detailed reporting for accounting, reconciliation, and audits
          </h3>

          <p className="text-[16px] md:text-[18px] text-[rgb(1,27,51)]">
            Understand customer patterns and reconcile easily with dashboards
            and exports.
          </p>
        </div>
      </div>

      {/* ANIMATION */}
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
