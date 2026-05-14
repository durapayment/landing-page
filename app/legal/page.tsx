"use client";

import { useState } from "react";

const sections = [
  "Privacy & Cookie Policy",
  "Acceptable Use Policy",
  "Events Policy",
  "Dispute Policy",
  "Terms of Use",
  "Merchant Services Agreement",
  "Data Processing Agreement",
  "Service Providers, Sub-processors, and Affiliates",
];

export default function LegalPage() {
  const [active, setActive] = useState(sections[0]);

  return (
    <section className="w-full min-h-screen bg-gray-50 ">
      <div className=" max-w-310 mt-20 px-30 flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className=" max-w-310 md:w-1/3 lg:w-1/4 bg-white border-r p-6">
          <h1 className="text-xl font-bold text-gray-900 mb-4">
            Legal & Compliance
          </h1>

          <ul className="space-y-2">
            {sections.map((item) => (
              <li key={item}>
                <button
                  onClick={() => setActive(item)}
                  className={`text-left w-full px-3 py-2 rounded-lg text-sm transition ${
                    active === item
                      ? "bg-black text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 md:p-10">
          <div className="max-w-3xl bg-white p-6 md:p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{active}</h2>

            {/* Content Blocks */}
            {active === "Privacy & Cookie Policy" && (
              <p className="text-gray-600 leading-relaxed">
                We respect your privacy. DuraPayment collects only necessary
                data to process payments, prevent fraud, and comply with
                regulatory requirements. Cookies are used to improve user
                experience and maintain session security.
              </p>
            )}

            {active === "Acceptable Use Policy" && (
              <p className="text-gray-600 leading-relaxed">
                Users must not use DuraPayment for illegal activities, fraud,
                money laundering, or unauthorized financial transactions. We
                reserve the right to suspend accounts violating our policies.
              </p>
            )}

            {active === "Events Policy" && (
              <p className="text-gray-600 leading-relaxed">
                This policy governs ticketing, payment processing, refunds, and
                cancellations for events processed through DuraPayment.
              </p>
            )}

            {active === "Dispute Policy" && (
              <p className="text-gray-600 leading-relaxed">
                Disputes must be reported within 30 days of transaction. We
                investigate all claims including fraud, duplicate charges, and
                unauthorized payments.
              </p>
            )}

            {active === "Terms of Use" && (
              <p className="text-gray-600 leading-relaxed">
                By using DuraPayment, you agree to comply with all applicable
                laws and our service terms. We may update these terms at any
                time.
              </p>
            )}

            {active === "Merchant Services Agreement" && (
              <p className="text-gray-600 leading-relaxed">
                Merchants using DuraPayment agree to transaction fees,
                settlement timelines, and compliance requirements including KYC
                and AML obligations.
              </p>
            )}

            {active === "Data Processing Agreement" && (
              <p className="text-gray-600 leading-relaxed">
                We process personal data in accordance with global data
                protection standards. Data is only shared with authorized
                processors for payment execution and fraud prevention.
              </p>
            )}

            {active === "Service Providers, Sub-processors, and Affiliates" && (
              <p className="text-gray-600 leading-relaxed">
                DuraPayment works with trusted third-party providers such as
                cloud hosting, payment networks, and fraud detection services to
                ensure system reliability and security.
              </p>
            )}
          </div>
        </main>
      </div>
    </section>
  );
}
