"use client";

import { useState } from "react";

const sections = [
  "Getting Started",
  "Creating an Account",
  "Setting Up Your Business",
  "Accepting Payments",
  "Understanding Transactions",
  "Payouts & Settlements",
  "Webhooks & Integrations",
  "Security Best Practices",
];

export default function GuidePage() {
  const [active, setActive] = useState(sections[0]);

  return (
    <main className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-1/3 lg:w-1/4 bg-white border-r p-6">
        <h1 className="text-xl font-bold text-gray-900 mb-6">
          DuraPayment Guide
        </h1>

        <div className="space-y-2">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                active === item
                  ? "bg-black text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`}>
              {item}
            </button>
          ))}
        </div>
      </aside>

      {/* Content */}
      <section className="flex-1 p-6 md:p-10">
        <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{active}</h2>

          {/* Content Sections */}
          {active === "Getting Started" && (
            <p className="text-gray-600 mt-4 leading-relaxed">
              Welcome to DuraPayment. This guide will help you understand how to
              set up your account, accept payments, and manage your business
              efficiently using our platform.
            </p>
          )}

          {active === "Creating an Account" && (
            <p className="text-gray-600 mt-4 leading-relaxed">
              Sign up using your email address, verify your identity, and access
              your merchant dashboard in minutes.
            </p>
          )}

          {active === "Setting Up Your Business" && (
            <p className="text-gray-600 mt-4 leading-relaxed">
              Add your business details, bank account information, and verify
              compliance requirements to start receiving payments.
            </p>
          )}

          {active === "Accepting Payments" && (
            <p className="text-gray-600 mt-4 leading-relaxed">
              Use DuraPayment APIs or payment links to start accepting card,
              bank transfer, and mobile money payments instantly.
            </p>
          )}

          {active === "Understanding Transactions" && (
            <p className="text-gray-600 mt-4 leading-relaxed">
              All transactions are tracked in real-time, showing status,
              reference IDs, fees, and settlement timelines.
            </p>
          )}

          {active === "Payouts & Settlements" && (
            <p className="text-gray-600 mt-4 leading-relaxed">
              Funds are settled into your bank account on a scheduled basis,
              depending on your account configuration and risk profile.
            </p>
          )}

          {active === "Webhooks & Integrations" && (
            <p className="text-gray-600 mt-4 leading-relaxed">
              Use webhooks to receive real-time updates on payments, refunds,
              and chargebacks. Easily integrate with your backend systems.
            </p>
          )}

          {active === "Security Best Practices" && (
            <p className="text-gray-600 mt-4 leading-relaxed">
              Always secure your API keys, validate webhook signatures, and
              follow PCI compliance standards when handling payments.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
