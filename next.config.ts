import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// ─────────────────────────────────────────────────────────
// NOTE: CSP is intentionally NOT set here.
// It is generated per-request in middleware.ts with a fresh
// nonce so that 'unsafe-inline' is never needed for scripts.
//
// Static headers here cover everything that doesn't need
// per-request values.
// ─────────────────────────────────────────────────────────

const PRODUCTION_ORIGIN = "https://www.durapayment.com";

const staticSecurityHeaders = [
  // Clickjacking — belt-and-suspenders alongside CSP frame-ancestors
  { key: "X-Frame-Options", value: "DENY" },

  // MIME sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },

  // HSTS — 2 years, include subdomains, submit to preload list
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },

  // Referrer — don't leak full URL cross-origin
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  // Permissions — deny all hardware APIs we don't use
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },

  // Cross-origin isolation helpers (enable if you need SharedArrayBuffer)
  // { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },

  // Prevent browsers from sending DNS prefetch requests for external domains
  { key: "X-DNS-Prefetch-Control", value: "off" },

  // ── CORS — override Vercel's default wildcard ──────────
  // Vercel CDN injects access-control-allow-origin: * on cached responses.
  // We explicitly restrict it to our own origin so cross-origin requests
  // from arbitrary domains are blocked.
  {
    key: "Access-Control-Allow-Origin",
    value: isDev ? "http://localhost:3000" : PRODUCTION_ORIGIN,
  },

  // Only allow the methods the app actually uses
  {
    key: "Access-Control-Allow-Methods",
    value: "GET, POST, OPTIONS",
  },

  // Allow Authorization + Content-Type headers in cross-origin requests
  {
    key: "Access-Control-Allow-Headers",
    value: "Authorization, Content-Type, X-Requested-With",
  },

  // Do not expose cookies/credentials to cross-origin requests
  {
    key: "Access-Control-Allow-Credentials",
    value: "false",
  },

  // ── Fallback CSP for cached/prerendered pages ──────────
  // middleware.ts sets a nonce-based CSP per request, but Vercel's edge
  // cache can serve static pages that bypass middleware entirely
  // (x-vercel-cache: HIT). This static CSP acts as a safety net for
  // those cached responses. It is intentionally strict but without a
  // nonce — the middleware CSP takes precedence on dynamic requests.
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self'", // no unsafe-inline, no unsafe-eval
      "style-src 'self' 'unsafe-inline'", // inline styles needed for Next.js
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "connect-src 'self' https:",
      "frame-ancestors 'none'", // belt-and-suspenders with X-Frame-Options
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  output: "standalone",

  // Remove X-Powered-By: Next.js fingerprint
  poweredByHeader: false,

  // Disable source maps in production — prevents source code
  // from being readable in browser DevTools
  productionBrowserSourceMaps: false,

  compiler: {
    // Strip all console.log/debug in production; keep error + warn
    removeConsole: !isDev ? { exclude: ["error", "warn"] } : false,
  },

  async headers() {
    return [
      // ── Static security headers on every route ──────────────
      {
        source: "/(.*)",
        headers: staticSecurityHeaders,
      },

      // ── Never cache API proxy responses ──────────────────────
      {
        source: "/(.*)\\.(png|jpg|jpeg|gif|webp|svg|ico|woff2|woff|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
          { key: "Pragma", value: "no-cache" },
          // Prevent API responses from being framed
          { key: "X-Frame-Options", value: "DENY" },
          // API routes must never be accessible cross-origin
          // (overrides the global CORS header above)
          {
            key: "Access-Control-Allow-Origin",
            value: isDev ? "http://localhost:3000" : PRODUCTION_ORIGIN,
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Authorization, Content-Type, X-Requested-With",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "false",
          },
        ],
      },

      // ── Public folder assets ─────────────────────────────────
      {
        source: "/(.*)\\.(png|jpg|jpeg|gif|webp|svg|ico|woff2|woff|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
          // Assets are public — allow any origin to load them (fonts, images)
          // This is intentionally * for static assets only
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ];
  },
};

export default nextConfig;
