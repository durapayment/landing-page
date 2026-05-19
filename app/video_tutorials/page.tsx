"use client";

import { useState } from "react";
import { Code, Terminal } from "lucide-react";

const tabs = [
  "All",
  "Getting started",
  "API integration",
  "Security",
  "Webhooks",
  "Advanced",
];

const categoryStyles: Record<string, string> = {
  "Getting started": "bg-[#E1F5EE] text-[#085041]",
  "API integration": "bg-[#E6F1FB] text-[#0C447C]",
  Security: "bg-[#FAECE7] text-[#712B13]",
  Webhooks: "bg-[#FAEEDA] text-[#633806]",
  Advanced: "bg-[#EEEDFE] text-[#3C3489]",
};

function CategoryTag({ category }: { category: string }) {
  return (
    <span
      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
        categoryStyles[category] ?? "bg-gray-100 text-gray-600"
      }`}>
      {category}
    </span>
  );
}

/* ─────────────────────────────────────────
   Animated SVG illustrations
───────────────────────────────────────── */

function CheckoutAnimation() {
  return (
    <svg
      width="100%"
      height="200"
      viewBox="0 0 640 200"
      xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes dp-blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes dp-tick{0%{stroke-dashoffset:24}100%{stroke-dashoffset:0}}
        @keyframes dp-pulse{0%{r:10;opacity:.6}100%{r:22;opacity:0}}
        @keyframes dp-fc{0%,18%{opacity:1}22%,100%{opacity:0}}
        .dp-cur{animation:dp-blink 1s infinite}
        .dp-tick{animation:dp-tick 0.6s ease forwards}
        .dp-pr{animation:dp-pulse 2s ease-out infinite}
        .dp-fc0{animation:dp-fc 3s 0s infinite}
        .dp-fc1{animation:dp-fc 3s 1s infinite;opacity:0}
        .dp-fc2{animation:dp-fc 3s 2s infinite;opacity:0}
      `}</style>

      {/* Checkout card */}
      <rect
        x="180"
        y="24"
        width="280"
        height="152"
        rx="10"
        fill="#0F2E26"
        stroke="#1D9E75"
        strokeWidth="0.8"
      />
      <rect
        x="196"
        y="38"
        width="248"
        height="14"
        rx="3"
        fill="#1D9E75"
        opacity=".25"
      />
      <text
        x="320"
        y="49"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="9"
        fill="#5DCAA5"
        fontWeight="600">
        CHECKOUT — DURAPAYMENT
      </text>
      <text
        x="220"
        y="76"
        fontFamily="sans-serif"
        fontSize="9"
        fill="rgba(255,255,255,.45)">
        Total amount
      </text>
      <text x="220" y="92" fontFamily="Georgia,serif" fontSize="22" fill="#fff">
        ₦ 24,500.00
      </text>

      {/* Card inputs */}
      <rect
        x="196"
        y="104"
        width="148"
        height="26"
        rx="5"
        fill="#163E30"
        stroke="#1D9E75"
        strokeWidth="0.5"
      />
      <text
        x="206"
        y="121"
        fontFamily="monospace"
        fontSize="9"
        fill="rgba(255,255,255,.5)">
        4242 4242 4242{" "}
      </text>
      <rect
        x="346"
        y="104"
        width="44"
        height="26"
        rx="5"
        fill="#163E30"
        stroke="#1D9E75"
        strokeWidth="0.5"
      />
      <text
        x="352"
        y="121"
        fontFamily="monospace"
        fontSize="9"
        fill="rgba(255,255,255,.5)">
        12/27
      </text>
      <rect
        x="394"
        y="104"
        width="50"
        height="26"
        rx="5"
        fill="#163E30"
        stroke="#1D9E75"
        strokeWidth="0.5"
      />
      <text
        x="400"
        y="121"
        fontFamily="monospace"
        fontSize="9"
        fill="rgba(255,255,255,.5)">
        CVV
      </text>
      <rect
        x="339"
        y="111"
        width="1.5"
        height="11"
        rx="1"
        fill="#5DCAA5"
        className="dp-cur"
      />

      {/* Pay button — cycling states */}
      <rect x="196" y="138" width="248" height="28" rx="6" fill="#1D9E75" />
      <g className="dp-fc0">
        <text
          x="320"
          y="156"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize="10"
          fill="#fff"
          fontWeight="600">
          Pay ₦ 24,500
        </text>
      </g>
      <g className="dp-fc1">
        <text
          x="320"
          y="156"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize="10"
          fill="#fff"
          fontWeight="600">
          Processing...
        </text>
      </g>
      <g className="dp-fc2">
        <text
          x="320"
          y="156"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize="10"
          fill="#fff"
          fontWeight="600">
          Payment confirmed!
        </text>
      </g>

      {/* Success pulse */}
      <circle
        cx="560"
        cy="100"
        r="22"
        fill="none"
        stroke="#1D9E75"
        strokeWidth="1"
        className="dp-pr"
      />
      <circle
        cx="560"
        cy="100"
        r="18"
        fill="#163E30"
        stroke="#1D9E75"
        strokeWidth="0.8"
      />
      <polyline
        points="551,100 557,107 570,93"
        fill="none"
        stroke="#5DCAA5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="24"
        strokeDashoffset="0"
        className="dp-tick"
      />

      {/* Phone frame */}
      <rect
        x="38"
        y="32"
        width="82"
        height="136"
        rx="10"
        fill="#0F2E26"
        stroke="#1D9E75"
        strokeWidth="0.6"
      />
      <rect x="44" y="50" width="70" height="44" rx="4" fill="#163E30" />
      <text
        x="79"
        y="67"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="7"
        fill="rgba(255,255,255,.4)">
        Cart total
      </text>
      <text
        x="79"
        y="82"
        textAnchor="middle"
        fontFamily="Georgia,serif"
        fontSize="14"
        fill="#fff">
        ₦24,500
      </text>
      <rect x="44" y="100" width="70" height="14" rx="3" fill="#1D9E75" />
      <text
        x="79"
        y="111"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="#fff"
        fontWeight="600">
        Pay now
      </text>
      <rect x="44" y="120" width="70" height="8" rx="2" fill="#163E30" />
      <rect x="44" y="132" width="44" height="8" rx="2" fill="#163E30" />
    </svg>
  );
}

