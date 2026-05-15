"use client";

import { Check, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";

/* =========================
   STYLES
========================= */
const HEADING_CLASS =
  "text-[52px] sm:text-[30px] md:text-[40px] font-bold text-[#011B33] leading-[1.1] mb-4";

const PARAGRAPH_CLASS = "text-[16px] md:text-[18px] text-[#011B33] leading-7";

const SECTION_WRAPPER =
  "w-full max-w-[1300px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 py-16";

const IMAGE_BOX =
  "w-full max-w-[200px] h-[220px] sm:h-[240px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg";

export const Testimonial = () => {
  const sections = [
    {
      image: "/sellcommerce.png",
      title: "Sell more online with free, powerful commerce tools",
      text: "Bring your ideas to market beautifully and boost sales with our toolkit of free commerce tools.",
      points: [
        "No website? No problem. Collect payments with customisable selling links",
        "Manage incoming orders on web and mobile",
        "Simple, powerful inventory management",
        "Easy plugins and integrations with thousands of world-class seller platforms",
      ],
      ctaText: "Sell more online with {siteConfig.name} Commerce",
    },
  ];

  const cards = [
    {
      image: "/stripe.png",
      text: "{siteConfig.name} has been amazing for my business. I no longer worry over whether a customer will pay, I simply send them a {siteConfig.name} Payment Page link.",
      footerImage: "/patrick.jpg",
      name: "Patrick Collison",
      role: "CEO, Stripe",
    },
    {
      image: "/VISA.png",
      text: "{siteConfig.name} has helped us expand our business reach & accept payments from customers worldwide.{siteConfig.name} is also very easy to use, even for non-techies.",
      footerImage: "/otto-williams.jpeg",
      name: "Otto Williams",
      role: "CEO, Visa",
    },
    {
      image: "/y.png",
      text: "Since we switched to {siteConfig.name}, our customers always commend how easy payments have become. The website and mobile options are also very easy to use.",
      footerImage: "/michael-siebel.jpeg",
      name: "Michael Seibel",
      role: "Partner, Y Combinator",
    },
  ];

  return (
    <>
      {/* TESTIMONIAL SECTION */}
      <section className="w-full px-4 sm:px-8 md:px-12 py-16 mt-20 md:mt-28">
        <div className="w-full max-w-[1300px] mx-auto">
          {/* TEXT SECTION */}
          <div className="w-full max-w-2xl text-left mb-12">
            <h1 className="mb-4 text-[24px] sm:text-[40px] md:text-[48px] font-bold text-[#011B33] leading-tight">
              Customer Testimonials
            </h1>

            <p className="text-sm sm:text-base md:text-[20px] text-[#011B33] leading-8">
              Over 40,000 businesses trust {siteConfig.name} to power payments.
              Here's what some of them have to say.
            </p>
          </div>

          {/* CARD SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between min-h-[320px]">
                {/* Top Logo */}
                <div
                  className={`${
                    index === 2
                      ? "w-[30px] sm:w-[65px]"
                      : "w-[45px] sm:w-[100px]"
                  }`}>
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Testimonial */}
                <p className="text-[14px] leading-6 text-[#011B33] mt-4 flex-grow">
                  {card.text}
                </p>

                {/* Footer */}
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={card.footerImage}
                      alt={card.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#011B33]">
                      {card.name}
                    </h4>
                    <p className="text-sm text-gray-600">{card.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      {sections.map((item, index) => {
        const isImageLeft = index % 2 === 0;

        return (
          <div key={index} className={SECTION_WRAPPER}>
            {/* IMAGE LEFT */}
            {isImageLeft && (
              <div className="flex-1 flex justify-center md:justify-start">
                <div className={IMAGE_BOX}>
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt="payment"
                  />
                </div>
              </div>
            )}

            {/* TEXT */}
            <div className="flex-1 max-w-xl">
              <h3 className={HEADING_CLASS}>{item.title}</h3>

              {item.text && <p className={PARAGRAPH_CLASS}>{item.text}</p>}

              {item.points && (
                <ul className="mt-6 space-y-3">
                  {item.points.map((text, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="text-green-600 w-4 h-4" />
                      <span className="font-bold">{text}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.ctaText && (
                <div className="flex items-center gap-2 mt-6 cursor-pointer">
                  <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-green-600" />
                  </div>

                  <p className="text-green-600 font-bold">{item.ctaText}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};
