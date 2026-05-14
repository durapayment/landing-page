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
  "w-full max-w-310 mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-16";

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
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 flex justify-center">
          <div className={IMAGE_BOX}>
            <img src="/payments.jpg" className="w-full h-full object-cover" />
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
    </section>
  );
};
