"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { siteConfig } from "@/config/site";
import { RiArrowDropDownFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

export const PricingPage = () => {
  return (
    <section className="w-full max-h-419.5  bg-tertiary/10 overflow-hidden">
      <div className="max-w-310 mx-auto flex items-center  mt-20 justify-between py-2 px-5 sm:px-8 md:px-12 lg:px-0">
        {/* HERO */}
        <div className="max-w-310 h-full mx-auto px-5 sm:px-8 md:px-12 lg:px-6 xl:px-0">
          <div className="py-10 mt-20 md:py-16 lg:grid-cols-2 items-center gap-10 lg:gap-20">
            {/* TEXT BLOCK */}

            <div className="w-full mb-10 md:pl-20 lg:pl-32">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <p>Pricing for</p>

                  <div className="relative ">
                    <select className="appearance-none border border-gray-300 rounded-xs px-2.5  pr-10 bg-white font-bold cursor-pointer outline-none focus:ring-1 focus:ring-blue-500">
                      <option>Nigeria</option>
                      <option>Ghana</option>
                      <option>Kenya</option>
                      <option>South Africa</option>
                      <option>Cameroon</option>
                    </select>
                  </div>
                </div>
              </div>

              <h1
                style={{
                  fontFamily:
                    'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                  fontWeight: 700,
                  lineHeight: "1.1",
                  color: "rgb(1, 27, 51)",
                }}
                className="max-w-150 mt-2 mb-2 sm:mb-6 tracking-[-0.03em] text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] md:leading-[1.1]">
                Simple, fair pricing
              </h1>

              <p className="max-w-150 text-[#011B33] mb-2 text-sm sm:text-base md:text-lg leading-5">
                Durapayment only makes money when you do.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:grid-cols-2 gap-6 max-w-310 justify-center mx-auto  px-6">
        {/* Local Transactions Card */}
        <div className="max-w-123.5 border rounded-2xl shadow-sm px-7 py-10 bg-white">
          <p
            className="mb-2"
            style={{
              fontFamily:
                'Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
              color: "rgb(1, 27, 51)",
            }}>
            For Local Transactions
          </p>

          <h3
            className="mb-10"
            style={{
              fontFamily:
                'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              fontSize: "43.2px",
              fontWeight: 800,
              lineHeight: "51.84px",
              color: "rgb(1, 27, 51)",
            }}>
            1.5% + NGN 100
          </h3>

          <div className="space-y-4">
            <p
              className=" flex mb-2"
              style={{
                fontFamily:
                  'Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
                color: "rgb(1, 27, 51)",
              }}>
              <span className="text-green-600 mt-1">
                <TiTick />
              </span>
              ₦100 fee waived for transactions under ₦2500
            </p>

            <p
              className="flex mb-2"
              style={{
                fontFamily:
                  'Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
                color: "rgb(1, 27, 51)",
              }}>
              <span className="text-green-600 mt-1">
                <TiTick />
              </span>
              Local transaction fees are capped at ₦2000, meaning that’s the{" "}
              <br />
              maximum you’ll ever pay per transaction.
            </p>
          </div>
        </div>

        {/* International Transactions Card */}
        <div className="max-w-123.5 border rounded-2xl shadow-sm px-7 py-10 bg-white">
          <p
            className=" mb-2"
            style={{
              fontFamily:
                'Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
              color: "rgb(1, 27, 51)",
            }}>
            For International Transactions
          </p>

          <h3
            className=" mb-10"
            style={{
              fontFamily:
                'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              fontSize: "43.2px",
              fontWeight: 800,
              lineHeight: "51.84px",
              color: "rgb(1, 27, 51)",
            }}>
            3.9% + NGN 100
          </h3>

          <div className="space-y-4">
            <p
              className="flex mb-2"
              style={{
                fontFamily:
                  'Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
                color: "rgb(1, 27, 51)",
              }}>
              <span className="text-green-600 mt-1">
                <TiTick />
              </span>
              Accept payments from customers anywhere in the world.
            </p>

            <p
              className=" flex mb-2"
              style={{
                fontFamily:
                  'Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
                color: "rgb(1, 27, 51)",
              }}>
              <span className="text-green-600 mt-1">
                <TiTick />
              </span>
              Transparent pricing with no hidden charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
