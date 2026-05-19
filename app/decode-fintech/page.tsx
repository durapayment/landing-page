"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Mail, BookOpen } from "lucide-react";

/* ─────────────────────────────────────────
   Types & data
───────────────────────────────────────── */

const tabs = [
  "All",
  "Architecture",
  "Security",
  "API design",
  "Scaling",
  "UX patterns",
  "Business",
];

const categoryStyles: Record<string, string> = {
  Architecture: "bg-[#E1F5EE] text-[#085041]",
  Security: "bg-[#FAECE7] text-[#712B13]",
  "API design": "bg-[#E6F1FB] text-[#0C447C]",
  Business: "bg-[#EEEDFE] text-[#3C3489]",
  Scaling: "bg-[#FAEEDA] text-[#633806]",
  "UX patterns": "bg-[#FBEAF0] text-[#72243E]",
};

const iconBgStyles: Record<string, string> = {
  Architecture: "bg-[#E1F5EE] text-[#085041]",
  Security: "bg-[#FAECE7] text-[#712B13]",
  "API design": "bg-[#E6F1FB] text-[#0C447C]",
  Business: "bg-[#EEEDFE] text-[#3C3489]",
  Scaling: "bg-[#FAEEDA] text-[#633806]",
  "UX patterns": "bg-[#FBEAF0] text-[#72243E]",
};

interface FeaturedInsight {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  wide?: boolean;
  Illustration: () => JSX.Element;
}

interface ListInsight {
  id: number;
  num: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  icon: string;
}

const listInsights: ListInsight[] = [
  {
    id: 4,
    num: "04",
    title: "3DS2 authentication — what builders need to know",
    description:
      "When it triggers, how it affects conversion, and how to handle frictionless vs. challenge flows in your checkout UI.",
    category: "Security",
    readTime: "8 min",
    icon: "ti-shield-lock",
  },
  {
    id: 5,
    num: "05",
    title: "Webhook signature verification — stop spoofed events",
    description:
      "Verify every inbound webhook with HMAC-SHA256 before updating your database. Here's exactly how.",
    category: "API design",
    readTime: "6 min",
    icon: "ti-webhook",
  },
  {
    id: 6,
    num: "06",
    title: "Conversion rate autopsy — why checkouts fail in Africa",
    description:
      "Intermittent connectivity, card issuer restrictions, and UX friction are costing you sales. A data-backed breakdown.",
    category: "Business",
    readTime: "11 min",
    icon: "ti-chart-line",
  },
  {
    id: 7,
    num: "07",
    title: "Handling 10,000 concurrent payment requests — architecture guide",
    description:
      "Queue design, horizontal scaling strategies, and load testing your DuraPayment integration before peak traffic.",
    category: "Architecture",
    readTime: "14 min",
    icon: "ti-server",
  },
  {
    id: 8,
    num: "08",
    title: "Mobile checkout UX patterns that lift conversion by 22%",
    description:
      "Input masking, smart keyboard types, progress indicators, and one-tap payment — UX decisions backed by A/B data.",
    category: "UX patterns",
    readTime: "10 min",
    icon: "ti-device-mobile",
  },
];

/* ─────────────────────────────────────────
   SVG Illustrations
───────────────────────────────────────── */

