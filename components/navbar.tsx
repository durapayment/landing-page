"use client";

import { useEffect, useRef, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { NavDropdown } from "./NavDropdown";
import { FlagDropdown } from "./FlagDropdown";
import { MobileMenu } from "./MobileDrawer";

export const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [focusIndex, setFocusIndex] = useState(-1);

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

  /* ENTERPRISE: OUTSIDE CLICK HANDLER */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeAll();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

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

  return (
    <nav
      ref={navRef}
      className="w-full fixed top-0 z-50 bg-green-50 font-black  ">
      <div className="max-w-360 mx-auto flex items-center justify-between font-500 h-16   font-black text-[15px] text-black font-500 leading-[19.5px] text-#abbbbcpx-6">
        {/* ================= FIRST DIV ================= */}
        <div className="flex items-center gap-10">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img src="/dura-logo.png" width={20} height={20} />
            <h3 className="text-green-950 text-xl font-bold">DuraPayment</h3>
          </div>

          {/* CENTER NAV */}
          <ul className="hidden md:flex items-center gap-10 text-[14px] font-medium text-gray-800 list-none">
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
        </div>

        {/* ================= SECOND DIV ================= */}
        <div className="hidden md:flex items-center gap-6 text-[14px] font-medium">
          <ul className="flex items-center gap-10 list-none">
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

            <li className="list-none">Login</li>

            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
              Create free account
            </button>

            <FlagDropdown />
          </ul>
        </div>

        {/* MOBILE */}
        <div className="md:hidden" onClick={() => setMobileOpen(true)}>
          <MdMenu size={26} />
        </div>
      </div>

      <MobileMenu open={mobileOpen} setOpen={setMobileOpen} />
    </nav>
  );
};
