"use client";

import { siteConfig } from "@/config/site";
import { ChevronRight } from "lucide-react";

export const WhyDurapayLastSection = () => {
  const cards = [
    {
      image: "/for-international.svg",
      title: "Durapayment for Global Brands",
      text: "We help global brands accept payments from across Africa",
      footer: "Learn More",
    },
    {
      image: "/for-Entrepreneurs.svg",
      title: "Durapayment for Entrepreneurs",
      text: "Grow your business with our intuitive payment solutions designed for entrepreneurs.",
      footer: "Learn More",
    },
    {
      image: "/for-Large-Corporations.svg",
      title: "Durapayment for Large Corporations",
      text: `${siteConfig.name} helps many of the largest corporate and government organizations in Nigeria get paid quickly and securely.`,
      footer: "Learn More",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center bg-[#eaf6fc] pt-10 px-4 pb-20 sm:px-8 md:px-12 mb-10 sm:mb-20">
      {/* WIDTH FIXED TO MATCH MID SECTION */}
      <div className="w-full max-w-310 mx-auto pt-12 sm:pt-16 md:pt-20">
        {/* TEXT SECTION */}
        <div className="w-full max-w-2xl text-left mb-10 sm:mb-12 md:mb-14">
          <h1
            style={{
              fontFamily:
                'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 800,
              lineHeight: "1.2",
              color: "rgb(1, 27, 51)",
            }}
            className="mb-4 sm:mb-6 text-[24px] sm:text-[32px] md:text-[48px]">
            See how Paystack can help your specific business
          </h1>
        </div>

        {/* CARD SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-5 sm:p-6 flex flex-col gap-4 sm:gap-5">
              {/* IMAGE */}
              <div className="w-full max-w-[140px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* TITLE */}
              <h2 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold leading-snug text-[rgb(1,27,51)]">
                {card.title}
              </h2>

              {/* TEXT */}
              <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-6 text-[rgb(1,27,51)]">
                {card.text}
              </p>

              {/* FOOTER */}
              <div className="flex items-center gap-2 mt-auto pt-4 group cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-white border border-green-500 flex items-center justify-center shrink-0 transition group-hover:bg-green-500">
                  <ChevronRight className="w-4 h-4 text-green-600 group-hover:text-white" />
                </div>

                <p className="text-sm font-medium text-[#011B33]">
                  {card.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
