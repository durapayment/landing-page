"use client";

import { useState } from "react";
import { Play, ChevronRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

// STYLES
const HEADING_CLASS =
  "text-[52px] sm:text-[30px] md:text-[40px] font-bold text-[rgb(1,27,51)] leading-[1.2] mb-4";

const PARAGRAPH_CLASS =
  "text-[16px] md:text-[18px] text-[rgb(1,27,51)] leading-7";

const SECTION_WRAPPER =
  "w-full max-w-310 mx-auto mt-20 flex flex-col md:flex-row items-center justify-between gap-12 py-16";

const IMAGE_BOX =
  "w-full max-w-[500px] h-[320px] md:h-[400px] rounded-2xl overflow-hidden";

export const ForInternational = () => {
  const cards = [
    {
      title: "Resolve Account Number API",
      description:
        "Verify if the bank account details provided by customers are correct.",
    },
    {
      title: "Transfer API",
      description:
        "Automatically transfer money directly to your customers' bank accounts.",
    },
    {
      title: "Charge Authorization",
      description:
        "Debit a customer and get a unique token you can use for future charges.",
    },
    {
      title: "Transactions API",
      description: "Get paid by your customers in multiple currencies",
    },
  ];
  const handleRedirect = () => {
    window.open("https://online.durapayment.com");
  };

  const logos = [
    "/dominos-plain.svg",
    "/mtn-group-grayscale.svg",
    "/bolt.svg",
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
              {siteConfig.name} helps international technology companies get
              paid quickly
              <br />
              and securely by customers in Africa.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              <button
                onClick={handleRedirect}
                className="bg-accent cursor-pointer text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-md text-sm font-medium hover:bg-tertiary transition w-full sm:w-auto">
                Create a free account
              </button>

              <span className="text-[15px] cursor-pointer font-medium text-accent">
                or Contact Sales
              </span>
            </div>
          </div>
        </div>

        {/* PARTNERS */}
        <div className="border-t py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium">
            Built for over 200,000 businesses
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
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              {siteConfig.name} processes over 50% of all online transactions in
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
      </section>
      {/* SECTION 01 */}

      <section className="w-full bg-yellow-50 px-6 md:px-12">
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              Build awesome products with the most complete API suite on the
              market
            </h3>

            <p className={PARAGRAPH_CLASS}>
              What can you build with Durapayment? Here’s how our APIs come
              together to bring ideas to life.
            </p>
          </div>
        </div>
        <div className="flex justify-center max-w-310 pl-22 py-5">
          <div className="inline-flex items-center justify-between gap-10 border-b pb-5 text-sm font-bold">
            <p>SAVINGS APP</p>
            <p>ONLINE MARKETPLACE</p>
            <p>LENDING APP</p>
            <p>ONLINE BETTING</p>
            <p>MOBILE WALLET</p>
            <p>VIDEO SUBSCRIPTION APP</p>
            <p>RIDE SHARING APP</p>
          </div>
        </div>
        <section className="w-full px-6 py-20">
          <div className="max-w-7xl font-bold mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300">
                {/* Heading */}
                <h3 className="text-xl font-bold text-[rgb(1,27,51)] mb-4">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 font-bold mb-8 leading-relaxed">
                  {card.description}
                </p>

                {/* Learn More */}
                <div className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-7 h-7 rounded-full border border-green-400 flex items-center font-bold text-green-400 justify-center group-hover:bg-black group-hover:text-white transition">
                    <ArrowRight size={14} />
                  </div>
                  <span className="font-bold text-sm text-green-400">
                    Learn more
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <div className={`${SECTION_WRAPPER}  mt-20`}>
        <div className="flex-1 flex justify-center">
          <div className={IMAGE_BOX}>
            <img src="/collect.gif" className="w-full h-full object-cover" />
          </div>
        </div>
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
      </div>
      {/* SECTION 5 */}
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 max-w-xl">
          <h3 className={HEADING_CLASS}>
            Build custom payments experiences with well-documented APIs
          </h3>

          <p className={PARAGRAPH_CLASS}>
            Developers love our thorough, well-documented APIs that let you
            build everything from simple weekend projects, to complex financial
            products serving hundreds of thousands of customers. If you can
            imagine it, you can build it with {siteConfig.name}.
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
        <div className="flex-1 flex justify-center">
          <div className={IMAGE_BOX}>
            <img src="/robust.png" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      {/* SECTION 6 */}
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 flex justify-center">
          <div className={IMAGE_BOX}>
            <img
              src="/videoframe.png"
              className="w-full h-full object-cover"
              alt="fraud protection"
            />
          </div>
        </div>
        <div className="flex-1 max-w-xl">
          <h3 className={HEADING_CLASS}>
            Protect yourself and your customers with advanced fraud detection
          </h3>

          <p className={PARAGRAPH_CLASS}>
            {siteConfig.name}’s combination of automated and manual fraud
            systems protect you from fraudulent transactions and associated
            chargeback claims.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "PCI-DSS-certified systems",
              "Automated fraud monitoring",
              "When a fraud attempt is discovered with any Paystack merchant, ALL Paystack merchants become protected from further attempts",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-600 mt-1" />
                <span className="text-sm text-[#011B33] leading-6">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* SECTION 7 */}
      <div className={SECTION_WRAPPER}>
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
                <span className="text-sm text-[#011B33] leading-6">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* IMAGE LEFT */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className={IMAGE_BOX}>
            <img
              src="/user.jpg"
              className="w-full h-full object-cover"
              alt="in-person payments"
            />
          </div>
        </div>
      </div>
      {/* SECTION 8 */}
      <div className={SECTION_WRAPPER}>
        {/* IMAGE RIGHT */}
        <div className="flex-1 flex justify-center">
          <div className={IMAGE_BOX}>
            <img
              src="/customer.jpg"
              className="w-full h-full object-cover"
              alt="identity verification"
            />
          </div>
        </div>
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
                <span className="text-sm text-[#011B33] leading-6">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* SECTION 09 */}
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
            <img src="/detailed.png" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 flex justify-center">
          <div className={IMAGE_BOX}>
            <img src="/slash.png" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex-1 max-w-xl">
          <h3 className={HEADING_CLASS}>
            Slash revenue loss to chargebacks and refunds
          </h3>

          <p className={PARAGRAPH_CLASS}>
            The traditional chargeback process can be slow and expensive.
            {siteConfig.name} lets you manage chargebacks efficiently from your
            Dashboard.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Chargebacks automatically reflect on the {siteConfig.name} Dashboard",
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
            Give team members exactly the permissions they need and control what
            they can see and do on your Dashboard.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <div className={IMAGE_BOX}>
            <img src="/image1.jpg" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 flex justify-center">
          <div className={IMAGE_BOX}>
            <img
              src="/checkoutform.png"
              className="w-full h-full object-cover"
            />
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
            <img src="/checkout.png" className="w-full h-full object-cover" />
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
            <img src="/start.jpg" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 flex justify-center">
          <div className={IMAGE_BOX}>
            <img src="/fair.png" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex-1 max-w-xl">
          <h3 className={HEADING_CLASS}>Fair, transparent pricing</h3>
          <p className="{PARAGRAPH_CLASS">
            Durapayment only charges a tiny fee per transaction, which means we
            literally only make money when you do, and we work hard to ensure
            every transaction succeeds.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Zero integration fee",
              "Zero maintenance fee",
              "Bulk volume discounts",
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
  );
};
