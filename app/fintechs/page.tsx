"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Wallet,
  CreditCard,
  Code2,
  CheckCircle,
  ArrowRight,
  Building2,
  Banknote,
  TrendingUp,
  Zap,
  Globe,
  Lock,
} from "lucide-react";

const products = [
  {
    icon: CreditCard,
    title: "Payment Gateway",
    desc: "Accept card payments, transfers, USSD, and recurring payments easily.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: ShieldCheck,
    title: "Identity Verification",
    desc: "Verify users with BVN, NIN, phone number and bank account APIs.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Wallet,
    title: "Payout Infrastructure",
    desc: "Send money instantly to users, vendors and merchants.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Banknote,
    title: "Loans & Financing",
    desc: "Launch credit products with flexible lending APIs.",
    color: "bg-amber-50 text-amber-600",
  },
];

const businessTypes = [
  {
    icon: Zap,
    title: "Startups",
    desc: "Launch quickly and scale without infrastructure stress.",
  },
  {
    icon: Building2,
    title: "Enterprises",
    desc: "Handle millions of transactions securely.",
  },
  {
    icon: Globe,
    title: "Marketplaces",
    desc: "Power vendor payouts and customer payments.",
  },
  {
    icon: TrendingUp,
    title: "Lenders",
    desc: "Disburse loans and automate repayments.",
  },
];

const stats = [
  { label: "Transactions processed", value: "₦2.4T+" },
  { label: "Businesses powered", value: "12,000+" },
  { label: "Success rate", value: "98.6%" },
  { label: "Uptime SLA", value: "99.9%" },
];

const securityItems = [
  "256-bit SSL Encryption",
  "Two-factor authentication",
  "Regular security audits",
  "Real-time fraud monitoring",
];

