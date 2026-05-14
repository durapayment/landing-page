"use client";

import { motion } from "framer-motion";
import { Mail, Clock3, ArrowRight } from "lucide-react";
import { useState } from "react";

export const ComingSoonPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks! We'll notify ${email} when we launch.`);
    setEmail("");
  };

  return (
    <section className="min-h-screen w-full bg-linear-to-br from-black via-gray-900 to-green-950 text-white px-6 md:px-12 lg:px-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-310 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium">
            <Clock3 size={16} />
            Launching Soon
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Something amazing is
              <span className="text-green-400"> coming soon.</span>
            </h1>

            <p className="text-gray-300 mt-5 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              We're building a powerful SaaS platform that helps businesses
              scale faster, automate workflows, and increase revenue—all in one
              place.
            </p>
          </div>

          {/* EMAIL FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-xl mx-auto lg:mx-0">
            <div className="relative flex-1">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-400 text-white placeholder:text-gray-400"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-4 rounded-2xl bg-green-400 text-black font-semibold flex items-center justify-center gap-2 hover:bg-green-300 transition">
              Notify Me
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-sm text-gray-400">
            Be the first to know when we launch 🚀
          </p>
        </motion.div>

        {/* RIGHT SIDE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative">
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/30 p-5 rounded-2xl">
                <h3 className="text-2xl font-bold text-green-400">99.9%</h3>
                <p className="text-gray-300 text-sm mt-2">Platform uptime</p>
              </div>

              <div className="bg-black/30 p-5 rounded-2xl">
                <h3 className="text-2xl font-bold text-green-400">10x</h3>
                <p className="text-gray-300 text-sm mt-2">
                  Faster workflow automation
                </p>
              </div>

              <div className="bg-black/30 p-5 rounded-2xl col-span-2">
                <h3 className="text-2xl font-bold text-green-400">
                  Built for modern teams
                </h3>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  Manage payments, analytics, automation, and growth tools from
                  one dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -z-10 top-10 right-10 w-40 h-40 bg-green-400/30 blur-3xl rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};