function ApiKeyAnimation() {
  return (
    <svg
      width="100%"
      height="160"
      viewBox="0 0 300 160"
      xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes dp-copy{0%,70%,100%{opacity:0}75%,95%{opacity:.9}}
        .dp-cf{animation:dp-copy 3s infinite}
      `}</style>
      <rect
        x="20"
        y="20"
        width="260"
        height="120"
        rx="8"
        fill="#0F2E26"
        stroke="#1D9E75"
        strokeWidth="0.5"
      />
      <text
        x="34"
        y="40"
        fontFamily="sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,.35)"
        fontWeight="600"
        letterSpacing=".06em">
        DURAPAYMENT DASHBOARD
      </text>
      <rect
        x="20"
        y="46"
        width="260"
        height="0.5"
        fill="#1D9E75"
        opacity=".2"
      />

      <text
        x="34"
        y="64"
        fontFamily="sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,.4)">
        Secret key
      </text>
      <rect
        x="34"
        y="70"
        width="186"
        height="22"
        rx="4"
        fill="#0A1F1A"
        stroke="#1D9E75"
        strokeWidth="0.5"
      />
      <text x="44" y="85" fontFamily="monospace" fontSize="8" fill="#5DCAA5">
        dp_live_••••••••••••••••3f9a
      </text>
      <rect x="224" y="70" width="42" height="22" rx="4" fill="#1D9E75" />
      <text
        x="245"
        y="85"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="#fff"
        fontWeight="600">
        Copy
      </text>
      <rect
        x="224"
        y="70"
        width="42"
        height="22"
        rx="4"
        fill="#5DCAA5"
        opacity="0"
        className="dp-cf"
      />

      <text
        x="34"
        y="112"
        fontFamily="sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,.4)">
        Public key
      </text>
      <rect
        x="34"
        y="118"
        width="186"
        height="22"
        rx="4"
        fill="#0A1F1A"
        stroke="#1D9E75"
        strokeWidth="0.5"
      />
      <text x="44" y="133" fontFamily="monospace" fontSize="8" fill="#9FE1CB">
        dp_pub_pk_8d2f••••••••••••••
      </text>
      <rect x="224" y="118" width="42" height="22" rx="4" fill="#163E30" />
      <text
        x="245"
        y="133"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="#5DCAA5"
        fontWeight="600">
        Copy
      </text>
    </svg>
  );
}

function WebhookAnimation() {
  return (
    <svg
      width="100%"
      height="160"
      viewBox="0 0 300 160"
      xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes dp-ok{0%,100%{fill:#163E30}50%{fill:#1D9E75}}
        .dp-ok{animation:dp-ok 1.8s infinite}
      `}</style>

      <rect
        x="22"
        y="55"
        width="64"
        height="50"
        rx="6"
        fill="#0F2E26"
        stroke="#1D9E75"
        strokeWidth="0.6"
      />
      <text
        x="54"
        y="75"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="7"
        fill="rgba(255,255,255,.5)">
        DuraPayment
      </text>
      <text
        x="54"
        y="88"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="7"
        fill="#5DCAA5"
        fontWeight="600">
        Server
      </text>
      <circle cx="54" cy="98" r="3" fill="#1D9E75" />

      <rect
        x="214"
        y="55"
        width="64"
        height="50"
        rx="6"
        fill="#0F2E26"
        stroke="#1D9E75"
        strokeWidth="0.6"
      />
      <text
        x="246"
        y="75"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="7"
        fill="rgba(255,255,255,.5)">
        Your
      </text>
      <text
        x="246"
        y="88"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="7"
        fill="#5DCAA5"
        fontWeight="600">
        Backend
      </text>
      <circle
        cx="246"
        cy="98"
        r="3"
        fill="#163E30"
        stroke="#1D9E75"
        strokeWidth="0.6"
      />

      <path
        d="M86,80 C120,80 160,80 214,80"
        fill="none"
        stroke="#1D9E75"
        strokeWidth="0.8"
        strokeDasharray="4 3"
        opacity=".3"
      />

      {[
        { delay: "0s", fill: "#1D9E75" },
        { delay: "0.6s", fill: "#5DCAA5" },
        { delay: "1.2s", fill: "#9FE1CB" },
      ].map(({ delay, fill }, i) => (
        <circle key={i} r="4" fill={fill} opacity="0">
          <animateMotion
            path="M86,80 C120,80 160,80 214,80"
            dur="1.8s"
            repeatCount="indefinite"
            begin={delay}
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="1.8s"
            repeatCount="indefinite"
            begin={delay}
          />
        </circle>
      ))}

      <text
        x="150"
        y="62"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="7"
        fill="#5DCAA5">
        payment.success
      </text>
      <text
        x="150"
        y="98"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="7"
        fill="rgba(255,255,255,.3)">
        HTTP POST → /webhook
      </text>

      <rect
        x="230"
        y="118"
        width="32"
        height="18"
        rx="4"
        fill="#163E30"
        stroke="#1D9E75"
        strokeWidth="0.5"
        className="dp-ok"
      />
      <text
        x="246"
        y="131"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="7"
        fill="#5DCAA5"
        fontWeight="600">
        200 OK
      </text>
    </svg>
  );
}