export default function FintechPage() {
  return (
    <main className="w-full overflow-hidden pt-20 bg-white text-[#0A2540]">
      {/* ── HERO ── */}
      <section className="relative bg-linear-to-br  from-[#eaf7f1] via-[#f4fbf7] to-[#eef4ff] pt-24 pb-20 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Smart Finance Infrastructure
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#071A2B]">
              Powering the
              <br />
              future of finance
              <br />
              <span className="text-emerald-500">for Africa</span>
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg">
              DuraPayment provides modern financial infrastructure to help
              businesses collect payments, verify customers, and access
              financing — all in one platform.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-200">
                Create free account
              </button>
              <button className="border border-gray-200 hover:border-gray-300 bg-white px-7 py-3.5 rounded-xl font-semibold text-gray-700 transition-all hover:-translate-y-0.5 hover:shadow-md">
                Talk to sales
              </button>
            </div>

            <div className="flex flex-wrap gap-5 mt-9 text-sm text-gray-500">
              {[
                "Bank-grade security",
                "99.9% uptime",
                "Developer friendly",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle
                    size={16}
                    className="text-emerald-500 flex-shrink-0"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — dashboard card */}
          <div className="relative">
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 z-10 bg-white shadow-xl border border-gray-100 rounded-2xl px-4 py-3 flex items-center gap-2.5">
              <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                <TrendingUp size={16} className="text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-gray-400">This week</p>
                <p className="text-sm font-bold text-emerald-600">+₦4.2M</p>
              </div>
            </div>

            <div className="bg-white shadow-2xl shadow-gray-200/80 rounded-3xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                  Total Volume
                </h3>
                <span className="text-xs bg-emerald-50 text-emerald-600 font-semibold px-2.5 py-1 rounded-full">
                  Live
                </span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight mt-1 mb-6">
                ₦128,540,000
              </h2>

              {/* Mini bar chart */}
              <div className="flex items-end gap-1.5 h-16 mb-6">
                {[40, 65, 50, 80, 55, 90, 70, 95, 60, 85, 75, 100].map(
                  (h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t-sm transition-all ${i === 11 ? "bg-emerald-500" : "bg-emerald-100"}`}
                      style={{ height: `${h}%` }}
                    />
                  ),
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Transactions</p>
                  <h4 className="font-bold text-xl">3,560</h4>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Success Rate</p>
                  <h4 className="font-bold text-xl text-emerald-600">98.6%</h4>
                </div>
              </div>

              {/* Recent transactions */}
              <div className="mt-4 space-y-3">
                {[
                  { name: "Acme Corp", amount: "+₦240,000", status: "success" },
                  {
                    name: "TechHub Ltd",
                    amount: "+₦85,500",
                    status: "pending",
                  },
                ].map((tx) => (
                  <div
                    key={tx.name}
                    className="flex items-center justify-between py-2.5 border-t border-gray-50">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-2 h-2 rounded-full ${tx.status === "success" ? "bg-emerald-400" : "bg-amber-400"}`}
                      />
                      <span className="text-sm text-gray-600">{tx.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">{tx.amount}</span>
                      <span
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                          tx.status === "success"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-amber-50 text-amber-600"
                        }`}>
                        {tx.status === "success" ? "Success" : "Pending"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-[#071A2B]">{s.value}</p>
              <p className="text-sm text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUSTED COMPANIES ── */}
      <section className="py-10 border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-7">
            Trusted by Africa's most innovative companies
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            {["Branch", "PiggyVest", "Paystack", "Flutterwave", "Kuda"].map(
              (name) => (
                <span
                  key={name}
                  className="text-lg font-bold text-gray-300 hover:text-gray-400 transition-colors cursor-default">
                  {name}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">
                Our products
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Everything you need
                <br />
                to build and grow
              </h2>
              <p className="mt-5 text-gray-500 text-lg leading-relaxed max-w-md">
                Modern financial tools and APIs to help you accept payments,
                verify customers, disburse funds, and access working capital.
              </p>
              <button className="mt-8 inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all">
                Explore all products <ArrowRight size={18} />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {products.map((item) => (
                <div
                  key={item.title}
                  className="group border border-gray-100 hover:border-emerald-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300 cursor-pointer bg-white">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${item.color}`}>
                    <item.icon size={22} />
                  </div>
                  <h3 className="font-bold text-[#071A2B] text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-emerald-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BUSINESS TYPES ── */}
      <section className="py-28 bg-[#071A2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#0D7C5520,_transparent_60%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">
            Solutions
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-16">
            Built for every stage
            <br />
            of growth
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {businessTypes.map((item) => (
              <div
                key={item.title}
                className="group bg-[#071A2B] hover:bg-[#0c2538] p-8 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors">
                  <item.icon size={20} className="text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVELOPERS ── */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">
              For developers
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-5">
              Powerful APIs.
              <br />
              Endless possibilities.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Integrate once and access a full suite of financial services
              through our clean, well-documented APIs.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:-translate-y-0.5">
                View API docs
              </button>
              <button className="border border-gray-200 bg-white hover:border-gray-300 px-6 py-3 rounded-xl font-semibold text-gray-700 transition-all hover:-translate-y-0.5">
                Get API keys
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-7">
              {[
                "Node.js",
                "Python",
                "PHP",
                "Go",
                "Ruby",
                "REST",
                "Webhooks",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold bg-white border border-gray-200 text-gray-500 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Code block */}
          <div className="bg-[#071A2B] rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-1.5 px-5 py-4 border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="ml-3 text-xs text-gray-500 font-mono">
                POST /v1/payments
              </span>
            </div>
            <pre className="p-6 text-sm leading-loose overflow-x-auto font-mono">
              <code>
                <span className="text-gray-500">
                  # Initiate a payment{"\n"}
                </span>
                <span className="text-pink-400">curl</span>
                <span className="text-white"> --request POST \{"\n"}</span>
                <span className="text-blue-300">
                  {" "}
                  https://api.durapayment.com/v1/payments
                </span>
                <span className="text-white">{"\n\n"}</span>
                <span className="text-white">{"{\n"}</span>
                <span className="text-purple-300">{'  "amount"'}</span>
                <span className="text-white">{": "}</span>
                <span className="text-yellow-300">{"50000"}</span>
                <span className="text-white">{",\n"}</span>
                <span className="text-purple-300">{'  "currency"'}</span>
                <span className="text-white">{": "}</span>
                <span className="text-green-300">{'"NGN"'}</span>
                <span className="text-white">{",\n"}</span>
                <span className="text-purple-300">{'  "email"'}</span>
                <span className="text-white">{": "}</span>
                <span className="text-green-300">{'"user@example.com"'}</span>
                <span className="text-white">{"\n}"}</span>
              </code>
            </pre>
            <div className="px-6 pb-6">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                <p className="text-xs text-emerald-400 font-semibold mb-1">
                  Response
                </p>
                <pre className="text-xs text-emerald-300 font-mono leading-relaxed">
                  {`{ "status": "success",
  "data": { "checkout_url": "..." } }`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECURITY ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual panel */}
          <div className="relative bg-gradient-to-br from-[#071A2B] to-[#0D3D2A] rounded-3xl p-10 overflow-hidden min-h-[420px] flex flex-col justify-between">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
              {[200, 280, 360, 440].map((size) => (
                <div
                  key={size}
                  className="absolute border border-emerald-400 rounded-full"
                  style={{ width: size, height: size }}
                />
              ))}
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-4">
                <Lock size={32} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Enterprise-grade
              </h3>
              <p className="text-emerald-300/70 mt-1">
                security at every layer
              </p>
            </div>
            <div className="relative z-10 grid grid-cols-2 gap-3">
              {[
                { label: "Encrypted endpoints", val: "100%" },
                { label: "Fraud blocked (30d)", val: "14,302" },
                { label: "Compliance certs", val: "PCI DSS" },
                { label: "Avg response time", val: "< 200ms" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">{s.label}</p>
                  <p className="text-base font-bold text-white">{s.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">
              Security you can trust
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-5">
              Your data and money
              <br />
              are always safe
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We hold ourselves to the highest security standards so you can
              focus on building — not worrying about compliance.
            </p>
            <ul className="space-y-4">
              {securityItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} className="text-emerald-500" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 to-emerald-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
            Ready to power
            <br />
            your business?
          </h2>
          <p className="text-emerald-100 text-lg mb-9">
            Join thousands of businesses already processing payments with
            DuraPayment.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl">
              Create free account
            </button>
            <button className="border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5">
              Talk to sales
            </button>
          </div>
          <p className="mt-6 text-emerald-200 text-sm">
            No credit card required · Free forever plan available
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#04111E] text-gray-400">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-5 gap-10 pb-12 border-b border-white/5">
            <div className="md:col-span-2">
              <p className="text-xl font-bold text-white mb-3">
                Dura<span className="text-emerald-400">Payment</span>
              </p>
              <p className="text-sm leading-relaxed max-w-xs">
                Modern financial infrastructure for African businesses at every
                stage of growth.
              </p>
            </div>
            {[
              {
                heading: "Products",
                links: [
                  "Payment Gateway",
                  "Identity Verification",
                  "Payout Infrastructure",
                  "Loans & Financing",
                ],
              },
              {
                heading: "Developers",
                links: ["API Docs", "SDKs", "Status Page", "Changelog"],
              },
              {
                heading: "Company",
                links: ["About", "Blog", "Careers", "Contact"],
              },
            ].map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm hover:text-white transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-gray-600">
            <p>© 2025 DuraPayment Technologies Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-gray-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
