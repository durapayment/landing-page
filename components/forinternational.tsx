"use client";

import { useState } from "react";
import { Play, ChevronRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

// STYLES
const HEADING_CLASS =
  "text-[52px] sm:text-[30px] md:text-[40px] font-bold text-[rgb(1,27,51)] leading-[0.5] mb-4";

const PARAGRAPH_CLASS =
  "text-[16px] md:text-[18px] text-[rgb(1,27,51)] leading-7";

const SECTION_WRAPPER =
  "w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-16";

const IMAGE_BOX =
  "w-full max-w-[500px] h-[320px] md:h-[400px] rounded-2xl overflow-hidden";

export const ForInternational = () => {
  const handleRedirect = () => {
    window.open("https://online.durapayment.com", "_blank");
  };

  const logos = [
    "/Dominos-Plain.svg",
    "/mtn-group-grayscale.svg",
    "/Bolt.svg",
    "/axa.svg",
  ];

  return (
    <section className="w-full bg-tertiary/10">
      {/* HERO (UNCHANGED) */}
      <div className="max-w-310 mx-auto px-5 sm:px-8 md:px-12 lg:px-6 xl:px-0">
        <div className="py-15 md:py-30 lg:grid lg:grid-cols-2 items-center gap-10 lg:gap-20">
          <div className="w-full text-left">
            <p className="text-xs font-bold mb-4">
              DURAPAYMENT FOR GLOBAL BRANDS
            </p>

            <h1
              style={{
                fontFamily:
                  'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                fontWeight: 800,
                lineHeight: "1.1",
                color: "rgb(1, 27, 51)",
              }}
              className="max-w-150 mb-5 text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px]">
              A complete payments solution for global brands
            </h1>

            <p className="text-[#011B33] mb-7 text-sm sm:text-base md:text-lg leading-7">
              Paystack helps international technology companies get paid quickly
              <br />
              and securely by customers in Africa.
            </p>

            <button
              onClick={handleRedirect}
              className="bg-accent text-white px-6 py-2 rounded-md">
              Create a free account
            </button>
          </div>
        </div>

        {/* PARTNERS */}
        <div className="border-t py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium">
            Trusted by over 200,000 businesses
          </p>

          <div className="flex gap-4">
            {logos.map((logo, i) => (
              <img key={i} src={logo} className="h-7" alt="logo" />
            ))}
          </div>

          <p className="text-sm font-semibold">Watch {siteConfig.name}</p>
        </div>
      </div>

      {/* MID SECTION */}
      <section className="w-full bg-white px-6 md:px-12">
        {/* SECTION 1 */}
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              Durapayment processes over 50% of all online transactions in
              Nigeria
            </h3>

            <p className={PARAGRAPH_CLASS}>
              We have a robust suite of well-documented payments APIs and deep
              knowledge of the Nigerian payments landscape.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <div className={IMAGE_BOX}>
              <img
                src="/acceptpay.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* VALUE STAT */}
        <div className="text-center py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold">
            We power over 50% of online transactions in Nigeria
          </motion.h2>

          <p className="mt-4 text-gray-600">
            Built for scale, security, and African payments infrastructure.
          </p>
        </div>

        {/* FEATURES */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 py-16">
          {[
            "Powerful API Suite",
            "Fraud Protection",
            "Multiple Payment Methods",
            "Recurring Billing",
            "Real-time Transfers",
            "Detailed Reporting",
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 h-[240px] border rounded-2xl flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <h3 className="text-xl font-semibold text-[#011B33]">{item}</h3>
                <p className="text-sm text-gray-600 mt-3">
                  Build scalable payment experiences with ease.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border flex items-center justify-center">
                  <ChevronRight className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-sm font-medium">Learn more</p>
              </div>
            </div>
          ))}
        </div>

        {/* USE CASES */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10">
              What you can build
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                "Marketplaces",
                "SaaS Platforms",
                "Subscription Apps",
                "Fintech Products",
                "E-commerce Stores",
                "Ride Sharing Apps",
                "Wallet Systems",
                "Donation Platforms",
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 border rounded-lg">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              Delight customers with a seamless payments experience
            </h3>

            <p className={PARAGRAPH_CLASS}>
              Give your customers the gift of modern, frictionless payments.
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
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
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 flex justify-center">
            <div className={IMAGE_BOX}>
              <img src="/payments.jpg" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* SECTION 5 */}
        {/* SECTION 5 */}
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 flex justify-center">
            <div className={IMAGE_BOX}>
              <img src="/api.jpg" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              Build custom payments experiences with well-documented APIs
            </h3>

            <p className={PARAGRAPH_CLASS}>
              Developers love our thorough, well-documented APIs that let you
              build everything from simple weekend projects, to complex
              financial products serving hundreds of thousands of customers. If
              you can imagine it, you can build it with Paystack.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Collect one-time and recurring payments from your app or website",
                "Make instant transfers",
                "Retrieve all your transaction and customer data",
                "Verify the identity of customers",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  <span className="text-sm text-[#011B33]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SECTION 6 */}
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              Protect yourself and your customers with advanced fraud detection
            </h3>

            <p className={PARAGRAPH_CLASS}>
              Paystack’s combination of automated and manual fraud systems
              protect you from fraudulent transactions and associated chargeback
              claims.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "PCI-DSS-certified systems",
                "Automated fraud monitoring",
                "When a fraud attempt is discovered with any Paystack merchant, ALL Paystack merchants become protected from further attempts",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  <span className="text-sm text-[#011B33] leading-6">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 flex justify-center">
            <div className={IMAGE_BOX}>
              <img
                src="/secure.jpg"
                className="w-full h-full object-cover"
                alt="fraud protection"
              />
            </div>
          </div>
        </div>
        {/* SECTION 7 */}
        {/* SECTION 7 */}
        <div className={SECTION_WRAPPER}>
          {/* IMAGE LEFT */}
          <div className="flex-1 flex justify-center md:justify-start">
            <div className={IMAGE_BOX}>
              <img
                src="/inperson.jpg"
                className="w-full h-full object-cover"
                alt="in-person payments"
              />
            </div>
          </div>

          {/* TEXT RIGHT */}
          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              Delight customers with memorable, in-person payment experiences
            </h3>

            <p className={PARAGRAPH_CLASS}>
              Build custom, in-person payment experiences that increase customer
              loyalty and lifetime value.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Multiple payment channels (Card, Bank Transfer, USSD)",
                "Delight customers with self-checkout experiences",
                "Reinforce your brand with customized receipts",
                "Build loyalty programs with deals and discounts customised for each customer",
                "Easy and straightforward reconciliation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  <span className="text-sm text-[#011B33] leading-6">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* SECTION 8 */}
        {/* SECTION 8 */}
        <div className={SECTION_WRAPPER}>
          {/* TEXT LEFT */}
          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              Verify the identity of your customers
            </h3>

            <p className={PARAGRAPH_CLASS}>
              Need to verify that your customer is who they say they are? Our
              verification APIs allow you to do this in various ways.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Verify identity with a bank account number",
                "Verify identity with a phone number",
                "Verify identity with a Bank Verification Number (a unique identifier that everyone with a Nigerian bank account must have)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  <span className="text-sm text-[#011B33] leading-6">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* IMAGE RIGHT */}
          <div className="flex-1 flex justify-center">
            <div className={IMAGE_BOX}>
              <img
                src="/verify.jpg"
                className="w-full h-full object-cover"
                alt="identity verification"
              />
            </div>
          </div>
        </div>
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              Detailed reporting for accounting, reconciliation, and audits
            </h3>

            <p className={PARAGRAPH_CLASS}>
              Export your payments data however you want, whenever you want.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Download granular transaction, customer, and error rate data",
                "Receive daily and weekly automated email reports",
                "Pull in your payments data into your internal dashboards and accounting/reporting tools",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  <span className="text-sm text-[#011B33]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 flex justify-center">
            <div className={IMAGE_BOX}>
              <img
                src="/reporting.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 flex justify-center">
            <div className={IMAGE_BOX}>
              <img
                src="/chargebacks.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              Slash revenue loss to chargebacks and refunds
            </h3>

            <p className={PARAGRAPH_CLASS}>
              The traditional chargeback process can be slow and expensive.
              Paystack lets you manage chargebacks efficiently from your
              Dashboard.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Chargebacks automatically reflect on the Paystack Dashboard",
                "Reject chargebacks and upload supporting evidence quickly",
                "Issue partial or full refunds right from your Dashboard",
                "Exportable record of disputes and refunds",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  <span className="text-sm text-[#011B33]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              Control access to data with User Permissions
            </h3>

            <p className={PARAGRAPH_CLASS}>
              Give team members exactly the permissions they need and control
              what they can see and do on your Dashboard.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <div className={IMAGE_BOX}>
              <img
                src="/permissions.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 flex justify-center">
            <div className={IMAGE_BOX}>
              <img src="/checkout.jpg" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              A modern, beautiful payments experience
            </h3>

            <p className={PARAGRAPH_CLASS}>
              Give customers confidence in your business with a modern checkout
              form.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "No redirects - keep customers on your page",
                "Automatic error resolution with smart payment suggestions",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  <span className="text-sm text-[#011B33]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              Understand customer purchase patterns
            </h3>

            <ul className="mt-6 space-y-3">
              {[
                "See your top customers by purchases and total spend",
                "Track new vs returning customers",
                "Analyze busiest time of day and week",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  <span className="text-sm text-[#011B33]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 flex justify-center">
            <div className={IMAGE_BOX}>
              <img src="/insights.jpg" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 flex justify-center">
            <div className={IMAGE_BOX}>
              <img src="/mobile.jpg" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              Monitor your business performance while on the move
            </h3>

            <ul className="mt-6 space-y-3">
              {[
                "Track sales and success rates",
                "Send invoices from your phone",
                "Look up transactions instantly",
                "Get alerts for important updates",
                "Access instant support",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  <span className="text-sm text-[#011B33]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 flex justify-center">
            <div className={IMAGE_BOX}>
              <img src="/mobile.jpg" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              Monitor your business performance while on the move
            </h3>

            <ul className="mt-6 space-y-3">
              {[
                "Track sales and success rates",
                "Send invoices from your phone",
                "Look up transactions instantly",
                "Get alerts for important updates",
                "Access instant support",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  <span className="text-sm text-[#011B33]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              World-class support from a dedicated Relationship Manager
            </h3>

            <ul className="mt-6 space-y-3">
              {[
                "Monitor transactions to ensure minimal downtime",
                "Provide product roadmap input and insights",
                "Ensure prompt issue resolution within SLA",
                "Offer strategic industry guidance",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  <span className="text-sm text-[#011B33]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 flex justify-center">
            <div className={IMAGE_BOX}>
              <img src="/support.jpg" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 flex justify-center">
            <div className={IMAGE_BOX}>
              <img src="/pricing.jpg" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>Fair, transparent pricing</h3>

            <ul className="mt-6 space-y-3">
              {[
                "Zero integration fee",
                "Zero maintenance fee",
                "Bulk volume discounts",
                "Only pay when you get paid",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  <span className="text-sm text-[#011B33]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};