function SecurityAnimation() {
  return (
    <svg
      width="100%"
      height="160"
      viewBox="0 0 300 160"
      xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes dp-lock{0%,100%{transform:translateY(0)}40%{transform:translateY(-4px)}70%{transform:translateY(2px)}}
        @keyframes dp-su{0%{transform:translateY(12px);opacity:0}100%{transform:translateY(0);opacity:1}}
        .dp-lb{animation:dp-lock 2s ease-in-out infinite}
        .dp-su1{animation:dp-su .5s .2s ease forwards;opacity:0}
        .dp-su2{animation:dp-su .5s .5s ease forwards;opacity:0}
        .dp-su3{animation:dp-su .5s .8s ease forwards;opacity:0}
        .dp-su4{animation:dp-su .5s 1.1s ease forwards;opacity:0}
      `}</style>

      <rect
        x="118"
        y="74"
        width="64"
        height="52"
        rx="7"
        fill="#0F2E26"
        stroke="#1D9E75"
        strokeWidth="0.8"
      />
      <path
        d="M134,74 v-12 a16,16 0 0 1 32,0 v12"
        fill="none"
        stroke="#1D9E75"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="dp-lb"
      />
      <circle cx="150" cy="100" r="6" fill="#1D9E75" />
      <rect x="147" y="100" width="6" height="10" rx="2" fill="#1D9E75" />
      <circle
        cx="150"
        cy="100"
        r="28"
        fill="none"
        stroke="#1D9E75"
        strokeWidth="0.5"
        opacity=".2"
      />
      <circle
        cx="150"
        cy="100"
        r="38"
        fill="none"
        stroke="#1D9E75"
        strokeWidth="0.4"
        opacity=".12"
      />
      <circle cx="150" cy="80" r="0" fill="#1D9E75" opacity="0">
        <animate
          attributeName="r"
          values="0;14;0"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;.4;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      <g className="dp-su1">
        <rect
          x="22"
          y="68"
          width="60"
          height="18"
          rx="4"
          fill="#163E30"
          stroke="#1D9E75"
          strokeWidth="0.5"
        />
        <text
          x="52"
          y="80"
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="7"
          fill="#5DCAA5">
          card data
        </text>
      </g>
      <g className="dp-su2">
        <rect
          x="22"
          y="92"
          width="60"
          height="18"
          rx="4"
          fill="#163E30"
          stroke="#1D9E75"
          strokeWidth="0.5"
        />
        <text
          x="52"
          y="104"
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="7"
          fill="#5DCAA5">
          TLS 1.3
        </text>
      </g>
      <g className="dp-su3">
        <rect
          x="218"
          y="68"
          width="60"
          height="18"
          rx="4"
          fill="#163E30"
          stroke="#1D9E75"
          strokeWidth="0.5"
        />
        <text
          x="248"
          y="80"
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="7"
          fill="#5DCAA5">
          PCI DSS
        </text>
      </g>
      <g className="dp-su4">
        <rect
          x="218"
          y="92"
          width="60"
          height="18"
          rx="4"
          fill="#163E30"
          stroke="#1D9E75"
          strokeWidth="0.5"
        />
        <text
          x="248"
          y="104"
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="7"
          fill="#5DCAA5">
          AES-256
        </text>
      </g>
      <text
        x="150"
        y="148"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,.35)">
        Bank-grade encryption
      </text>
    </svg>
  );
}

function SandboxAnimation() {
  return (
    <svg
      width="100%"
      height="160"
      viewBox="0 0 300 160"
      xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes dp-blink2{0%,100%{opacity:1}50%{opacity:0}}
        .dp-cur2{animation:dp-blink2 1s infinite}
      `}</style>
      <rect
        x="20"
        y="16"
        width="260"
        height="128"
        rx="8"
        fill="#0F2E26"
        stroke="#1D9E75"
        strokeWidth="0.5"
      />
      <rect x="20" y="16" width="260" height="22" rx="8" fill="#163E30" />
      <rect x="20" y="30" width="260" height="8" fill="#163E30" />
      <circle cx="34" cy="27" r="4" fill="#D85A30" opacity=".7" />
      <circle cx="48" cy="27" r="4" fill="#EF9F27" opacity=".7" />
      <circle cx="62" cy="27" r="4" fill="#1D9E75" />
      <text
        x="150"
        y="31"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="8"
        fill="rgba(255,255,255,.4)">
        sandbox.durapayment.io
      </text>
      <text
        x="34"
        y="56"
        fontFamily="monospace"
        fontSize="8"
        fill="rgba(255,255,255,.3)">
        {"const dp = new DuraPayment({"}
      </text>
      <text x="34" y="70" fontFamily="monospace" fontSize="8" fill="#5DCAA5">
        {"  key: "}
        <tspan fill="#9FE1CB">{"'dp_test_sk_••••'"}</tspan>,
      </text>
      <text
        x="34"
        y="84"
        fontFamily="monospace"
        fontSize="8"
        fill="rgba(255,255,255,.3)">
        {"  mode: "}
        <tspan fill="#FAC775">{"'sandbox'"}</tspan>
      </text>
      <text
        x="34"
        y="98"
        fontFamily="monospace"
        fontSize="8"
        fill="rgba(255,255,255,.3)">
        {"});"}
      </text>
      <rect x="20" y="108" width="260" height="28" fill="#04342C" />
      <text
        x="34"
        y="119"
        fontFamily="monospace"
        fontSize="7"
        fill="rgba(255,255,255,.35)">
        →
      </text>
      <text x="44" y="119" fontFamily="monospace" fontSize="7" fill="#5DCAA5">
        Payment <tspan fill="#9FE1CB">confirmed</tspan> · txn_test_29fk
      </text>
      <text
        x="34"
        y="132"
        fontFamily="monospace"
        fontSize="7"
        fill="rgba(255,255,255,.2)">
        Status: 200 OK · 214ms
      </text>
      <rect
        x="258"
        y="125"
        width="1.5"
        height="9"
        rx="1"
        fill="#5DCAA5"
        className="dp-cur2"
      />
    </svg>
  );
}

