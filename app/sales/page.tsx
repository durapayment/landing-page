"use client";

import Link from "next/link";
import {
  Rocket,
  CircleCheck,
  BarChart3,
  TrendingUp,
  ShoppingCart,
  Brain,
  Zap,
  CreditCard,
  LayoutDashboard,
  Activity,
  Sparkles,
  ShieldCheck,
  Plug,
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
  Legend,
} from "recharts";

/* ─────────────────────────────────────────
   Mock data
───────────────────────────────────────── */

const salesData = [
  { day: "Mon", sales: 12000 },
  { day: "Tue", sales: 18000 },
  { day: "Wed", sales: 15000 },
  { day: "Thu", sales: 22000 },
  { day: "Fri", sales: 30000 },
  { day: "Sat", sales: 28000 },
  { day: "Sun", sales: 35000 },
];

const channelData = [
  { name: "Website", value: 45 },
  { name: "Instagram", value: 25 },
  { name: "WhatsApp", value: 20 },
  { name: "Marketplace", value: 10 },
];

const CHANNEL_COLORS = ["#1D9E75", "#0F6E56", "#5DCAA5", "#9FE1CB"];

const aiFeatures = [
  {
    icon: <Zap size={22} className="text-[#5DCAA5]" />,
    title: "Smart checkout boost",
    desc: "AI reduces drop-offs by optimising payment steps in real time.",
  },
  {
    icon: <TrendingUp size={22} className="text-[#5DCAA5]" />,
    title: "Revenue prediction",
    desc: "Forecast daily and weekly revenue with behavioural data.",
  },
  {
    icon: <CreditCard size={22} className="text-[#5DCAA5]" />,
    title: "Dynamic payment routing",
    desc: "Route payments to fastest success channels automatically.",
  },
];

const benefits = [
  {
    icon: <CircleCheck size={16} />,
    text: "Increase checkout conversion automatically",
  },
  {
    icon: <LayoutDashboard size={16} />,
    text: "Unified dashboard for all sales channels",
  },
  { icon: <Activity size={16} />, text: "Real-time revenue tracking" },
  { icon: <Sparkles size={16} />, text: "AI-powered pricing optimisation" },
  {
    icon: <ShieldCheck size={16} />,
    text: "Bank-grade payment security built in",
  },
  { icon: <Plug size={16} />, text: "API-first — integrates with any stack" },
];

/* ─────────────────────────────────────────
   Custom tooltip for line chart
───────────────────────────────────────── */

function SalesTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-100 rounded-xl px-3 py-2 text-xs shadow-sm">
      <p className="text-gray-400 mb-0.5">{label}</p>
      <p className="font-semibold text-[#0A2540]">
        ₦{Number(payload[0].value).toLocaleString()}
      </p>
    </div>
  );
}

function ChannelTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-100 rounded-xl px-3 py-2 text-xs shadow-sm">
      <p className="font-semibold text-[#0A2540]">
        {payload[0].name}: {payload[0].value}%
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main page
───────────────────────────────────────── */

