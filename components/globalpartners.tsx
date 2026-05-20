"use client";

import { siteConfig } from "@/config/site";

const cards = [
  {
    image: "/stripe.png",
    quote: "Durapayment is highly technical and fanatically customer oriented.",
    avatar: "/patrick.jpg",
    name: "Patrick Collison",
    role: "CEO, Stripe",
    logoWidth: "w-20",
  },
  {
    image: "/visa.png",
    quote:
      "Our investment aligns perfectly with the kind of companies we back — ones that move fast and build for scale.",
    avatar: "/otto-williams.jpeg",
    name: "Otto Williams",
    role: "Head of Strategic Partnerships, Visa",
    logoWidth: "w-16",
  },
  {
    image: "/y.png",
    quote:
      "One of the most impressive teams we've seen — exceptional execution and a clear vision for the future of payments.",
    avatar: "/michael-siebel.jpeg",
    name: "Michael Seibel",
    role: "Partner, Y Combinator",
    logoWidth: "w-8",
  },
];

export const GlobalPartners = () => {
  return (
    <section className="w-full bg-[#f8fafb] px-5 sm:px-8 md:px-12 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-[11px] font-medium tracking-widest uppercase rounded-full px-3 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Trusted by the best
          </div>

          <h2
            style={{
              fontFamily: "Boing, Georgia, serif",
              fontWeight: 700,
              lineHeight: "1.1",
              color: "rgb(1, 27, 51)",
              letterSpacing: "-0.025em",
            }}
            className="text-[28px] sm:text-[38px] md:text-[46px] mb-4">
            Backed by strong global partners
          </h2>

          <p className="text-base md:text-lg text-gray-500 leading-relaxed font-light">
            {siteConfig.name} is backed by notable investors and some of the
            most respected payments companies on the planet.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-7 flex flex-col justify-between min-h-[300px] hover:shadow-md transition-shadow duration-300">
              {/* Logo */}
              <div className={`${card.logoWidth} mb-6`}>
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Quote */}
              <p className="text-[15px] leading-7 text-[#011B33] flex-grow font-light">
                "{card.quote}"
              </p>

              {/* Divider */}
              <div className="border-t border-gray-100 mt-6 pt-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 shrink-0">
                    <img
                      src={card.avatar}
                      alt={card.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#011B33] leading-tight">
                      {card.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{card.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
