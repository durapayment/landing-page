"use client";

import { useState, useMemo } from "react";
import { TiTick } from "react-icons/ti";

export const TransfersSection = () => {
  return (
    <section className="w-full bg-white mt-20 mb-32 py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* TRANSFERS */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#011B33]">Transfers</h2>

          <div className="text-[#011B33] text-[16px] leading-6 divide-y">
            <div className="flex justify-between items-start py-6">
              <p className="flex items-start gap-3 max-w-[60%] leading-relaxed">
                <TiTick className="text-green-600 mt-1 shrink-0" />
                Transfers of NGN 5,000 and below
              </p>
              <p className="font-medium whitespace-nowrap">
                NGN 10 per Transfer
              </p>
            </div>

            <div className="flex justify-between items-start py-6">
              <p className="flex items-start gap-3 max-w-[60%] leading-relaxed">
                <TiTick className="text-green-600 mt-1 shrink-0" />
                Transfers between NGN 5,001 and NGN 50,000
              </p>
              <p className="font-medium whitespace-nowrap">
                NGN 25 per Transfer
              </p>
            </div>

            <div className="flex justify-between items-start py-6">
              <p className="flex items-start gap-3 max-w-[60%] leading-relaxed">
                <TiTick className="text-green-600 mt-1 shrink-0" />
                Transfers above NGN 50,000
              </p>
              <p className="font-medium whitespace-nowrap">
                NGN 50 per Transfer
              </p>
            </div>
          </div>
        </div>

        {/* VIRTUAL ACCOUNTS */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#011B33]">
            Virtual Accounts
          </h2>

          <div className="text-[#011B33] text-[16px] leading-6 divide-y">
            <div className="flex justify-between items-start py-6">
              <p className="flex items-start gap-3 max-w-[60%] leading-relaxed">
                <TiTick className="text-green-600 mt-1 shrink-0" />
                Dedicated Virtual Accounts (DVA)
              </p>
              <p className="font-medium whitespace-nowrap">
                1% per transaction (capped at NGN 300)
              </p>
            </div>
          </div>
        </div>

        {/* DIGITAL PAYMENTS */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#011B33]">
            Digital Payments
          </h2>

          <div className="text-[#011B33] text-[16px] leading-6 divide-y">
            <div className="flex justify-between items-start py-6">
              <p className="flex items-start gap-3 max-w-[60%] leading-relaxed">
                <TiTick className="text-green-600 mt-1 shrink-0" />
                USSD Transactions
              </p>
              <p className="font-medium whitespace-nowrap">
                1.5% + NGN 100 (capped at NGN 2,000)
              </p>
            </div>

            <div className="flex justify-between items-start py-6">
              <p className="flex items-start gap-3 max-w-[60%] leading-relaxed">
                <TiTick className="text-green-600 mt-1 shrink-0" />
                Local Card Transactions
              </p>
              <p className="font-medium whitespace-nowrap">
                1.5% + NGN 100 (capped at NGN 2,000)
              </p>
            </div>

            <div className="flex justify-between items-start py-6">
              <p className="flex items-start gap-3 max-w-[60%] leading-relaxed">
                <TiTick className="text-green-600 mt-1 shrink-0" />
                International Card Transactions
              </p>
              <p className="font-medium whitespace-nowrap">3.9% + NGN 100</p>
            </div>
          </div>
        </div>

        {/* PHYSICAL TERMINAL */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#011B33]">
            Physical Terminal
          </h2>

          <div className="text-[#011B33] text-[16px] leading-6 divide-y">
            <div className="flex justify-between items-start py-6">
              <p className="flex items-start gap-3 max-w-[60%] leading-relaxed">
                <TiTick className="text-green-600 mt-1 shrink-0" />
                Live SmartPeak P1000
              </p>
              <p className="font-medium whitespace-nowrap">
                NGN 100,000 per device
              </p>
            </div>

            <div className="flex justify-between items-start py-6">
              <p className="flex items-start gap-3 max-w-[60%] leading-relaxed">
                <TiTick className="text-green-600 mt-1 shrink-0" />
                Test SmartPeak P1000
              </p>
              <p className="font-medium whitespace-nowrap">
                NGN 85,000 per device
              </p>
            </div>

            <div className="flex justify-between items-start py-6">
              <p className="flex items-start gap-3 max-w-[60%] leading-relaxed">
                <TiTick className="text-green-600 mt-1 shrink-0" />
                Card Transactions on Terminal
              </p>
              <p className="font-medium whitespace-nowrap">
                0.5% capped at NGN 1,000
              </p>
            </div>

            <div className="flex justify-between items-start py-6">
              <p className="flex items-start gap-3 max-w-[60%] leading-relaxed">
                <TiTick className="text-green-600 mt-1 shrink-0" />
                Card Transactions (International)
              </p>
              <p className="font-medium whitespace-nowrap">4.5% + NGN 100</p>
            </div>

            <div className="flex justify-between items-start py-6">
              <p className="flex items-start gap-3 max-w-[60%] leading-relaxed">
                <TiTick className="text-green-600 mt-1 shrink-0" />
                USSD Transactions on Terminal
              </p>
              <p className="font-medium whitespace-nowrap">
                1.5% + NGN 100 (capped at NGN 2,000)
              </p>
            </div>

            <div className="flex justify-between items-start py-6">
              <p className="flex items-start gap-3 max-w-[60%] leading-relaxed">
                <TiTick className="text-green-600 mt-1 shrink-0" />
                Bank Transfers on Terminal
              </p>
              <p className="font-medium whitespace-nowrap">
                1.5% + NGN 100 (capped at NGN 2,000)
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};