export default function SalesPlatformPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');
        .font-display { font-family: 'Instrument Serif', serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <main className="font-body bg-white text-[#0A2540] overflow-hidden">
        {/* ── HERO ── */}
        <section className="bg-[#F4FAF7] py-24">
          <div className="max-w-6xl mx-auto mt-16 px-6 grid lg:grid-cols-2 gap-14 items-center">
            {/* Copy */}
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-widest uppercase bg-[#E1F5EE] text-[#085041] px-3 py-1 rounded-full mb-5">
                DuraPayment Sales OS
              </span>

              <h1 className="font-display text-4xl md:text-5xl font-normal text-[#0A2540] leading-tight mb-4">
                Turn every click into
                <br />
                <em className="italic text-[#1D9E75]">intelligent</em> revenue
              </h1>

              <p className="text-[#4B5E6E] text-[15px] leading-relaxed max-w-lg mb-7">
                Sell across multiple platforms, optimise conversions
                automatically, and track revenue in real time from one powerful
                system.
              </p>

              <div className="flex gap-3 flex-wrap mb-6">
                <button className="inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors">
                  <Rocket size={14} /> Start selling
                </button>
                <button className="inline-flex items-center gap-2 bg-white hover:bg-[#F4FAF7] text-[#0A2540] border border-gray-200 px-6 py-3 rounded-xl text-sm font-semibold transition-colors">
                  View live demo
                </button>
              </div>

              <div className="flex gap-5 flex-wrap">
                {[
                  "Multi-channel sales",
                  "AI optimisation",
                  "Real-time tracking",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 text-[12px] text-[#4B5E6E]">
                    <CircleCheck size={14} className="text-[#1D9E75]" /> {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Mini dashboard */}
            <div className="bg-white border border-[#E2EBF4] rounded-2xl p-6">
              <h3 className="text-[13px] font-semibold text-[#0A2540] flex items-center gap-2 mb-5">
                <BarChart3 size={15} className="text-[#1D9E75]" /> Live sales
                overview
              </h3>
              <div className="flex flex-col gap-3">
                <div className="bg-[#F4FAF7] border border-[#C6E8D7] rounded-xl p-4">
                  <p className="text-[11px] text-[#4B5E6E] mb-1">
                    Total revenue
                  </p>
                  <h2 className="font-display text-3xl font-normal text-[#0F6E56]">
                    ₦ 245M
                  </h2>
                </div>
                <div className="bg-[#F4FAF7] border border-[#E2EBF4] rounded-xl p-4">
                  <p className="text-[11px] text-[#4B5E6E] mb-1">
                    Conversion rate
                  </p>
                  <h2 className="font-display text-3xl font-normal text-[#0A2540]">
                    5.6%
                  </h2>
                </div>
                <div className="bg-[#F4FAF7] border border-[#E2EBF4] rounded-xl p-4">
                  <p className="text-[11px] text-[#4B5E6E] mb-1">
                    Orders today
                  </p>
                  <h2 className="font-display text-3xl font-normal text-[#0A2540]">
                    4,218
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ANALYTICS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
            {/* Line chart */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-[13px] font-semibold text-[#0A2540] flex items-center gap-2 mb-5">
                <TrendingUp size={15} className="text-[#1D9E75]" /> Weekly sales
                performance
              </h3>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart
                  data={salesData}
                  margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
                  <XAxis
                    dataKey="day"
                    tick={{ fontSize: 11, fill: "#6B7A8D" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: "#6B7A8D" }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `₦${Math.round(v / 1000)}k`}
                    width={48}
                  />
                  <Tooltip content={<SalesTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#1D9E75"
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: "#1D9E75", strokeWidth: 0 }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Donut chart */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-[13px] font-semibold text-[#0A2540] flex items-center gap-2 mb-5">
                <ShoppingCart size={15} className="text-[#1D9E75]" /> Sales
                channels
              </h3>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={channelData}
                    dataKey="value"
                    innerRadius={72}
                    outerRadius={108}
                    paddingAngle={3}>
                    {channelData.map((_, i) => (
                      <Cell key={i} fill={CHANNEL_COLORS[i]} />
                    ))}
                  </Pie>
                  <Tooltip content={<ChannelTooltip />} />
                  <Legend
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{ fontSize: 11, color: "#4B5E6E" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* ── AI ENGINE ── */}
        <section className="py-20 bg-[#0A1F1A]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <span className="inline-flex items-center gap-1.5 bg-[#1D9E75]/18 border border-[#1D9E75]/35 rounded-full px-4 py-1 text-[11px] font-semibold tracking-widest uppercase text-[#5DCAA5] mb-5">
              <Brain size={12} /> AI Sales Engine
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-normal text-white leading-tight mb-4">
              Automatically increase your
              <br />
              revenue with AI
            </h2>

            <p className="text-white/55 text-[14px] max-w-xl mx-auto leading-relaxed mb-10">
              Our system analyses checkout behaviour, abandoned carts, and
              conversion drops — then optimises pricing, timing, and checkout
              flow automatically.
            </p>

            <div className="grid md:grid-cols-3 gap-4 text-left">
              {aiFeatures.map((f) => (
                <div
                  key={f.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="mb-3">{f.icon}</div>
                  <h4 className="text-[13px] font-semibold text-white mb-2">
                    {f.title}
                  </h4>
                  <p className="text-[12px] text-white/50 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#0F6E56] mb-3">
              Sales infrastructure
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-[#0A2540] mb-10">
              Everything you need to scale revenue
            </h2>

            <div className="grid md:grid-cols-2 gap-3 text-left">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 border border-gray-100 rounded-xl hover:border-[#C6E8D7] transition-colors">
                  <span className="text-[#1D9E75] mt-0.5 shrink-0">
                    {b.icon}
                  </span>
                  <p className="text-[13px] text-[#0A2540] leading-snug">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-[#0A1F1A]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Start selling like a<br />
              <em className="italic text-[#5DCAA5]">modern fintech</em> company
            </h2>
            <p className="text-white/55 text-[14px] mb-8">
              Upgrade your sales infrastructure and scale revenue instantly.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#5DCAA5] hover:text-[#0A1F1A] text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-colors">
                <Rocket size={14} /> Launch sales system
              </button>
              <Link
                href="/contactsales"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/16 text-white/80 border border-white/20 px-7 py-3.5 rounded-xl text-sm font-semibold transition-colors">
                Contact sales
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
