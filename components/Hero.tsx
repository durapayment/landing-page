"use client";

import { useState } from "react";
import { Play, ChevronRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export const Entrepreneur = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  // Redirect function for all buttons
  const handleRedirect = () => {
    window.open("https://online.durapayment.com", "_blank");
  };

  const logos = [
    "/Dominos-Plain.svg",
    "/mtn-group-grayscale.svg",
    "/bolt-grayscale.svg",
    "/axa-mansard.svg",
    "/crocs.svg",
  ];

  return (
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="px-6 md:px-16 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-[rgb(1,27,51)] font-bold text-4xl md:text-6xl leading-tight">
              Accept payments anywhere in Africa
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Grow your business with seamless payment solutions built for
              entrepreneurs.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
              <button
                onClick={handleRedirect}
                className="bg-accent text-white px-6 py-3 rounded-lg cursor-pointer">
                Get Started
              </button>

              <button
                onClick={() => setVideoOpen(true)}
                className="flex items-center gap-2 text-[rgb(1,27,51)] font-medium">
                <Play size={18} />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/hero-image.png"
              alt="Hero"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* LOGO SECTION */}
      <section className="px-6 md:px-16 py-10 border-t border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Company Logo"
              className="w-28 mx-auto grayscale"
            />
          ))}
        </div>
      </section>

      {/* MID SECTION */}
      <section className="px-6 md:px-16 py-20 border-t border-gray-100">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-[rgb(1,27,51)] text-3xl md:text-5xl font-bold">
              Build custom payment experiences
            </h2>

            <p className="mt-5 text-gray-600 text-lg">
              Developers love our APIs that help build payment experiences for
              businesses of all sizes.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2">
                <Check size={18} /> Collect one-time payments
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} /> Make instant transfers
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} /> Retrieve customer data
              </li>
            </ul>

            <button
              onClick={handleRedirect}
              className="mt-8 bg-accent text-white px-6 py-3 rounded-lg cursor-pointer">
              Start Building
            </button>
          </div>

          <div>
            <img src="/api-image.png" alt="API" className="w-full rounded-xl" />
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg relative w-[90%] md:w-[600px]">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 text-black text-xl">
              ×
            </button>

            <iframe
              className="w-full h-[300px]"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Demo Video"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};
