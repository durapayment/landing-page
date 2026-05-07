"use client";

import { useEffect, useRef, useState } from "react";
import { MdMenu } from "react-icons/md";
import { NavDropdown } from "./NavDropdown";
import { FlagDropdown } from "./FlagDropdown";
import { MobileMenu } from "./MobileDrawer";

export const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [focusIndex, setFocusIndex] = useState(-1);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  const MENU_ITEMS = ["Why DuraPay", "Customers", "Pricing", "Learn"];

  const closeAll = () => {
    setActiveMenu(null);
    setMobileOpen(false);
    setFocusIndex(-1);
  };

  const toggleMenu = (menu: string) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
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

  /* KEYBOARD NAV */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();

      if (e.key === "ArrowRight") {
        setFocusIndex((prev) => (prev < MENU_ITEMS.length - 1 ? prev + 1 : 0));
      }

      if (e.key === "ArrowLeft") {
        setFocusIndex((prev) => (prev > 0 ? prev - 1 : MENU_ITEMS.length - 1));
      }
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
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
      className={`w-full fixed top-0 z-50 font-black transition-all duration-300
      ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-green-50"}
    `}>
      <div className="max-w-360 mx-auto flex items-center justify-between h-16 text-[15px] text-black px-6">
        {/* ================= LOGO ================= */}
        <div className="flex items-center gap-2">
          <img src="/dura-logo.png" width={20} height={20} />
          <h3 className="text-green-950 text-xl font-bold">DuraPayment</h3>
        </div>

        {/* ================= DESKTOP NAV (lg+) ================= */}
        <ul className="hidden lg:flex items-center gap-10 text-[14px] font-medium text-gray-800 list-none">
          {MENU_ITEMS.map((item, i) =>
            item.includes("DuraPay") || item === "Learn" ? (
              <NavDropdown
                key={item}
                label={item}
                id={item.toLowerCase().replace(" ", "")}
                openMenu={activeMenu}
                toggleMenu={toggleMenu}
                focus={focusIndex === i}
              />
            ) : (
              <li
                key={item}
                className="hover:text-black transition cursor-pointer">
                {item}
              </li>
            ),
          )}
        </ul>

        {/* ================= RIGHT MENU (lg+) ================= */}
        <div className="hidden lg:flex items-center gap-6 text-[14px] font-medium">
          <NavDropdown
            label="Developers"
            id="developers"
            openMenu={activeMenu}
            toggleMenu={toggleMenu}
            small
          />

          <NavDropdown
            label="Support"
            id="support"
            openMenu={activeMenu}
            toggleMenu={toggleMenu}
            small
          />

          <li className="list-none cursor-pointer">Login</li>

          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
            Create free account
          </button>

          <FlagDropdown />
        </div>

        {/* ================= HAMBURGER (md + sm only) ================= */}
        <div
          className="flex lg:hidden items-center cursor-pointer"
          onClick={() => setMobileOpen(true)}>
          <MdMenu size={26} />
        </div>
      </div>

      {/* MOBILE MENU */}
      <MobileMenu open={mobileOpen} setOpen={setMobileOpen} />
    </nav>
  );
};
