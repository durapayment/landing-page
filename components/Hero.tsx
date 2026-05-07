"use client";

import { useState } from "react";
import {
  CreditCard,
  Wallet,
  Globe,
  ShieldCheck,
  Play,
  Menu,
} from "lucide-react";

export const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const logos = [
    "/Dominos-plain.svg",
    "/mtn-group-grayscale.svg",
    "/bolt.svg",
    "/axa.svg",
  ];

  const setOpenVideo = (open: boolean) => {
    setVideoOpen(open);
  };

  return (
    <section className="w-full min-h-screen bg-green-50 overflow-hidden">
      {/* NAV */}
      <div className="max-w-[1240px] mx-auto flex items-center justify-between py-5 px-5 sm:px-8 md:px-12 lg:px-0">
        <div className="font-bold text-[#011B33] text-lg">Paystack</div>

        <button className="lg:hidden">
          <Menu />
        </button>
      </div>

      {/* HERO */}
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20 pt-10 sm:pt-14 md:pt-16 lg:pt-24">
          {/* TEXT BLOCK */}
          <div className="w-full max-w-[640px] text-left justify-self-start">
            <h1
              style={{
                fontFamily:
                  'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                fontWeight: 800,
                lineHeight: "1.1",
                color: "rgb(1, 27, 51)",
              }}
              className="
    mb-5 sm:mb-6 tracking-[-0.03em]
    text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px]
    max-w-[22ch] sm:max-w-[26ch] md:max-w-[28ch] md:leading-[1.1] lg:max-w-[30ch]
  ">
              Modern online and offline payments for Africa
            </h1>

            <p className="text-[#011B33] max-w-[520px] mb-7 text-sm sm:text-base md:text-lg leading-7">
              Paystack helps businesses in Africa get paid by anyone, anywhere
              in the world.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              <button className="bg-green-600 text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-md text-sm font-medium hover:bg-green-700 transition w-full sm:w-auto">
                Create a free account
              </button>

              <span className="text-[15px] font-medium text-green-600">
                or Contact Sales
              </span>
            </div>
          </div>

          {/* ILLUSTRATION (HIDDEN ON SM + MD, SHOW ONLY LG+) */}
          <div className="hidden lg:flex w-full justify-center lg:justify-end">
            <div className="relative w-[430px] h-[430px]">
              <div className="absolute inset-0 rounded-full bg-green-100 blur-2xl opacity-60" />

              <div className="absolute top-10 left-10 w-14 h-14 bg-white rounded-full shadow flex items-center justify-center">
                <CreditCard className="text-green-700 w-6 h-6" />
              </div>

              <div className="absolute top-16 right-8 w-14 h-14 bg-white rounded-full shadow flex items-center justify-center">
                <Wallet className="text-green-700 w-6 h-6" />
              </div>

              <div className="absolute bottom-16 left-14 w-14 h-14 bg-white rounded-full shadow flex items-center justify-center">
                <Globe className="text-green-700 w-6 h-6" />
              </div>

              <div className="absolute bottom-10 right-16 w-14 h-14 bg-white rounded-full shadow flex items-center justify-center">
                <ShieldCheck className="text-green-700 w-6 h-6" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full shadow-md flex items-center justify-center text-sm text-green-700 font-medium">
                  Payments Flow
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PARTNERS */}
        <div className="border-t border-green-100 mt-12 sm:mt-14 pt-6 pb-10">
          <div className="flex flex-col md:flex-row slg:flex-row items-start lg:items-center justify-between gap-8">
            {/* LEFT */}
            <div className="text-left w-full lg:w-auto">
              <p className="text-sm font-medium text-[#011B33] mb-3">
                Trusted by over 200,000 businesses
              </p>

              <div className="flex flex-nowrap items-center gap-3 sm:gap-4">
                {logos.slice(0, 3).map((logo, i) => (
                  <div
                    key={i}
                    className="w-[90px] sm:w-[100px] h-[28px] flex items-center justify-center shrink-0">
                    <img
                      src={logo}
                      className="object-contain max-h-full"
                      alt="logo"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-full flex justify-start lg:justify-end">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 max-w-[470px]">
                <p className="text-sm sm:text-base text-[#011B33] md:text-end font-semibold leading-6 sm:leading-7 md:max-w-[320px] line-clamp-2">
                  Watch MTN Chief Transformation Officer, Olubayo Adekanmbi,
                  discuss working with Paystack
                </p>

                <button
                  onClick={() => setOpenVideo(true)}
                  className="w-10 h-10 bg-[#00C3F7] rounded-full flex items-center justify-center shrink-0 md:shrink-0">
                  <Play className="text-white w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
