"use client";

import Link from "next/link";
import {
  GraduationCap,
  Users,
  CreditCard,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  Wallet,
  CheckCircle,
  School,
  BookOpen,
  FileText,
  Bell,
} from "lucide-react";

const schoolFeatures = [
  {
    icon: CreditCard,
    title: "Smart Tuition Collection",
    desc: "Collect school fees, uniforms, hostel, and exam payments seamlessly from parents anytime.",
  },
  {
    icon: Users,
    title: "Parent Payment Portal",
    desc: "Give parents a dedicated dashboard to track, pay, and manage all school-related bills.",
  },
  {
    icon: Wallet,
    title: "Installment & Flexible Payments",
    desc: "Allow structured tuition payments weekly, monthly, or per term without stress.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Fee Reconciliation",
    desc: "Automatically match payments to students and eliminate manual accounting errors.",
  },
];

const benefits = [
  "Reduce unpaid tuition with automated reminders",
  "Track student payments per class, term, or year",
  "Enable instant receipts and payment verification",
  "Simplify bursar and school finance operations",
];

export default function SchoolsPage() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#0A2540]">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#f7faf9] to-white py-24">
        <div className="max-w-7xl mx-auto mt-24 px-6 grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            <p className="text-green-600 text-sm font-semibold uppercase mb-4">
              DuraPayment for Schools
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Simplify tuition collection and school payments at scale
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              From nursery to university, DuraPayment helps schools collect
              fees, manage students’ payments, and give parents a modern,
              stress-free payment experience.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                Activate School Account
              </button>

              <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                Request Demo
              </button>
            </div>

            <div className="flex items-center gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} />
                Built for African Schools
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} />
                Real-time Payment Tracking
              </div>
            </div>
          </div>

          {/* RIGHT DASHBOARD */}
          <div className="bg-white shadow-xl rounded-3xl p-8 border">
            <h3 className="text-lg font-semibold mb-6">
              School Finance Overview
            </h3>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Total Students Paid</p>
                <h2 className="text-3xl font-bold">1,842</h2>
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">This Term Revenue</p>
                <h2 className="text-3xl font-bold">₦128M</h2>
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Pending Payments</p>
                <h2 className="text-3xl font-bold">₦14.5M</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-green-600 font-semibold mb-4">
            SCHOOL PAYMENT INFRASTRUCTURE
          </p>

          <h2 className="text-4xl font-bold mb-12">
            Built for modern school finance teams
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {schoolFeatures.map((feature, index) => (
              <div
                key={index}
                className="border rounded-2xl p-6 hover:shadow-xl transition bg-white">
                <feature.icon className="text-green-500 mb-4" size={28} />

                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATIONS SECTION */}
      <section className="py-24 bg-[#071A2B] text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-400 font-semibold mb-4">
              SCHOOL OPERATIONS
            </p>

            <h2 className="text-4xl font-bold mb-6">
              One dashboard for all school payments & student records
            </h2>

            <p className="text-gray-300 mb-8">
              Manage tuition, admissions fees, transport charges, PTA dues, and
              exam payments in one unified system built for school admins.
            </p>

            <ul className="space-y-4">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#10253c] p-8 rounded-3xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-500 p-6 rounded-xl text-black">
                <School className="mb-2" />
                <h3 className="font-bold text-2xl">350+</h3>
                <p>Schools</p>
              </div>

              <div className="bg-white text-black p-6 rounded-xl">
                <GraduationCap className="mb-2" />
                <h3 className="font-bold text-2xl">98%</h3>
                <p>Payment Success</p>
              </div>

              <div className="bg-white text-black p-6 rounded-xl">
                <FileText className="mb-2" />
                <h3 className="font-bold text-2xl">₦3.2B+</h3>
                <p>Processed</p>
              </div>

              <div className="bg-green-500 p-6 rounded-xl text-black">
                <Bell className="mb-2" />
                <h3 className="font-bold text-2xl">Instant</h3>
                <p>Alerts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVENUE / VALUE SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-green-600 font-semibold mb-4">
            SCHOOL FINANCE AUTOMATION
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Eliminate fee delays and manual tracking forever
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            DuraPayment helps schools reduce debtors, automate reconciliation,
            and improve financial transparency for administrators and parents.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <BookOpen className="text-green-500 mx-auto mb-4" size={30} />
              <h3 className="font-semibold text-xl mb-3">
                Student Fee Tracking
              </h3>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <BarChart3 className="text-green-500 mx-auto mb-4" size={30} />
              <h3 className="font-semibold text-xl mb-3">
                Financial Reporting
              </h3>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Wallet className="text-green-500 mx-auto mb-4" size={30} />
              <h3 className="font-semibold text-xl mb-3">
                Automated Reconciliation
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-500 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Bring your school payments online
          </h2>

          <p className="text-lg mb-8">
            Reduce debtors, simplify tuition collection, and modernize your
            school finance system.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold">
              Get Started
            </button>

            <Link
              href="/contactsales"
              className="border border-white px-6 py-3 rounded-lg">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
