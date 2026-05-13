"use client";

import { motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";

/* =========================
   STYLES
========================= */
const HEADING_CLASS =
  "text-[42px] sm:text-[30px] md:text-[40px] font-bold text-[rgb(1,27,51)] leading-[1.1] mb-4";

const PARAGRAPH_CLASS =
  "text-[16px] md:text-[18px] text-[rgb(1,27,51)] leading-7";

const SECTION_WRAPPER =
  "w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-16";

const IMAGE_BOX =
  "w-full max-w-[500px] h-[320px] md:h-[400px] rounded-2xl overflow-hidden";
/* =========================
   MAIN COMPONENT
========================= */
export const EntrepreneurMid = ({
  cards = [
    { image: "/wordpress.svg" },
    { image: "/shopify.svg" },
    { image: "/opencart.svg" },
    { image: "/joomla.svg" },
    { image: "/magento.svg" },
    { image: "/prestashop.svg" },
    { image: "/squarespace.svg" },
    { image: "/wix.svg" },
  ],
}) => {
  return (
    <>
      {/* SECTION 1 */}
      <section className="w-full bg-green-50 pt-20 pb-20 md:pt-24 flex items-center">
        <div className="w-full max-w-310 mx-auto px-4 sm:px-8 md:px-12">
          {/* TEXT */}
          <div className="w-full max-w-2xl text-left mb-12">
            <h1 className="mb-4 text-[24px] sm:text-[40px] md:text-[48px] font-bold text-[#011B33] leading-tight">
              Accept payments on all major shopping platforms
            </h1>

            <p className="text-sm sm:text-base md:text-[20px] text-[#011B33] leading-8">
              Do you have a website built on any of these platforms? If so you
              can start accepting payments in minutes!
            </p>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
            {cards.map((card, index) => (
              <div
                key={index}
                className="
                  group
                  bg-black
                  hover:bg-white
                  border border-white/10
                  hover:border-gray-300
                  rounded-2xl

                  w-full max-w-[240px] h-[180px]

                  flex items-center justify-center

                  p-6

                  transition-all duration-300
                  hover:shadow-2xl
                  cursor-pointer
                ">
                <img
                  src={card.image}
                  alt="partner logo"
                  className="text-black
                    w-[70px]
                    h-auto
                    object-contain
                    transition-all duration-300

                    group-hover:scale-110
                    brightness-100 group-hover:brightness-0
                  "
                />
              </div>
            ))}
            <div className="flex items-center gap-2 mt-6 cursor-pointer group">
              <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center group-hover:bg-green-500 transition">
                <ChevronRight className="w-4 h-4 text-green-600 group-hover:text-white" />
              </div>

              <p className="group-hover:text-green-600 transition">
                See all plugins
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <div className={SECTION_WRAPPER}>
        <div className="flex-1 max-w-xl">
          <h3 className={HEADING_CLASS}>
            Get paid by customers from anywhere in the world
          </h3>

          <p className={PARAGRAPH_CLASS}>
            The internet has no borders, and neither should your business. With
            Durapayment, you can accept payments from international customers,
            wherever they are in the world.
          </p>
          <p className={`${PARAGRAPH_CLASS} mt-10`}>
            You can accept payments from internationally-issued cards, display
            prices in USD, and also get settled in USD.
          </p>
          <p className={`${PARAGRAPH_CLASS} mt-10`}>
            We also make available localized payment options - such as mobile
            money - that are popular in certain regions of the world.
          </p>
        </div>
        <div className="flex-1 flex justify-center md:justify-start">
          <div className={IMAGE_BOX}>
            <img
              src="/twohands.gif"
              className="w-full h-full object-cover"
              alt="payment"
            />
          </div>
        </div>
      </div>
    </>
  );
};
