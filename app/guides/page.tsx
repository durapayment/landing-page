"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ChevronRight, BookOpen } from "lucide-react";

/* ── DATA ── */
const sections = [
  {
    title: "Getting Started",
    icon: "🚀",
    content: `Welcome to ${siteConfig.name}. This guide will help you understand how to set up your account, accept payments, and manage your business efficiently using our platform.

Getting started takes less than 15 minutes. Once you create an account, you'll have immediate access to your merchant dashboard where you can configure your payment preferences, add team members, and start accepting payments.

This guide walks you through every step — from account creation to your first successful transaction. Follow the sections in order or jump directly to the topic you need.`,
  },
  {
    title: "Creating an Account",
    icon: "👤",
    content: `Sign up using your email address, verify your identity, and access your merchant dashboard in minutes.

To create an account, visit our signup page and provide your email address and a secure password. You'll receive a verification email — click the link to confirm your address and activate your account.

Once verified, you'll be guided through a short onboarding flow where you provide basic business information. Individual (starter) accounts can begin in test mode immediately, while full live access requires KYC verification.`,
  },
  {
    title: "Setting Up Your Business",
    icon: "🏢",
    content: `Add your business details, bank account information, and verify compliance requirements to start receiving payments.

Navigate to Settings → Business Profile to add your registered business name, address, industry, and website. This information appears on payment receipts and helps build trust with your customers.

To enable live payments and settlements, complete the KYC verification process by uploading a valid government-issued ID and proof of business registration. Verification is typically completed within 1–2 business days.`,
  },
  {
    title: "Accepting Payments",
    icon: "💳",
    content: `Use ${siteConfig.name} APIs or payment links to start accepting card, bank transfer, and mobile money payments instantly.

The simplest way to accept payments is via Payment Links — shareable URLs you can send to customers via WhatsApp, email, or SMS with no code required. For custom integrations, use our Checkout API to embed a payment form directly in your app or website.

Supported channels include: Debit/Credit Cards, Bank Transfer, USSD, Apple Pay, Visa QR, Mobile Money, and POS. All channels are available through a single integration.`,
  },
  {
    title: "Understanding Transactions",
    icon: "📊",
    content: `All transactions are tracked in real-time, showing status, reference IDs, fees, and settlement timelines.

Every transaction on ${siteConfig.name} has a unique reference ID you can use to look up, dispute, or reconcile payments. Transaction statuses include: Pending, Successful, Failed, and Abandoned.

From your dashboard, you can filter transactions by date range, status, channel, or customer. Export any view as a CSV for accounting and reconciliation. Detailed logs are retained for a minimum of 7 years.`,
  },
  {
    title: "Payouts & Settlements",
    icon: "🏦",
    content: `Funds are settled into your bank account on a scheduled basis, depending on your account configuration and risk profile.

By default, ${siteConfig.name} settles all successful transactions to your registered bank account by 10 AM the next business day (T+1). You can view upcoming and completed settlements in the Settlements tab of your dashboard.

For high-volume merchants, intraday settlements may be available. USD settlements are also supported for eligible merchants receiving international payments. Contact our support team to learn more about settlement options.`,
  },
  {
    title: "Webhooks & Integrations",
    icon: "🔗",
    content: `Use webhooks to receive real-time updates on payments, refunds, and chargebacks. Easily integrate with your backend systems.

Webhooks are HTTP callbacks that ${siteConfig.name} sends to your server when events occur — such as a successful payment or a failed charge. To set up a webhook, navigate to Settings → Webhooks and add your endpoint URL.

Always validate webhook signatures using the secret key provided in your dashboard. This prevents malicious actors from sending fake notifications to your server. Retry logic is built in — failed webhook deliveries are retried up to 5 times with exponential backoff.`,
  },
  {
    title: "Security Best Practices",
    icon: "🔐",
    content: `Always secure your API keys, validate webhook signatures, and follow PCI compliance standards when handling payments.

Never expose your secret API key in client-side code, version control, or public repositories. Use environment variables to store keys securely. Rotate your keys immediately if you suspect a compromise.

${siteConfig.name} is PCI-DSS Level 1 certified — the highest level of payment security certification. Our infrastructure handles all sensitive card data, so you never need to store raw card numbers. For additional security, enable two-factor authentication (2FA) on your dashboard account.`,
  },
];

