"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

const countries = [
  { code: "ng", label: "Nigeria", flag: "/ng.svg" },
  { code: "ci", label: "Côte d'Ivoire", flag: "/cote.svg" },
  { code: "eg", label: "Egypt", flag: "/eg.svg" },
  { code: "gh", label: "Ghana", flag: "/gh.svg" },
  { code: "ke", label: "Kenya", flag: "/ke.svg" },
  { code: "rw", label: "Rwanda", flag: "/rw.svg" },
  { code: "za", label: "South Africa", flag: "/za.svg" },
  { code: "others", label: "Others", flag: "/paystack.svg" },
];

export const FlagDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(countries[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {/* ── TRIGGER ── */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-gray-100 transition-colors group"
        aria-expanded={open}>
        <img
          src={selected.flag}
          alt={selected.label}
          width={18}
          height={14}
          className="rounded-sm object-cover"
        />
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}>
          <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </motion.div>
      </button>

      {/* ── DROPDOWN ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden z-[9999]">
            {/* top accent */}
            <div className="h-0.5 w-full bg-gradient-to-r from-green-400 to-emerald-500" />

            {/* header */}
            <div className="px-4 pt-3 pb-2">
              <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400">
                Select Country
              </p>
            </div>

            {/* list */}
            <ul className="px-2 pb-2">
              {countries.map((country, i) => {
                const isSelected = selected.code === country.code;
                const isLast = country.code === "others";

                return (
                  <li key={country.code}>
                    {isLast && <div className="h-px bg-gray-100 mx-2 my-1" />}
                    <button
                      onClick={() => {
                        setSelected(country);
                        setOpen(false);
                      }}
                      className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-colors ${
                        isSelected
                          ? "bg-green-50 text-green-700"
                          : "text-[rgba(1,27,51,0.7)] hover:bg-gray-50 hover:text-[#011B33]"
                      }`}>
                      <div className="flex items-center gap-2.5">
                        <img
                          src={country.flag}
                          alt={country.label}
                          width={18}
                          height={14}
                          className="rounded-sm object-cover shrink-0"
                        />
                        <span>{country.label}</span>
                      </div>
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-green-600 shrink-0" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
