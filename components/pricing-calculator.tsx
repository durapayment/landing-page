"use client";

import { useState, useMemo } from "react";
import { TiTick } from "react-icons/ti";

/* ================= CALCULATOR ================= */

function FeeCalculator() {
  const [amount, setAmount] = useState(2000);

  const feeRate = 0.015;
  const feeCap = 2000;

  const fee = useMemo(() => {
    const calculated = amount * feeRate;
    return Math.min(calculated, feeCap);
  }, [amount]);

  const settlement = useMemo(() => {
    return amount - fee;
  }, [amount, fee]);

  return (
    <div className="w-full max-w-xl border rounded-2xl p-8 shadow-sm bg-blue-950">
      <h2 className="text-xl font-semibold text-[#011B33] mb-6">
        Fee Calculator
      </h2>

      <div className="mb-8">
        <label className="text-sm text-gray-500">Your Customer Pays</label>

        <div className="flex items-center gap-2 mt-2 border rounded-xl px-4 py-3">
          <span className="text-[#011B33] font-medium">NGN</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full outline-none text-lg font-semibold text-[#011B33]"
          />
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex justify-between">
          <p className="text-gray-500">We'll settle you</p>
          <p className="font-semibold text-[#011B33]">
            NGN {settlement.toLocaleString()}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-500">
            Paystack Fees ({(feeRate * 100).toFixed(1)}%)
          </p>
          <p className="font-semibold text-[#011B33]">
            NGN {fee.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-2 text-sm text-gray-500">
        <p className="flex items-center gap-2">
          <TiTick className="text-green-600" />
          Free, automatic settlement within 24 hours
        </p>
        <p className="flex items-center gap-2">
          <TiTick className="text-green-600" />
          Local fees capped at NGN 2,000
        </p>
        <p className="flex items-center gap-2">
          <TiTick className="text-green-600" />
          No hidden fees or charges
        </p>
        <p className="flex items-center gap-2">
          <TiTick className="text-green-600" />
          Zero integration fee
        </p>
        <p className="flex items-center gap-2">
          <TiTick className="text-green-600" />
          Zero maintenance fee
        </p>
      </div>
    </div>
  );
}

/* ================= PAGE SECTION ================= */

export default function CalculatorSection() {
  return (
    <section className="w-full min-h-svh bg-tertiary/10">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* TEXT */}
          <div className="space-y-4 max-w-md">
            <h3 className="text-3xl font-bold text-[#011B33]">Do the math</h3>

            <p className="text-gray-600 leading-relaxed">
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
