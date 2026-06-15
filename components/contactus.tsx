"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

/* ── FLOATING LABEL INPUT ── */
const FloatingInput = ({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) => {
  const [filled, setFilled] = useState(false);
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        placeholder=" "
        onChange={(e) => setFilled(e.target.value.length > 0)}
        className="peer w-full border border-gray-200 rounded-xl px-4 pt-6 pb-2 text-[14px] text-gray-900 bg-white outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all placeholder-transparent"
      />
      <label className="absolute left-4 top-2 text-[10px] font-bold tracking-widest uppercase text-gray-400 transition-all peer-placeholder-shown:top-[17px] peer-placeholder-shown:text-[13px] peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:tracking-widest peer-focus:uppercase peer-focus:text-green-600">
        {label}
      </label>
    </div>
  );
};

/* ── FLOATING TEXTAREA ── */
const FloatingTextarea = ({ label, name }: { label: string; name: string }) => {
  const [filled, setFilled] = useState(false);
  return (
    <div className="relative">
      <textarea
        name={name}
        rows={4}
        placeholder=" "
        onChange={(e) => setFilled(e.target.value.length > 0)}
        className="peer w-full border border-gray-200 rounded-xl px-4 pt-6 pb-2 text-[14px] text-gray-900 bg-white outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all resize-none placeholder-transparent"
      />
      <label
        className={`absolute left-4 transition-all pointer-events-none ${filled ? "top-2 text-[10px] font-bold tracking-widest uppercase text-green-600" : "top-[17px] text-[13px] text-gray-400"}`}>
        {label}
      </label>
    </div>
  );
};

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

/* ── CONTACT INFO ── */
const contactItems = [
  { icon: Mail, label: "Email Support", value: "support@durapayment.com" },
  { icon: Phone, label: "Phone", value: "+234 7043396722" },
  {
    icon: MapPin,
    label: "Office Address",
    value:
      "No. 100 off Salvation Ministries Road, Rumuosi Town, Rivers, Nigeria",
  },
  { icon: Clock, label: "Working Hours", value: "Mon – Fri: 8AM – 6PM" },
];

const supportCards = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    desc: "Speak instantly with our support team.",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Mail,
    title: "Email Support",
    desc: "Reach us anytime for technical support.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Phone,
    title: "Sales Team",
    desc: "Talk to us about enterprise pricing.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

export const ContactPage = () => {
  return (
    <main className="w-full bg-white font-sans">
      {/* ══ HERO ══ */}
      <section className="relative w-full bg-white overflow-hidden pt-36 pb-20 px-6 text-center border-b border-gray-100">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-gray-100" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-600 text-[11px] font-bold tracking-widest uppercase">
              Contact Us
            </span>
          </div>

          <h1 className="text-[#011B33] font-extrabold text-[32px] sm:text-[42px] md:text-[52px] leading-[1.1] tracking-tight mb-5">
            We're here to help your{" "}
            <span className="text-green-500">business grow</span>
          </h1>

          <p className="text-[rgba(1,27,51,0.55)] text-[16px] md:text-[18px] leading-[30px] max-w-xl mx-auto">
            Whether you need support, want to partner with us, or have questions
            about our APIs — our team is ready to assist.
          </p>
        </motion.div>
      </section>

      {/* ══ CONTACT GRID ══ */}
      <section className="w-full bg-[#f4f6f9] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          {/* LEFT — info */}
          <Fade className="w-full lg:w-[40%] lg:sticky lg:top-24 space-y-8">
            <div>
              <p className="text-[11px] font-black tracking-[0.22em] uppercase text-green-600 mb-3">
                Get in touch
              </p>
              <h2
                className="text-[28px] sm:text-[32px] font-extrabold text-[#011B33] leading-tight mb-3"
                style={{
                  fontFamily:
                    'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}>
                Talk to our team
              </h2>
              <p className="text-[rgba(1,27,51,0.55)] text-[14px] leading-6">
                Fill out the form and our team will respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-4 flex items-start gap-4 shadow-sm border border-gray-100">
                  <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[#011B33]">
                      {item.label}
                    </p>
                    <p className="text-[13px] text-[rgba(1,27,51,0.55)] leading-5 mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Fade>

          {/* RIGHT — form */}
          <Fade delay={0.1} className="w-full lg:w-[60%]">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-green-400 to-emerald-500" />
              <div className="p-8 sm:p-10">
                <h3 className="text-[18px] font-bold text-[#011B33] mb-1">
                  Send us a message
                </h3>
                <p className="text-gray-400 text-[13px] mb-8">
                  We'll get back to you within 24 hours.
                </p>

                <form className="space-y-5">
                  <FloatingInput
                    label="Full Name"
                    name="fullName"
                    placeholder="Jane Olusegun"
                  />
                  <FloatingInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="work@mail.com"
                  />
                  <FloatingInput
                    label="Company Name"
                    name="companyName"
                    placeholder="Your company"
                  />
                  <FloatingTextarea label="How can we help?" name="message" />

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-[#011B33] text-white rounded-xl font-semibold text-[15px] flex items-center justify-center gap-2 hover:bg-[#02284d] transition-colors mt-2">
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* ══ SUPPORT OPTIONS ══ */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Fade className="text-center mb-14">
            <p className="text-[11px] font-black tracking-[0.22em] uppercase text-green-600 mb-3">
              Support
            </p>
            <h2
              className="text-[28px] sm:text-[36px] font-extrabold text-[#011B33] leading-tight"
              style={{
                fontFamily:
                  'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}>
              Need help faster?
            </h2>
          </Fade>

          <div className="grid sm:grid-cols-3 gap-6">
            {supportCards.map((card, i) => (
              <Fade key={i} delay={i * 0.08}>
                <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                  <div
                    className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center mb-5`}>
                    <card.icon className={`w-5 h-5 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#011B33] mb-2">
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
          <h2 className="text-white font-extrabold text-[32px] sm:text-[42px] leading-tight mb-5">
            Ready to build with{" "}
            <span className="text-green-400">{siteConfig.name}?</span>
          </h2>
          <p className="text-white/50 text-[16px] leading-[28px] max-w-lg mx-auto mb-10">
            Join businesses using {siteConfig.name} to accept payments, automate
            transfers, and scale globally.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-semibold text-[15px] transition-colors inline-flex items-center gap-2">
            Start Now
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Fade>
      </section>
    </main>
  );
};
