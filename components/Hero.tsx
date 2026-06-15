"use client";

import { useState } from "react";
import {
  Play,
  Zap,
  ShieldCheck,
  Globe,
  Code2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const Hero = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const features = [
    {
      icon: <Zap size={14} />,
      label: "Instant Settlements",
    },
    {
      icon: <ShieldCheck size={14} />,
      label: "Bank-Grade Security",
    },
    {
      icon: <Globe size={14} />,
      label: "135 Currencies",
    },
    {
      icon: <Code2 size={14} />,
      label: "Simple Integration",
    },
  ];

  const transactions = [
    {
      initials: "AC",
      name: "BizzNaija",
      time: "2 min ago",
      amount: "+₦52,400.00",
      status: "Settled",
      color: "bg-blue-50 text-blue-700",
    },
    {
      initials: "BR",
      name: "Bright Retail",
      time: "11 min ago",
      amount: "+₦78,900.50",
      status: "Settled",
      color: "bg-pink-50 text-pink-700",
    },
    {
      initials: "NK",
      name: "Nova Kitchen",
      time: "24 min ago",
      amount: "+₦315,000.00",
      status: "Processing",
      color: "bg-amber-50 text-amber-700",
    },
  ];

  return (
    <>
      <section className="w-full bg-white pt-10 md:pt-15 overflow-hidden">
        {/* HERO BODY */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="py-16 md:py-24 grid lg:grid-cols-2 items-start gap-12 lg:gap-20">
            {/* LEFT — TEXT */}
            <div className="w-full">
              {/* Launch pill */}
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-medium tracking-wide uppercase rounded-full px-3 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Now live — start accepting payments today
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontFamily: "Boing, Georgia, serif",
                  fontWeight: 700,
                  lineHeight: "1.05",
                  color: "rgb(1, 27, 51)",
                  letterSpacing: "-0.025em",
                }}
                className="text-[34px] sm:text-[42px] md:text-[50px] mb-5"
              >
                The payment gateway built for{" "}
                <em style={{ fontStyle: "italic", color: "#059669" }}>
                  serious
                </em>{" "}
                businesses
              </h1>

              {/* Subheadline */}
              <p className="text-gray-500 mb-8 text-base md:text-lg leading-relaxed max-w-lg font-light">
                Fast settlements, global reach, and transparent pricing — all in
                one platform. Connect once and get paid from anywhere in the
                world.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                <Link
                  href={siteConfig.links.register}
                  className="inline-flex items-center gap-2 bg-[#0F6E56] hover:bg-[#0a5a44] text-white px-6 py-3 rounded-lg text-sm font-medium transition w-full sm:w-auto justify-center sm:justify-start"
                >
                  <ArrowRight size={15} />
                  Create free account
                </Link>
                <Link
                  href="/contactsales"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-[#011B33] transition"
                >
                  Talk to sales <ChevronRight size={14} />
                </Link>
              </div>

              {/* Feature chips */}
              <div className="flex flex-wrap gap-2">
                {features.map((f) => (
                  <div
                    key={f.label}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-xs font-medium text-[#011B33]"
                  >
                    <span className="text-[#0F6E56]">{f.icon}</span>
                    {f.label}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — DASHBOARD MOCKUP */}
            <div className="flex flex-col gap-3 lg:pt-2">
              {/* Revenue card */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                    Today's Revenue
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Live
                  </span>
                </div>
                <div
                  className="text-[#011B33] text-3xl mb-1"
                  style={{
                    fontFamily: "Boing, Georgia, serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  ₦4,800,320.00
                </div>
                <p className="text-[11px] text-gray-400">
                  Across 1,204 transactions today
                </p>
              </div>

              {/* Recent transactions */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                    Recent Payments
                  </span>
                  <span className="text-[11px] text-gray-400 cursor-pointer hover:text-[#011B33] transition">
                    View all →
                  </span>
                </div>
                <div className="flex flex-col divide-y divide-gray-50">
                  {transactions.map((txn) => (
                    <div
                      key={txn.name}
                      className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold ${txn.color}`}
                        >
                          {txn.initials}
                        </div>
                        <div>
                          <p className="text-xs font-medium text-[#011B33]">
                            {txn.name}
                          </p>
                          <p className="text-[10px] text-gray-400">
                            {txn.time}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium text-[#011B33]">
                          {txn.amount}
                        </p>
                        <p
                          className={`text-[10px] ${txn.status === "Settled" ? "text-emerald-600" : "text-amber-500"}`}
                        >
                          {txn.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1.5">
                    Success Rate
                  </p>
                  <p
                    className="text-2xl text-[#011B33]"
                    style={{
                      fontFamily: "Boing, Georgia, serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    99.4%
                  </p>
                  <p className="text-[10px] text-emerald-600 mt-1">
                    ↑ 0.2% this week
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1.5">
                    Avg. Settlement
                  </p>
                  <p
                    className="text-2xl text-[#011B33]"
                    style={{
                      fontFamily: "Boing, Georgia, serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    4 min
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1">
                    Industry avg: 2 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PARTNERS */}
        {/* <div className="border-t border-green-20 py-10">
          <div className="flex flex-col md:flex-row slg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="text-left w-full lg:w-auto">
              <p className="text-sm font-medium text-[#011B33] mb-3">
                Trusted by over 200,000 businesses
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {[
                  {
                    icon: <ShieldCheck size={12} />,
                    label: "Bank-grade security",
                  },
                  { icon: <Zap size={12} />, label: "99.9% uptime SLA" },
                ].map((pill) => (
                  <div
                    key={pill.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-100 bg-gray-50 text-[11px] text-gray-500"
                  >
                    <span className="text-gray-400">{pill.icon}</span>
                    {pill.label}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <p className="text-xs text-gray-400 font-medium">
                  Watch a demo
                </p>
                <button
                  onClick={() => setVideoOpen(true)}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition"
                  aria-label="Play demo video"
                >
                  <Play className="text-[#011B33] w-3 h-3 ml-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-3xl aspect-video flex items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm text-gray-400">Demo video coming soon</p>
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 text-xs text-gray-400 hover:text-gray-700 transition"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};
