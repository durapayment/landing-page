"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Wallet, Globe, ShieldCheck, Play, X } from "lucide-react";

export const Hero = () => {
  const [openVideo, setOpenVideo] = useState(false);

  const logos = [
    "/Dominos-plain.svg",
    "/mtn-group-grayscale.svg",
    "/bolt.svg",
    "/axa.svg",
  ];

  return (
    <section className="w-full max-h-188.25 flex flex-col items-center justify-center bg-green-50 px-6 md:px-16 mb-20 overflow-hidden">
      {/* HERO */}
      <div className="flex flex-col md:flex-row w-full max-w-310 items-center justify-between">
        {/* TEXT */}
        <div className="flex-1 max-w-140 text-center md:text-left">
          <h1
            style={{
              fontFamily:
                'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              fontWeight: 800,
              lineHeight: "1.2",
              color: "rgb(1, 27, 51)",
            }}
            className="
    mb-6
    
    text-[20px]
    sm:text-[36px]
    md:text-[48px]
    leading-tight
    tracking-[-0.02em]
    line-clamp-2
  ">
            Modern online and offline payments for Africa
          </h1>
          <p
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              lineHeight: "30px",
              color: "rgb(1, 27, 51)",
            }}
            className="mb-8 text-base sm:text-lg md:text-[20px]">
            Paystack helps businesses in Africa get paid by anyone, anywhere in
            the world.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition w-full sm:w-auto">
              Create a free account
            </button>

            {/* VIDEO CTA */}
            <button
              onClick={() => setOpenVideo(true)}
              className="flex items-center gap-3 text-green-700 font-medium hover:underline">
              <div className="w-9 h-9 rounded-full bg-[#00c3f7] flex items-center justify-center">
                <Play className="text-white w-4 h-4 ml-0.5" />
              </div>
              Watch video
            </button>
          </div>
        </div>

        {/* SVG-STYLE ILLUSTRATION (CLEAN FINTECH LOOK) */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <div className="relative w-75 h-75 sm:w-90 sm:h-90 md:w-105 md:h-105">
            <div className="absolute inset-0 rounded-full bg-green-100 blur-2xl opacity-60 animate-pulse" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-10 left-10 w-14 h-14 rounded-full bg-white shadow flex items-center justify-center">
              <CreditCard className="text-green-700 w-6 h-6" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-16 right-8 w-14 h-14 rounded-full bg-white shadow flex items-center justify-center">
              <Wallet className="text-green-700 w-6 h-6" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
              className="absolute bottom-16 left-14 w-14 h-14 rounded-full bg-white shadow flex items-center justify-center">
              <Globe className="text-green-700 w-6 h-6" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.2 }}
              className="absolute bottom-10 right-16 w-14 h-14 rounded-full bg-white shadow flex items-center justify-center">
              <ShieldCheck className="text-green-700 w-6 h-6" />
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-36 h-36 rounded-full bg-white shadow-md flex items-center justify-center text-sm text-green-700 font-medium">
                Payments Flow
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔄 AUTO-SCROLL LOGO TICKER */}
      <div className="w-full mt-12 overflow-hidden border-t border-green-100 py-6">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-16 w-max">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="partner logo"
              className="h-6 md:h-8 opacity-70"
            />
          ))}
        </motion.div>
      </div>

      {/* 🎥 VIDEO MODAL */}
      <AnimatePresence>
        {openVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white w-[90%] md:w-175 h-100 rounded-lg relative">
              <button
                onClick={() => setOpenVideo(false)}
                className="absolute top-3 right-3">
                <X />
              </button>

              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Video Placeholder
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
