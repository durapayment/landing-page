"use client";

import { useRef } from "react";
import {
  ChevronDown,
  ArrowRight,
  TrendingUp,
  Play,
  Zap,
  BookOpen,
  FileText,
  Video,
  BarChart2,
  HelpCircle,
  Phone,
  CreditCard,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ── WHY DURAPAY ITEMS ── */
const whyItems = [
  {
    icon: Zap,
    title: "Why Choose DuraPayment",
    desc: "Powering modern payment infrastructure",
    href: "/why-choose-durapayment",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: TrendingUp,
    title: "Success Rates",
    desc: "Industry-leading transaction performance",
    href: "/success-rates",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Play,
    title: "Demo",
    desc: "See how DuraPayment works in real time",
    href: "/demo",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

const growthStages = [
  "Entrepreneurs",
  "Corporates",
  "Global Brands",
  "Startups",
];
const businessTypes = ["Fintechs", "Agencies", "Schools", "Betting"];

/* ── LEARN ITEMS ── */
const learnItems = [
  {
    icon: BookOpen,
    title: "Blog",
    desc: "Original lessons about making payments work",
    href: "/blog",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: FileText,
    title: "Guides",
    desc: "Big ideas explained simply",
    href: "/guides",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    desc: "Learn DuraPayment step-by-step",
    href: "/video-tutorials",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: BarChart2,
    title: "Decode Fintech",
    desc: "Insights for builders",
    href: "/decode-fintech",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

const companyLinks = ["About", "Careers", "Brand"];

/* ── SUPPORT ITEMS ── */
const supportItems = [
  {
    icon: HelpCircle,
    title: "Quick Help",
    desc: "Browse FAQs and help articles",
    href: "/coming-soon",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Phone,
    title: "Contact Us",
    desc: "Talk to our support team",
    href: "/contact",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: CreditCard,
    title: "Why was I debited?",
    desc: "Look up an unknown charge",
    href: "/why-was-i-debited",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

/* ── LINK ROW COMPONENT ── */
const IconRow = ({
  icon: Icon,
  title,
  desc,
  href,
  iconBg,
  iconColor,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  href: string;
  iconBg: string;
  iconColor: string;
}) => (
  <Link
    href={href}
    className="flex items-start gap-3 group rounded-xl p-2.5 -mx-2.5 hover:bg-gray-50 transition-colors">
    <div
      className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
      <Icon className={`w-4 h-4 ${iconColor}`} />
    </div>
    <div>
      <p className="text-[13px] font-semibold text-[#011B33] group-hover:text-green-600 transition-colors leading-tight">
        {title}
      </p>
      <p className="text-[12px] text-gray-400 mt-0.5 leading-4">{desc}</p>
    </div>
  </Link>
);

/* ── DIVIDER ── */
const Divider = () => <div className="w-full h-px bg-gray-100 my-1" />;

/* ── MAIN COMPONENT ── */
export const NavDropdown = ({
  label,
  id,
  openMenu,
  toggleMenu,
  focus,
}: any) => {
  const open = openMenu === id;
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleOpen = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    toggleMenu(id);
  };

  const handleClose = () => {
    closeTimeout.current = setTimeout(() => toggleMenu(null), 150);
  };

  // Developers — plain link
  if (id === "developers") {
    return (
      <li className="list-none">
        <Link
          href="/developers"
          className="text-[13px] font-semibold text-[rgba(1,27,51,0.75)] hover:text-[#011B33] transition-colors cursor-pointer">
          Developers
        </Link>
      </li>
    );
  }

  return (
    <li
      className={`relative cursor-pointer list-none ${focus ? "ring-2 ring-green-500 rounded-md" : ""}`}
      tabIndex={0}
      onClick={() => toggleMenu(open ? null : id)}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}>
      {/* ── TRIGGER ── */}
      <div className="flex items-center gap-1 text-[13px] font-semibold text-[rgba(1,27,51,0.75)] hover:text-[#011B33] transition-colors select-none">
        <span>{label}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}>
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </div>

      {/* ── DROPDOWN ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-10 left-0 bg-white shadow-2xl shadow-black/10 rounded-2xl z-50 border border-gray-100 overflow-hidden"
            style={{ minWidth: 520 }}
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}>
            {/* top accent */}
            <div className="h-0.5 w-full bg-gradient-to-r from-green-400 to-emerald-500" />

            {/* ── WHY DURAPAY ── */}
            {id === "whydurapay" && (
              <div className="flex gap-0 p-1">
                {/* LEFT */}
                <div className="w-[280px] p-4 space-y-1">
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 px-2.5 mb-3">
                    Overview
                  </p>
                  {whyItems.map((item) => (
                    <IconRow key={item.title} {...item} />
                  ))}
                </div>

                {/* DIVIDER */}
                <div className="w-px bg-gray-100 my-4" />

                {/* RIGHT */}
                <div className="w-[200px] p-4">
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 px-2.5 mb-3">
                    For your stage
                  </p>
                  <div className="space-y-0.5 mb-4">
                    {growthStages.map((item) => (
                      <Link
                        key={item}
                        href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center justify-between px-2.5 py-2 rounded-lg text-[13px] text-[rgba(1,27,51,0.7)] hover:bg-gray-50 hover:text-green-600 transition-colors group">
                        {item}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-green-500" />
                      </Link>
                    ))}
                  </div>

                  <Divider />

                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 px-2.5 my-3">
                    Business type
                  </p>
                  <div className="space-y-0.5">
                    {businessTypes.map((item) => (
                      <Link
                        key={item}
                        href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center justify-between px-2.5 py-2 rounded-lg text-[13px] text-[rgba(1,27,51,0.7)] hover:bg-gray-50 hover:text-green-600 transition-colors group">
                        {item}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-green-500" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── LEARN ── */}
            {id === "learn" && (
              <div className="flex gap-0 p-1">
                {/* LEFT */}
                <div className="w-[300px] p-4 space-y-1">
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 px-2.5 mb-3">
                    Resources
                  </p>
                  {learnItems.map((item) => (
                    <IconRow key={item.title} {...item} />
                  ))}
                </div>

                {/* DIVIDER */}
                <div className="w-px bg-gray-100 my-4" />

                {/* RIGHT */}
                <div className="w-[160px] p-4">
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 px-2.5 mb-3">
                    Company
                  </p>
                  <div className="space-y-0.5">
                    {companyLinks.map((item) => (
                      <Link
                        key={item}
                        href={item === "About" ? "/about" : "/coming-soon"}
                        className="flex items-center justify-between px-2.5 py-2 rounded-lg text-[13px] text-[rgba(1,27,51,0.7)] hover:bg-gray-50 hover:text-green-600 transition-colors group">
                        {item}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-green-500" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── SUPPORT ── */}
            {id === "support" && (
              <div className="p-4 w-[300px] space-y-1">
                <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 px-2.5 mb-3">
                  Help & Support
                </p>
                {supportItems.map((item) => (
                  <IconRow key={item.title} {...item} />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
