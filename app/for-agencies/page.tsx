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
} from "lucide-react";

const agencyFeatures = [
  {
    icon: Users,
    title: "Manage Multiple Clients",
    desc: "Easily oversee payment operations for multiple client businesses from one dashboard.",
  },
  {
    icon: CreditCard,
    title: "White Label Payment Solutions",
    desc: "Offer branded payment experiences to your clients without building infrastructure.",
  },
  {
    icon: Wallet,
    title: "Automated Payouts",
    desc: "Disburse vendor, affiliate, and client payouts automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Fraud Protection",
    desc: "Reduce failed transactions and protect client payments.",
  },
];

const benefits = [
  "Earn recurring revenue from client payment setups",
  "Launch client stores faster",
  "Provide payment infrastructure without technical complexity",
  "Scale operations across multiple businesses",
];

export default function AgenciesPage() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#0A2540]">
      {/* HERO SECTION */}
      <section className="bg-[#f7faf9] py-24">
        <div className="max-w-7xl mx-auto mt-25 px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-600 text-sm font-semibold uppercase mb-4">
              DuraPayment For Agencies
            </p>

            <h1 className="text-3xl lg:text-6xl font-bold leading-tight">
              Help your clients accept payments and grow faster
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Whether you're a digital agency, development firm, or payment
              consultant, DuraPayment helps you launch payment systems for
              clients without building infrastructure from scratch.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                Partner With Us
              </button>

              <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                Talk to Sales
              </button>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-3xl p-8">
            <h3 className="text-lg font-semibold mb-6">Agency Dashboard</h3>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Active Clients</p>
                <h2 className="text-3xl font-bold">245</h2>
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Monthly Volume</p>
                <h2 className="text-3xl font-bold">₦45M</h2>
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Agency Revenue</p>
                <h2 className="text-3xl font-bold">₦8.2M</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AGENCIES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-green-600 font-semibold mb-4">
            WHY AGENCIES CHOOSE US
          </p>

          <h2 className="text-4xl font-bold mb-12">
            Build faster. Earn more. Scale clients.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agencyFeatures.map((feature, index) => (
              <div
                key={index}
                className="border rounded-2xl p-6 hover:shadow-lg transition">
                <feature.icon className="text-green-500 mb-4" size={28} />

                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT MANAGEMENT */}
      <section className="py-24 bg-[#071A2B] text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-400 font-semibold mb-4">
              CLIENT MANAGEMENT
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Manage all your clients from one powerful dashboard
            </h2>

            <p className="text-gray-300 mb-8">
              Track client transactions, payouts, revenue, onboarding progress,
              and account performance all from a centralized dashboard.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" size={20} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#10253c] p-8 rounded-3xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-500 p-6 rounded-xl text-black">
                <h3 className="font-bold text-2xl">120+</h3>
                <p>Client Projects</p>
              </div>

              <div className="bg-white text-black p-6 rounded-xl">
                <h3 className="font-bold text-2xl">99.9%</h3>
                <p>Success Rate</p>
              </div>

              <div className="bg-white text-black p-6 rounded-xl">
                <h3 className="font-bold text-2xl">₦200M+</h3>
                <p>Processed</p>
              </div>

              <div className="bg-green-500 p-6 rounded-xl text-black">
                <h3 className="font-bold text-2xl">24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVENUE SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-green-600 font-semibold mb-4">
            NEW REVENUE STREAMS
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Turn payments into recurring agency revenue
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Earn setup fees, transaction commissions, subscription revenue, and
            payment management fees from your clients.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Briefcase className="text-green-500 mx-auto mb-4" size={30} />
              <h3 className="font-semibold text-xl mb-3">Setup Fees</h3>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <BarChart3 className="text-green-500 mx-auto mb-4" size={30} />
              <h3 className="font-semibold text-xl mb-3">Revenue Sharing</h3>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <CreditCard className="text-green-500 mx-auto mb-4" size={30} />
              <h3 className="font-semibold text-xl mb-3">Monthly Retainers</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-500 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to grow your agency?
          </h2>

          <p className="text-lg mb-8">
            Help your clients scale payments while creating new revenue streams.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold">
              Become a Partner
            </button>

            <Link
              href="/contactsales"
              className="border border-white px-6 py-3 rounded-lg">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
