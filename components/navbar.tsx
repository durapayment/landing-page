"use client";

import { useEffect, useRef, useState } from "react";
import { MdMenu, MdClose, MdKeyboardArrowLeft } from "react-icons/md";
import { FlagDropdown } from "./FlagDropdown";
import { NavDropdown } from "./NavDropdown";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { LogIn } from "lucide-react";
import { href } from "react-router-dom";

export const NavBar = () => {
  // Redirect function for all buttons
  const handleRedirect = () => {
    window.open("https://online.durapayment.com", "_blank");
  };
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeAll = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  /* OUTSIDE CLICK */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

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
        scrolled ? "bg-white/90 shadow-sm" : "bg-white"
      }`}>
      {/* NAV CONTAINER */}
      <div className="max-w-[1300px] mx-auto flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-5 lg:gap-10">
          {/* LOGO */}
          <Link href={"/"} className="flex items-center cursor-pointer gap-2">
            <img src="/dura-logo.png" width={20} height={20} alt="logo" />
            <h3 className="text-accent text-xl font-semibold">DuraPayment</h3>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-5 xl:gap-10 text-[14px] font-medium text-gray-800 list-none">
            <NavDropdown
              label="Why DuraPay"
              id="whydurapay"
              openMenu={activeDropdown}
              toggleMenu={toggleDropdown}
            />

            <Link
              href="/coming-soon"
              className="cursor-pointer font-bold hover:text-black">
              Customer
            </Link>
            <Link
              href="/pricing"
              className="cursor-pointer font-bold hover:text-black">
              Pricing
            </Link>

            <NavDropdown
              label="Learn"
              id="learn"
              openMenu={activeDropdown}
              toggleMenu={toggleDropdown}
            />
          </ul>
        </div>

        {/* RIGHT MENU (DESKTOP) */}
        <div className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-black list-none">
          <Link
            href={siteConfig.links.documentation}
            className="cursor-pointer font-bold hover:text-black">
            Developers
          </Link>

          {/* <NavDropdown
            label="Support"
            id="support"
            openMenu={activeDropdown}
            toggleMenu={toggleDropdown}
            small
          /> */}

          <li>
            <Link href={siteConfig.links.login} className="cursor-pointer">
              Login
            </Link>
          </li>

          <Link
            href={siteConfig.links.register}
            className="bg-accent cursor-pointer text-white px-4 py-2 rounded-md hover:bg-tertiary transition">
            Create free account
          </Link>
          <FlagDropdown />
        </div>

        {/* MOBILE MENU ICON */}
        <div
          className="lg:hidden cursor-pointer text-black"
          onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <MdClose size={32} className="font-bold text-black" />
          ) : (
            <MdMenu size={32} className="font-bold" />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-green-50 text-black font-semibold px-6 py-5 space-y-4 border-t border-gray-200">
          {/* MAIN MENU */}
          {!activeDropdown && (
            <>
              <button
                onClick={() => toggleDropdown("whydurapay")}
                className="block w-full text-left ">
                Why DuraPay
              </button>

              <p>Customers</p>
              <li>
                <Link
                  href="/pricing"
                  className="cursor-pointer font-bold hover:text-black">
                  Pricing
                </Link>
              </li>

              <button
                onClick={() => toggleDropdown("learn")}
                className="block w-full text-left ">
                Learn
              </button>

              <Link
                href="/coming-soon"
                onClick={() => toggleDropdown("developers")}
                className="block w-full text-left ">
                Developers
              </Link>

              <button
                onClick={() => toggleDropdown("support")}
                className="block w-full text-left ">
                Support
              </button>

              <p className="text-green-500">Login</p>

              <button className="bg-accent text-white px-4 py-3 rounded-md w-full">
                Create free account
              </button>
            </>
          )}

          {/* WHY DURAPAY */}
          {activeDropdown === "whydurapay" && (
            <div className="text-sm space-y-6">
              <button
                onClick={() => setActiveDropdown(null)}
                className="flex items-center gap-2 opacity-70 text-gray-500">
                <MdKeyboardArrowLeft />
                <p>Back</p>
              </button>

              <div className="space-y-2">
                <h3 className="font-semibold">Why Choose DuraPayment</h3>
                <h3 className="font-semibold">Success Rates</h3>
                <h3 className="font-semibold">Demo</h3>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Your Growth Stage</h3>
                <p>For Entrepreneurs</p>
                <p>For Corporates</p>
                <p>For Global Brands</p>
                <p>For Startups</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Your Business Type</h3>
                <p>For Fintechs</p>
                <p>For Agencies</p>
                <p>For Schools</p>
                <p>For Sales</p>
              </div>
            </div>
          )}

          {/* LEARN */}
          {activeDropdown === "learn" && (
            <div className="text-sm space-y-6 w-80 rounded-lg p-5">
              {/* Back */}
              <button
                onClick={() => setActiveDropdown(null)}
                className="flex items-center gap-2 opacity-70 text-gray-500">
                <MdKeyboardArrowLeft />
                <p>Back</p>
              </button>

              {/* Learn Section */}
              <div className="space-y-4">
                <p className="font-bold">Blog</p>
                <p className="font-bold">Guides</p>
                <p className="font-bold">Commerce</p>
              </div>

              {/* Company Section */}
              <div className="space-y-4">
                <p className="text-xs opacity-70">COMPANY</p>
                <p className="font-bold">About</p>
              </div>
            </div>
          )}

          {/* DEVELOPERS */}
          {activeDropdown === "developers" && (
            <div className="text-sm space-y-6 ">
              <button
                onClick={() => setActiveDropdown(null)}
                className="flex items-center gap-2 font-medium ">
                <MdKeyboardArrowLeft />
                Back
              </button>

              <p>Overview</p>
              <p>Documentation</p>
              <p>Integrations</p>
              <p>Status</p>
            </div>
          )}

          {/* SUPPORT */}
          {activeDropdown === "support" && (
            <div className="text-sm space-y-4 bg-green-50">
              <button
                onClick={() => setActiveDropdown(null)}
                className="flex items-center gap-2 font-medium">
                <MdKeyboardArrowLeft />
                Back
              </button>

              <p>Quick Help</p>
              <p>Contact Us</p>
              <p>Why was I debited?</p>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};
