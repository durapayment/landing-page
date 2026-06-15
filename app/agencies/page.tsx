"use client";

import Link from "next/link";
import {
  Briefcase,
  Users,
  CreditCard,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  Wallet,
  CheckCircle,
  TrendingUp,
  Zap,
  Globe,
} from "lucide-react";

const agencyFeatures = [
  {
    icon: Users,
    title: "Manage Multiple Clients",
    desc: "Oversee payment operations for all your client businesses from a single, unified dashboard.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: CreditCard,
    title: "White Label Solutions",
    desc: "Offer branded payment experiences to your clients without building any infrastructure.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Wallet,
    title: "Automated Payouts",
    desc: "Disburse vendor, affiliate, and client payouts automatically on schedule.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: ShieldCheck,
    title: "Fraud Protection",
    desc: "Reduce failed transactions and protect every client payment with real-time monitoring.",
    color: "bg-amber-50 text-amber-600",
  },
];

const benefits = [
  "Earn recurring revenue from client payment setups",
  "Launch client stores faster with pre-built infrastructure",
  "Provide payment systems without technical complexity",
  "Scale operations seamlessly across multiple businesses",
];

const revenueStreams = [
  {
    icon: Briefcase,
    title: "Setup Fees",
    desc: "Charge clients a one-time onboarding fee for configuring their payment stack.",
  },
  {
    icon: BarChart3,
    title: "Revenue Sharing",
    desc: "Earn a percentage of every transaction your clients process through the platform.",
  },
  {
    icon: CreditCard,
    title: "Monthly Retainers",
    desc: "Bill clients a fixed monthly fee for ongoing payment management and support.",
  },
];

const dashboardStats = [
  { label: "Active Clients", value: "245", trend: "+12 this month" },
  { label: "Monthly Volume", value: "₦45M", trend: "+18% MoM" },
  { label: "Agency Revenue", value: "₦8.2M", trend: "+24% MoM" },
];

