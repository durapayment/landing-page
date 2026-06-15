"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Users, Zap, Globe, ArrowRight } from "lucide-react";

/* ── FLOATING LABEL INPUT ── */
const FloatingInput = ({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="relative">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder=" "
      className="peer w-full border border-gray-200 rounded-xl px-4 pt-6 pb-2 text-[14px] text-gray-900 bg-white outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all placeholder-transparent"
    />
    <label className="absolute left-4 top-2 text-[10px] font-bold tracking-widest uppercase text-gray-400 transition-all peer-placeholder-shown:top-[17px] peer-placeholder-shown:text-[13px] peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:tracking-widest peer-focus:uppercase peer-focus:text-green-600">
      {label}
    </label>
  </div>
);

/* ── FLOATING LABEL SELECT ── */
const FloatingSelect = ({
  label,
  name,
  options,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => (
  <div className="relative">
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="peer w-full border border-gray-200 rounded-xl px-4 pt-6 pb-2 text-[14px] text-gray-900 bg-white outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all appearance-none">
      <option value="" disabled />
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
    <label
      className={`absolute left-4 transition-all pointer-events-none ${value ? "top-2 text-[10px] font-bold tracking-widest uppercase text-green-600" : "top-[17px] text-[13px] text-gray-400"}`}>
      {label}
    </label>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
        <path
          d="M1 1l5 5 5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  </div>
);

/* ── TRUST SIGNALS ── */
const trustPoints = [
  {
    icon: Users,
    title: "200,000+ Businesses",
    desc: `${siteConfig.name} is the partner of choice for Nigeria's market leaders.`,
  },
  {
    icon: Zap,
    title: "Fast Onboarding",
    desc: "From signup to accepting payments in under 15 minutes.",
  },
  {
    icon: Globe,
    title: "Pan-African Reach",
    desc: "Accept payments from customers across Africa and beyond.",
  },
];

/* ── CONTACT FORM ── */
function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    companyWebsite: "",
    productStage: "",
    primaryProduct: "",
    fundingStage: "",
    requestCategory: "",
    country: "",
    helpMessage: "",
    updatesConsent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.updatesConsent) return;
    console.log(formData);
    alert("Message sent successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name row */}
      <div className="grid grid-cols-2 gap-4">
        <FloatingInput
          label="First Name"
          name="firstName"
          placeholder="Jane"
          value={formData.firstName}
          onChange={handleChange}
        />
        <FloatingInput
          label="Last Name"
          name="lastName"
          placeholder="Olusegun"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <FloatingInput
        label="Work Email"
        name="email"
        type="email"
        placeholder="work@mail.com"
        value={formData.email}
        onChange={handleChange}
      />
      <FloatingInput
        label="Phone Number (Optional)"
        name="phone"
        placeholder="+234 805 250 0000"
        value={formData.phone}
        onChange={handleChange}
      />
      <FloatingInput
        label="Company Name"
        name="companyName"
        placeholder="Your company"
        value={formData.companyName}
        onChange={handleChange}
      />
      <FloatingInput
        label="Company Website"
        name="companyWebsite"
        placeholder="https://"
        value={formData.companyWebsite}
        onChange={handleChange}
      />

      <FloatingSelect
        label="Product Development Stage"
        name="productStage"
        value={formData.productStage}
        onChange={handleChange}
        options={["Idea Stage", "MVP", "Growth Stage", "Scale Stage"]}
      />

      <FloatingInput
        label="Primary Product Description"
        name="primaryProduct"
        placeholder="Please select the closest option"
        value={formData.primaryProduct}
        onChange={handleChange}
      />

      <FloatingSelect
        label="Funding Stage"
        name="fundingStage"
        value={formData.fundingStage}
        onChange={handleChange}
        options={["Bootstrapped", "Pre-seed", "Seed", "Series A+"]}
      />

      <FloatingSelect
        label="Request Category"
        name="requestCategory"
        value={formData.requestCategory}
        onChange={handleChange}
        options={[
          "Technical Support",
          "Partnership",
          "Integration Help",
          "General Inquiry",
        ]}
      />

      <FloatingInput
        label="Country"
        name="country"
        placeholder="Find and select country"
        value={formData.country}
        onChange={handleChange}
      />

      {/* Textarea */}
      <div className="relative">
        <textarea
          name="helpMessage"
          value={formData.helpMessage}
          onChange={handleChange}
          placeholder=" "
          rows={4}
          className="peer w-full border border-gray-200 rounded-xl px-4 pt-6 pb-2 text-[14px] text-gray-900 bg-white outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all resize-none placeholder-transparent"
        />
        <label
          className={`absolute left-4 transition-all pointer-events-none ${formData.helpMessage ? "top-2 text-[10px] font-bold tracking-widest uppercase text-green-600" : "top-[17px] text-[13px] text-gray-400"}`}>
          How can we help?
        </label>
      </div>

      {/* Checkbox */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <div
          className={`w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${formData.updatesConsent ? "bg-green-500 border-green-500" : "border-gray-300 group-hover:border-green-400"}`}>
          {formData.updatesConsent && (
            <svg viewBox="0 0 12 10" className="w-3 h-3" fill="none">
              <path
                d="M1 5l4 4 6-8"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <input
          type="checkbox"
          name="updatesConsent"
          checked={formData.updatesConsent}
          onChange={handleChange}
          className="sr-only"
        />
        <span className="text-[13px] text-gray-500 leading-5">
          Send me occasional {siteConfig.name} updates
        </span>
      </label>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={!formData.updatesConsent}
        whileHover={{ scale: formData.updatesConsent ? 1.01 : 1 }}
        whileTap={{ scale: formData.updatesConsent ? 0.98 : 1 }}
        className="w-full py-4 bg-[#011B33] text-white rounded-xl font-semibold text-[15px] flex items-center justify-center gap-2 hover:bg-[#02284d] transition-colors disabled:opacity-40 disabled:cursor-not-allowed mt-2">
        Send Message
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </form>
  );
}

/* ── MAIN PAGE ── */
export const StartUps = () => {
  return (
    <section className="w-full font-sans">
      {/* ══ HERO ══ */}
      <div className="relative w-full bg-white overflow-hidden pt-36 pb-24 px-6 text-center border-b border-gray-100">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-gray-100" />
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full border border-gray-100" />
        <div className="absolute bottom-0 right-10 w-72 h-72 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-600 text-[11px] font-bold tracking-widest uppercase">
              Startup Programs
            </span>
          </div>

          <h1 className="text-[#011B33] font-extrabold text-[32px] sm:text-[42px] md:text-[52px] leading-[1.1] tracking-tight mb-6">
            Contact the <span className="text-green-500">Startup Programs</span>{" "}
            Team
          </h1>

          <p className="text-[rgba(1,27,51,0.55)] text-[16px] md:text-[18px] leading-[30px] max-w-xl mx-auto">
            We're excited to help you scale your tech startup across Africa!
          </p>
        </motion.div>
      </div>

      {/* ══ FORM + TRUST PANEL ══ */}
      <div className="w-full bg-[#f4f6f9] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[58%] bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-green-400 to-emerald-500" />
            <div className="p-8 sm:p-10">
              <h2 className="text-[18px] font-bold text-[#011B33] mb-1">
                Get in touch
              </h2>
              <p className="text-gray-400 text-[13px] mb-8">
                Fill out the form and our team will reach out shortly.
              </p>
              <ContactForm />
            </div>
          </motion.div>

          {/* TRUST PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full lg:w-[42%] lg:sticky lg:top-24 space-y-6">
            <div>
              <p className="text-[11px] font-black tracking-[0.22em] uppercase text-green-600 mb-3">
                Why {siteConfig.name}
              </p>
              <h3
                className="text-[28px] sm:text-[32px] font-extrabold text-[#011B33] leading-tight mb-4"
                style={{
                  fontFamily:
                    'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}>
                Trusted by over{" "}
                <span className="text-green-500">200,000 businesses</span>
              </h3>
              <p className="text-[rgba(1,27,51,0.6)] text-[15px] leading-[26px]">
                {siteConfig.name} is the partner of choice for many of Nigeria's
                market leaders, including MTN, Air Peace, and AXA Mansard.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {trustPoints.map((pt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-sm border border-gray-100">
                  <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                    <pt.icon className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#011B33]">
                      {pt.title}
                    </p>
                    <p className="text-[13px] text-[rgba(1,27,51,0.55)] leading-5 mt-0.5">
                      {pt.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
