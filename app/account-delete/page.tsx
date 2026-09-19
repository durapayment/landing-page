"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  Trash2,
  ShieldAlert,
  FileWarning,
  Clock,
} from "lucide-react";

export default function DeleteAccountPage() {
  const [confirmText, setConfirmText] = useState("");
  const [reason, setReason] = useState("");
  const [showModal, setShowModal] = useState(false);

  const isConfirmed = confirmText.trim().toUpperCase() === "DELETE";

  return (
    <main className="w-full bg-white">
      {/* HEADER */}
      <section className="bg-linear-to-b from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto pt-24 px-6 py-16 text-center">
          <button className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8">
            <ArrowLeft size={16} /> Back to account settings
          </button>

          <div className="mx-auto w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
            <Trash2 className="text-red-400" size={26} />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Delete your <span className="text-red-400">DuraPayment</span>{" "}
            account
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl mx-auto text-lg">
            This will permanently close your account and remove your access to
            DuraPayment. Please review the details below before you continue.
          </p>
        </div>
      </section>

      {/* WHAT HAPPENS */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">
          What happens when you delete your account
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-2xl">
            <FileWarning className="mb-4 text-red-500" />
            <h3 className="font-semibold text-lg">Data is erased</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Your profile, saved payment methods, and store settings are
              permanently deleted and cannot be recovered.
            </p>
          </div>

          <div className="p-6 border rounded-2xl">
            <ShieldAlert className="mb-4 text-red-500" />
            <h3 className="font-semibold text-lg">Access ends immediately</h3>
            <p className="text-gray-600 mt-2 text-sm">
              You will be signed out of all devices and lose access to the
              dashboard, API keys, and integrations.
            </p>
          </div>

          <div className="p-6 border rounded-2xl">
            <Clock className="mb-4 text-red-500" />
            <h3 className="font-semibold text-lg">30-day grace period</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Your account is deactivated right away, then permanently deleted
              after 30 days. Contact support before then to cancel.
            </p>
          </div>
        </div>

        {/* CONDITIONS NOTICE */}
        <div className="mt-10 flex gap-4 p-5 rounded-2xl border border-amber-200 bg-amber-50">
          <AlertTriangle className="text-amber-600 shrink-0" size={22} />
          <div className="text-sm text-amber-900">
            <p className="font-medium">Before you proceed, make sure:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>
                All pending payouts have been settled to your bank account
              </li>
              <li>
                You have downloaded any transaction history or invoices you need
              </li>
              <li>
                There are no active subscriptions billing through your account
              </li>
              <li>
                Any team members have been removed or transferred ownership
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONFIRMATION FORM */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white border rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-1">Confirm account deletion</h2>
            <p className="text-gray-600 text-sm mb-6">
              This action cannot be undone once the 30-day grace period ends.
            </p>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Why are you leaving? (optional)
            </label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 text-sm text-gray-700 mb-6"
            >
              <option value="">Select a reason</option>
              <option value="not-using">
                I'm not using this account anymore
              </option>
              <option value="switching">Switching to another provider</option>
              <option value="business-closed">My business has closed</option>
              <option value="privacy">Privacy or data concerns</option>
              <option value="other">Other</option>
            </select>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type <span className="font-mono font-semibold">DELETE</span> to
              confirm
            </label>
            <input
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder="DELETE"
              className="w-full border rounded-lg px-4 py-3 text-sm mb-6 focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <button
              disabled={!isConfirmed}
              onClick={() => setShowModal(true)}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <Trash2 size={18} />
              Delete my account
            </button>

            <p className="text-xs text-gray-400 mt-4 text-center">
              Need help instead of deleting?{" "}
              <a href="#" className="underline hover:text-gray-600">
                Contact support
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CONFIRM MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-6 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-5">
              <AlertTriangle className="text-red-500" size={24} />
            </div>
            <h3 className="text-xl font-bold">Are you absolutely sure?</h3>
            <p className="text-gray-600 mt-3 text-sm">
              Your account will be deactivated now and permanently deleted in 30
              days. This cannot be reversed after that.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={() => {
                  // TODO: call your delete-account API endpoint here
                  setShowModal(false);
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium"
              >
                Yes, delete my account
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="border px-6 py-3 rounded-lg hover:bg-gray-50 font-medium"
              >
                Keep my account
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
