"use client";

import { useState } from "react";
import {
  RiShieldCheckLine,
  RiAlertLine,
  RiCheckLine,
  RiRefreshLine,
} from "react-icons/ri";

export default function ReportPaymentPage() {
  const [form, setForm] = useState({
    complainant_name: "",
    complainant_email: "",
    complainant_phone: "",
    description: "",
    reference: "",
    account_number: "",
    amount: "",
    approx_date: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    message: string;
    complaint_reference: string;
  } | null>(null);

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (
      !form.complainant_name ||
      !form.complainant_email ||
      !form.complainant_phone ||
      !form.description
    ) {
      setError(
        "Please fill in your name, email, phone number, and a description of what happened.",
      );
      return;
    }

    if (!form.reference && (!form.account_number || !form.amount)) {
      setError(
        "Please provide either the transaction reference from your bank alert, or both the account number and amount you paid.",
      );
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/complaints", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          complainant_name: form.complainant_name,
          complainant_email: form.complainant_email,
          complainant_phone: form.complainant_phone,
          description: form.description,
          reference: form.reference || undefined,
          account_number: form.account_number || undefined,
          amount: form.amount ? parseFloat(form.amount) : undefined,
          approx_date: form.approx_date || undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok)
        throw new Error(
          json.message ?? "Failed to submit your report. Please try again.",
        );

      setResult({
        message: json.message,
        complaint_reference: json.data.complaint_reference,
      });
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (result) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-28 pb-12 bg-gray-50">
        <div className="max-w-lg w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 text-center">
          <div className="w-14 h-14 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-5">
            <RiCheckLine size={26} className="text-green-600" />
          </div>
          <h1 className="text-[20px] font-bold text-gray-900 mb-2">
            Report Received
          </h1>
          <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
            {result.message}
          </p>
          <div className="bg-gray-50 rounded-xl px-4 py-3 mb-4">
            <p className="text-[11px] text-gray-400 uppercase tracking-wide">
              Reference Number
            </p>
            <p className="text-[14px] font-mono font-semibold text-gray-900 mt-0.5 break-all">
              {result.complaint_reference}
            </p>
          </div>
          <p className="text-[12px] text-gray-400">
            Keep this reference number — you may be contacted at the email or
            phone number you provided.
          </p>
        </div>
      </div>
    );
  }

  // sc

  return (
    <div className="min-h-screen px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-16 bg-gray-50">
      <div className="max-w-xl md:max-w-2xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
            <RiShieldCheckLine size={22} className="text-white" />
          </div>
          <h1 className="text-[22px] sm:text-[26px] font-bold text-gray-900 tracking-tight">
            Report a Payment
          </h1>
          <p className="text-[14px] sm:text-[15px] text-gray-500 mt-2 max-w-md mx-auto leading-relaxed">
            If you paid a business through DuraPayment and didn&apos;t receive
            what you paid for, let us know. Reporting the same day gives us the
            best chance of holding the payment before it&apos;s paid out.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 md:p-8 flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                Your Name
              </label>
              <input
                type="text"
                value={form.complainant_name}
                onChange={update("complainant_name")}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white text-sm outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                Phone Number
              </label>
              <input
                type="text"
                value={form.complainant_phone}
                onChange={update("complainant_phone")}
                placeholder="080..."
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white text-sm outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
              Email Address
            </label>
            <input
              type="email"
              value={form.complainant_email}
              onChange={update("complainant_email")}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white text-sm outline-none transition-all"
            />
          </div>

          <div className="border-t border-gray-100 pt-5">
            <p className="text-[13px] font-semibold text-gray-700 mb-1">
              Identify the Payment
            </p>
            <p className="text-[12px] text-gray-400 mb-4">
              Provide the transaction reference from your bank SMS/alert, or the
              account number and amount you paid.
            </p>

            <div className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                  Transaction Reference{" "}
                  <span className="text-gray-400 normal-case font-normal">
                    (if you have it)
                  </span>
                </label>
                <input
                  type="text"
                  value={form.reference}
                  onChange={update("reference")}
                  placeholder="e.g. COL-1784860919..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white text-sm outline-none transition-all font-mono"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                    Account You Paid Into
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={10}
                    value={form.account_number}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        account_number: e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10),
                      }))
                    }
                    placeholder="10-digit account number"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white text-sm outline-none transition-all font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                    Amount Paid (₦)
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={form.amount}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        amount: e.target.value.replace(/[^0-9.]/g, ""),
                      }))
                    }
                    placeholder="0.00"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white text-sm outline-none transition-all"
                  />
                </div>
              </div>

              <div className="sm:w-1/2 sm:pr-2">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                  Approximate Date{" "}
                  <span className="text-gray-400 normal-case font-normal">
                    (optional)
                  </span>
                </label>
                <input
                  type="date"
                  value={form.approx_date}
                  onChange={update("approx_date")}
                  max={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white text-sm outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
              What Happened?
            </label>
            <textarea
              rows={4}
              value={form.description}
              onChange={update("description")}
              placeholder="Describe what you paid for, what went wrong, and any attempts you've made to resolve it with the seller."
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white text-sm outline-none transition-all resize-none"
            />
          </div>

          {error && (
            <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
              <RiAlertLine size={15} className="shrink-0 mt-0.5" />
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-tertiary transition-colors disabled:opacity-40 flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <RiRefreshLine size={15} className="animate-spin" />
                Submitting…
              </>
            ) : (
              "Submit Report"
            )}
          </button>

          <p className="text-[11px] text-gray-400 text-center leading-relaxed">
            Submitting a false report may result in legal action. Please only
            report genuine issues.
          </p>
        </form>
      </div>
    </div>
  );
}
