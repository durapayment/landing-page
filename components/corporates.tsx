"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { siteConfig } from "@/config/site";

/* =========================
   MID SECTION STYLES
========================= */
const HEADING_CLASS =
  "text-[52px] sm:text-[30px] md:text-[40px] font-bold text-[rgb(1,27,51)] leading-[1.1] mb-4";

const PARAGRAPH_CLASS =
  "text-[16px] md:text-[18px] text-[rgb(1,27,51)] leading-7";

const SECTION_WRAPPER =
  "w-full max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-16";

const IMAGE_BOX =
  "w-full max-w-[200px] h-[220px] sm:h-[240px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg";

export const Corporates = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const handleRedirect = () => {
    window.open("https://online.durapayment.com", "_blank");
  };

  const logos = [
    "/Dominos-Plain.svg",
    "/mtn-group-grayscale.svg",
    "/Bolt.svg",
    "/axa.svg",
  ];

  return (
    <section className="w-full bg-tertiary/10">
      {/* NAV */}
      <div className="max-w-[1300px] mx-auto flex items-center justify-between py-5 px-5 sm:px-8 md:px-12 lg:px-0">
        <button className="lg:hidden"></button>
      </div>

      {/* HERO */}
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12 lg:px-6 xl:px-0">
        <div className="py-16 md:py-24 lg:grid lg:grid-cols-2 items-center gap-10 lg:gap-20">
          <div className="w-full text-left justify-self-start">
            <p className="text-xs font-bold mb-4">DURAPAYMENT FOR CORPORATES</p>

            <h1
              style={{
                fontFamily:
                  'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                fontWeight: 800,
                lineHeight: "1.1",
                color: "rgb(1, 27, 51)",
              }}
              className="max-w-[600px] mb-5 sm:mb-6 tracking-[-0.03em] text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px]">
              A complete payments solution to power all scales of growth
            </h1>

            <p className="text-[#011B33] mb-7 text-sm sm:text-base md:text-lg leading-7">
              Durapayment helps many of the largest corporate and government
              <br />
              organizations in Nigeria get paid quickly and securely.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              <button
                onClick={handleRedirect}
                className="bg-accent cursor-pointer text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-md text-sm font-medium hover:bg-tertiary transition w-full sm:w-auto">
                Create a free account
              </button>

              <span className="text-[15px] cursor-pointer font-medium text-accent">
                or Contact Sales
              </span>
            </div>
          </div>
        </div>

        {/* PARTNERS */}
        <div className="border-t border-green-200 py-10">
          <div className="flex flex-col md:flex-row items-start lg:items-center justify-between gap-8">
            <div className="text-left w-full lg:w-auto">
              <p className="text-sm font-medium text-[#011B33] mb-3">
                Trusted by over 200,000 businesses
              </p>

              <div className="flex flex-nowrap items-center gap-3 sm:gap-4">
                {logos.slice(0, 3).map((logo, i) => (
                  <div
                    key={i}
                    className="w-[90px] sm:w-[100px] h-7 flex items-center justify-center shrink-0">
                    <img
                      src={logo}
                      className="object-contain max-h-full"
                      alt="logo"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full flex justify-start lg:justify-end">
              <div className="flex flex-row items-center gap-3 max-w-[470px]">
                <p className="text-sm sm:text-base text-[#011B33] md:text-end font-semibold leading-6 sm:leading-7 md:max-w-[320px]">
                  Watch {siteConfig.name}
                </p>

                <button
                  onClick={() => setVideoOpen(true)}
                  className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center">
                  <Play className="text-white w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MID SECTION */}
      <section className="w-full bg-white px-6 sm:px-8 md:px-12">
        <div className={SECTION_WRAPPER}>
          <div className="flex-1 max-w-xl">
            <h3 className={HEADING_CLASS}>
              Durapayment processes over 50% of all online transactions in
              Nigeria
            </h3>

            <p className={PARAGRAPH_CLASS}>
              From airlines to universities to state-wide tax collecting,
              Durapayment helps corporates and government bodies collect
              payments quickly and securely.
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-start">
            <div className={IMAGE_BOX}>
              <img
                src="/corporate.png"
                className="w-full h-full object-cover"
                alt="payment"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