/* ── COMPONENT ── */
export default function GuidePage() {
  const [active, setActive] = useState(0);

  return (
    <main className="w-full min-h-screen bg-[#f4f6f9] font-sans">
      {/* ── HERO ── */}
      <div className="relative w-full bg-[#011B33] overflow-hidden pt-32 pb-16 px-6 text-center">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.04]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
            <BookOpen className="w-3.5 h-3.5 text-green-400" />
            <span className="text-green-400 text-[11px] font-bold tracking-widest uppercase">
              Documentation
            </span>
          </div>
          <h1
            className="text-white font-extrabold text-[32px] sm:text-[40px] leading-tight mb-4"
            style={{
              fontFamily:
                'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}>
            {siteConfig.name} Guide
          </h1>
          <p className="text-white/50 text-[15px] leading-[26px]">
            Everything you need to get started, accept payments, and grow your
            business with {siteConfig.name}.
          </p>
        </motion.div>
      </div>

      {/* ── BODY ── */}
      <div className="max-w-6xl mx-auto px-6 xl:px-0 py-12 flex flex-col lg:flex-row gap-8 items-start">
        {/* ── SIDEBAR ── */}
        <motion.aside
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[260px] lg:sticky lg:top-24 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex-shrink-0">
          <div className="px-5 py-4 border-b border-gray-100">
            <p className="text-[11px] font-black tracking-[0.2em] uppercase text-gray-400">
              Sections
            </p>
          </div>
          <ul className="p-3 space-y-1">
            {sections.map((s, i) => (
              <li key={i}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all flex items-center justify-between gap-2 group ${
                    active === i
                      ? "bg-[#011B33] text-white"
                      : "text-[rgba(1,27,51,0.65)] hover:bg-gray-50 hover:text-[#011B33]"
                  }`}>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[15px]">{s.icon}</span>
                    <span className="leading-snug">{s.title}</span>
                  </div>
                  <ChevronRight
                    className={`w-3.5 h-3.5 shrink-0 transition-transform ${active === i ? "text-white" : "text-gray-300 group-hover:text-gray-500"}`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </motion.aside>

        {/* ── CONTENT ── */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* card header */}
              <div className="h-1 w-full bg-gradient-to-r from-green-400 to-emerald-500" />
              <div className="px-8 py-7 border-b border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f4f6f9] flex items-center justify-center text-[20px] shrink-0">
                  {sections[active].icon}
                </div>
                <div>
                  <p className="text-[11px] font-black tracking-[0.2em] uppercase text-green-600 mb-1">
                    Step {active + 1} of {sections.length}
                  </p>
                  <h2
                    className="text-[22px] sm:text-[26px] font-extrabold text-[#011B33] leading-tight"
                    style={{
                      fontFamily:
                        'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}>
                    {sections[active].title}
                  </h2>
                </div>
              </div>

              {/* content */}
              <div className="px-8 py-8">
                {sections[active].content.split("\n\n").map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="text-[14px] md:text-[15px] text-[rgba(1,27,51,0.7)] leading-[28px] mb-5 last:mb-0">
                    {para}
                  </motion.p>
                ))}

                {/* prev / next nav */}
                <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setActive((p) => Math.max(0, p - 1))}
                    disabled={active === 0}
                    className="flex items-center gap-2 text-[13px] font-semibold text-[rgba(1,27,51,0.5)] hover:text-[#011B33] disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                    <ChevronRight className="w-4 h-4 rotate-180" />
                    Previous
                  </button>

                  <span className="text-[12px] text-gray-400">
                    {active + 1} / {sections.length}
                  </span>

                  <button
                    onClick={() =>
                      setActive((p) => Math.min(sections.length - 1, p + 1))
                    }
                    disabled={active === sections.length - 1}
                    className="flex items-center gap-2 text-[13px] font-semibold text-green-600 hover:text-green-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
