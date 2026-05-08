"use client";

import { ChevronRight } from "lucide-react";

export const BusinessGrowth = () => {
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
    <section className="w-full flex flex-col max-h-229.75 items-center justify-center bg-[green-50] px-4 pb-30 sm:px-6 md:px-16 mb-30 sm:mb-20">
      <div className="w-full max-w-6xl pt-12 sm:pt-16 md:pt-20">
        {/* TEXT SECTION */}
        <div className="max-w-2xl text-center md:text-left mb-10 sm:mb-12 md:mb-14">
          <h1
            style={{
              fontFamily:
                'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 800,
              lineHeight: "1.2",
              color: "rgb(1, 27, 51)",
            }}
            className="mb-4 sm:mb-6 text-[24px] sm:text-[32px] md:text-[48px]"
          >
            Trusted by 200,000+ businesses across Africa
          </h1>

          <p
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              lineHeight: "30px",
              color: "rgb(1, 27, 51)",
            }}
            className="text-sm sm:text-base md:text-[20px]"
          >
            Thousands of organizations of all sizes trust {siteConfig.name} to
            grow their business.
          </p>
        </div>

        {/* CARD SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-5 sm:p-6 flex flex-col gap-4 sm:gap-5"
            >
              {/* IMAGE */}
              <div className="w-full max-w-[120px] sm:max-w-[117px] h-auto">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* TITLE */}
              <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-snug text-[rgb(1,27,51)] font-['Boing',system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]">
                {card.title}
              </h2>

              {/* TEXT */}
              <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-6 sm:leading-[25.6px] text-[rgb(1,27,51)] font-['Graphik',system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]">
                {card.text}
              </p>

              {/* FOOTER */}
              <div className="flex items-center gap-2 mt-auto pt-6 group cursor-pointer">
                {/* CIRCLE + ICON */}
                <div className="w-6 h-6 rounded-full bg-white border border-green-500 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-green-500">
                  <ChevronRight className="w-4 h-4 text-green-600 transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* TEXT */}
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
