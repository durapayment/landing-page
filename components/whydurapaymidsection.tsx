"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";

// ── Design tokens ────────────────────────────────────────────────
const BRAND = "rgb(1,27,51)";

const HEADING_CLASS =
  "text-[36px] sm:text-[32px] md:text-[42px] font-bold text-[rgb(1,27,51)] leading-[1.15] mb-4 tracking-tight";

const PARAGRAPH_CLASS =
  "text-[16px] md:text-[17px] text-[rgb(60,80,100)] leading-[1.8]";

const SECTION_WRAPPER =
  "w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 py-20";

const IMAGE_BOX =
  "w-full max-w-[520px] h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl shadow-gray-200/60";

const STEP_NUM =
  "text-[22px] font-black text-[rgba(1,27,51,0.12)] mb-3 tracking-tight font-mono";

// ── Animated tick ────────────────────────────────────────────────
const AnimatedTick = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none">
    <motion.path
      d="M20 6L9 17l-5-5"
      stroke="#10b981"
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

// ── Reusable "Learn more" link ───────────────────────────────────
const LearnMoreLink = ({ label = "Learn more" }) => (
  <div className="flex items-center gap-2.5 mt-7 group cursor-pointer w-fit">
    <div className="w-7 h-7 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-200 shadow-sm">
      <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors" />
    </div>
    <p className="text-[rgb(1,27,51)] font-semibold text-sm group-hover:text-emerald-600 transition-colors">
      {label}
    </p>
  </div>
);

