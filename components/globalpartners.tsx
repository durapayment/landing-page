"use client";

<<<<<<< HEAD
=======
import { siteConfig } from "@/config/site";
import { ChevronRight } from "lucide-react";

>>>>>>> 7950765958f39b213fb4d4569fc7712d7412dc55
export const GlobalPartners = () => {
  const cards = [
    {
      image: "/stripe.png",
      text: "Durapaymwent is highly technical and fanatically customer oriented.",
      footerImage: "/patrick.jpg",
      name: "Patrick Collison",
      role: "CEO, Stripe",
    },
    {
      image: "/VISA.png",
      text: "Our investment in Paystack aligns with the kind of investments we look for.",
      footerImage: "/visa-ceo.jpg",
      name: "Ryan McInerney",
      role: "CEO, Visa",
    },
    {
<<<<<<< HEAD
      image: "/y.png",
      text: "As YC's first Nigerian startup Paystack leads the charge of great companies.",
      footerImage: "/yc-founder.jpg",
      name: "Michael Seibel",
      role: "Partner, Y Combinator",
=======
      image: "/for-Large-Corporations.svg",
      title: "Durapayment for Large Corporations",
      text: `${siteConfig.name} helps many of the largest corporate and government organizations in Nigeria get paid quickly and securely.`,
      footer: "Learn More",
>>>>>>> 7950765958f39b213fb4d4569fc7712d7412dc55
    },
  ];

  return (
    <section className="w-full bg-whitepx-4 py-16 sm:px-8 md:px-12 mt-20 md:mt-28">
      <div className="w-full max-w-[1300px] mx-auto">
        {/* TEXT SECTION */}
<<<<<<< HEAD
        <div className="w-full max-w-2xl text-left mb-12">
          <h1 className="mb-4 text-[24px] sm:text-[52px] md:text-[48px] font-bold text-[#011B33]">
            Backed by strong global partners
          </h1>

          <p className="text-sm sm:text-base md:text-[20px] text-[#011B33] leading-8">
            Paystack is backed by notable investors as well as some of the best
            payments companies on the planet.
=======
        <div className="w-full max-w-2xl text-left mb-10 sm:mb-12 md:mb-14">
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
>>>>>>> 7950765958f39b213fb4d4569fc7712d7412dc55
          </p>
        </div>

        {/* CARD SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
<<<<<<< HEAD
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between max-h-[360px]">
              <div className="w-[50px] sm:w-[85px]">
=======
              className="bg-white rounded-2xl shadow-md p-5 sm:p-6 flex flex-col gap-4 sm:gap-5"
            >
              {/* IMAGE */}
              <div className="w-full max-w-[100px] sm:max-w-[117px]">
>>>>>>> 7950765958f39b213fb4d4569fc7712d7412dc55
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-auto object-contain"
                />
              </div>

              <p className="text-[14px] leading-6 text-[#011B33] mt-4">
                {card.text}
              </p>

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
  );
};
