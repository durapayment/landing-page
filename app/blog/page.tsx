"use client";

import { useState } from "react";
import { Search, ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "All", slug: "all" },
  { name: "Payments", slug: "payments" },
  { name: "Security", slug: "security" },
  { name: "Product Updates", slug: "product-updates" },
  { name: "Engineering", slug: "engineering" },
  { name: "Business", slug: "business" },
];

const posts = [
  {
    title: "How modern payment infrastructure is reshaping African commerce",
    category: "Business",
    date: "May 2026",
    excerpt:
      "Fintech platforms enabling faster, safer, and more scalable payment systems across Africa.",
  },
  {
    title: "Reducing fraud in online transactions with AI detection systems",
    category: "Security",
    date: "April 2026",
    excerpt:
      "How machine learning models detect suspicious transactions in real-time.",
  },
  {
    title: "Building scalable APIs for millions of payment requests",
    category: "Engineering",
    date: "March 2026",
    excerpt:
      "A deep dive into how DuraPayment handles high-volume transaction processing.",
  },
  {
    title: "New checkout experience designed for higher conversion rates",
    category: "Product Updates",
    date: "February 2026",
    excerpt:
      "We rebuilt our checkout flow to reduce drop-offs and improve user experience.",
  },
];

const tagStyles: Record<string, string> = {
  Business: "bg-[#E1F5EE] text-[#085041]",
  Security: "bg-[#FAECE7] text-[#712B13]",
  Engineering: "bg-[#E6F1FB] text-[#0C447C]",
  "Product Updates": "bg-[#EEEDFE] text-[#3C3489]",
  Payments: "bg-[#FAEEDA] text-[#633806]",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');
        .font-display { font-family: 'Instrument Serif', serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <main className="font-body bg-white">
        {/* ── HERO ── */}
        <section className="bg-[#0A1F1A] py-20">
          <div className="max-w-5xl mx-auto px-6 pt-16 text-center">
            {/* Eyebrow pill */}
            <span className="inline-flex items-center gap-1.5 bg-[#1D9E75]/20 border border-[#1D9E75]/35 rounded-full px-4 py-1 text-[11px] font-semibold tracking-widest uppercase text-[#5DCAA5] mb-5">
              ✦ Fintech insights
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-normal text-white leading-tight">
              The <em className="italic text-[#5DCAA5]">DuraPayment</em> Blog
            </h1>

            <p className="mt-4 text-white/60 max-w-md mx-auto text-sm leading-relaxed">
              Payments, infrastructure, security, and scaling digital commerce
              across Africa.
            </p>

            {/* Search bar */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2.5 bg-white/8 border border-white/15 rounded-xl px-4 py-2.5 w-full max-w-sm">
                <Search size={16} className="text-white/40 shrink-0" />
                <input
                  placeholder="Search articles…"
                  className="bg-transparent outline-none text-white placeholder:text-white/35 text-sm w-full font-body"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CATEGORIES ── */}
        <section className="max-w-5xl mx-auto px-6 pt-5 pb-3">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all ${
                  activeCategory === cat.name
                    ? "bg-[#0A1F1A] text-[#5DCAA5] border-[#0A1F1A]"
                    : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-700"
                }`}>
                {cat.name}
              </button>
            ))}
          </div>
          <div className="mt-4 border-t border-gray-100" />
        </section>

        {/* ── FEATURED POST ── */}
        <section className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex border border-gray-100 rounded-2xl overflow-hidden bg-white">
            {/* Accent bar */}
            <div className="w-1 bg-[#1D9E75] shrink-0" />
            <div className="p-6 md:p-8">
              <span className="inline-block text-[11px] font-semibold tracking-widest uppercase bg-[#E1F5EE] text-[#085041] px-3 py-1 rounded-full mb-4">
                Featured article
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-normal text-gray-900 leading-snug">
                The future of digital payments in Africa
              </h2>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed max-w-xl">
                How fintech innovation is transforming the way businesses accept
                and process payments across emerging markets.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-[#0F6E56] hover:text-[#1D9E75] transition-colors">
                Read article <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── POSTS GRID ── */}
        <section className="max-w-5xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((post, index) => (
              <article
                key={index}
                className="border border-gray-100 rounded-2xl p-5 md:p-6 bg-white hover:border-gray-300 transition-colors flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full ${
                      tagStyles[post.category] ?? "bg-gray-100 text-gray-600"
                    }`}>
                    {post.category}
                  </span>
                  <span className="text-[11px] text-gray-400">{post.date}</span>
                </div>

                <h3 className="text-[15px] font-semibold text-gray-900 leading-snug mb-2 flex-1">
                  {post.title}
                </h3>

                <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0F6E56] hover:text-[#1D9E75] transition-colors mt-auto">
                  Read more <ArrowRight size={13} />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#0A1F1A] py-16">
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="font-display text-3xl md:text-4xl font-normal text-white">
              Build with DuraPayment APIs
            </h2>
            <p className="text-white/55 mt-3 text-sm">
              Start accepting payments and scaling your business today.
            </p>
            <button className="mt-7 inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#5DCAA5] hover:text-[#0A1F1A] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors">
              <Rocket size={15} /> Get started
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