function PaymentFlowIllustration() {
  return (
    <svg
      width="100%"
      height="180"
      viewBox="0 0 580 180"
      xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes df-blink{0%,100%{opacity:1}50%{opacity:0}}
      `}</style>

      {/* Node: Browser */}
      <rect
        x="20"
        y="66"
        width="80"
        height="48"
        rx="6"
        fill="#163E30"
        stroke="#1D9E75"
        strokeWidth="0.7"
      />
      <text
        x="60"
        y="86"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,.45)">
        Customer
      </text>
      <text
        x="60"
        y="100"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="#9FE1CB"
        fontWeight="600">
        Browser
      </text>
      <circle cx="60" cy="110" r="2.5" fill="#1D9E75" />

      {/* Node: SDK */}
      <rect
        x="140"
        y="66"
        width="80"
        height="48"
        rx="6"
        fill="#163E30"
        stroke="#1D9E75"
        strokeWidth="0.7"
      />
      <text
        x="180"
        y="86"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,.45)">
        DuraPayment
      </text>
      <text
        x="180"
        y="100"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="#9FE1CB"
        fontWeight="600">
        SDK / API
      </text>

      {/* Node: Processor */}
      <rect
        x="270"
        y="66"
        width="80"
        height="48"
        rx="6"
        fill="#163E30"
        stroke="#1D9E75"
        strokeWidth="0.7"
      />
      <text
        x="310"
        y="86"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,.45)">
        Payment
      </text>
      <text
        x="310"
        y="100"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="#9FE1CB"
        fontWeight="600">
        Processor
      </text>

      {/* Node: Network */}
      <rect
        x="400"
        y="66"
        width="80"
        height="48"
        rx="6"
        fill="#163E30"
        stroke="#1D9E75"
        strokeWidth="0.7"
      />
      <text
        x="440"
        y="86"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,.45)">
        Card
      </text>
      <text
        x="440"
        y="100"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="#9FE1CB"
        fontWeight="600">
        Network
      </text>

      {/* Node: Bank (highlighted) */}
      <rect
        x="490"
        y="66"
        width="80"
        height="48"
        rx="6"
        fill="#0F6E56"
        stroke="#5DCAA5"
        strokeWidth="0.7"
      />
      <text
        x="530"
        y="86"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,.6)">
        Issuing
      </text>
      <text
        x="530"
        y="100"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="#fff"
        fontWeight="600">
        Bank
      </text>

      {/* Dashed connectors */}
      {[
        "M100,90 L140,90",
        "M220,90 L270,90",
        "M350,90 L400,90",
        "M480,90 L490,90",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="#1D9E75"
          strokeWidth="0.8"
          strokeDasharray="3 2"
          opacity=".4"
        />
      ))}

      {/* Animated forward dots */}
      {[
        { begin: "0s", fill: "#1D9E75" },
        { begin: ".8s", fill: "#5DCAA5" },
      ].map(({ begin, fill }, i) => (
        <circle key={i} r="4" fill={fill} opacity="0">
          <animateMotion
            path="M100,90 L530,90"
            dur="2.4s"
            repeatCount="indefinite"
            begin={begin}
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="2.4s"
            repeatCount="indefinite"
            begin={begin}
          />
        </circle>
      ))}

      {/* Return path */}
      <path
        d="M530,114 Q530,148 60,148 Q60,114 60,114"
        fill="none"
        stroke="#1D9E75"
        strokeWidth="0.6"
        strokeDasharray="3 2"
        opacity=".2"
      />
      <circle r="3" fill="#9FE1CB" opacity="0">
        <animateMotion
          path="M530,114 Q530,148 60,148 Q60,114 60,114"
          dur="2.4s"
          repeatCount="indefinite"
          begin="1.6s"
        />
        <animate
          attributeName="opacity"
          values="0;.8;.8;0"
          dur="2.4s"
          repeatCount="indefinite"
          begin="1.6s"
        />
      </circle>

      <text
        x="290"
        y="165"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,.25)">
        Authorisation response flows back in ~200ms
      </text>
    </svg>
  );
}

function RetryLogicIllustration() {
  return (
    <svg
      width="100%"
      height="150"
      viewBox="0 0 260 150"
      xmlns="http://www.w3.org/2000/svg">
      <text
        x="20"
        y="26"
        fontFamily="sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,.3)"
        fontWeight="600"
        letterSpacing=".05em">
        RETRY LADDER
      </text>

      {/* Attempt 1 — failed */}
      <rect x="20" y="36" width="40" height="20" rx="4" fill="#1D9E75" />
      <text
        x="40"
        y="50"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="#fff"
        fontWeight="600">
        Try 1
      </text>
      <rect
        x="64"
        y="44"
        width="60"
        height="4"
        rx="2"
        fill="#D85A30"
        opacity=".7"
      />
      <text x="128" y="50" fontFamily="monospace" fontSize="8" fill="#D85A30">
        declined
      </text>

      {/* Attempt 2 — failed */}
      <text
        x="20"
        y="76"
        fontFamily="sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,.3)">
        +5 min
      </text>
      <rect
        x="20"
        y="82"
        width="40"
        height="20"
        rx="4"
        fill="#163E30"
        stroke="#1D9E75"
        strokeWidth="0.6"
      />
      <text
        x="40"
        y="96"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="#9FE1CB"
        fontWeight="600">
        Try 2
      </text>
      <rect
        x="64"
        y="90"
        width="60"
        height="4"
        rx="2"
        fill="#D85A30"
        opacity=".5"
      />
      <text
        x="128"
        y="96"
        fontFamily="monospace"
        fontSize="8"
        fill="rgba(255,128,80,.6)">
        declined
      </text>

      {/* Attempt 3 — success */}
      <text
        x="20"
        y="122"
        fontFamily="sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,.3)">
        +1 hr
      </text>
      <rect
        x="20"
        y="128"
        width="40"
        height="20"
        rx="4"
        fill="#0F6E56"
        stroke="#5DCAA5"
        strokeWidth="0.6"
      />
      <text
        x="40"
        y="142"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="#fff"
        fontWeight="600">
        Try 3
      </text>
      <rect x="64" y="136" width="60" height="4" rx="2" fill="#1D9E75" />
      <text x="128" y="142" fontFamily="monospace" fontSize="8" fill="#5DCAA5">
        approved
      </text>

      {/* Pulse on success */}
      <circle cx="170" cy="138" r="5" fill="#1D9E75" />
      <circle
        cx="170"
        cy="138"
        r="5"
        fill="none"
        stroke="#1D9E75"
        strokeWidth="1">
        <animate
          attributeName="r"
          values="5;12;5"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values=".7;0;.7"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

function IdempotencyIllustration() {
  return (
    <svg
      width="100%"
      height="150"
      viewBox="0 0 260 150"
      xmlns="http://www.w3.org/2000/svg">
      <text
        x="20"
        y="26"
        fontFamily="sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,.3)"
        fontWeight="600"
        letterSpacing=".05em">
        IDEMPOTENCY KEY
      </text>

      {/* Request 1 */}
      <rect
        x="20"
        y="34"
        width="100"
        height="26"
        rx="5"
        fill="#163E30"
        stroke="#1D9E75"
        strokeWidth="0.6"
      />
      <text x="30" y="47" fontFamily="monospace" fontSize="7" fill="#5DCAA5">
        POST /charge
      </text>
      <text
        x="30"
        y="57"
        fontFamily="monospace"
        fontSize="7"
        fill="rgba(255,255,255,.35)">
        key: txn_8f2a
      </text>

      {/* Request 2 (retry) */}
      <rect
        x="20"
        y="64"
        width="100"
        height="26"
        rx="5"
        fill="#163E30"
        stroke="#1D9E75"
        strokeWidth="0.6"
      />
      <text x="30" y="77" fontFamily="monospace" fontSize="7" fill="#5DCAA5">
        POST /charge
      </text>
      <text
        x="30"
        y="87"
        fontFamily="monospace"
        fontSize="7"
        fill="rgba(255,255,255,.35)">
        key: txn_8f2a
      </text>
      <text x="75" y="77" fontFamily="sans-serif" fontSize="7" fill="#D85A30">
        retry
      </text>

      {/* Animated arrow */}
      <path
        d="M120,76 L148,76"
        fill="none"
        stroke="#1D9E75"
        strokeWidth="0.8"
        strokeDasharray="3 2"
        opacity=".5"
      />
      <circle r="3" fill="#1D9E75" opacity="0">
        <animateMotion
          path="M120,76 L148,76"
          dur="1.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Dedup cache */}
      <rect
        x="148"
        y="58"
        width="52"
        height="36"
        rx="5"
        fill="#0F6E56"
        stroke="#5DCAA5"
        strokeWidth="0.7"
      />
      <text
        x="174"
        y="74"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="7"
        fill="#fff"
        fontWeight="600">
        Dedup
      </text>
      <text
        x="174"
        y="85"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="7"
        fill="rgba(255,255,255,.6)">
        cache
      </text>

      {/* One charge */}
      <path
        d="M200,76 L220,76"
        fill="none"
        stroke="#5DCAA5"
        strokeWidth="0.8"
        opacity=".5"
      />
      <rect
        x="220"
        y="62"
        width="28"
        height="28"
        rx="5"
        fill="#163E30"
        stroke="#5DCAA5"
        strokeWidth="0.7"
      />
      <text
        x="234"
        y="79"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="#5DCAA5">
        ×1
      </text>

      <text
        x="130"
        y="116"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,.3)">
        Charged once, no matter how many retries
      </text>
    </svg>
  );
}

const featuredInsights: FeaturedInsight[] = [
  {
    id: 1,
    title: "How a payment authorisation actually flows — end to end",
    description:
      "Most developers treat the gateway as a black box. This breakdown traces every hop: browser → DuraPayment SDK → processor → card network → issuing bank — and back — so you can design for failure at every node.",
    category: "Architecture",
    readTime: "9 min",
    wide: true,
    Illustration: PaymentFlowIllustration,
  },
  {
    id: 2,
    title: "Smart retry logic that recovers failed payments",
    description:
      "Exponential backoff, intelligent timing windows, and decline code routing — recover up to 30% of soft-declined transactions.",
    category: "Scaling",
    readTime: "7 min",
    Illustration: RetryLogicIllustration,
  },
  {
    id: 3,
    title: "Idempotency keys — never double-charge a customer",
    description:
      "Network timeouts cause duplicate requests. Learn how idempotency keys make your integration bulletproof against accidental double charges.",
    category: "API design",
    readTime: "5 min",
    Illustration: IdempotencyIllustration,
  },
];

/* ─────────────────────────────────────────
   Sub-components
───────────────────────────────────────── */

function CategoryTag({ category }: { category: string }) {
  return (
    <span
      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full inline-block ${categoryStyles[category] ?? "bg-gray-100 text-gray-600"}`}>
      {category}
    </span>
  );
}

