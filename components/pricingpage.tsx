"use client";

import { TiTick } from "react-icons/ti";

export const PricingPage = () => {
  return (
    <section className="w-full bg-tertiary/10 overflow-hidden">
      {/* HERO WRAPPER */}
      <div className="max-w-310 mx-auto flex flex-col items-center justify-between mt-10 sm:mt-16 px-5 sm:px-8 md:px-12 pt-20 lg:px-0">
        {/* HERO TEXT */}
        <div className="w-full text-center lg:text-center md:pl-10 lg:pl-20">
          {/* <div className="flex items-center justify-center lg:justify-start gap-2">
            <p>Pricing for</p>

            <select className="appearance-none border border-gray-300 rounded px-3 pr-10 bg-white font-bold cursor-pointer outline-none focus:ring-1 focus:ring-blue-500">
              <option>Nigeria</option>
              <option>Ghana</option>
              <option>Kenya</option>
              <option>South Africa</option>
              <option>Cameroon</option>
            </select>
          </div> */}

          <h3
            style={{
              fontFamily:
                'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 700,
              lineHeight: "1.1",
              color: "rgb(1, 27, 51)",
            }}
            className="mt-3 mb-3 sm:mb-6 tracking-[-0.03em] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px]">
            Simple, fair pricing
          </h3>

          <p className="text-[#011B33] text-center  text-sm sm:text-base md:text-lg leading-6 max-w-xl mx-auto lg:mx-auto">
            Durapayment only makes money when you do.
          </p>
        </div>
      </div>

      {/* CARDS WRAPPER */}
      <div className="max-w-310 mx-auto px-5 sm:px-8 md:px-12 lg:px-0 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {/* LOCAL CARD */}
        <div className="border rounded-2xl shadow-sm px-5 sm:px-7 py-8 sm:py-10 bg-white">
          <p className="text-sm sm:text-base font-medium text-[#011B33] mb-3">
            For Local Transactions
          </p>

          <h3 className="text-2xl sm:text-3xl lg:text-[43px] font-extrabold text-[#011B33] mb-6 sm:mb-10 leading-tight">
            1.5% + NGN 100
          </h3>

          <div className="space-y-4">
            <p className="flex gap-2 text-sm sm:text-base text-[#011B33]">
              <TiTick className="text-green-600 mt-1 flex-shrink-0" />
              ₦100 fee waived for transactions under ₦2500
            </p>

            <p className="flex gap-2 text-sm sm:text-base text-[#011B33]">
              <TiTick className="text-green-600 mt-1 flex-shrink-0" />
              Local transaction fees are capped at ₦2000, meaning that’s the
              maximum you’ll ever pay per transaction.
            </p>
          </div>
        </div>

        {/* INTERNATIONAL CARD */}
        <div className="border rounded-2xl shadow-sm px-5 sm:px-7 py-8 sm:py-10 bg-white">
          <p className="text-sm sm:text-base font-medium text-[#011B33] mb-3">
            For International Transactions
          </p>

          <h3 className="text-2xl sm:text-3xl lg:text-[43px] font-extrabold text-[#011B33] mb-6 sm:mb-10 leading-tight">
            3.9% + NGN 100
          </h3>

          <div className="space-y-4">
            <p className="flex gap-2 text-sm sm:text-base text-[#011B33]">
              <TiTick className="text-green-600 mt-1 flex-shrink-0" />
              Accept payments from customers anywhere in the world.
            </p>

            <p className="flex gap-2 text-sm sm:text-base text-[#011B33]">
              <TiTick className="text-green-600 mt-1 flex-shrink-0" />
              Transparent pricing with no hidden charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
