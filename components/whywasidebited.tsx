"use client";

import { useState } from "react";
export const WhyWasIDebitedPage = () => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [first6, setFirst6] = useState("");
  const [last4, setLast4] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [reason, setReason] = useState("");

  return (
    <section className="min-h-screen w-full bg-gray-50 flex items-center mt-20 justify-center overflow-hidden px-20 py-10">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-2xl p-6 md:p-10">
        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Why was I debited?
        </h1>

        <p className="mt-3 text-gray-600 leading-relaxed">
          Durapayment processes payments for over 200,000 businesses in Africa.
          When your debit alert reads
          <span className="font-semibold text-gray-900">{""} Durapayment</span>,
          it means the transaction was made to a business using Paystack for
          collections. Use the form below to identify the merchant.
        </p>

        {/* Form */}
        <div className="mt-8 space-y-6">
          {/* Amount */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Debited amount
            </label>
            <div className="mt-2 flex items-center border rounded-lg overflow-hidden">
              <span className="px-3 text-gray-500 bg-gray-100">NGN</span>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="123,456.78"
                className="w-full px-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Date of debit
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-2 w-full border rounded-lg px-3 py-2 outline-none"
            />
          </div>

          {/* Debit Card Info Section */}
          <div className="border rounded-xl p-4 bg-gray-50">
            <h2 className="text-sm font-semibold text-gray-800 mb-4">
              Debit Card Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">First 6 digits</label>
                <input
                  value={first6}
                  onChange={(e) => setFirst6(e.target.value)}
                  placeholder="123456"
                  className="mt-1 w-full border rounded-lg px-3 py-2 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Last 4 digits</label>
                <input
                  value={last4}
                  onChange={(e) => setLast4(e.target.value)}
                  placeholder="1234"
                  className="mt-1 w-full border rounded-lg px-3 py-2 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Expiry date</label>
                <input
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                  className="mt-1 w-full border rounded-lg px-3 py-2 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">CVV</label>
                <input
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="123"
                  className="mt-1 w-full border rounded-lg px-3 py-2 outline-none"
                />
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Your card details are only used to locate the transaction and are
              not stored.
            </p>
          </div>

          {/* Reason */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Why are you looking up this transaction?
            </label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="mt-2 w-full border rounded-lg px-3 py-2 outline-none">
              <option value="">Select a reason</option>
              <option value="unknown">I don’t recognize this debit</option>
              <option value="refund">I want a refund</option>
              <option value="duplicate">Duplicate transaction</option>
              <option value="fraud">Suspected fraud</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Button */}
          <button className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition">
            Find Transaction
          </button>
        </div>
      </div>
    </section>
  );
};
