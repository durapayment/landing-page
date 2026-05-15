"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const categories = [
  "All",
  "Payments",
  "Security",
  "Product Updates",
  "Engineering",
  "Business",
];

const posts = [
  {
    title: "How modern payment infrastructure is reshaping African commerce",
    category: "Business",
    date: "May 2026",
    excerpt:
      "Explore how fintech platforms are enabling faster, safer and more scalable payment systems across Africa.",
  },
  {
    title: "Reducing fraud in online transactions with AI detection systems",
    category: "Security",
    date: "April 2026",
    excerpt:
      "Learn how machine learning models detect suspicious transactions in real-time.",
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

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">DuraPayment Blog</h1>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Insights on payments, fintech infrastructure, security, and scaling
            digital commerce across Africa.
          </p>

          {/* Search */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center bg-white text-black rounded-lg px-4 py-2 w-full max-w-md">
              <Search size={18} className="text-gray-500" />
              <input
                placeholder="Search articles..."
                className="ml-2 w-full outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-b">
        <div className="max-w-5xl mx-auto px-6 py-6 flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                activeCategory === cat
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-gray-50 border rounded-2xl p-8">
          <p className="text-sm text-gray-500">Featured Article</p>

          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            The future of digital payments in Africa
          </h2>

          <p className="text-gray-600 mt-4">
            Discover how fintech innovation is transforming how businesses
            accept and process payments across emerging markets.
          </p>

          <button className="mt-6 text-sm font-medium text-black underline">
            Read article →
          </button>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((post, index) => (
            <article
              key={index}
              className="border rounded-2xl p-6 hover:shadow-sm transition">
              <p className="text-xs text-gray-500">
                {post.category} • {post.date}
              </p>

              <h3 className="text-lg font-semibold mt-2">{post.title}</h3>

              <p className="text-gray-600 mt-2 text-sm">{post.excerpt}</p>

              <button className="mt-4 text-sm font-medium text-black underline">
                Read more →
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">Build with DuraPayment APIs</h2>

          <p className="text-gray-400 mt-3">
            Start accepting payments and scaling your business today.
          </p>

          <button className="mt-6 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-medium">
            Get started
          </button>
        </div>
      </section>
    </main>
  );
}
