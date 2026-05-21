"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  LogIn,
  ChevronDown,
  Zap,
  TrendingUp,
  Play,
  BookOpen,
  FileText,
  Video,
  BarChart2,
  HelpCircle,
  Phone,
  CreditCard,
} from "lucide-react";
import { useState } from "react";

/* ── DATA ── */
const whyItems = [
  {
    icon: Zap,
    label: "Why Choose DuraPayment",
    href: "/why-choose-durapayment",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: TrendingUp,
    label: "Success Rates",
    href: "/success-rates",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Play,
    label: "Demo",
    href: "/demo",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

const learnItems = [
  {
    icon: BookOpen,
    label: "Blog",
    href: "/blog",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: FileText,
    label: "Guides",
    href: "/guides",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Video,
    label: "Video Tutorials",
    href: "/video_tutorials",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: BarChart2,
    label: "Decode Fintech",
    href: "/decode-fintech",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

const supportItems = [
  {
    icon: HelpCircle,
    label: "Quick Help",
    href: "/coming-soon",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Phone,
    label: "Contact Us",
    href: "/contact",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: CreditCard,
    label: "Why was I debited?",
    href: "/why-was-i-debited",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

const topLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Customers", href: "/coming-soon" },
  { label: "Developers", href: "/coming-soon" },
];

/* ── ACCORDION SECTION ── */
const AccordionSection = ({
  label,
  items,
  delay,
}: {
  label: string;
  items: {
    icon: React.ElementType;
    label: string;
    href: string;
    iconBg: string;
    iconColor: string;
  }[];
  delay: number;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between min-h-[48px] px-3 rounded-xl text-[15px] font-semibold text-[rgba(1,27,51,0.75)] hover:text-[#011B33] hover:bg-gray-50 active:bg-gray-100 transition-colors touch-manipulation">
        {label}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden">
            <div className="ml-3 pl-3 border-l-2 border-gray-100 pb-1 space-y-0.5">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 min-h-[44px] px-2 py-2 rounded-xl active:bg-gray-100 hover:bg-gray-50 transition-colors touch-manipulation">
                    <div
                      className={`w-7 h-7 rounded-lg ${item.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-3.5 h-3.5 ${item.iconColor}`} />
                    </div>
                    <span className="text-[14px] font-medium text-[rgba(1,27,51,0.8)]">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ── MOBILE MENU ── */
export const MobileMenu = ({ open }: { open: boolean }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-0.5">
            {/* Accordion dropdowns */}
            <AccordionSection
              label="Why DuraPayment"
              items={whyItems}
              delay={0.04}
            />
            <AccordionSection label="Learn" items={learnItems} delay={0.08} />
            <AccordionSection
              label="Support"
              items={supportItems}
              delay={0.12}
            />

            {/* Flat links */}
            {topLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.16 + i * 0.04 }}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between min-h-[48px] px-3 rounded-xl text-[15px] font-semibold text-[rgba(1,27,51,0.75)] hover:text-[#011B33] hover:bg-gray-50 active:bg-gray-100 transition-colors touch-manipulation">
                  {link.label}
                  <ArrowRight className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                </Link>
              </motion.div>
            ))}

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="h-px bg-gray-100 !my-3"
            />

            {/* Login */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.34 }}>
              <Link
                href="/login"
                className="flex items-center gap-2.5 min-h-[48px] px-3 rounded-xl text-[15px] font-semibold text-[rgba(1,27,51,0.75)] hover:text-[#011B33] hover:bg-gray-50 active:bg-gray-100 transition-colors touch-manipulation">
                <LogIn className="w-4 h-4 shrink-0" />
                Login
              </Link>
            </motion.div>

            {/* CTA — now a Link instead of button */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-2 pb-4">
              <Link
                href="https://online.durapayment.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[52px] bg-[#011B33] hover:bg-[#02284d] active:scale-[0.98] active:bg-[#02284d] text-white rounded-xl text-[15px] font-semibold flex items-center justify-center gap-2 transition-all touch-manipulation">
                Create free account
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
