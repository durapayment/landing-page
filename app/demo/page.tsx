"use client";

import Link from "next/link";
import {
  CreditCard,
  ShoppingCart,
  BarChart3,
  Bot,
  CheckCircle,
  Zap,
  Globe,
} from "lucide-react";

export default function DemoPage() {
  return (
    <main className="w-full bg-white text-[#0A2540]">
      {/* HERO */}
      <section className="py-24 bg-linear-to-b from-[#f7faf9] to-tertiary/50">
        <div className="max-w-6xl mx-auto mt-30  px-6 text-center">
          <p className="text-green-600 font-semibold uppercase mb-4">
            Live Product Demo
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Experience Durapayment in action
          </h1>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            This is a simulated environment showing how merchants, schools,
            agencies, and SaaS businesses use DuraPayment to process payments
            and grow revenue.
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
              Launch Demo Dashboard
            </button>

            <Link
              href="/contactsales"
              className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-6">
          {/* SALES CARD */}
          <div className="border rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="text-green-500" />
              <h3 className="font-semibold">Revenue Overview</h3>
            </div>

            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Today’s Sales</p>
                <h2 className="text-2xl font-bold">₦2,450,000</h2>
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Transactions</p>
                <h2 className="text-2xl font-bold">1,284</h2>
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Success Rate</p>
                <h2 className="text-2xl font-bold">98.7%</h2>
              </div>
            </div>
          </div>

          {/* CHECKOUT SIMULATION */}
          <div className="border rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart className="text-green-500" />
              <h3 className="font-semibold">Checkout Preview</h3>
            </div>

            <div className="space-y-4">
              <div className="border p-4 rounded-xl">
                <p className="text-sm text-gray-500">Product</p>
                <h4 className="font-semibold">Premium SaaS Plan</h4>
                <p className="text-green-600 font-bold mt-2">₦15,000</p>
              </div>

              <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
                Pay Now
              </button>

              <div className="text-xs text-gray-500 text-center">
                Secure payment powered by DuraPayment
              </div>
            </div>
          </div>

          {/* AI ASSISTANT */}
          <div className="border rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="text-green-500" />
              <h3 className="font-semibold">AI Sales Assistant</h3>
            </div>

            <div className="space-y-3 text-sm">
              <div className="bg-gray-100 p-3 rounded-lg">
                💡 You had 12 abandoned checkouts today
              </div>

              <div className="bg-gray-100 p-3 rounded-lg">
                ⚡ Suggestion: Add instant bank transfer option to increase
                conversion by 18%
              </div>

              <div className="bg-gray-100 p-3 rounded-lg">
                📊 Peak sales time is 7PM - 10PM
              </div>

              <button className="mt-4 w-full bg-black text-white py-3 rounded-lg">
                Apply AI Optimizations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM SWITCH */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Works across all sales platforms
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "E-commerce Stores",
              "Instagram Shops",
              "WhatsApp Sales",
              "Marketplaces",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border p-6 rounded-xl hover:shadow-md transition">
                <Globe className="mx-auto text-green-500 mb-3" />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 bg-[#071A2B] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Built for real businesses at scale
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10 text-left">
            {[
              "99.9% uptime payment infrastructure",
              "Instant transaction confirmation",
              "Fraud protection & monitoring",
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-green-400" />
                <p>{t}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <button className="bg-green-500 px-6 py-3 rounded-lg">
              Start Free Trial
            </button>

            <Link href="/contactsales" className="border px-6 py-3 rounded-lg">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
