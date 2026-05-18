"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { siteConfig } from "@/config/site";

// ─── Types ────────────────────────────────────────────────────────────────────
type FooterColumn = {
  heading: string;
  links: { label: string; href: string }[];
};

// ─── Nav columns ──────────────────────────────────────────────────────────────
const columns: FooterColumn[] = [
  {
    heading: "Why Durapayment",
    links: [
      { label: "Why Choose Durapayment", href: "/why-choose-durapayment" },
      { label: "Success rates", href: "/success-rates" },
      { label: "For Entrepreneurs", href: "/entrepreneurs" },
      { label: "For Corporates", href: "/corporates" },
      { label: "For Startups", href: "/startups" },
      { label: "For Global Brands", href: "/global-brands" },
      { label: "For Fintechs", href: "/for-fintechs" },
      { label: "For Agencies", href: "/for-agencies" },
      { label: "For Schools", href: "/for-schools" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "Documentation", href: siteConfig.links.documentation },
      { label: "Integrations", href: siteConfig.links.documentation },
      { label: "Status page", href: siteConfig.links.documentation },
      { label: "API reference", href: siteConfig.links.documentation },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Pricing", href: "/coming-soon" },
      { label: "Slack", href: "/coming-soon" },
      { label: "Events", href: "/coming-soon" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/company" },
      { label: "Privacy & Terms", href: "/legal" },
      { label: "Contact support", href: "/contact-us" },
      { label: "Testimonials", href: "/coming-soon" },
      { label: "Case studies", href: "/coming-soon" },
    ],
  },
];

const socials = [
  { icon: <FaFacebookF />, href: "#", label: "Facebook" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
  { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
  { icon: <FaYoutube />, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Top row: brand + nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-14">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <span
              style={{
                fontFamily: "Boing, Georgia, serif",
                fontWeight: 700,
                color: "rgb(1,27,51)",
                letterSpacing: "-0.01em",
              }}
              className="text-xl">
              {siteConfig.name}
            </span>
            <p className="text-sm text-gray-400 leading-relaxed font-light max-w-[200px]">
              Modern payments for businesses everywhere.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#011B33] hover:border-gray-300 transition text-sm">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3
                style={{
                  fontFamily: "Boing, Georgia, serif",
                  fontWeight: 700,
                  color: "rgb(1,27,51)",
                  letterSpacing: "-0.01em",
                }}
                className="text-sm mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 font-light hover:text-[#011B33] transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Left: address */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} {siteConfig.name}. All rights
                reserved.
              </p>
              <p className="text-xs text-gray-300 hidden sm:block">·</p>
              <p className="text-xs text-gray-400">
                No. 100 off Salvation Ministries Rd, Rivers State
              </p>
            </div>

            {/* Right: contact + legal */}
            <div className="flex items-center gap-5">
              <a
                href="mailto:hello@durapayment.com"
                className="text-xs text-gray-400 hover:text-[#011B33] transition">
                hello@durapayment.com
              </a>
              <Link
                href="/legal"
                className="text-xs text-gray-400 hover:text-[#011B33] transition">
                Privacy
              </Link>
              <Link
                href="/legal"
                className="text-xs text-gray-400 hover:text-[#011B33] transition">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
