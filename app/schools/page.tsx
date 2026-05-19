"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CreditCard,
  Users,
  Wallet,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  CheckCircle,
  School,
  GraduationCap,
  FileText,
  Bell,
  BookOpen,
  Check,
} from "lucide-react";
import { siteConfig } from "@/config/site";

/* ── DESIGN TOKENS ── */
const TAG =
  "text-[11px] font-black tracking-[0.22em] uppercase text-green-500 mb-3";
const H2 =
  "text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-[#011B33] leading-tight";
const BODY =
  "text-[15px] md:text-[17px] text-[rgba(1,27,51,0.6)] leading-[28px]";

const Fade = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay }}
    className={className}>
    {children}
  </motion.div>
);

/* ── DATA ── */
const schoolFeatures = [
  {
    icon: CreditCard,
    title: "Smart Tuition Collection",
    desc: "Collect school fees, uniforms, hostel, and exam payments seamlessly from parents anytime.",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Users,
    title: "Parent Payment Portal",
    desc: "Give parents a dedicated dashboard to track, pay, and manage all school-related bills.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Wallet,
    title: "Flexible Payments",
    desc: "Allow structured tuition payments weekly, monthly, or per term without stress.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: ShieldCheck,
    title: "Secure Reconciliation",
    desc: "Automatically match payments to students and eliminate manual accounting errors.",
    color: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

const benefits = [
  "Reduce unpaid tuition with automated reminders",
  "Track student payments per class, term, or year",
  "Enable instant receipts and payment verification",
  "Simplify bursar and school finance operations",
];

const stats = [
  {
    icon: School,
    value: "350+",
    label: "Schools",
    bg: "bg-green-500",
    text: "text-white",
    iconColor: "text-white",
  },
  {
    icon: GraduationCap,
    value: "98%",
    label: "Payment Success",
    bg: "bg-white",
    text: "text-[#011B33]",
    iconColor: "text-green-600",
  },
  {
    icon: FileText,
    value: "₦3.2B+",
    label: "Processed",
    bg: "bg-white",
    text: "text-[#011B33]",
    iconColor: "text-blue-600",
  },
  {
    icon: Bell,
    value: "Instant",
    label: "Alerts",
    bg: "bg-green-500",
    text: "text-white",
    iconColor: "text-white",
  },
];

const automationCards = [
  {
    icon: BookOpen,
    title: "Student Fee Tracking",
    desc: "Monitor every student's payment status across terms and classes in real time.",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: BarChart3,
    title: "Financial Reporting",
    desc: "Generate detailed reports for admins, bursars, and auditors with one click.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Wallet,
    title: "Auto Reconciliation",
    desc: "Payments automatically matched to student records — no manual data entry.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

/* ── COMPONENT ── */
export default function SchoolsPage() {
  return (
    <main className="w-full overflow-hidden bg-white font-sans text-[#011B33]">
      {/* ══ HERO ══ */}
      <section className="relative w-full bg-white overflow-hidden pt-36 pb-20 px-6 border-b border-gray-100">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-gray-100" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row gap-14 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-600 text-[11px] font-bold tracking-widest uppercase">
                {siteConfig.name} for Schools
              </span>
            </div>

            <h1
              className="text-[32px] sm:text-[42px] md:text-[52px] font-extrabold leading-[1.1] tracking-tight mb-5"
              style={{
                fontFamily:
                  'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}>
              Simplify tuition collection{" "}
              <span className="text-green-500">at scale</span>
            </h1>

            <p className={`${BODY} mb-8 max-w-lg`}>
              From nursery to university, {siteConfig.name} helps schools
              collect fees, manage student payments, and give parents a modern,
              stress-free experience.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#011B33] hover:bg-[#02284d] text-white px-6 py-3.5 rounded-xl text-[14px] font-semibold flex items-center gap-2 transition-colors">
                Activate School Account
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <button className="border border-gray-200 hover:border-gray-300 px-6 py-3.5 rounded-xl text-[14px] font-semibold transition-colors text-[rgba(1,27,51,0.7)]">
                Request Demo
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              {["Built for African Schools", "Real-time Payment Tracking"].map(
                (t, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-[13px] text-[rgba(1,27,51,0.55)]">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    {t}
                  </div>
                ),
              )}
            </div>
          </motion.div>

          {/* RIGHT — dashboard card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex-1 w-full max-w-sm">
            <div className="bg-white rounded-3xl shadow-2xl shadow-black/8 border border-gray-100 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-green-400 to-emerald-500" />
              <div className="p-7">
                <p className="text-[11px] font-black tracking-[0.2em] uppercase text-gray-400 mb-5">
                  School Finance Overview
                </p>
                <div className="space-y-3">
                  {[
                    {
                      label: "Total Students Paid",
                      value: "1,842",
                      sub: "This term",
                    },
                    {
                      label: "Term Revenue",
                      value: "₦128M",
                      sub: "+12% vs last term",
                    },
                    {
                      label: "Pending Payments",
                      value: "₦14.5M",
                      sub: "142 students",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="bg-[#f4f6f9] rounded-2xl px-5 py-4 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-gray-400 mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-[22px] font-extrabold text-[#011B33]">
                          {item.value}
                        </p>
                      </div>
                      <span className="text-[11px] text-green-600 font-semibold bg-green-50 px-2.5 py-1 rounded-full">
                        {item.sub}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section className="w-full bg-[#f4f6f9] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Fade className="text-center mb-14">
            <p className={TAG + " justify-center flex"}>
              School Payment Infrastructure
            </p>
            <h2 className={`${H2} max-w-2xl mx-auto`}>
              Built for modern school finance teams
            </h2>
          </Fade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {schoolFeatures.map((f, i) => (
              <Fade key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                  <div
                    className={`w-10 h-10 rounded-xl ${f.color} flex items-center justify-center mb-5`}>
                    <f.icon className={`w-5 h-5 ${f.iconColor}`} />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#011B33] mb-2">
                    {f.title}
                  </h3>
                  <p className="text-[13px] text-[rgba(1,27,51,0.55)] leading-6">
                    {f.desc}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OPERATIONS ══ */}
      <section className="w-full bg-[#011B33] py-24 px-6 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-white/[0.04]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-center relative z-10">
          {/* TEXT */}
          <Fade className="flex-1 max-w-xl">
            <p className="text-[11px] font-black tracking-[0.22em] uppercase text-green-400 mb-3">
              School Operations
            </p>
            <h2 className="text-white font-extrabold text-[28px] sm:text-[36px] md:text-[42px] leading-tight mb-5">
              One dashboard for all school payments & student records
            </h2>
            <p className="text-white/50 text-[15px] leading-[28px] mb-8">
              Manage tuition, admissions fees, transport charges, PTA dues, and
              exam payments in one unified system built for school admins.
            </p>
            <ul className="space-y-3">
              {benefits.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-green-400" />
                  </span>
                  <span className="text-white/70 text-[14px] leading-6">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </Fade>

          {/* STATS GRID */}
          <Fade delay={0.1} className="flex-1 w-full max-w-sm">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`${s.bg} rounded-2xl p-6`}>
                  <s.icon className={`w-5 h-5 ${s.iconColor} mb-3`} />
                  <h3
                    className={`text-[26px] font-extrabold ${s.text} leading-tight`}>
                    {s.value}
                  </h3>
                  <p className={`text-[12px] mt-1 ${s.text} opacity-70`}>
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* ══ AUTOMATION ══ */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Fade className="text-center mb-14">
            <p className={TAG + " justify-center flex"}>
              School Finance Automation
            </p>
            <h2 className={`${H2} max-w-2xl mx-auto mb-4`}>
              Eliminate fee delays and manual tracking forever
            </h2>
            <p className={`${BODY} max-w-2xl mx-auto`}>
              {siteConfig.name} helps schools reduce debtors, automate
              reconciliation, and improve financial transparency for
              administrators and parents.
            </p>
          </Fade>

          <div className="grid sm:grid-cols-3 gap-6">
            {automationCards.map((card, i) => (
              <Fade key={i} delay={i * 0.08}>
                <div className="bg-[#f4f6f9] rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow">
                  <div
                    className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center mb-5`}>
                    <card.icon className={`w-5 h-5 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-[17px] font-bold text-[#011B33] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-[rgba(1,27,51,0.55)] leading-6">
                    {card.desc}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative w-full bg-[#011B33] py-24 px-6 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-white/[0.04]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

        <Fade className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-[11px] font-black tracking-[0.22em] uppercase text-green-400 mb-4">
            Get Started
          </p>
          <h2
            className="text-white font-extrabold text-[32px] sm:text-[42px] leading-tight mb-5"
            style={{
              fontFamily:
                'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}>
            Bring your school payments{" "}
            <span className="text-green-400">online today</span>
          </h2>
          <p className="text-white/50 text-[15px] leading-[28px] max-w-lg mx-auto mb-10">
            Reduce debtors, simplify tuition collection, and modernize your
            school finance system.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-green-500 hover:bg-green-400 text-white px-7 py-4 rounded-xl font-semibold text-[15px] flex items-center gap-2 transition-colors">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <Link
              href="/contactsales"
              className="border border-white/20 hover:border-white/40 text-white/80 hover:text-white px-7 py-4 rounded-xl font-semibold text-[15px] transition-colors">
              Talk to Sales
            </Link>
          </div>
        </Fade>
      </section>
    </main>
  );
}
