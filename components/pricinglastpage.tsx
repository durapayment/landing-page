"use client";

import { useState } from "react";
import { Check, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ── STYLES ── */
const SECTION =
  "w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 py-20 px-6 xl:px-0";
const IMG =
  "w-full max-w-[520px] h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0";
const H2 =
  "text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[rgb(1,27,51)] leading-tight";
const BODY =
  "text-[15px] md:text-[17px] text-[rgba(1,27,51,0.65)] leading-[28px] mt-4";
const TAG =
  "text-[11px] font-black tracking-[0.22em] uppercase text-green-500 mb-3";

const Accent = () => (
  <div className="mt-8 w-10 h-1 rounded-full bg-green-400/50" />
);

const Fade = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay }}
    className={className}>
    {children}
  </motion.div>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="mt-6 space-y-3">
    {items.map((item, i) => (
      <motion.li
        key={i}
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.07 }}
        className="flex items-start gap-3">
        <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
          <Check className="w-3 h-3 text-green-600" />
        </span>
        <span className="text-[14px] text-[rgb(1,27,51)] leading-6">
          {item}
        </span>
      </motion.li>
    ))}
  </ul>
);

/* ── FAQ DATA ── */
const faqs = [
  {
    question: "How long does it take for me to get my money?",
    answer:
      "Your money is automatically settled to your bank account the next working day (T+1). So payments received on Monday, for example, will be settled on Tuesday.",
  },
  {
    question: "How much does it cost to integrate Durapayment?",
    answer:
      "It's 100% free to integrate Durapayment! No setup fees, no maintenance fees — ever.",
  },
  {
    question: "Is it possible to get settled in USD?",
    answer:
      "Yes! We're running a public pilot of USD settlements, and you can now get settled in USD in Zenith Bank domiciliary accounts.",
  },
  {
    question: "Do you offer transaction volume discounts?",
    answer:
      "Yup! Merchants who process large volumes enjoy a discount on the transaction fee. Contact our sales team to learn more.",
  },
];

/* ── MAIN COMPONENT ── */
export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white">
      {/* ══ FAQ ══ */}
      <div className="w-full bg-[#f4f6f9] py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
          {/* LEFT */}
          <Fade className="md:w-[36%] shrink-0">
            <p className={TAG}>Common Questions</p>
            <h2
              className="text-[32px] sm:text-[38px] font-extrabold text-[#011B33] leading-tight mb-4"
              style={{
                fontFamily:
                  'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}>
              Got questions?
            </h2>
            <p className="text-[rgba(1,27,51,0.55)] text-[15px] leading-7 mb-8">
              Everything you need to know about our pricing and payments.
            </p>
            <Link href="/help" className="inline-flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-full border border-green-500 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <span className="text-[14px] font-semibold text-green-600 group-hover:underline">
                Visit our help desk
              </span>
            </Link>
          </Fade>

          {/* RIGHT — accordion */}
          <div className="flex-1 space-y-3">
            {faqs.map((item, i) => (
              <Fade key={i} delay={i * 0.06}>
                <div
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                  <div className="flex items-center justify-between gap-4 px-6 py-5">
                    <h3 className="text-[15px] font-semibold text-[#011B33] leading-snug">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 w-7 h-7 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center">
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden">
                        <p className="px-6 pb-6 text-[14px] text-[rgba(1,27,51,0.6)] leading-7">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>

      {/* ══ WHAT DO YOU GET ══ */}
      <div className="w-full bg-white py-16 px-6">
        <Fade className="max-w-6xl mx-auto">
          <p className={TAG + " text-center"}>Included in every plan</p>
          <h2 className={`${H2} text-center max-w-xl mx-auto`}>
            What do you get for this price?
          </h2>
          <p className={`${BODY} text-center max-w-lg mx-auto`}>
            Durapayment is a complete payments solution for businesses of every
            type, and at every scale.
          </p>
        </Fade>
      </div>

      {/* ══ SECTION 1 — Seamless payments: text left, image right ══ */}
      <Fade className={SECTION}>
        <div className="flex-1">
          <p className={TAG}>01 — Payment Channels</p>
          <h2 className={H2}>
            Delight customers with a seamless payments experience
          </h2>
          <p className={BODY}>
            Give your customers the gift of modern, frictionless payments.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
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
              <div key={i} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-green-600" />
                </span>
                <span className="text-[14px] font-medium text-[rgb(1,27,51)]">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <Accent />
        </div>
        <div className={IMG}>
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&auto=format&fit=crop"
            alt="Seamless payment experience"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </Fade>

      {/* ══ SECTION 2 — APIs: image left, text right ══ */}
      <Fade className={`${SECTION} bg-[#f4f6f9] rounded-none py-20`}>
        <div className={IMG}>
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop"
            alt="Developer APIs"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="flex-1">
          <p className={TAG}>02 — Developer APIs</p>
          <h2 className={H2}>
            Build custom payments experiences with well-documented APIs
          </h2>
          <p className={BODY}>
            Developers love our thorough, well-documented APIs that let you
            build everything from simple weekend projects to complex financial
            products.
          </p>
          <List
            items={[
              "Collect one-time and recurring payments from your app or website",
              "Make instant transfers",
              "Retrieve all your transaction and customer data",
              "Verify the identity of customers",
            ]}
          />
          <Accent />
        </div>
      </Fade>

      {/* ══ SECTION 3 — Fraud detection: text left, image right ══ */}
      <Fade className={SECTION}>
        <div className="flex-1 ">
          <p className={TAG}>03 — Security</p>
          <h2 className={H2}>
            Protect yourself and your customers with advanced fraud detection
          </h2>
          <p className={BODY}>
            Durapayment's combination of automated and manual fraud systems
            protect you from fraudulent transactions and associated chargeback
            claims.
          </p>
          <List
            items={[
              "PCI-DSS-certified systems",
              "Automated fraud monitoring",
              "Network-wide fraud protection — when fraud is detected, all merchants are protected",
            ]}
          />
          <Accent />
        </div>
        <div className={IMG}>
          <img
            src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=900&auto=format&fit=crop"
            alt="Fraud detection security"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </Fade>

      {/* ══ SECTION 4 — In-person: image left, text right ══ */}
      <Fade className={`${SECTION} bg-[#f4f6f9] rounded-none py-20 mb-10`}>
        <div className={IMG}>
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop"
            alt="In-person payments"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="flex-1">
          <p className={TAG}>04 — In-Person Payments</p>
          <h2 className={H2}>
            Delight customers with memorable, in-person payment experiences
          </h2>
          <p className={BODY}>
            Build custom, in-person payment experiences that increase customer
            loyalty and lifetime value.
          </p>
          <List
            items={[
              "Multiple payment channels (Card, Bank Transfer, USSD)",
              "Delight customers with self-checkout experiences",
              "Reinforce your brand with customized receipts",
              "Build loyalty programs with deals and discounts for each customer",
              "Easy and straightforward reconciliation",
            ]}
          />
          <Accent />
        </div>
      </Fade>
    </section>
  );
};
