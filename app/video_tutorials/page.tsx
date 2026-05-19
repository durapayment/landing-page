"use client";

import { useState } from "react";
import { Code, Terminal } from "lucide-react";

const tabs = [
  "All",
  "Getting started",
  "API integration",
  "Security",
  "Webhooks",
  "Advanced",
];

const categoryStyles: Record<string, string> = {
  "Getting started": "bg-[#E1F5EE] text-[#085041]",
  "API integration": "bg-[#E6F1FB] text-[#0C447C]",
  Security: "bg-[#FAECE7] text-[#712B13]",
  Webhooks: "bg-[#FAEEDA] text-[#633806]",
  Advanced: "bg-[#EEEDFE] text-[#3C3489]",
};

function CategoryTag({ category }: { category: string }) {
  return (
    <span
      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
        categoryStyles[category] ?? "bg-gray-100 text-gray-600"
      }`}>
      {category}
    </span>
  );
}

/* ─────────────────────────────────────────
   Animated SVG illustrations
───────────────────────────────────────── */

function CheckoutAnimation() {
  return (
    <svg
      width="100%"
      height="200"
      viewBox="0 0 640 200"
      xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes dp-blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes dp-tick{0%{stroke-dashoffset:24}100%{stroke-dashoffset:0}}
        @keyframes dp-pulse{0%{r:10;opacity:.6}100%{r:22;opacity:0}}
        @keyframes dp-fc{0%,18%{opacity:1}22%,100%{opacity:0}}
        .dp-cur{animation:dp-blink 1s infinite}
        .dp-tick{animation:dp-tick .6s ease forwards}
        .dp-pr{animation:dp-pulse 2s ease-out infinite}
        .dp-fc0{animation:dp-fc 3s 0s infinite}
        .dp-fc1{animation:dp-fc 3s 1s infinite;opacity:0}
        .dp-fc2{animation:dp-fc 3s 2s infinite;opacity:0}
      `}</style>

      <rect
        x="180"
        y="24"
        width="280"
        height="152"
        rx="10"
        fill="#0F2E26"
        stroke="#1D9E75"
        strokeWidth="0.8"
      />

      <rect
        x="196"
        y="38"
        width="248"
        height="14"
        rx="3"
        fill="#1D9E75"
        opacity=".25"
      />

      <text
        x="320"
        y="49"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="9"
        fill="#5DCAA5"
        fontWeight="600">
        CHECKOUT — DURAPAYMENT
      </text>

      <text
        x="220"
        y="76"
        fontFamily="sans-serif"
        fontSize="9"
        fill="rgba(255,255,255,.45)">
        Total amount
      </text>

      <text
        x="220"
        y="92"
        fontFamily="Georgia, serif"
        fontSize="22"
        fill="#fff">
        ₦ 24,500.00
      </text>

      <rect
        x="196"
        y="104"
        width="148"
        height="26"
        rx="5"
        fill="#163E30"
        stroke="#1D9E75"
        strokeWidth="0.5"
      />

      <text
        x="206"
        y="121"
        fontFamily="monospace"
        fontSize="9"
        fill="rgba(255,255,255,.5)">
        4242 4242 4242
      </text>

      <rect
        x="346"
        y="104"
        width="44"
        height="26"
        rx="5"
        fill="#163E30"
        stroke="#1D9E75"
        strokeWidth="0.5"
      />

      <text
        x="352"
        y="121"
        fontFamily="monospace"
        fontSize="9"
        fill="rgba(255,255,255,.5)">
        12/27
      </text>

      <rect
        x="394"
        y="104"
        width="50"
        height="26"
        rx="5"
        fill="#163E30"
        stroke="#1D9E75"
        strokeWidth="0.5"
      />

      <text
        x="400"
        y="121"
        fontFamily="monospace"
        fontSize="9"
        fill="rgba(255,255,255,.5)">
        CVV
      </text>

      <rect
        x="339"
        y="111"
        width="1.5"
        height="11"
        rx="1"
        fill="#5DCAA5"
        className="dp-cur"
      />

      <rect x="196" y="138" width="248" height="28" rx="6" fill="#1D9E75" />

      <g className="dp-fc0">
        <text
          x="320"
          y="156"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize="10"
          fill="#fff"
          fontWeight="600">
          Pay ₦ 24,500
        </text>
      </g>

      <g className="dp-fc1">
        <text
          x="320"
          y="156"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize="10"
          fill="#fff"
          fontWeight="600">
          Processing...
        </text>
      </g>

      <g className="dp-fc2">
        <text
          x="320"
          y="156"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize="10"
          fill="#fff"
          fontWeight="600">
          Payment confirmed!
        </text>
      </g>

      <circle
        cx="560"
        cy="100"
        r="22"
        fill="none"
        stroke="#1D9E75"
        strokeWidth="1"
        className="dp-pr"
      />

      <circle
        cx="560"
        cy="100"
        r="18"
        fill="#163E30"
        stroke="#1D9E75"
        strokeWidth="0.8"
      />

      <polyline
        points="551,100 557,107 570,93"
        fill="none"
        stroke="#5DCAA5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="24"
        strokeDashoffset="0"
        className="dp-tick"
      />

      <rect
        x="38"
        y="32"
        width="82"
        height="136"
        rx="10"
        fill="#0F2E26"
        stroke="#1D9E75"
        strokeWidth="0.6"
      />

      <rect x="44" y="50" width="70" height="44" rx="4" fill="#163E30" />

      <text
        x="79"
        y="67"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="7"
        fill="rgba(255,255,255,.4)">
        Cart total
      </text>

      <text
        x="79"
        y="82"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="14"
        fill="#fff">
        ₦24,500
      </text>

      <rect x="44" y="100" width="70" height="14" rx="3" fill="#1D9E75" />

      <text
        x="79"
        y="111"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="#fff"
        fontWeight="600">
        Pay now
      </text>

      <rect x="44" y="120" width="70" height="8" rx="2" fill="#163E30" />
      <rect x="44" y="132" width="44" height="8" rx="2" fill="#163E30" />
    </svg>
  );
}

