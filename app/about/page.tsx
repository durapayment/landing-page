"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/* -------------------- DATA -------------------- */

const timeline = [
  {
    year: "2023",
    title: "Idea & Foundation",
    desc: "DuraPayment was founded to simplify payments for African businesses.",
  },
  {
    year: "2024",
    title: "First API Launch",
    desc: "We launched our payment API powering early merchants and startups.",
  },
  {
    year: "2025",
    title: "Scaling Infrastructure",
    desc: "Expanded to support high-volume enterprise transactions across Africa.",
  },
  {
    year: "2026",
    title: "Financial OS Vision",
    desc: "Evolving into a full-stack financial infrastructure platform.",
  },
];

const investors = [
  "Y Combinator Network",
  "Africa Fintech Builders",
  "Cloud Infrastructure Partners",
  "Early Angel Backers",
];

/* -------------------- COMPONENT -------------------- */

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-timeline]");
      let index = 0;

      sections.forEach((sec, i) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
          index = i;
        }
      });

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative overflow-hidden bg-white text-black">
      {/* 🌈 FLOATING BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-300 opacity-30 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-300 opacity-30 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* HERO */}
      <div className=" w-full bg-tertiary/20">
        <section className="max-w-6xl max-h-[880px]  mx-auto px-6 py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold">
            Powering the future of African payments
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            DuraPayment builds modern financial infrastructure that helps
            businesses accept, move, and scale money seamlessly across Africa.
          </motion.p>
        </section>
      </div>

      {/* STORY */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Built for scale, designed for trust
            </h2>

            <p className="text-gray-700 mb-4">
              We believe payments should be invisible infrastructure — fast,
              reliable, and always available.
            </p>

            <p className="text-gray-700 mb-4">
              Our system is built to support startups and enterprises as they
              grow from local businesses into global brands.
            </p>

            <p className="text-gray-700">
              Everything we build is centered around reliability, security, and
              developer experience.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-200 h-[360px] flex items-center justify-center text-sm text-gray-600 text-center px-6">
            Scene: First major fintech meetup hosted at DuraPayment HQ
          </div>
        </div>
      </section>

      {/* 📌 STICKY TIMELINE SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT: sticky indicator */}
          <div className="hidden md:block sticky top-32 h-fit">
            {timeline.map((t, i) => (
              <div
                key={i}
                className={`mb-6 transition-all border-l-2 pl-4 ${
                  activeIndex === i
                    ? "border-black opacity-100"
                    : "border-gray-300 opacity-40"
                }`}>
                <p className="font-bold">{t.year}</p>
                <p className="text-sm text-gray-600">{t.title}</p>
              </div>
            ))}
          </div>

          {/* RIGHT: scroll content */}
          <div className="space-y-20">
            {timeline.map((t, i) => (
              <div key={i} data-timeline>
                <h3 className="text-2xl font-semibold">{t.title}</h3>
                <p className="text-gray-600 mt-2">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 INVESTORS */}
      <section className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Backed by builders & believers
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {investors.map((item, i) => (
              <div
                key={i}
                className="border border-white/20 rounded-xl p-6 text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Build with DuraPayment today
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Join the next generation of African businesses building on modern
          financial infrastructure.
        </p>

        <button className="mt-8 px-6 py-3 bg-black text-white rounded-md hover:opacity-80 transition">
          Get Started
        </button>
      </section>
    </main>
  );
}
