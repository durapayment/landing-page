"use client";

import { useState } from "react";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

/* ─── DESIGN TOKENS ─── */
const NAVY = "rgb(1,27,51)";

const SECTION =
  "w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 py-20 px-6 xl:px-0";

const IMG =
  "w-full max-w-[520px] h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0";

const H2 =
  "text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[rgb(1,27,51)] leading-tight";

const BODY =
  "text-[15px] md:text-[17px] text-[rgba(1,27,51,0.65)] leading-[28px] mt-4";

const TAG =
  "text-[11px] font-black tracking-[0.22em] uppercase text-green-500 mb-3";

/* ─── ANIMATED IMAGE ─── */
const Img = ({ src, alt }: { src: string; alt: string }) => (
  <div className={IMG}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
    />
  </div>
);

/* ─── CHECKLIST ─── */
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

/* ─── DIVIDER ACCENT ─── */
const Accent = () => (
  <div className="mt-8 w-10 h-1 rounded-full bg-green-400/50" />
);

/* ─── FADE WRAPPER ─── */
const Fade = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.55 }}
    className={className}>
    {children}
  </motion.div>
);

/* ══════════════════════════════════════════════ */
export const ForInternational = () => {
  const [activeTab, setActiveTab] = useState("SAVINGS APP");

  const tabs = [
    "SAVINGS APP",
    "ONLINE MARKETPLACE",
    "LENDING APP",
    "ONLINE BETTING",
    "MOBILE WALLET",
    "VIDEO SUBSCRIPTION",
    "RIDE SHARING",
  ];

  const apiCards = [
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
      description: "Get paid by your customers in multiple currencies.",
    },
  ];

  const logos = [
    "/dominos-plain.svg",
    "/mtn-group-grayscale.svg",
    "/bolt.svg",
    "/axa.svg",
  ];

  const handleRedirect = () => window.open("https://online.durapayment.com");

  return (
    <section className="w-full font-sans">
      {/* ══ HERO ══ */}
      <div className="relative w-full bg-[#011B33] overflow-hidden pt-36 pb-28 px-6">
        {/* bg rings */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-white/[0.04]" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-white/[0.04]" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-green-500/5 blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[11px] font-black tracking-[0.25em] uppercase text-green-400 mb-5">
            Durapayment for Global Brands
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white font-extrabold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight max-w-3xl mb-6">
            A complete payments solution for{" "}
            <span className="text-green-400">global brands</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="text-white/50 text-[16px] md:text-[18px] leading-[30px] max-w-xl mb-10">
            {siteConfig.name} helps international technology companies get paid
            quickly and securely by customers in Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={handleRedirect}
              className="bg-green-500 hover:bg-green-400 text-white px-7 py-3 rounded-xl text-[15px] font-semibold transition-colors">
              Create a free account
            </button>
            <span className="text-green-400 text-[15px] font-medium cursor-pointer hover:underline">
              or Contact Sales
            </span>
          </motion.div>
        </div>

        {/* Partners bar */}
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <p className="text-white/40 text-sm">
            Built for over 200,000 businesses
          </p>
          <div className="flex items-center gap-6 opacity-40 grayscale brightness-200">
            {logos.map((logo, i) => (
              <img key={i} src={logo} className="h-6" alt="logo" />
            ))}
          </div>
          <p className="text-white/40 text-sm font-medium">
            Watch {siteConfig.name}
          </p>
        </div>
      </div>

      {/* ══ CONTENT ══ */}
      <div className="w-full bg-white">
        {/* 01 — Market position: text left, image right */}
        <Fade className={SECTION}>
          <div className="flex-1 max-w-xl">
            <p className={TAG}>01 — Market Reach</p>
            <h2 className={H2}>
              {siteConfig.name} processes over 50% of all online transactions in
              Nigeria
            </h2>
            <p className={BODY}>
              We have a robust suite of well-documented payments APIs and deep
              knowledge of the Nigerian payments landscape.
            </p>
            <Accent />
          </div>
          <Img
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&auto=format&fit=crop"
            alt="Market reach analytics"
          />
        </Fade>

        {/* ── API SUITE — yellow bg ── */}
        <div className="w-full bg-amber-50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <Fade>
              <p className={TAG}>02 — API Suite</p>
              <h2 className={H2 + " max-w-2xl"}>
                Build awesome products with the most complete API suite on the
                market
              </h2>
              <p className={BODY + " max-w-xl"}>
                What can you build with {siteConfig.name}? Here's how our APIs
                come together to bring ideas to life.
              </p>
            </Fade>

            {/* Tab bar */}
            <div className="mt-10 flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-[11px] font-bold tracking-wide transition-colors ${
                    activeTab === tab
                      ? "bg-[#011B33] text-white"
                      : "bg-white text-[rgba(1,27,51,0.5)] border border-gray-200 hover:border-[#011B33]"
                  }`}>
                  {tab}
                </button>
              ))}
            </div>

            {/* API Cards */}
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {apiCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <h3 className="text-[16px] font-bold text-[rgb(1,27,51)] mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-6 flex-1">
                    {card.description}
                  </p>
                  <div className="flex items-center gap-2 mt-5 group cursor-pointer">
                    <div className="w-6 h-6 rounded-full border border-green-400 flex items-center justify-center group-hover:bg-green-500 group-hover:border-green-500 transition">
                      <ArrowRight className="w-3 h-3 text-green-500 group-hover:text-white" />
                    </div>
                    <span className="text-[12px] font-semibold text-green-500">
                      Learn more
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 03 — Seamless payments: text left, image right (odd) */}
        <Fade className={SECTION}>
          <div className="flex-1 max-w-xl">
            <p className={TAG}>03 — Payment Channels</p>
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
          <Img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&auto=format&fit=crop"
            alt="Seamless payment experience"
          />
        </Fade>

        {/* 04 — Well-documented APIs: image left, text right (even) */}
        <Fade className={SECTION}>
          <Img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop"
            alt="Developer writing code"
          />
          <div className="flex-1 max-w-xl">
            <p className={TAG}>04 — Developer APIs</p>
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

        {/* 05 — Fraud detection: text left, image right (odd) */}
        <Fade className={SECTION}>
          <div className="flex-1 max-w-xl">
            <p className={TAG}>05 — Security</p>
            <h2 className={H2}>
              Protect yourself and your customers with advanced fraud detection
            </h2>
            <p className={BODY}>
              {siteConfig.name}'s combination of automated and manual fraud
              systems protect you from fraudulent transactions and associated
              chargeback claims.
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
          <Img
            src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=900&auto=format&fit=crop"
            alt="Fraud detection security"
          />
        </Fade>

        {/* 06 — In-person: image left, text right (even) */}
        <Fade className={SECTION}>
          <Img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop"
            alt="In-person payment terminal"
          />
          <div className="flex-1 max-w-xl">
            <p className={TAG}>06 — In-Person Payments</p>
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
                "Build loyalty programs with deals and discounts",
                "Easy and straightforward reconciliation",
              ]}
            />
            <Accent />
          </div>
        </Fade>

        {/* 07 — Identity verification: text left, image right (odd) */}
        <Fade className={SECTION}>
          <div className="flex-1 max-w-xl">
            <p className={TAG}>07 — Identity</p>
            <h2 className={H2}>Verify the identity of your customers</h2>
            <p className={BODY}>
              Need to verify that your customer is who they say they are? Our
              verification APIs allow you to do this in various ways.
            </p>
            <List
              items={[
                "Verify identity with a bank account number",
                "Verify identity with a phone number",
                "Verify identity with a Bank Verification Number (BVN)",
              ]}
            />
            <Accent />
          </div>
          <Img
            src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=900&auto=format&fit=crop"
            alt="Identity verification"
          />
        </Fade>

        {/* 08 — Reporting: image left, text right (even) */}
        <Fade className={SECTION}>
          <Img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop"
            alt="Detailed reporting dashboard"
          />
          <div className="flex-1 max-w-xl">
            <p className={TAG}>08 — Reporting</p>
            <h2 className={H2}>
              Detailed reporting for accounting, reconciliation, and audits
            </h2>
            <p className={BODY}>
              Export your payments data however you want, whenever you want.
            </p>
            <List
              items={[
                "Download granular transaction, customer, and error rate data",
                "Receive daily and weekly automated email reports",
                "Pull payments data into your internal dashboards and accounting tools",
              ]}
            />
            <Accent />
          </div>
        </Fade>

        {/* 09 — Chargebacks: text left, image right (odd) */}
        <Fade className={SECTION}>
          <div className="flex-1 max-w-xl">
            <p className={TAG}>09 — Chargebacks</p>
            <h2 className={H2}>
              Slash revenue loss to chargebacks and refunds
            </h2>
            <p className={BODY}>
              The traditional chargeback process can be slow and expensive.{" "}
              {siteConfig.name} lets you manage chargebacks efficiently from
              your Dashboard.
            </p>
            <List
              items={[
                "Chargebacks automatically reflect on the Dashboard",
                "Reject chargebacks and upload supporting evidence quickly",
                "Issue partial or full refunds right from your Dashboard",
                "Exportable record of disputes and refunds",
              ]}
            />
            <Accent />
          </div>
          <Img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&auto=format&fit=crop"
            alt="Chargeback management"
          />
        </Fade>

        {/* 10 — User Permissions: image left, text right (even) */}
        <Fade className={SECTION}>
          <Img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop"
            alt="Team user permissions"
          />
          <div className="flex-1 max-w-xl">
            <p className={TAG}>10 — Access Control</p>
            <h2 className={H2}>Control access to data with User Permissions</h2>
            <p className={BODY}>
              Give team members exactly the permissions they need and control
              what they can see and do on your Dashboard.
            </p>
            <Accent />
          </div>
        </Fade>

        {/* 11 — Checkout: text left, image right (odd) */}
        <Fade className={SECTION}>
          <div className="flex-1 max-w-xl">
            <p className={TAG}>11 — Checkout</p>
            <h2 className={H2}>A modern, beautiful payments experience</h2>
            <p className={BODY}>
              Give customers confidence in your business with a modern checkout
              form.
            </p>
            <List
              items={[
                "No redirects — keep customers on your page",
                "Automatic error resolution with smart payment suggestions",
              ]}
            />
            <Accent />
          </div>
          <Img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop"
            alt="Modern checkout experience"
          />
        </Fade>

        {/* 12 — Customer insights: image left, text right (even) */}
        <Fade className={SECTION}>
          <Img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop"
            alt="Customer insights analytics"
          />
          <div className="flex-1 max-w-xl">
            <p className={TAG}>12 — Customer Insights</p>
            <h2 className={H2}>Understand customer purchase patterns</h2>
            <List
              items={[
                "See your top customers by purchases and total spend",
                "Track new vs returning customers",
                "Analyze busiest time of day and week",
              ]}
            />
            <Accent />
          </div>
        </Fade>

        {/* 13 — Mobile: text left, image right (odd) */}
        <Fade className={SECTION}>
          <div className="flex-1 max-w-xl">
            <p className={TAG}>13 — Mobile</p>
            <h2 className={H2}>
              Monitor your business performance while on the move
            </h2>
            <List
              items={[
                "Track sales and success rates",
                "Send invoices from your phone",
                "Look up transactions instantly",
                "Get alerts for important updates",
                "Access instant support",
              ]}
            />
            <Accent />
          </div>
          <Img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&auto=format&fit=crop"
            alt="Monitor business on mobile"
          />
        </Fade>

        {/* 14 — Support: image left, text right (even) */}
        <Fade className={SECTION}>
          <Img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&auto=format&fit=crop"
            alt="Dedicated relationship manager"
          />
          <div className="flex-1 max-w-xl">
            <p className={TAG}>14 — Support</p>
            <h2 className={H2}>
              World-class support from a dedicated Relationship Manager
            </h2>
            <List
              items={[
                "Monitor transactions to ensure minimal downtime",
                "Provide product roadmap input and insights",
                "Ensure prompt issue resolution within SLA",
                "Offer strategic industry guidance",
              ]}
            />
            <Accent />
          </div>
        </Fade>

        {/* 15 — Pricing: text left, image right (odd) */}
        <Fade className={`${SECTION} mb-10`}>
          <div className="flex-1 max-w-xl">
            <p className={TAG}>15 — Pricing</p>
            <h2 className={H2}>Fair, transparent pricing</h2>
            <p className={BODY}>
              {siteConfig.name} only charges a tiny fee per transaction — we
              literally only make money when you do, and we work hard to ensure
              every transaction succeeds.
            </p>
            <List
              items={[
                "Zero integration fee",
                "Zero maintenance fee",
                "Bulk volume discounts",
              ]}
            />
            <Accent />
          </div>
          <Img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&auto=format&fit=crop"
            alt="Fair transparent pricing"
          />
        </Fade>
      </div>
    </section>
  );
};