function SubscriptionAnimation() {
  return (
    <svg
      width="100%"
      height="160"
      viewBox="0 0 300 160"
      xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="80" x2="270" y2="80" stroke="#163E30" strokeWidth="3" />

      {[
        { cx: 60, label: "1", month: "Jan" },
        { cx: 130, label: "2", month: "Feb" },
        { cx: 200, label: "3", month: "Mar" },
      ].map(({ cx, label, month }) => (
        <g key={cx}>
          <circle cx={cx} cy="80" r="10" fill="#1D9E75" />
          <text
            x={cx}
            y="84"
            textAnchor="middle"
            fontFamily="sans-serif"
            fontSize="7"
            fill="#fff"
            fontWeight="600">
            {label}
          </text>
          <text
            x={cx}
            y="100"
            textAnchor="middle"
            fontFamily="sans-serif"
            fontSize="7"
            fill="rgba(255,255,255,.4)">
            {month}
          </text>
        </g>
      ))}

      {/* Next billing — pulsing */}
      <circle
        cx="262"
        cy="80"
        r="10"
        fill="#163E30"
        stroke="#1D9E75"
        strokeWidth="1"
      />
      <circle
        cx="262"
        cy="80"
        r="10"
        fill="none"
        stroke="#1D9E75"
        strokeWidth="1">
        <animate
          attributeName="r"
          values="10;18;10"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values=".8;0;.8"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <text
        x="262"
        y="100"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="7"
        fill="#5DCAA5">
        Apr
      </text>

      {/* Animated progress bar */}
      <line
        x1="30"
        y1="80"
        x2="30"
        y2="80"
        stroke="#1D9E75"
        strokeWidth="3"
        strokeLinecap="round">
        <animate
          attributeName="x2"
          values="30;262;262"
          dur="3s"
          repeatCount="indefinite"
        />
      </line>

      <rect
        x="90"
        y="28"
        width="120"
        height="30"
        rx="6"
        fill="#0F2E26"
        stroke="#1D9E75"
        strokeWidth="0.5"
      />
      <text
        x="150"
        y="42"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,.5)">
        Pro plan
      </text>
      <text
        x="150"
        y="54"
        textAnchor="middle"
        fontFamily="Georgia,serif"
        fontSize="13"
        fill="#fff">
        ₦ 15,000 / mo
      </text>
      <text
        x="150"
        y="130"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="7"
        fill="rgba(255,255,255,.3)">
        Auto-renews · retry on failure
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────
   Tutorial data
───────────────────────────────────────── */

interface Tutorial {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  featured?: boolean;
  Animation: () => JSX.Element;
}

const tutorials: Tutorial[] = [
  {
    id: 1,
    title: "Complete checkout flow — from cart to confirmation",
    description:
      "See how DuraPayment handles the full customer payment journey: entering card details, processing securely, and receiving real-time confirmation.",
    category: "Getting started",
    duration: "12 min",
    featured: true,
    Animation: CheckoutAnimation,
  },
  {
    id: 2,
    title: "Getting your API keys & authenticating requests",
    description:
      "Locate your live and test API keys from the dashboard and add them securely to your server environment.",
    category: "API integration",
    duration: "8 min",
    Animation: ApiKeyAnimation,
  },
  {
    id: 3,
    title: "Handling webhooks & payment event confirmations",
    description:
      "Listen for payment.success, payment.failed, and other events pushed in real-time to your backend endpoint.",
    category: "Webhooks",
    duration: "11 min",
    Animation: WebhookAnimation,
  },
  {
    id: 4,
    title: "Securing your integration — keys, TLS & PCI compliance",
    description:
      "Best practices for storing API keys, enforcing HTTPS, and ensuring your integration meets PCI DSS standards.",
    category: "Security",
    duration: "9 min",
    Animation: SecurityAnimation,
  },
  {
    id: 5,
    title: "Testing in sandbox mode with test card numbers",
    description:
      "Use sandbox mode and test cards to simulate successful payments, declines, and network errors before going live.",
    category: "Getting started",
    duration: "7 min",
    Animation: SandboxAnimation,
  },
  {
    id: 6,
    title: "Recurring billing & subscription plan management",
    description:
      "Create monthly and annual plans, handle failed payment retries, and manage subscriber lifecycles via the API.",
    category: "Advanced",
    duration: "18 min",
    Animation: SubscriptionAnimation,
  },
];

/* ─────────────────────────────────────────
   Main component
───────────────────────────────────────── */

export default function TutorialSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? tutorials
      : tutorials.filter((t) => t.category === activeTab);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');
        .font-display { font-family: 'Instrument Serif', serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <section className="font-body bg-white max-w-5xl mx-auto px-6 py-16">
        {/* ── HERO BANNER ── */}
        <div className="bg-[#0A1F1A] rounded-2xl px-8 py-10 mb-8">
          <span className="inline-flex items-center gap-1.5 bg-[#1D9E75]/20 border border-[#1D9E75]/35 rounded-full px-4 py-1 text-[11px] font-semibold tracking-widest uppercase text-[#5DCAA5] mb-4">
            ✦ Tutorials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-white leading-tight mb-3">
            Learn <em className="italic text-[#5DCAA5]">DuraPayment</em>
            <br />
            step by step
          </h2>
          <p className="text-white/55 text-sm leading-relaxed max-w-lg mb-7">
            From your first API call to production-ready integrations —
            everything you need to get up and running fast.
          </p>
          <div className="flex gap-8 flex-wrap">
            {[
              { value: "6", label: "tutorials" },
              { value: "4.5 hrs", label: "total content" },
              { value: "Free", label: "always" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-xl font-semibold text-white">
                  {s.value}
                </span>
                <span className="text-[11px] text-white/40 mt-0.5">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── TABS ── */}
        <div className="flex gap-2 flex-wrap mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                activeTab === tab
                  ? "bg-[#0A1F1A] text-[#5DCAA5] border-[#0A1F1A]"
                  : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-800"
              }`}>
              {tab}
            </button>
          ))}
        </div>

        {/* ── TUTORIAL GRID ── */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {filtered.map((tutorial) => {
            const { Animation } = tutorial;
            return (
              <div
                key={tutorial.id}
                className={`border border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-gray-300 transition-colors cursor-pointer ${
                  tutorial.featured ? "md:col-span-2" : ""
                }`}>
                {/* Animated illustration */}
                <div className="bg-[#0A1F1A] w-full">
                  <Animation />
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="text-[15px] font-semibold text-gray-900 leading-snug mb-2">
                    {tutorial.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-3">
                    {tutorial.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <CategoryTag category={tutorial.category} />
                    <span className="text-[11px] text-gray-400">
                      {tutorial.duration}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <p className="text-sm text-gray-400 py-10 text-center md:col-span-2">
              No tutorials in this category yet.
            </p>
          )}
        </div>

        {/* ── CTA STRIP ── */}
        <div className="bg-[#0A1F1A] rounded-2xl px-8 py-7 flex items-center justify-between gap-6 flex-wrap">
          <div>
            <h3 className="font-display text-xl font-normal text-white mb-1">
              Ready to start building?
            </h3>
            <p className="text-[13px] text-white/50">
              Access full API docs and developer sandbox — free.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button className="inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#5DCAA5] hover:text-[#0A1F1A] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors">
              <Code size={14} /> View API docs
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white/80 border border-white/15 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors">
              <Terminal size={14} /> Open sandbox
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