interface Tutorial {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  featured?: boolean;
  Animation: React.ComponentType;
}

const tutorials: Tutorial[] = [
  {
    id: 1,
    title: "Complete checkout flow — from cart to confirmation",
    description:
      "See how DuraPayment handles the full customer payment journey: entering card details, processing securely, and receiving real-time confirmation.",
    category: "Getting started",
    duration: "12 min",
    featured: true,
    Animation: CheckoutAnimation,
  },
];

export default function TutorialSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? tutorials
      : tutorials.filter((t) => t.category === activeTab);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap");

        .font-display {
          font-family: "Instrument Serif", serif;
        }

        .font-body {
          font-family: "Plus Jakarta Sans", sans-serif;
        }
      `}</style>

      <section className="font-body bg-white max-w-5xl mx-auto px-6 py-16">
        <div className="bg-[#0A1F1A] rounded-2xl px-8 py-10 mb-8">
          <span className="inline-flex items-center gap-1.5 bg-[#1D9E75]/20 border border-[#1D9E75]/35 rounded-full px-4 py-1 text-[11px] font-semibold tracking-widest uppercase text-[#5DCAA5] mb-4">
            ✦ Tutorials
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-normal text-white leading-tight mb-3">
            Learn <em className="italic text-[#5DCAA5]">DuraPayment</em>
            <br />
            step by step
          </h2>

          <p className="text-white/55 text-sm leading-relaxed max-w-lg mb-7">
            From your first API call to production-ready integrations —
            everything you need to get up and running fast.
          </p>

          <div className="flex gap-8 flex-wrap">
            {[
              { value: "6", label: "tutorials" },
              { value: "4.5 hrs", label: "total content" },
              { value: "Free", label: "always" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-xl font-semibold text-white">
                  {s.value}
                </span>

                <span className="text-[11px] text-white/40 mt-0.5">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

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

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {filtered.map((tutorial) => {
            const { Animation } = tutorial;

            return (
              <div
                key={tutorial.id}
                className={`border border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-gray-300 transition-colors cursor-pointer ${
                  tutorial.featured ? "md:col-span-2" : ""
                }`}>
                <div className="bg-[#0A1F1A] w-full">
                  <Animation />
                </div>

                <div className="p-5">
                  <h3 className="text-[15px] font-semibold text-gray-900 leading-snug mb-2">
                    {tutorial.title}
                  </h3>

                  <p className="text-[13px] text-gray-500 leading-relaxed mb-3">
                    {tutorial.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <CategoryTag category={tutorial.category} />

                    <span className="text-[11px] text-gray-400">
                      {tutorial.duration}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <p className="text-sm text-gray-400 py-10 text-center md:col-span-2">
              No tutorials in this category yet.
            </p>
          )}
        </div>

        <div className="bg-[#0A1F1A] rounded-2xl px-8 py-7 flex items-center justify-between gap-6 flex-wrap">
          <div>
            <h3 className="font-display text-xl font-normal text-white mb-1">
              Ready to start building?
            </h3>

            <p className="text-[13px] text-white/50">
              Access full API docs and developer sandbox — free.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            <button className="inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#5DCAA5] hover:text-[#0A1F1A] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors">
              <Code size={14} />
              View API docs
            </button>

            <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white/80 border border-white/15 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors">
              <Terminal size={14} />
              Open sandbox
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
