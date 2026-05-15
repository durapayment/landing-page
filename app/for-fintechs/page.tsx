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
} from "lucide-react";

const products = [
  {
    icon: CreditCard,
    title: "Payment Gateway",
    desc: "Accept card payments, transfers, USSD, and recurring payments easily.",
  },
  {
    icon: ShieldCheck,
    title: "Identity Verification",
    desc: "Verify users with BVN, NIN, phone number and bank account APIs.",
  },
  {
    icon: Wallet,
    title: "Payout Infrastructure",
    desc: "Send money instantly to users, vendors and merchants.",
  },
  {
    icon: Banknote,
    title: "Loans & Financing",
    desc: "Launch credit products with flexible lending APIs.",
  },
];

const businessTypes = [
  {
    title: "Startups",
    desc: "Launch quickly and scale without infrastructure stress.",
  },
  {
    title: "Enterprises",
    desc: "Handle millions of transactions securely.",
  },
  {
    title: "Marketplaces",
    desc: "Power vendor payouts and customer payments.",
  },
  {
    title: "Lenders",
    desc: "Disburse loans and automate repayments.",
  },
];

export default function FintechPage() {
  return (
    <main className="w-full overflow-hiddenb bg-white text-[#0A2540]">
      {/* HERO SECTION */}
      <section className="bg-[#eef7f5] py-24">
        <div className="max-w-7xl mx-auto mt-30 px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-600 text-sm font-semibold uppercase tracking-wide mb-4">
              Smart Finance Infrastructure
            </p>

            <h1 className="text-5xl lg:text-5xl font-bold leading-tight">
              Powering the future of finance for Africa
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              DuraPayment provides modern financial infrastructure to help
              businesses collect payments, verify customers, and access
              financing — all in one platform.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition">
                Create free account
              </button>

              <button className="border px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                Talk to sales
              </button>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />
                Bank-grade security
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />
                99.9% uptime
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />
                Developer friendly
              </div>
            </div>
          </div>

          {/* Hero dashboard */}
          <div className="relative">
            <div className="bg-white shadow-xl rounded-3xl p-8">
              <h3 className="font-semibold text-lg mb-4">Total Volume</h3>

              <h2 className="text-4xl font-bold mb-6">₦128,540,000</h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-xl">
                  <p>Transactions</p>
                  <h4 className="font-bold text-xl">3,560</h4>
                </div>

                <div className="bg-green-50 p-4 rounded-xl">
                  <p>Success Rate</p>
                  <h4 className="font-bold text-xl">98.6%</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED COMPANIES */}
      <section className="py-12 border-b">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-500 uppercase mb-8">
            Trusted by innovative companies
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-xl font-semibold text-gray-500">
            <span>Branch</span>
            <span>PiggyVest</span>
            <span>Paystack</span>
            <span>Flutterwave</span>
            <span>Kuda</span>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 mb-14">
            <div>
              <p className="text-green-600 font-semibold mb-4">OUR PRODUCTS</p>

              <h2 className="text-4xl font-bold mb-4">
                Everything you need to build and grow
              </h2>

              <p className="text-gray-600">
                Modern financial tools and APIs to help you accept payments,
                verify customers, disburse funds, and access working capital.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {products.map((item, index) => (
                <div
                  key={index}
                  className="border rounded-2xl p-6 hover:shadow-lg transition">
                  <item.icon className="text-green-500 mb-4" size={28} />

                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>

                  <p className="text-gray-600 text-sm">{item.desc}</p>

                  <button className="mt-4 text-green-600 font-medium flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section className="py-24 bg-[#071A2B] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">
            Solutions for every stage of growth
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessTypes.map((item, index) => (
              <div key={index}>
                <Building2 className="text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPERS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-600 font-semibold mb-4">FOR DEVELOPERS</p>

            <h2 className="text-4xl font-bold mb-6">
              Powerful APIs. Endless possibilities.
            </h2>

            <p className="text-gray-600 mb-6">
              Integrate once and access a full suite of financial services
              through our APIs.
            </p>

            <div className="flex gap-4">
              <button className="bg-accent text-white px-6 py-3 rounded-lg">
                View API Docs
              </button>

              <button className="border px-6 py-3 rounded-lg">
                Get API Keys
              </button>
            </div>
          </div>

          <div className="bg-[#071A2B] text-green-400 rounded-2xl p-8 font-mono text-sm overflow-x-auto">
            {`curl --request POST
https://api.durapayment.com/v1/payments

{
  "amount": 50000,
  "currency": "NGN"
}`}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/security-user.png"
              alt="security"
              width={600}
              height={500}
              className="rounded-2xl"
            />
          </div>

          <div>
            <p className="text-green-600 font-semibold mb-4">
              SECURITY YOU CAN TRUST
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Your data and money are always safe
            </h2>

            <ul className="space-y-4">
              <li>✔ PCI DSS Compliant</li>
              <li>✔ 256-bit SSL Encryption</li>
              <li>✔ Two-factor authentication</li>
              <li>✔ Regular security audits</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
