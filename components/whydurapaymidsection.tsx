"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { ChevronRight, Check } from "lucide-react"; // ✅ FIXED: added Check

// Shared styles (Paystack-like consistency)
const HEADING_CLASS =
  "text-[48px] sm:text-[30px] md:text-[40px] font-bold text-[rgb(1,27,51)] leading-[1.15] mb-4";

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

export const WhyDurapayMidSection = () => {
  return (
    <section className="w-full bg-white mt-20 px-6 sm:px-8 md:px-12 overflow-hidden">
      {/* SECTION 01 */}
      <div className={`${SECTION_WRAPPER} mt-10`}>
        <div className="flex-1 flex justify-center md:justify-start">
          <div className={IMAGE_BOX}>
            <img
              src="/Start.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>

        <div className="flex-1 max-w-xl">
          <p className="text-[28px] font-bold text-[rgba(1,27,51,0.2)] mb-2">
            01
          </p>

          <h3 className={HEADING_CLASS}>Start accepting payments instantly</h3>

          <p className={PARAGRAPH_CLASS}>
            Durapayment is the fastest, simplest way to start accepting online
            payments in Nigeria. From signup to receiving real payments can take
            under 15 minutes. Seriously.
          </p>
        </div>
      </div>

      {/* SECTION 02 */}
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 max-w-xl">
          <p className="text-[28px] font-bold text-[rgba(1,27,51,0.2)] mb-2">
            02
          </p>

          <h3 className={HEADING_CLASS}>Start accepting payments instantly</h3>

          <p className={PARAGRAPH_CLASS}>
            Durapayment is the fastest, simplest way to start accepting online
            payments in Nigeria. From signup to receiving real payments can take
            under 15 minutes. Seriously.
          </p>

          <div className="flex items-center gap-2 mt-6 group cursor-pointer">
            <div className="w-6 h-6 rounded-full bg-white border border-green-500 flex items-center justify-center group-hover:bg-green-500 transition">
              <ChevronRight className="w-4 h-4 text-green-600 group-hover:text-white" />
            </div>
            <p className="text-[rgb(1,27,51)]">See our pricing</p>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-start">
          <div className={IMAGE_BOX}>
            <img
              src="/Fair.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* SECTION 03 */}
      <div className={SECTION_WRAPPER}>
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <div className={IMAGE_BOX}>
            <img
              src="/Collect.gif"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </motion.div>

        <div className="flex-1 max-w-xl">
          <p className="text-[28px] font-bold text-[rgba(1,27,51,0.2)] mb-2">
            03
          </p>

          <h3 className={HEADING_CLASS}>
            Delight customers with a seamless payments experience
          </h3>

          <p className={PARAGRAPH_CLASS}>
            Give your customers the gift of modern, frictionless, painless
            payments. Integrate {siteConfig.name} once and let your customers
            pay you however they want.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mt-6">
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
                <span className="text-[rgb(1,27,51)] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 04 */}
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 max-w-xl">
          <p className="text-[28px] font-bold text-[rgba(1,27,51,0.2)] mb-2">
            04
          </p>

          <h3 className={HEADING_CLASS}>
            Enjoy phenomenal transaction success rates
          </h3>

          <p className={PARAGRAPH_CLASS}>
            We automatically route payments through the most optimal channels,
            ensuring the highest transaction success rates in the market
          </p>

          <div className="flex items-center gap-2 mt-6 group cursor-pointer">
            <div className="w-6 h-6 rounded-full bg-white border border-green-500 flex items-center justify-center group-hover:bg-green-500 transition">
              <ChevronRight className="w-4 h-4 text-green-600 group-hover:text-white" />
            </div>
            <p className="text-[rgb(1,27,51)]">
              Find out how we achieve high success rates
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className={IMAGE_BOX}>
            <img
              src="/Smart.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* SECTION 05 */}
      <div className={`${SECTION_WRAPPER} mb-24`}>
        <div className="flex-1 flex justify-center md:justify-start">
          <div className={IMAGE_BOX}>
            <img
              src="/image1.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>

        <div className="flex-1 max-w-xl">
          <p className="text-[28px] font-bold text-[rgba(1,27,51,0.2)] mb-2">
            05
          </p>

          <h3 className={HEADING_CLASS}>
            Protect yourself and your customers with advanced fraud detection
          </h3>

          <p className={PARAGRAPH_CLASS}>
            Durapayment’s combination of automated and manual fraud systems
            protect you from fraudulent transactions.
          </p>

          <div className="grid grid-cols-1 gap-y-3 mt-6">
            {[
              "PCI-DSS-certified systems",
              "Automated fraud monitoring",
              "Network-wide fraud protection across all merchants",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <AnimatedTick />
                <span className="text-[rgb(1,27,51)] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 06 */}
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 max-w-xl">
          <p className="text-[28px] font-bold text-[rgba(1,27,51,0.2)] mb-2">
            06
          </p>

          <h3 className={HEADING_CLASS}>
            Build custom payments experiences with well-documented APIs
          </h3>

          <p className={PARAGRAPH_CLASS}>
            Developers love our thorough, well-documented APIs that let you
            build everything from simple weekend projects, to complex financial
            products serving hundreds of thousands of customers. If you can
            imagine it, you can build it with Durapayment.
          </p>

          <ul className="mt-6 space-y-3 text-[rgb(1,27,51)] text-sm md:text-base">
            {[
              "Collect one-time and recurring payments from your app or website",
              "Make instant transfers",
              "Retrieve all your transaction and customer data",
              "Verify the identity of customers",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-2">
                <span className="mt-[2px] text-green-600">
                  <Check size={16} />
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
          <div className="flex items-center gap-2 mt-6 group cursor-pointer">
            <div className="w-6 h-6 rounded-full bg-white border border-green-500 flex items-center justify-center group-hover:bg-green-500 transition">
              <ChevronRight className="w-4 h-4 text-green-600 group-hover:text-white" />
            </div>
            <p className="text-[rgb(1,27,51)]">Durapayment API Quickstart</p>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className={IMAGE_BOX}>
            <img
              src="/Collect.gif"
              alt="API experience"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* SECTION 07 */}
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 flex justify-center md:justify-start">
          <div className={IMAGE_BOX}>
            <img
              src="/Insights.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>

        <div className="flex-1 max-w-xl">
          <p className="text-[28px] font-bold text-[rgba(1,27,51,0.2)] mb-2">
            07
          </p>

          <h3 className={HEADING_CLASS}>
            Understand exactly how your business is performing
          </h3>

          <p className={PARAGRAPH_CLASS}>
            Durapayment provides detailed reporting, alerts, and exports, so you
            and your team are always on top of business.
          </p>
          <div className="grid grid-cols-1 gap-y-3 mt-6">
            {[
              "Super easy reconciliation",
              "Detailed reports on successful, abandoned, and failed transactions",
              "Granular user permissions lets you control the info each member of your team has access to",
              "Automated chargeback alerts",
              "Searchable Customer Directory",
              "Analyze customer purchase patterns with Customer Insights",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <AnimatedTick />
                <span className="text-[rgb(1,27,51)] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 08 */}
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 max-w-xl">
          <p className="text-[28px] font-bold text-[rgba(1,27,51,0.2)] mb-2">
            08
          </p>

          <h3 className={HEADING_CLASS}>Get your money within 24 hours</h3>

          <p className={PARAGRAPH_CLASS}>
            Receive your money automatically in your bank account within 24
            hours after payment is made. We settle all merchants before 10 AM,
            every morning.
          </p>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className={IMAGE_BOX}>
            <img
              src="/videoframe.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* SECTION 09 */}
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 flex justify-center md:justify-start">
          <div className={IMAGE_BOX}>
            <img
              src="/Getpaid.gif"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>

        <div className="flex-1 max-w-xl space-y-6">
          <p className="text-[28px] font-bold text-[rgba(1,27,51,0.2)]">09</p>

          <h3 className={HEADING_CLASS}>
            Get paid by customers from anywhere in the world
          </h3>

          <p className={PARAGRAPH_CLASS}>
            The internet has no borders, and neither should your business. With
            Paystack, you can accept payments from international customers,
            wherever they are in the world.
          </p>

          <p className={PARAGRAPH_CLASS}>
            You can accept payments from internationally-issued cards or via
            Apple Pay, display prices in USD, and also get settled in USD.
          </p>

          <p className={PARAGRAPH_CLASS}>
            We also make available localized payment options - such as mobile
            money - that are popular in certain regions of the world.
          </p>
        </div>
      </div>

      {/* SECTION 10 */}
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 max-w-xl">
          <p className="text-[28px] font-bold text-[rgba(1,27,51,0.2)] mb-2">
            10
          </p>

          <h3 className={HEADING_CLASS}>Get attentive, empathetic help 24/7</h3>

          <p className={PARAGRAPH_CLASS}>
            Our Customer Success team is available around the clock to support
            you, and they’re empowered to resolve issues as quickly as possible.
          </p>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className={IMAGE_BOX}>
            <img
              src="/Customer.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* SECTION 11 */}
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 flex justify-center md:justify-start">
          <div className={IMAGE_BOX}>
            <img
              src="/Checkout.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>

        <div className="flex-1 max-w-xl">
          <p className="text-[28px] font-bold text-[rgba(1,27,51,0.2)] mb-2">
            11
          </p>

          <h3 className={HEADING_CLASS}>
            A modern, beautiful payments experience
          </h3>

          <p className={PARAGRAPH_CLASS}>
            Give customers confidence in your business with a modern, gorgeous
            checkout form that elevates your brand.
          </p>
          <div className="grid grid-cols-1 gap-y-3 mt-6">
            {[
              "No redirects - yup, keep your customers on your own page",
              "Automatic error resolution - in the rare occasion where a transaction fails, the Paystack Checkout Form smartly suggests other payment options",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <AnimatedTick />
                <span className="text-[rgb(1,27,51)] font-medium leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 12 */}
      <div className={`${SECTION_WRAPPER} mb-24`}>
        <div className="flex-1 max-w-xl">
          <p className="text-[28px] font-bold text-[rgba(1,27,51,0.2)] mb-2">
            12
          </p>

          <h3 className={HEADING_CLASS}>
            A team that's obsessed about your growth
          </h3>

          <p className={PARAGRAPH_CLASS}>
            Above all, over 200,000 businesses love Paystack because we’re a
            team that’s obsessed with your company’s growth. The mission of
            Paystack is to help businesses in Africa be profitable, envied, and
            loved, and every thing we do - from the features we build to how we
            hire - is done with a single goal: to guarantee your business’
            success.
          </p>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className={IMAGE_BOX}>
            <img
              src="/Paystack-Team.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
