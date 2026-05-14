"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

// STYLES
const HEADING_CLASS =
  "text-[52px] sm:text-[30px] md:text-[40px] font-bold text-[rgb(1,27,51)] leading-[1.2] mb-4";

const PARAGRAPH_CLASS =
  "text-[16px] md:text-[18px] text-[rgb(1,27,51)] leading-7";

const SECTION_WRAPPER =
  "w-full max-w-310 mx-auto mt-20 flex flex-col md:flex-row items-center justify-between gap-12 py-16";

const IMAGE_BOX =
  "w-full max-w-[500px] h-[320px] md:h-[400px] rounded-2xl overflow-hidden";

const faqs = [
  {
    question: "How long does it take for me to get my money?",
    answer:
      "Your money is automatically settled to your bank account the next working day (T+1). So payments received on Monday, for example, will be settled on Tuesday.",
  },
  {
    question: "How much does it cost to integrate Durapayment?",
    answer: "It's 100% free to integrate Durapayment!",
  },
  {
    question: "Is it possible to get settled in USD?",
    answer:
      "Yes! We're running a public pilot of USD settlements, and you can now get settled in USD in Zenith Bank domiciliary accounts.",
  },
  {
    question: "Do you offer transaction volume discounts?",
    answer:
      "Yup! Merchants who process large volumes enjoy a discount on the transaction fee.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-20 px-4 md:px-10 lg:px-24 bg-white">
      <div className="max-w-310 mx-auto flex flex-col md:flex-row">
        {/* LEFT SIDE */}
        <div className="md:w-1/3 md:pr-24 lg:pr-40 mb-10 md:mb-0">
          <h2 className="text-3xl mb-10 md:text-4xl font-bold">
            Common Questions
          </h2>
          <p className="text-gray-500 mt-45">Have more questions?</p>

          {/* HELP DESK LINK */}
          <Link
            href="/help"
            className="mt-3 inline-flex items-center gap-3 group">
            {/* ICON CIRCLE */}
            <div className="w-4 h-4 rounded-full border border-accent flex items-center justify-center transition group-hover:bg-green-500">
              <MdKeyboardArrowRight
                size={15}
                className="text-accent transition-transform group-hover:translate-x-1"
              />
            </div>

            {/* TEXT */}
            <span className="text-sm font-medium text-accent group-hover:text-black transition">
              Check out our help desk
            </span>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-2/3 space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-5 md:p-6 cursor-pointer transition hover:shadow-sm"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base md:text-lg font-semibold text-left">
                  {item.question}
                </h3>

                <div className="text-accent">
                  <RiArrowDropDownLine className="text-4xl" />
                </div>
              </div>

              {openIndex === index && (
                <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <section className="w-full bg-white px-6 md:px-12">
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>What do you get for this price?</h3>

            <p className={PARAGRAPH_CLASS}>
              Durapayment is a complete payments solution for businesses of
              every type, and at every scale.
            </p>
          </div>
        </div>
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
            imagine it, you can build it with Durapayment.
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
            Durapayment’s combination of automated and manual fraud systems protect
            you from fraudulent transactions and associated chargeback claims.
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
    </section>
  );
};
