"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, LogIn } from "lucide-react";
import { siteConfig } from "@/config/site";

const handleRedirect = () => window.open("https://online.durapayment.com");

const navLinks = [
  { label: "Why DuraPayment", href: "/why-choose-durapayment" },
  { label: "Customers", href: "/coming-soon" },
  { label: "Pricing", href: "/pricing" },
  { label: "Learn", href: "/coming-soon" },
  { label: "Developers", href: "/coming-soon" },
  { label: "Support", href: "/coming-soon" },
];

export const MobileMenu = ({ open }: { open: boolean }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-5 space-y-1">
            {/* Nav links */}
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.045 }}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-3 px-3 rounded-xl text-[14px] font-semibold text-[rgba(1,27,51,0.75)] hover:text-[#011B33] hover:bg-gray-50 transition-colors group">
                  {link.label}
                  <ArrowRight className="w-3.5 h-3.5 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              className="h-px bg-gray-100 my-2"
            />

            {/* Login */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.32 }}>
              <Link
                href="/login"
                className="flex items-center gap-2 py-3 px-3 rounded-xl text-[14px] font-semibold text-[rgba(1,27,51,0.75)] hover:text-[#011B33] hover:bg-gray-50 transition-colors">
                <LogIn className="w-4 h-4" />
                Login
              </Link>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
              className="pt-2 pb-1">
              <button
                onClick={handleRedirect}
                className="w-full bg-[#011B33] hover:bg-[#02284d] text-white py-3.5 rounded-xl text-[14px] font-semibold flex items-center justify-center gap-2 transition-colors">
                Create free account
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
