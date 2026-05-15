"use client";

import Link from "next/link";

import {
  ShoppingCart,
  TrendingUp,
  CreditCard,
  Bot,
  Zap,
  CheckCircle,
  BarChart3,
  Wallet,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/* ---------------- MOCK DATA ---------------- */

const salesData = [
  { name: "Mon", sales: 12000 },
  { name: "Tue", sales: 18000 },
  { name: "Wed", sales: 15000 },
  { name: "Thu", sales: 22000 },
  { name: "Fri", sales: 30000 },
  { name: "Sat", sales: 28000 },
  { name: "Sun", sales: 35000 },
];

const channelData = [
  { name: "Website", value: 45 },
  { name: "Instagram", value: 25 },
  { name: "WhatsApp", value: 20 },
  { name: "Marketplace", value: 10 },
];

const COLORS = ["#22c55e", "#16a34a", "#15803d", "#14532d"];

/* ---------------- COMPONENT ---------------- */

export default function SalesPlatformPage() {
  return (
    <main className="w-full bg-white text-[#0A2540] overflow-hidden">
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#f7faf9] to-white py-24">
        <div className="max-w-7xl mx-auto mt-24 px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-green-600 font-semibold uppercase text-sm mb-4">
              DuraPayment Sales OS
            </p>

            <h1 className="text-5xl font-bold leading-tight">
              Turn every click into revenue with intelligent sales
              infrastructure
            </h1>

            <p className="mt-6 text-gray-600 text-lg max-w-xl">
              Sell across multiple platforms, optimize conversions
              automatically, and track revenue in real-time from one powerful
              system.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                Start Selling
              </button>

              <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                View Live Demo
              </button>
            </div>

            <div className="flex gap-6 mt-8 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} />
                Multi-channel sales
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} />
                AI optimization
              </span>
            </div>
          </div>

          {/* MINI DASHBOARD */}
          <div className="bg-white border rounded-3xl p-8 shadow-xl">
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <BarChart3 /> Live Sales Overview
            </h3>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Total Revenue</p>
                <h2 className="text-3xl font-bold">₦245M</h2>
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Conversion Rate</p>
                <h2 className="text-3xl font-bold">5.6%</h2>
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Orders Today</p>
                <h2 className="text-3xl font-bold">4,218</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANALYTICS SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* LINE CHART */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border">
            <h3 className="font-semibold mb-6 flex items-center gap-2">
              <TrendingUp className="text-green-500" />
              Weekly Sales Performance
            </h3>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#22c55e"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* PIE CHART */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border">
            <h3 className="font-semibold mb-6 flex items-center gap-2">
              <ShoppingCart className="text-green-500" />
              Sales Channels
            </h3>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={channelData} dataKey="value" outerRadius={110} label>
                  {channelData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* AI SALES OPTIMIZER */}
      <section className="py-24 bg-[#071A2B] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-green-400 font-semibold mb-4 flex justify-center items-center gap-2">
            <Bot /> AI SALES ENGINE
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Automatically increase your revenue with AI
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mb-12">
            Our system analyzes checkout behavior, abandoned carts, and
            conversion drops — then optimizes pricing, timing, and checkout flow
            automatically.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-[#10253c] p-6 rounded-2xl">
              <Zap className="text-green-400 mb-3" />
              <h3 className="font-semibold mb-2">Smart Checkout Boost</h3>
              <p className="text-gray-300 text-sm">
                AI reduces drop-offs by optimizing payment steps in real time.
              </p>
            </div>

            <div className="bg-[#10253c] p-6 rounded-2xl">
              <TrendingUp className="text-green-400 mb-3" />
              <h3 className="font-semibold mb-2">Revenue Prediction</h3>
              <p className="text-gray-300 text-sm">
                Forecast daily and weekly revenue with behavioral data.
              </p>
            </div>

            <div className="bg-[#10253c] p-6 rounded-2xl">
              <CreditCard className="text-green-400 mb-3" />
              <h3 className="font-semibold mb-2">Dynamic Payment Routing</h3>
              <p className="text-gray-300 text-sm">
                Route payments to fastest success channels automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM BENEFITS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-green-600 font-semibold mb-4">
            SALES INFRASTRUCTURE
          </p>

          <h2 className="text-4xl font-bold mb-10">
            Everything you need to scale revenue
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Increase checkout conversion automatically",
              "Unified dashboard for all sales channels",
              "Real-time revenue tracking",
              "AI-powered pricing optimization",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-5 border rounded-xl">
                <CheckCircle className="text-green-500" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-500 text-white text-center">
        <h2 className="text-5xl font-bold mb-6">
          Start selling like a modern fintech company
        </h2>

        <p className="mb-8 text-lg">
          Upgrade your sales infrastructure and scale revenue instantly.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold">
            Launch Sales System
          </button>

          <Link
            href="/contactsales"
            className="border border-white px-6 py-3 rounded-lg">
            Contact Sales
          </Link>
        </div>
      </section>
    </main>
  );
}