/* ─────────────────────────────────────────
   Main page
───────────────────────────────────────── */

export default function DecodeFintechPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredFeatured =
    activeTab === "All"
      ? featuredInsights
      : featuredInsights.filter((i) => i.category === activeTab);

  const filteredList =
    activeTab === "All"
      ? listInsights
      : listInsights.filter((i) => i.category === activeTab);

  const noResults = filteredFeatured.length === 0 && filteredList.length === 0;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');
        .font-display { font-family: 'Instrument Serif', serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <main className="font-body bg-white max-w-5xl mx-auto px-6 py-16">
        {/* ── HERO ── */}
        <div className="bg-[#0A1F1A] rounded-2xl px-8 pt-16 pb-10 mb-8 relative overflow-hidden">
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 40px)",
            }}
          />

          <span className="inline-flex items-center gap-1.5 bg-[#1D9E75]/18 border border-[#1D9E75]/35 rounded-full px-4 py-1 text-[11px] font-semibold tracking-widest uppercase text-[#5DCAA5] mb-5">
            ✦ Builder intelligence
          </span>

          <h1 className="font-display text-4xl md:text-5xl font-normal text-white leading-tight mb-4">
            Decode <em className="italic text-[#5DCAA5]">Fintech</em>
            <br />
            Insights for builders
          </h1>

          <p className="text-white/55 text-sm leading-relaxed max-w-xl mb-8">
            Deep technical breakdowns, architecture patterns, security
            playbooks, and UX principles — everything a DuraPayment builder
            needs to ship with confidence.
          </p>

          <div className="flex gap-8 flex-wrap">
            {[
              { value: "32", label: "insights" },
              { value: "6 topics", label: "covered" },
              { value: "Weekly", label: "new drops" },
            ].map((s) => (
              <div key={s.label}>
                <span className="text-xl font-semibold text-white block">
                  {s.value}
                </span>
                <span className="text-[11px] text-white/35 mt-1 block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── TABS ── */}
        <div className="flex gap-2 flex-wrap mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                activeTab === tab
                  ? "bg-[#0A1F1A] text-[#5DCAA5] border-[#0A1F1A]"
                  : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-800"
              }`}>
              {tab}
            </button>
          ))}
        </div>

        {noResults && (
          <p className="text-sm text-gray-400 py-10 text-center">
            No insights in this category yet.
          </p>
        )}

        {/* ── FEATURED CARDS ── */}
        {filteredFeatured.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {filteredFeatured.map((insight) => {
              const { Illustration } = insight;
              return (
                <div
                  key={insight.id}
                  className={`border border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-gray-300 transition-colors cursor-pointer ${
                    insight.wide ? "md:col-span-2" : ""
                  }`}>
                  <div className="bg-[#0A1F1A] w-full">
                    <Illustration />
                  </div>
                  <div className="p-5">
                    <CategoryTag category={insight.category} />
                    <h3 className="text-[15px] font-semibold text-gray-900 leading-snug mt-2 mb-2">
                      {insight.title}
                    </h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed mb-3">
                      {insight.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <Link
                        href="#"
                        className="text-[13px] font-semibold text-[#0F6E56] hover:text-[#1D9E75] inline-flex items-center gap-1.5 transition-colors">
                        Read insight <ArrowRight size={12} />
                      </Link>
                      <span className="text-[11px] text-gray-400 flex items-center gap-1">
                        <Clock size={11} /> {insight.readTime} read
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── LIST INSIGHTS ── */}
        {filteredList.length > 0 && (
          <>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-gray-400 mb-3">
              More insights
            </p>
            <div className="flex flex-col gap-2 mb-8">
              {filteredList.map((insight) => {
                const iconBg =
                  iconBgStyles[insight.category] ?? "bg-gray-100 text-gray-500";
                const [bg, tc] = iconBg.split(" ");
                return (
                  <div
                    key={insight.id}
                    className="flex gap-4 items-start p-4 border border-gray-100 rounded-2xl bg-white hover:border-gray-300 transition-colors cursor-pointer">
                    <span className="text-[11px] font-semibold text-white bg-[#0A1F1A] rounded px-1.5 py-0.5 shrink-0 mt-0.5 min-w-[28px] text-center">
                      {insight.num}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${bg} ${tc}`}>
                      <i
                        className={`ti ${insight.icon}`}
                        style={{ fontSize: 18 }}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[13px] font-semibold text-gray-900 leading-snug mb-1">
                        {insight.title}
                      </h4>
                      <p className="text-[12px] text-gray-500 leading-relaxed mb-2">
                        {insight.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <CategoryTag category={insight.category} />
                        <span className="text-[11px] text-gray-400 flex items-center gap-1">
                          <Clock size={11} /> {insight.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* ── CTA ── */}
        <div className="bg-[#0A1F1A] rounded-2xl px-8 py-7 flex items-center justify-between gap-6 flex-wrap">
          <div>
            <h3 className="font-display text-xl font-normal text-white mb-1">
              Stay sharp as a builder
            </h3>
            <p className="text-[13px] text-white/50">
              New fintech insights dropped every week — straight to your inbox.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button className="inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#5DCAA5] hover:text-[#0A1F1A] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors">
              <Mail size={14} /> Subscribe to insights
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white/80 border border-white/15 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors">
              <BookOpen size={14} /> Browse all topics
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
