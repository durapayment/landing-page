"use client";

export const GlobalPartners = () => {
  const cards = [
    {
      image: "/stripe.png",
      text: "Durapayment is highly technical and fanatically customer oriented.",
      footerImage: "/patrick.jpg",
      name: "Patrick Collison",
      role: "CEO, Stripe",
    },
    {
      image: "/VISA.png",
      text: "Our investment in Paystack aligns with the kind of investments we look for.",
      footerImage: "/otto-williams.jpeg",
      name: "Otto Williams",
      role: "CEO, Visa",
    },
    {
      image: "/y.png",
      text: "As YC's first Nigerian startup, Paystack leads the charge of great companies.",
      footerImage: "/michael-siebel.jpeg",
      name: "Michael Seibel",
      role: "Partner, Y Combinator",
    },
  ];

  return (
    <section className="w-full bg-white px-4 sm:px-8 md:px-12 py-16 mt-20 md:mt-28">
      <div className="w-full max-w-7xl mx-auto">
        {/* TEXT SECTION */}
        <div className="w-full max-w-2xl text-left mb-12">
          <h1 className="mb-4 text-[24px] sm:text-[40px] md:text-[48px] font-bold text-[#011B33] leading-tight">
            Backed by strong global partners
          </h1>

          <p className="text-sm sm:text-base md:text-[20px] text-[#011B33] leading-8">
            Durapayment is backed by notable investors as well as some of the
            best payments companies on the planet.
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
                  index === 2 ? "w-[30px] sm:w-[65px]" : "w-[45px] sm:w-[100px]"
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
  );
};