export default function AgenciesPage() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#0A2540]">
      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-[#0A2540]">
            Dura<span className="text-emerald-500">Payment</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <Link href="#" className="hover:text-emerald-600 transition-colors">
              Products
            </Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors">
              Developers
            </Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-emerald-600 font-semibold">
              Agencies
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-gray-600 hover:text-[#0A2540] transition-colors">
              Sign in
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
              Partner with us
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-[#eaf7f1] via-[#f4fbf7] to-[#eef4ff] pt-24 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              DuraPayment for Agencies
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#071A2B]">
              Help your clients
              <br />
              accept payments
              <br />
              <span className="text-emerald-500">and grow faster</span>
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg">
              Whether you're a digital agency, development firm, or payment
              consultant, DuraPayment helps you launch payment systems for
              clients without building infrastructure from scratch.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-200 flex items-center gap-2">
                Partner with us <ArrowRight size={16} />
              </button>
              <button className="border border-gray-200 hover:border-gray-300 bg-white px-7 py-3.5 rounded-xl font-semibold text-gray-700 transition-all hover:-translate-y-0.5 hover:shadow-md">
                Talk to sales
              </button>
            </div>
          </div>

          {/* Agency dashboard card */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 z-10 bg-white shadow-xl border border-gray-100 rounded-2xl px-4 py-3 flex items-center gap-2.5">
              <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                <TrendingUp size={16} className="text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-gray-400">New client this week</p>
                <p className="text-sm font-bold text-emerald-600">
                  +3 onboarded
                </p>
              </div>
            </div>

            <div className="bg-white shadow-2xl shadow-gray-200/80 rounded-3xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-semibold text-[#071A2B]">
                  Agency Dashboard
                </h3>
                <span className="text-xs bg-emerald-50 text-emerald-600 font-semibold px-2.5 py-1 rounded-full">
                  Live
                </span>
              </div>

              <div className="space-y-3">
                {dashboardStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                      <h2 className="text-2xl font-bold text-[#071A2B]">
                        {stat.value}
                      </h2>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                      {stat.trend}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mini client activity */}
              <div className="mt-5 pt-5 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  Recent client activity
                </p>
                {[
                  {
                    name: "ShopEase Nigeria",
                    status: "Onboarded",
                    color: "bg-emerald-400",
                  },
                  {
                    name: "PayLink Ltd",
                    status: "Processing",
                    color: "bg-blue-400",
                  },
                  {
                    name: "Eko Merchants",
                    status: "Live",
                    color: "bg-emerald-400",
                  },
                ].map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2 h-2 rounded-full ${c.color}`} />
                      <span className="text-sm text-gray-600">{c.name}</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-400">
                      {c.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY AGENCIES ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">
              Why agencies choose us
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Build faster. Earn more.
              <br />
              Scale clients.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {agencyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group border border-gray-100 hover:border-emerald-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300 bg-white cursor-pointer">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${feature.color}`}>
                  <feature.icon size={22} />
                </div>
                <h3 className="font-bold text-[#071A2B] text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-emerald-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT MANAGEMENT ── */}
      <section className="py-28 bg-[#071A2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#0D7C5520,_transparent_60%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">
              Client management
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6">
              Manage all your clients
              <br />
              from one powerful
              <br />
              dashboard
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Track client transactions, payouts, revenue, onboarding progress,
              and account performance — all centralized in one place.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                  <CheckCircle
                    size={18}
                    className="text-emerald-400 flex-shrink-0 mt-0.5"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
            <button className="mt-10 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5">
              See how it works <ArrowRight size={16} />
            </button>
          </div>

          {/* Stats grid */}
          <div className="bg-[#0c2538] rounded-3xl p-8 border border-white/5">
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "120+", label: "Client Projects", accent: true },
                { val: "99.9%", label: "Success Rate", accent: false },
                { val: "₦200M+", label: "Processed", accent: false },
                { val: "24/7", label: "Support", accent: true },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`rounded-2xl p-6 ${s.accent ? "bg-emerald-500" : "bg-white/5 border border-white/5"}`}>
                  <h3
                    className={`font-bold text-2xl mb-1 ${s.accent ? "text-white" : "text-white"}`}>
                    {s.val}
                  </h3>
                  <p
                    className={`text-sm ${s.accent ? "text-emerald-100" : "text-gray-400"}`}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-white/5 rounded-2xl p-5 border border-white/5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Volume this month
              </p>
              <div className="flex items-end gap-1.5 h-14">
                {[30, 50, 40, 70, 55, 80, 65, 90, 75, 100, 85, 95].map(
                  (h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t-sm ${i === 11 ? "bg-emerald-500" : "bg-white/10"}`}
                      style={{ height: `${h}%` }}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVENUE STREAMS ── */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">
              New revenue streams
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-5">
              Turn payments into
              <br />
              recurring agency revenue
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Earn setup fees, transaction commissions, subscription revenue,
              and payment management fees from your clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {revenueStreams.map((stream, i) => (
              <div
                key={stream.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                  <stream.icon size={24} className="text-emerald-600" />
                </div>
                <h3 className="font-bold text-lg text-[#071A2B] mb-3">
                  {stream.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {stream.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Revenue calculator teaser */}
          <div className="mt-10 bg-white border border-emerald-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">
                Revenue estimator
              </p>
              <h3 className="text-xl font-bold text-[#071A2B]">
                See how much you could earn as a DuraPayment partner
              </h3>
            </div>
            <button className="flex-shrink-0 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5">
              Calculate my revenue <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 to-emerald-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
            Ready to grow
            <br />
            your agency?
          </h2>
          <p className="text-emerald-100 text-lg mb-9">
            Help your clients scale payments while creating new revenue streams
            for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl">
              Become a partner
            </button>
            <Link
              href="/contactsales"
              className="border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 inline-flex items-center">
              Contact sales
            </Link>
          </div>
          <p className="mt-6 text-emerald-200 text-sm">
            Free to join · No monthly fees · Dedicated partner support
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
                Modern financial infrastructure for African businesses and the
                agencies that serve them.
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
                heading: "Agencies",
                links: [
                  "Partner Program",
                  "White Label",
                  "Revenue Sharing",
                  "Agency Docs",
                ],
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