// ── Tick list ────────────────────────────────────────────────────
const TickList = ({ items, cols = 1 }: { items: any; cols: any }) => (
  <div
    className={`grid gap-y-3 gap-x-8 mt-6 ${cols === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
    {items.map((item: any, i: any) => (
      <motion.div
        key={i}
        className="flex items-start gap-3"
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.07, duration: 0.4 }}>
        <AnimatedTick />
        <span className="text-[rgb(1,27,51)] font-medium text-sm md:text-base leading-relaxed">
          {item}
        </span>
      </motion.div>
    ))}
  </div>
);

// ── Animated image wrapper ───────────────────────────────────────
const AnimImg = ({
  src,
  alt,
  delay = 0,
}: {
  src: any;
  alt: any;
  delay: any;
}) => (
  <motion.div
    className={IMAGE_BOX}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}>
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </motion.div>
);

// ── Copy block wrapper ───────────────────────────────────────────
const CopyBlock = ({ step, children }: { step: any; children: any }) => (
  <motion.div
    className="flex-1 max-w-xl"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}>
    <p className={STEP_NUM}>{String(step).padStart(2, "0")}</p>
    {children}
  </motion.div>
);

// ── Section divider ──────────────────────────────────────────────
const Divider = () => (
  <div className="w-full max-w-6xl mx-auto border-t border-gray-100" />
);

export const WhyDurapayMidSection = () => {
  return (
    <section className="w-full bg-white px-6 sm:px-8 md:px-12 overflow-hidden">
      {/* 01 — Start instantly */}
      <div className={`${SECTION_WRAPPER} mt-16`}>
        <div className="flex-1 flex justify-center md:justify-start">
          <AnimImg
            src="/instant.png"
            delay={0}
            alt="Start accepting payments instantly"
          />
        </div>
        <CopyBlock step={1}>
          <h3 className={HEADING_CLASS}>Start accepting payments instantly</h3>
          <p className={PARAGRAPH_CLASS}>
            {siteConfig.name} is the fastest, simplest way to start accepting
            online payments in Nigeria. From signup to receiving real payments
            can take under 15 minutes. Seriously.
          </p>
        </CopyBlock>
      </div>

      <Divider />

      {/* 02 — Transparent pricing */}
      <div className={SECTION_WRAPPER}>
        <CopyBlock step={2}>
          <h3 className={HEADING_CLASS}>
            Simple, transparent pricing — no surprises
          </h3>
          <p className={PARAGRAPH_CLASS}>
            {siteConfig.name} charges straightforward fees with no hidden costs,
            setup fees, or monthly minimums. You only pay when you earn.
          </p>
          <LearnMoreLink label="See our pricing" />
        </CopyBlock>
        <div className="flex-1 flex justify-center md:justify-end">
          <AnimImg
            src="/transparent-pricing.png"
            alt="Fair transparent pricing"
            delay={0.1}
          />
        </div>
      </div>

      <Divider />

      {/* 03 — Seamless experience */}
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 flex justify-center md:justify-start">
          <AnimImg
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop"
            alt="Seamless payments experience"
            delay={0}
          />
        </div>
        <CopyBlock step={3}>
          <h3 className={HEADING_CLASS}>
            Delight customers with a seamless payments experience
          </h3>
          <p className={PARAGRAPH_CLASS}>
            Give your customers the gift of modern, frictionless, painless
            payments. Integrate {siteConfig.name} once and let your customers
            pay you however they want.
          </p>
          <TickList
            cols={2}
            items={[
              "Card",
              "Bank Account",
              "Bank Transfer",
              "USSD",
              "Apple Pay",
              "Visa QR",
              "Mobile Money",
              "POS",
            ]}
          />
        </CopyBlock>
      </div>

      <Divider />

      {/* 04 — Success rates */}
      <div className={SECTION_WRAPPER}>
        <CopyBlock step={4}>
          <h3 className={HEADING_CLASS}>
            Enjoy phenomenal transaction success rates
          </h3>
          <p className={PARAGRAPH_CLASS}>
            We automatically route payments through the most optimal channels,
            ensuring the highest transaction success rates in the market.
          </p>
          <LearnMoreLink label="Find out how we achieve high success rates" />
        </CopyBlock>
        <div className="flex-1 flex justify-center md:justify-end">
          <AnimImg
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
            alt="High transaction success rates"
            delay={0.1}
          />
        </div>
      </div>

      <Divider />

      {/* 05 — Fraud detection */}
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 flex justify-center md:justify-start">
          <AnimImg
            src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop"
            alt="Advanced fraud detection and security"
            delay={0}
          />
        </div>
        <CopyBlock step={5}>
          <h3 className={HEADING_CLASS}>
            Protect yourself and your customers with advanced fraud detection
          </h3>
          <p className={PARAGRAPH_CLASS}>
            {siteConfig.name}'s combination of automated and manual fraud
            systems protect you from fraudulent transactions before they happen.
          </p>
          <TickList
            items={[
              "PCI-DSS-certified systems",
              "Automated fraud monitoring",
              "Network-wide fraud protection across all merchants",
            ]}
            cols={1}
          />
        </CopyBlock>
      </div>

      <Divider />

      {/* 06 — Developer APIs */}
      <div className={SECTION_WRAPPER}>
        <CopyBlock step={6}>
          <h3 className={HEADING_CLASS}>
            Build custom payments experiences with well-documented APIs
          </h3>
          <p className={PARAGRAPH_CLASS}>
            Developers love our thorough, well-documented APIs that let you
            build everything from simple weekend projects to complex financial
            products serving hundreds of thousands of customers.
          </p>
          <TickList
            items={[
              "Collect one-time and recurring payments from your app or website",
              "Make instant transfers",
              "Retrieve all your transaction and customer data",
              "Verify the identity of customers",
            ]}
            cols={1}
          />
          <LearnMoreLink label={`${siteConfig.name} API Quickstart`} />
        </CopyBlock>
        <div className="flex-1 flex justify-center md:justify-end">
          <AnimImg
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop"
            alt="Developer API experience"
            delay={0.1}
          />
        </div>
      </div>

      <Divider />

      {/* 07 — Business insights */}
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 flex justify-center md:justify-start">
          <AnimImg
            src="/understand-business.png"
            alt="Business performance insights"
            delay={0}
          />
        </div>
        <CopyBlock step={7}>
          <h3 className={HEADING_CLASS}>
            Understand exactly how your business is performing
          </h3>
          <p className={PARAGRAPH_CLASS}>
            {siteConfig.name} provides detailed reporting, alerts, and exports,
            so you and your team are always on top of your business.
          </p>
          <TickList
            items={[
              "Super easy reconciliation",
              "Detailed reports on successful, abandoned, and failed transactions",
              "Granular user permissions for every team member",
              "Automated chargeback alerts",
              "Searchable Customer Directory",
              "Analyze customer purchase patterns with Customer Insights",
            ]}
            cols={2}
          />
        </CopyBlock>
      </div>

      <Divider />

      {/* 08 — Fast settlement */}
      <div className={SECTION_WRAPPER}>
        <CopyBlock step={8}>
          <h3 className={HEADING_CLASS}>Get your money within 24 hours</h3>
          <p className={PARAGRAPH_CLASS}>
            Receive your money automatically in your bank account within 24
            hours after payment is made. We settle all merchants before 10 AM,
            every morning.
          </p>
        </CopyBlock>
        <div className="flex-1 flex justify-center md:justify-end">
          <AnimImg
            src="/hours.png"
            alt="Fast 24-hour bank settlement"
            delay={0.1}
          />
        </div>
      </div>

      <Divider />

      {/* 09 — International payments */}
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 flex justify-center md:justify-start">
          <AnimImg
            src="/global.png"
            alt="Accept payments from anywhere in the world"
            delay={0}
          />
        </div>
        <CopyBlock step={9}>
          <h3 className={HEADING_CLASS}>
            Get paid by customers from anywhere in the world
          </h3>
          <p className={PARAGRAPH_CLASS}>
            The internet has no borders, and neither should your business. With{" "}
            {siteConfig.name}, you can accept payments from international
            customers, wherever they are in the world.
          </p>
          <p className={`${PARAGRAPH_CLASS} mt-4`}>
            Accept payments from internationally-issued cards, display prices in
            USD, and get settled in USD.
          </p>
        </CopyBlock>
      </div>

      <Divider />

      {/* 10 — 24/7 support */}
      <div className={SECTION_WRAPPER}>
        <CopyBlock step={10}>
          <h3 className={HEADING_CLASS}>Get attentive, empathetic help 24/7</h3>
          <p className={PARAGRAPH_CLASS}>
            Our Customer Success team is available around the clock to support
            you, and they're empowered to resolve issues as quickly as possible.
          </p>
        </CopyBlock>
        <div className="flex-1 flex justify-center md:justify-end">
          <AnimImg src="/pay.png" alt="24/7 customer support" delay={0} />
        </div>
      </div>

      <Divider />

      {/* 11 — Beautiful checkout */}
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 flex justify-center md:justify-start">
          <AnimImg
            src="/understand.png"
            alt="Modern checkout experience"
            delay={0}
          />
        </div>
        <CopyBlock step={11}>
          <h3 className={HEADING_CLASS}>
            A modern, beautiful payments experience
          </h3>
          <p className={PARAGRAPH_CLASS}>
            Give customers confidence in your business with a modern, gorgeous
            checkout form that elevates your brand.
          </p>
          <TickList
            items={[
              "No redirects — keep your customers on your own page",
              "Automatic error resolution — if a transaction fails, the checkout form smartly suggests other payment options",
            ]}
            cols={1}
          />
        </CopyBlock>
      </div>

      <Divider />

      {/* 12 — Team obsessed with your growth */}
      <div className={`${SECTION_WRAPPER} mb-28`}>
        <CopyBlock step={12}>
          <h3 className={HEADING_CLASS}>
            A team that's obsessed about your growth
          </h3>
          <p className={PARAGRAPH_CLASS}>
            Above all, over 200,000 businesses love {siteConfig.name} because
            we're a team that's obsessed with your company's growth. The mission
            of {siteConfig.name} is to help businesses in Nigeria be profitable,
            envied, and loved — and everything we do is done with a single goal:
            to guarantee your business' success.
          </p>
        </CopyBlock>
        <div className="flex-1 flex justify-center md:justify-end">
          <AnimImg
            src="/team.jpg"
            alt="A team obsessed with your growth"
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
};
