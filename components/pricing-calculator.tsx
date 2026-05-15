"use client";

import { useState, useMemo } from "react";
import { TiTick } from "react-icons/ti";

/* ================= CALCULATOR ================= */

function FeeCalculator() {
  const [amount, setAmount] = useState("2000");

  const feeRate = 0.015;
  const feeCap = 2000;

  const numericAmount = Number(amount) || 0;

  const fee = useMemo(() => {
    const calculated = numericAmount * feeRate;
    return Math.min(calculated, feeCap);
  }, [numericAmount]);

  const settlement = useMemo(() => {
    return numericAmount - fee;
  }, [numericAmount, fee]);

  const handleChange = (e: any) => {
    let value = e.target.value;

    // Allow only numbers
    value = value.replace(/\D/g, "");

    // Limit to 11 digits
    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    setAmount(value);
  };

  return (
    <div className="w-full max-w-xl text-white rounded-2xl px-8 py-10 shadow-sm bg-[#011b33]">
      <h2 className="text-xl font-semibold text-white mb-6">Fee Calculator</h2>

      <div className="mb-8">
        <label className="text-sm text-white">Your Customer Pays</label>

        <div className="flex items-center gap-2 mt-2 border rounded-xl px-4 py-3">
          <span className="text-white font-medium">NGN</span>

          <input
            type="text"
            value={amount}
            onChange={handleChange}
            placeholder="Enter amount"
            className="w-full outline-none text-sm font-semibold text-white bg-transparent"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <p className="text-white opacity-70">We'll settle you</p>
          <p className="font-semibold text-white">
            NGN {settlement.toLocaleString()}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-white opacity-70">
            DuraPayment Fees ({(feeRate * 100).toFixed(1)}%)
          </p>
          <p className="font-semibold text-white">NGN {fee.toLocaleString()}</p>
        </div>
      </div>

      <div className="mt-8 space-y-2 border-b border-gray-500 pb-1 text-sm text-white opacity-70">
        <p className="flex items-center justify-between border-b pb-1 gap-2">
          Free, automatic settlement within 24 hours
          <TiTick className="text-green-600" />
        </p>

        <p className="flex items-center justify-between border-b pb-1 gap-2">
          Local fees capped at NGN 2,000
          <TiTick className="text-green-600" />
        </p>

        <p className="flex items-center justify-between border-b pb-1 gap-2">
          No hidden fees or charges
          <TiTick className="text-green-600" />
        </p>

        <p className="flex items-center justify-between border-b pb-1 gap-2">
          Zero integration fee
          <TiTick className="text-green-600 font-bold" />
        </p>

        <p className="flex items-center justify-between gap-2">
          Zero maintenance fee
          <TiTick className="text-green-600" />
        </p>
      </div>
    </div>
  );
}

/* ================= PAGE SECTION ================= */

export default function CalculatorSection() {
  return (
    <section className="w-full max-h-svh bg-tertiary/10">
      <div className="max-w-7xl mx-auto mt-20 pt-20 pb-20 px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* TEXT */}
          <div className="space-y-4 max-w-md">
            <h3
              className=" mb-10"
              style={{
                fontFamily:
                  'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                fontSize: "43.2px",
                fontWeight: 700,
                lineHeight: "51.84px",
                color: "rgb(1, 27, 51)",
              }}>
              Do the math
            </h3>

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
              See how much it costs to use Paystack. Enter an amount into the
              calculator to see our charges.
            </p>
          </div>

          {/* CALCULATOR */}
          <FeeCalculator />
        </div>
      </div>
    </section>
  );
}
