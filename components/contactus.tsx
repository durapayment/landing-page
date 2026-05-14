"use client";

import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";

export const ContactPage = () => {
  return (
    <main className="w-full bg-white text-black">
      {/* HERO SECTION */}
      <section className="w-full pt-28 pb-20 px-6 lg:px-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-green-600 font-semibold mb-4">
            CONTACT DURAPAYMENT
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            We’re here to help your business move money faster
          </h1>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Whether you need support, want to partner with us, or have questions
            about our APIs, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="px-6 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in touch with us</h2>

            <p className="text-gray-600 mb-10">
              Fill out the form and our team will respond within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-green-600" />
                <div>
                  <h4 className="font-semibold">Email Support</h4>
                  <p className="text-gray-600">support@durapayment.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-green-600" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">+234 800 DURA PAY</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-green-600" />
                <div>
                  <h4 className="font-semibold">Office Address</h4>
                  <p className="text-gray-600">
                    Victoria Island, Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-green-600" />
                <div>
                  <h4 className="font-semibold">Working Hours</h4>
                  <p className="text-gray-600">Mon - Fri: 8AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white border rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>

            <form className="space-y-5">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Company Name</label>
                <input
                  type="text"
                  placeholder="Your company"
                  className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button className="w-full bg-black text-white py-4 rounded-xl hover:bg-green-600 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SUPPORT OPTIONS */}
      <section className="px-6 lg:px-20 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Need help faster?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-white rounded-2xl border">
              <MessageSquare className="mb-4 text-green-600" />
              <h3 className="font-semibold text-xl mb-2">Live Chat</h3>
              <p className="text-gray-600">
                Speak instantly with our support team.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border">
              <Mail className="mb-4 text-green-600" />
              <h3 className="font-semibold text-xl mb-2">Email Support</h3>
              <p className="text-gray-600">
                Reach us anytime for technical support.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border">
              <Phone className="mb-4 text-green-600" />
              <h3 className="font-semibold text-xl mb-2">Sales Team</h3>
              <p className="text-gray-600">
                Talk to us about enterprise pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 lg:px-20 py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to build with DuraPayment?
          </h2>

          <p className="text-gray-300 mb-8">
            Join businesses using DuraPayment to accept payments, automate
            transfers, and scale globally.
          </p>

          <button className="bg-green-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-white transition">
            Start Now
          </button>
        </div>
      </section>
    </main>
  );
}
