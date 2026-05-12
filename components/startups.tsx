"use client";

import { useState } from "react";

/* ---------------- STYLES ---------------- */
const SECTION_WRAPPER =
  "w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-20";

const HEADING_CLASS =
  "text-[24px] sm:text-[30px] md:text-[40px] font-bold text-[rgb(1,27,51)] leading-tight";

const PARAGRAPH_CLASS =
  "text-[16px] md:text-[18px] text-[rgba(1,27,51,0.75)] leading-[28px] mt-4";

const LABEL_CLASS =
  "text-[16px] font-semibold leading-[24px] text-[rgb(1,27,51)] font-[Graphik,_-apple-system,_BlinkMacSystemFont,_Segoe_UI,_Roboto,_Helvetica,_Arial,_sans-serif]";

/* ---------------- CONTACT FORM ---------------- */
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
    <div
      className="
        w-full max-w-[596px] mx-auto 
        bg-white border border-gray-100 shadow-sm rounded-2xl
        px-10 md:px-12 py-10 md:py-12
      ">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* FIRST + LAST NAME */}
        <div className="md:col-span-2 flex gap-6 -mt-2">
          <div className="w-1/2 flex flex-col gap-2">
            <label className={LABEL_CLASS}>First Name</label>
            <input
              name="firstName"
              placeholder="Jane"
              onChange={handleChange}
              className="border border-gray-200 px-4 py-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-500 transition"
            />
          </div>

          <div className="w-1/2 flex flex-col gap-2">
            <label className={LABEL_CLASS}>Last Name</label>
            <input
              name="lastName"
              placeholder="Olusegun"
              onChange={handleChange}
              className="border border-gray-200 px-4 py-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-500 transition"
            />
          </div>
        </div>

        {/* EMAIL */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className={LABEL_CLASS}>Work Email</label>
          <input
            name="email"
            placeholder="work@mail.com"
            onChange={handleChange}
            className="border border-gray-200 px-4 py-5 rounded-lg"
          />
        </div>

        {/* PHONE */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className={LABEL_CLASS}>Phone Number (Optional)</label>
          <input
            name="phone"
            placeholder="+234 805 250 0000"
            onChange={handleChange}
            className="border border-gray-200 px-4 py-5 rounded-lg"
          />
        </div>

        {/* COMPANY */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className={LABEL_CLASS}>Company Name</label>
          <input
            name="companyName"
            placeholder="Company name"
            onChange={handleChange}
            className="border border-gray-200 px-4 py-5 rounded-lg"
          />
        </div>

        {/* WEBSITE */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className={LABEL_CLASS}>Company Website</label>
          <input
            name="companyWebsite"
            placeholder="https://"
            onChange={handleChange}
            className="border border-gray-200 px-4 py-5 rounded-lg"
          />
        </div>

        {/* PRODUCT DEVELOPMENT STAGE */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className={LABEL_CLASS}>Product Development Stage</label>
          <select
            name="productStage"
            onChange={handleChange}
            className="border border-gray-200 px-4 py-5 rounded-lg">
            <option>Select development stage</option>
            <option>Idea Stage</option>
            <option>MVP</option>
            <option>Growth Stage</option>
            <option>Scale Stage</option>
          </select>
        </div>

        {/* PRIMARY PRODUCT */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className={LABEL_CLASS}>
            Which of these best describes your company's primary product?
          </label>
          <input
            name="primaryProduct"
            placeholder="Please select the closest option"
            onChange={handleChange}
            className="border border-gray-200 px-4 py-5 rounded-lg"
          />
        </div>

        {/* FUNDING STAGE */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className={LABEL_CLASS}>Funding Stage</label>
          <select
            name="fundingStage"
            onChange={handleChange}
            className="border border-gray-200 px-4 py-5 rounded-lg">
            <option>Select funding stage</option>
            <option>Bootstrapped</option>
            <option>Pre-seed</option>
            <option>Seed</option>
            <option>Series A+</option>
          </select>
        </div>

        {/* REQUEST CATEGORY */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className={LABEL_CLASS}>Request Category</label>
          <select
            name="requestCategory"
            onChange={handleChange}
            className="border border-gray-200 px-4 py-5 rounded-lg">
            <option>Select request category</option>
            <option>Technical Support</option>
            <option>Partnership</option>
            <option>Integration Help</option>
            <option>General Inquiry</option>
          </select>
        </div>

        {/* COUNTRY */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className={LABEL_CLASS}>Country</label>
          <input
            name="country"
            placeholder="Find and select country"
            onChange={handleChange}
            className="border border-gray-200 px-4 py-5 rounded-lg"
          />
        </div>

        {/* HELP MESSAGE */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className={LABEL_CLASS}>How can we help?</label>
          <textarea
            name="helpMessage"
            placeholder="Please tell us about your project (needs, timeline, etc)"
            onChange={handleChange}
            className="border border-gray-200 px-4 py-5 rounded-lg min-h-[120px]"
          />
        </div>

        {/* CHECKBOX */}
        <div className="md:col-span-2 flex items-start gap-3 mt-2">
          <input
            type="checkbox"
            name="updatesConsent"
            onChange={handleChange}
            className="w-5 h-5 mt-1 accent-green-600"
          />
          <label className="text-sm text-gray-600 leading-relaxed">
            Send me occasional Durapayment updates
          </label>
        </div>

        {/* BUTTON */}

        <div className="md:col-span-2 pt-6 flex justify-center">
          <div className="md:col-span-2 pt-8 flex justify-center">
            <button
              type="submit"
              disabled={!formData.updatesConsent}
              className="w-full py-5 bg-[#00A859] text-white rounded-lg font-medium hover:bg-[#00914D] transition disabled:opacity-50 disabled:cursor-not-allowed">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

/* ---------------- STARTUPS PAGE ---------------- */
export const StartUps = () => {
  return (
    <section className="w-full">
      {/* HERO SECTION */}
      <div className="w-full bg-green-50 pt-20 pb-20 md:pt-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1
            className="mb-6 pt-20 text-[#011B33] font-extrabold tracking-[-0.03em]
            text-[30px] max-w-2xl mx-auto sm:text-[36px] md:text-[42px] lg:text-[48px]
            leading-tight lg:leading-[57.6px]"
            style={{
              fontFamily:
                'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            }}>
            Contact the Startup Programs Team
          </h1>

          <p
            className="text-[#011B33]/80 text-sm sm:text-base md:text-lg lg:text-[20px]
            leading-7 lg:leading-[30px] pb-20 max-w-2xl mx-auto"
            style={{
              fontFamily:
                'Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            }}>
            We're excited to help you scale your tech startup across Africa!
          </p>
        </div>
      </div>

      {/* SECTION */}
      <div className="w-full max-w-6xl mx-auto pt-20">
        <div className={SECTION_WRAPPER}>
          {/* FORM */}
          <div className="flex-1">
            <ContactForm />
          </div>

          {/* TEXT */}
          <div className="flex-1 flex flex-col justify-center space-y-6">
            <h3 className={HEADING_CLASS}>
              Trusted by over 200,000 businesses
            </h3>

            <p className={PARAGRAPH_CLASS}>
              Durapayment is the partner of choice for many of Nigeria's market
              leaders, including MTN, Air Peace, and AXA Mansard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
