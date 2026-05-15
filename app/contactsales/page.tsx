"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Mail, Phone, MessageSquare, CheckCircle } from "lucide-react";

const benefits = [
  "Custom pricing for large businesses",
  "Dedicated account manager",
  "Priority technical support",
  "Enterprise-grade security",
  "Custom API integrations",
  "Multi-country payment support",
];

const faqs = [
  {
    question: "Who should contact sales?",
    answer:
      "Businesses processing high payment volumes or needing custom integrations should speak with our sales team.",
  },
  {
    question: "How soon will your team respond?",
    answer: "Our sales team typically responds within 24 hours.",
  },
  {
    question: "Do you offer custom pricing?",
    answer: "Yes. We provide custom pricing plans for enterprise businesses.",
  },
];

export default function ContactSalesPage() {
  return (
    <div className="w-full bg-white text-black">
      {/* HERO SECTION */}
      <section className="bg-tertiary/40 text-black  py-20 px-6 lg:px-20">
        <div className="max-w-310 mx-auto mt-25 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl lg:text-5xl font-bold leading-[1.2]">
              Talk to our team about scaling payments with DuraPayment
            </h1>

            <p className="mt-6 text-lg text-black opacity-75">
              Whether you're processing thousands of transactions, managing
              subscriptions, or expanding globally, our team can help build the
              right payment solution for your business.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-accent" size={20} />
                <span>Custom enterprise pricing</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-accent" size={20} />
                <span>Dedicated onboarding support</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-accent" size={20} />
                <span>Advanced fraud protection</span>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-black">
            <h2 className="text-2xl font-bold mb-6">Speak with sales</h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg p-3 outline-none"
              />

              <input
                type="email"
                placeholder="Work Email"
                className="w-full border rounded-lg p-3 outline-none"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full border rounded-lg p-3 outline-none"
              />

              <input
                type="text"
                placeholder="Monthly Transaction Volume"
                className="w-full border rounded-lg p-3 outline-none"
              />

              <textarea
                rows={4}
                placeholder="Tell us about your business needs"
                className="w-full border rounded-lg p-3 outline-none"
              />

              <button className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-tertiary transition">
                Contact Sales
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WHY CONTACT SALES */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Why businesses choose DuraPayment
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our infrastructure helps fast-growing businesses collect payments,
            automate transfers, and reduce operational complexity.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="border rounded-xl p-6 hover:shadow-md transition">
                <CheckCircle className="text-accent mb-4" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="bg-gray-50 py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Mail className="text-accent mb-4" />
            <h3 className="font-bold text-xl mb-2">Email Us</h3>
            <p className="text-gray-600">sales@durapayment.com</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Phone className="text-accent mb-4" />
            <h3 className="font-bold text-xl mb-2">Call Sales</h3>
            <p className="text-gray-600">+234 XXX XXX XXXX</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <MessageSquare className="text-accent mb-4" />
            <h3 className="font-bold text-xl mb-2">Live Chat</h3>
            <p className="text-gray-600">Chat with our experts in real time</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-5">
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-tertiary text-white py-20 px-6 lg:px-20 text-center">
        <h2 className="text-4xl font-bold">Ready to scale your payments?</h2>

        <p className="mt-4 mb-5 text-gray-300 max-w-2xl mx-auto">
          Join ambitious businesses using DuraPayment to move money faster.
        </p>

        <Link
          href={siteConfig.links.register}
          className="mt-10  bg-accent px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition">
          Get Started
        </Link>
      </section>
    </div>
  );
}
