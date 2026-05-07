"use client";

import { useRef } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export const NavDropdown = ({
  label,
  id,
  openMenu,
  toggleMenu,
  small,
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
    closeTimeout.current = setTimeout(() => {
      toggleMenu(null);
    }, 200);
  };

  return (
    <li
      className={`relative cursor-pointer outline-none ${
        focus ? "ring-2 ring-green-500 rounded-md" : ""
      }`}
      tabIndex={0}
      onClick={() => toggleMenu(id)}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}>
      {/* TRIGGER */}
      <div className="flex items-center gap-1 hover:text-black transition">
        {label}
        <MdArrowDropDown />
      </div>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.15 }}
            className={`
              absolute top-12 left-0
              bg-white shadow-2xl rounded-xl
              z-[999]
              flex gap-6
              ${small ? "p-2 w-50" : "p-6"}
            `}
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}>
            {/* ================= WHY DURAPAY ================= */}
            {id === "whydurapay" && (
              <>
                <div className="w-90 bg-gray-50 rounded-lg p-5 space-y-8">
                  <div className="flex gap-4">
                    <img src="/cup.svg" width={40} alt="Cup" />
                    <div>
                      <h3 className="font-semibold">Why Choose DuraPayment</h3>
                      <p className="text-gray-600 mt-2">
                        Over 200,000 businesses trust DuraPay.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <img src="/arrow.svg" width={40} alt="Arrow" />
                    <div>
                      <h3 className="font-semibold">Success Rates</h3>
                      <p className="text-gray-600 mt-2">
                        Best success rates in the industry.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <img src="/giftbox.svg" width={40} alt="Gift Box" />
                    <div>
                      <h3 className="font-semibold">Demo</h3>
                      <p className="text-gray-600 mt-2">
                        See checkout forms and dashboards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-55 bg-green-50 rounded-lg p-5 space-y-6">
                  <h3 className="font-semibold">Your Growth Stage</h3>

                  <div className="space-y-2 text-sm">
                    <p>For Entrepreneurs</p>
                    <p>For Corporates</p>
                    <p>For Global Brands</p>
                    <p>For Startups</p>
                  </div>

                  <h3 className="font-semibold">Your Business Type</h3>

                  <div className="space-y-2 text-sm">
                    <p>For Fintechs</p>
                    <p>For Agencies</p>
                    <p>For Schools</p>
                    <p>For Betting</p>
                  </div>
                </div>
              </>
            )}

            {/* ================= DEVELOPERS ================= */}
            {id === "developers" && (
              <div className="flex flex-col text-sm w-full space-y-2">
                <p className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  Overview
                </p>
                <p className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  Documentation
                </p>
                <p className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  Integration
                </p>
                <p className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  API Status
                </p>
              </div>
            )}

            {/* ================= LEARN ================= */}
            {id === "learn" && (
              <>
                <div className="w-90 bg-gray-50 rounded-lg p-5 space-y-8">
                  <div className="flex gap-4">
                    <img src="/bulb.svg" width={40} alt="Bulb" />
                    <div>
                      <h3 className="font-semibold">Blog</h3>
                      <p className="text-gray-600 mt-2">
                        Original lessons about making the internet work for your
                        business
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <img src="/guides.svg" width={40} alt="Guides" />
                    <div>
                      <h3 className="font-semibold">Guides</h3>
                      <p className="text-gray-600 mt-2">
                        Big Ideas in payment explained in simple English
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <img src="/tutorials.svg" width={40} alt="Tutorials" />
                    <div>
                      <h3 className="font-semibold">Video Tutorials</h3>
                      <p className="text-gray-600 mt-2">
                        Quick video tutorials on how to use DuraPay and grow
                        your business.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <img src="/decode_fintech.svg" width={40} alt="Fintech" />
                    <div>
                      <h3 className="font-semibold">Decode Fintech</h3>
                      <p className="text-gray-600 mt-2">
                        Newsletter and podcasts for African fintech leaders
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-55 bg-green-50 rounded-lg p-5 space-y-2">
                  <h3 className="font-semibold mb-2">Company</h3>

                  <div className="space-y-2 text-sm text-gray-700">
                    <p>About Us</p>
                    <p>Changelog</p>
                    <p>Careers</p>
                    <p>Brand</p>
                    <p>Media Kit</p>
                  </div>
                </div>
              </>
            )}

            {/* ================= SUPPORT ================= */}
            {id === "support" && (
              <div className="flex flex-col text-sm w-full space-y-1">
                <p className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  Quick Help
                </p>
                <p className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  Contact Us
                </p>
                <p className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  Why was I debited?
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
