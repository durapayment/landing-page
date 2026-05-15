"use client";

import {
  ArrowRight,
  ShoppingCart,
  Globe,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

export default function CommercePage() {
  return (
    <main className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="bg-linear-to-b from-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto pt-35 px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build and scale your{" "}
            <span className="text-green-400">online commerce</span> with
            DuraPayment
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
            Accept payments, manage customers, and grow your digital business
            with a unified commerce infrastructure built for African businesses.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2">
              Start selling <ArrowRight size={18} />
            </button>

            <button className="border border-white/30 px-6 py-3 rounded-lg hover:bg-white/10">
              Talk to sales
            </button>
          </div>

          <p className="mt-6 text-xs text-gray-400">
            No setup fees • Instant onboarding • Built for scale
          </p>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 text-center text-gray-600 text-sm">
          <p>Trusted by digital merchants</p>
          <p>E-commerce platforms</p>
          <p>Fintech startups</p>
          <p>Marketplaces</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-14">
          Everything you need to run commerce
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-2xl">
            <ShoppingCart className="mb-4 text-green-500" />
            <h3 className="font-semibold text-lg">Smart Checkout</h3>
            <p className="text-gray-600 mt-2">
              Optimized checkout flow that increases conversion rates and
              reduces drop-offs.
            </p>
          </div>

          <div className="p-6 border rounded-2xl">
            <CreditCard className="mb-4 text-green-500" />
            <h3 className="font-semibold text-lg">Multi-payment support</h3>
            <p className="text-gray-600 mt-2">
              Cards, bank transfers, wallets, and local payment methods in one
              API.
            </p>
          </div>

          <div className="p-6 border rounded-2xl">
            <ShieldCheck className="mb-4 text-green-500" />
            <h3 className="font-semibold text-lg">Fraud protection</h3>
            <p className="text-gray-600 mt-2">
              Built-in fraud detection and risk scoring to protect every
              transaction.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            How DuraPayment Commerce works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border">
              <p className="text-sm text-gray-500">Step 1</p>
              <h3 className="font-semibold mt-2">Create your store</h3>
              <p className="text-gray-600 mt-2">
                Set up your online store or connect your existing platform.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border">
              <p className="text-sm text-gray-500">Step 2</p>
              <h3 className="font-semibold mt-2">Integrate payments</h3>
              <p className="text-gray-600 mt-2">
                Use our API or no-code tools to start accepting payments
                instantly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border">
              <p className="text-sm text-gray-500">Step 3</p>
              <h3 className="font-semibold mt-2">Grow your revenue</h3>
              <p className="text-gray-600 mt-2">
                Track analytics, optimize conversions, and scale globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <Globe className="mx-auto text-green-500 mb-4" />

        <h2 className="text-3xl font-bold">
          Built for African commerce, ready for the world
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          DuraPayment helps businesses accept payments across borders,
          currencies, and channels with seamless infrastructure.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Start selling with DuraPayment today
          </h2>

          <p className="text-gray-400 mt-4">
            Join modern businesses using commerce infrastructure built for
            scale.
          </p>

          <button className="mt-8 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto">
            Get started <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}
