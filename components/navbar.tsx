"use client";

import { useEffect, useRef, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { FlagDropdown } from "./FlagDropdown";
import { NavDropdown } from "./NavDropdown";
import { MobileMenu } from "./MobileDrawer";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";

export const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (menu: string | null) => {
    // ✅ Don't toggle — just set directly so hover open/close works cleanly
    setActiveDropdown(menu);
  };

  const closeAll = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  /* OUTSIDE CLICK — only closes mobile menu, not desktop dropdowns */
  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        // ✅ Only close mobile menu on outside click
        // Desktop dropdowns manage themselves via mouse leave
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  /* CLOSE MOBILE MENU ON RESIZE TO DESKTOP */
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  /* PREVENT BODY SCROLL WHEN MOBILE MENU OPEN */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* SCROLL BACKGROUND */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-white"
      }`}>
      {/* NAV CONTAINER */}
      <div className="max-w-[1300px] mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
        {/* LEFT — Logo + Desktop Nav */}
        <div className="flex items-center gap-5 lg:gap-10">
          <Link
            href="/"
            onClick={closeAll}
            className="flex items-center gap-2 shrink-0">
            <img
              src="/dura-logo.png"
              width={20}
              height={20}
              alt="DuraPayment logo"
            />
            <span className="text-accent text-xl font-semibold">
              DuraPayment
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-5 xl:gap-10 text-[14px] font-medium text-gray-800 list-none">
            <NavDropdown
              label="Why DuraPay"
              id="whydurapay"
              openMenu={activeDropdown}
              toggleMenu={toggleDropdown}
            />
            <li className="list-none">
              <Link
                href="/coming-soon"
                className="text-[13px] font-semibold text-[rgba(1,27,51,0.75)] hover:text-[#011B33] transition-colors">
                Customers
              </Link>
            </li>
            <li className="list-none">
              <Link
                href="/pricing"
                className="text-[13px] font-semibold text-[rgba(1,27,51,0.75)] hover:text-[#011B33] transition-colors">
                Pricing
              </Link>
            </li>
            <NavDropdown
              label="Learn"
              id="learn"
              openMenu={activeDropdown}
              toggleMenu={toggleDropdown}
            />
          </ul>
        </div>

        {/* RIGHT — Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-black list-none">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={siteConfig.links.documentation}
            className="text-[13px] font-semibold text-[rgba(1,27,51,0.75)] hover:text-[#011B33] transition-colors">
            Developers
          </Link>

          {/* <NavDropdown
            label="Support"
            id="support"
            openMenu={activeDropdown}
            toggleMenu={toggleDropdown}
          /> */}

          <Link
            href={siteConfig.links.login}
            className="text-[13px] font-semibold text-[rgba(1,27,51,0.75)] hover:text-[#011B33] transition-colors">
            Login
          </Link>

          <Link
            href={siteConfig.links.register}
            className="bg-[#011B33] hover:bg-[#02284d] active:scale-[0.98] text-white px-4 py-2 rounded-lg text-[13px] font-semibold transition-all">
            Create free account
          </Link>

          <FlagDropdown />
        </div>

        {/* MOBILE RIGHT — Flag + Hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <FlagDropdown />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex items-center justify-center w-10 h-10 rounded-xl text-[#011B33] hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation">
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}>
                  <MdClose size={26} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}>
                  <MdMenu size={26} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <MobileMenu open={mobileOpen} onClose={closeAll} />
    </nav>
  );
};
