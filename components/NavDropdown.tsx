"use client";

import { useRef, useCallback, useState, useEffect } from "react";
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
import { useRouter } from "next/navigation";

/* ── DATA ── */
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
const businessTypes = ["Fintechs", "Agencies", "Schools", "Sales"];
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
    href: "/video_tutorials",
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

/* ── ICON ROW ── */
const IconRow = ({
  icon: Icon,
  title,
  desc,
  href,
  iconBg,
  iconColor,
  onNavigate,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  href: string;
  iconBg: string;
  iconColor: string;
  onNavigate: (href: string) => void;
}) => (
  <button
    onClick={() => onNavigate(href)}
    className="w-full flex items-start gap-3 group rounded-xl p-2.5 -mx-2.5 hover:bg-gray-50 active:bg-gray-100 transition-colors touch-manipulation min-h-[44px] text-left">
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
  </button>
);

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
  const router = useRouter();

  // ✅ Fix: prevent hydration mismatch — only apply focus ring after client mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Close dropdown then navigate
  const handleNavigate = useCallback(
    (href: string) => {
      toggleMenu(null);
      router.push(href);
    },
    [toggleMenu, router],
  );

  // ✅ Hover open — only fires on real pointer devices
  const handleMouseEnter = useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    toggleMenu(id);
  }, [id, toggleMenu]);

  // ✅ Delayed close — gives time to move mouse into dropdown panel
  const handleMouseLeave = useCallback(() => {
    closeTimeout.current = setTimeout(() => toggleMenu(null), 200);
  }, [toggleMenu]);

  if (id === "developers") {
    return (
      <li className="list-none">
        <Link
          href="/developers"
          className="text-[13px] font-semibold text-[rgba(1,27,51,0.75)] hover:text-[#011B33] transition-colors">
          Developers
        </Link>
      </li>
    );
  }

  return (
    <li
      className={`relative list-none ${
        mounted && focus ? "ring-2 ring-green-500 rounded-md" : ""
      }`}
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleMenu(open ? null : id);
        }
        if (e.key === "Escape") toggleMenu(null);
      }}>
      {/* TRIGGER */}
      <div className="flex items-center gap-1 text-[13px] font-semibold text-[rgba(1,27,51,0.75)] hover:text-[#011B33] transition-colors select-none cursor-pointer min-h-[40px]">
        <span>{label}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}>
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </div>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-10 left-0 bg-white shadow-2xl shadow-black/10 rounded-2xl z-50 border border-gray-100 overflow-hidden max-w-[calc(100vw-2rem)]"
            style={{ minWidth: id === "support" ? 300 : 480 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className="h-0.5 w-full bg-gradient-to-r from-green-400 to-emerald-500" />

            {/* WHY DURAPAY */}
            {id === "whydurapay" && (
              <div className="flex flex-col sm:flex-row p-1">
                <div className="sm:w-[280px] p-4 space-y-1">
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 px-2.5 mb-3">
                    Overview
                  </p>
                  {whyItems.map((item) => (
                    <IconRow
                      key={item.title}
                      {...item}
                      onNavigate={handleNavigate}
                    />
                  ))}
                </div>
                <div className="hidden sm:block w-px bg-gray-100 my-4" />
                <div className="sm:hidden h-px bg-gray-100 mx-4" />
                <div className="sm:w-[200px] p-4">
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 px-2.5 mb-3">
                    For your stage
                  </p>
                  <div className="space-y-0.5 mb-4">
                    {growthStages.map((item) => (
                      <button
                        key={item}
                        onClick={() =>
                          handleNavigate(
                            `/${item.toLowerCase().replace(/\s+/g, "-")}`,
                          )
                        }
                        className="w-full flex items-center justify-between px-2.5 min-h-[40px] rounded-lg text-[13px] text-[rgba(1,27,51,0.7)] hover:bg-gray-50 hover:text-green-600 active:bg-gray-100 transition-colors group touch-manipulation">
                        {item}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-green-500" />
                      </button>
                    ))}
                  </div>
                  <Divider />
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 px-2.5 my-3">
                    Business type
                  </p>
                  <div className="space-y-0.5">
                    {businessTypes.map((item) => (
                      <button
                        key={item}
                        onClick={() =>
                          handleNavigate(
                            `/${item.toLowerCase().replace(/\s+/g, "-")}`,
                          )
                        }
                        className="w-full flex items-center justify-between px-2.5 min-h-[40px] rounded-lg text-[13px] text-[rgba(1,27,51,0.7)] hover:bg-gray-50 hover:text-green-600 active:bg-gray-100 transition-colors group touch-manipulation">
                        {item}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-green-500" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* LEARN */}
            {id === "learn" && (
              <div className="flex flex-col sm:flex-row p-1">
                <div className="sm:w-[300px] p-4 space-y-1">
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 px-2.5 mb-3">
                    Resources
                  </p>
                  {learnItems.map((item) => (
                    <IconRow
                      key={item.title}
                      {...item}
                      onNavigate={handleNavigate}
                    />
                  ))}
                </div>
                <div className="hidden sm:block w-px bg-gray-100 my-4" />
                <div className="sm:hidden h-px bg-gray-100 mx-4" />
                <div className="sm:w-[160px] p-4">
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 px-2.5 mb-3">
                    Company
                  </p>
                  <div className="space-y-0.5">
                    {companyLinks.map((item) => (
                      <button
                        key={item}
                        onClick={() =>
                          handleNavigate(
                            item === "About" ? "/about" : "/coming-soon",
                          )
                        }
                        className="w-full flex items-center justify-between px-2.5 min-h-[40px] rounded-lg text-[13px] text-[rgba(1,27,51,0.7)] hover:bg-gray-50 hover:text-green-600 active:bg-gray-100 transition-colors group touch-manipulation">
                        {item}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-green-500" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SUPPORT
            {id === "support" && (
              <div className="p-4 w-full sm:w-[300px] space-y-1">
                <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 px-2.5 mb-3">
                  Help & Support
                </p>
                {supportItems.map((item) => (
                  <IconRow key={item.title} {...item} onNavigate={handleNavigate} />
                ))}
              </div>
            )} */}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
