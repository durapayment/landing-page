"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ChevronRight, Scale } from "lucide-react";

/* ── DATA ── */
const sections = [
  {
    title: "Privacy & Cookie Policy",
    content: `We respect your privacy. ${siteConfig.name} collects only necessary data to process payments, prevent fraud, and comply with regulatory requirements. Cookies are used to improve user experience and maintain session security.

We do not sell your personal data to third parties. All data collected is processed in accordance with applicable data protection laws, including the Nigerian Data Protection Regulation (NDPR).

You may request access to, correction of, or deletion of your personal data by contacting our Data Protection Officer at privacy@durapayment.com.`,
  },
  {
    title: "Acceptable Use Policy",
    content: `Users must not use ${siteConfig.name} for illegal activities, fraud, money laundering, or unauthorized financial transactions. We reserve the right to suspend accounts violating our policies.

Prohibited activities include but are not limited to: processing payments for illegal goods or services, submitting false or misleading information, attempting to circumvent our fraud detection systems, and engaging in any activity that violates applicable laws.

Violations may result in immediate account suspension, fund holds, and reporting to relevant regulatory authorities.`,
  },
  {
    title: "Events Policy",
    content: `This policy governs ticketing, payment processing, refunds, and cancellations for events processed through ${siteConfig.name}.

Event organizers are responsible for clearly communicating their refund and cancellation policies to attendees. ${siteConfig.name} facilitates payment collection but is not responsible for event cancellations or changes made by organizers.

Refund requests must be submitted through the event organizer directly. ${siteConfig.name} will process approved refunds within 5–10 business days.`,
  },
  {
    title: "Dispute Policy",
    content: `Disputes must be reported within 30 days of transaction. We investigate all claims including fraud, duplicate charges, and unauthorized payments.

To initiate a dispute, contact our support team with your transaction reference, amount, date, and a description of the issue. We aim to resolve all disputes within 15 business days.

For chargeback requests initiated through your card issuer, ${siteConfig.name} will respond with supporting documentation within the timeframe specified by the card network.`,
  },
  {
    title: "Terms of Use",
    content: `By using ${siteConfig.name}, you agree to comply with all applicable laws and our service terms. We may update these terms at any time with notice provided via email or our platform.

You are responsible for maintaining the security of your account credentials. ${siteConfig.name} is not liable for unauthorized access resulting from your failure to secure your login information.

These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising shall be subject to the exclusive jurisdiction of Nigerian courts.`,
  },
  {
    title: "Merchant Services Agreement",
    content: `Merchants using ${siteConfig.name} agree to transaction fees, settlement timelines, and compliance requirements including KYC and AML obligations.

Settlement is processed within T+1 business days for eligible merchants. ${siteConfig.name} reserves the right to place settlement holds in cases of suspected fraud or unusual transaction patterns.

Merchants must maintain accurate business information and promptly notify ${siteConfig.name} of any material changes to their business operations.`,
  },
  {
    title: "Data Processing Agreement",
    content: `We process personal data in accordance with global data protection standards. Data is only shared with authorized processors for payment execution and fraud prevention.

${siteConfig.name} acts as a data processor on behalf of merchants and a data controller for its own platform operations. We implement appropriate technical and organizational measures to ensure data security.

Data retention periods vary by data type and regulatory requirement. Transaction data is retained for a minimum of 7 years in compliance with financial regulations.`,
  },
  {
    title: "Service Providers & Sub-processors",
    content: `${siteConfig.name} works with trusted third-party providers such as cloud hosting, payment networks, and fraud detection services to ensure system reliability and security.

All sub-processors are bound by data processing agreements that meet our privacy and security standards. We conduct regular audits of our service providers to ensure ongoing compliance.

A current list of our sub-processors and affiliates is available upon request. We will notify merchants of any material changes to our sub-processor list with at least 30 days advance notice.`,
  },
];

/* ── COMPONENT ── */
export default function LegalPage() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full min-h-screen bg-[#f4f6f9] font-sans">
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
            <Scale className="w-3.5 h-3.5 text-green-400" />
            <span className="text-green-400 text-[11px] font-bold tracking-widest uppercase">
              Legal & Compliance
            </span>
          </div>
          <h1 className="text-white font-extrabold text-[32px] sm:text-[40px] leading-tight mb-4">
            Our Legal Policies
          </h1>
          <p className="text-white/50 text-[15px] leading-[26px]">
            Everything you need to know about how {siteConfig.name} operates,
            protects your data, and serves your business.
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
          className="w-full lg:w-[280px] lg:sticky lg:top-24 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex-shrink-0">
          <div className="px-5 py-4 border-b border-gray-100">
            <p className="text-[11px] font-black tracking-[0.2em] uppercase text-gray-400">
              Policies
            </p>
          </div>
          <ul className="p-3 space-y-1">
            {sections.map((s, i) => (
              <li key={i}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-[13px] font-medium transition-all flex items-center justify-between gap-2 group ${
                    active === i
                      ? "bg-[#011B33] text-white"
                      : "text-[rgba(1,27,51,0.65)] hover:bg-gray-50 hover:text-[#011B33]"
                  }`}>
                  <span className="leading-snug">{s.title}</span>
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
              <div className="px-8 py-7 border-b border-gray-100">
                <p className="text-[11px] font-black tracking-[0.2em] uppercase text-green-600 mb-2">
                  Policy Document
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

                {/* last updated */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-[12px] text-gray-400">
                    Last updated: January 2025
                  </p>
                  <button className="text-[12px] font-semibold text-green-600 hover:underline">
                    Download PDF →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
