"use client";

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

  return (
    <li
      className={`relative cursor-pointer outline-none ${
        focus ? "ring-2 ring-green-500 rounded-md" : ""
      }`}
      tabIndex={0}
      onClick={() => toggleMenu(id)}
      onMouseEnter={() => toggleMenu(id)}>
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
              z-999
              flex gap-6
              ${small ? "p-2 w-50" : "p-6"}
            `}>
            {/* WHY DURAPAY DROPDOWN */}
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

                <div className="w-55 bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold mb-4">Your Growth Stage</h3>

                  <ul className="space-y-3 text-sm">
                    <li>For Entrepreneurs</li>
                    <li>For Corporates</li>
                    <li>For Global Brands</li>
                    <li>For Startups</li>
                  </ul>

                  <h3 className="font-semibold mt-5 mb-4">
                    Your Business Type
                  </h3>

                  <ul className="space-y-3 text-sm">
                    <li>For Fintechs</li>
                    <li>For Agencies</li>
                    <li>For Schools</li>
                    <li>For Betting</li>
                  </ul>
                </div>
              </>
            )}

            {/* LEARN DROPDOWN */}
            {id === "learn" && (
              <>
                <div className="w-90 bg-gray-50 rounded-lg p-5 space-y-8">
                  <div className="flex gap-4">
                    <img src="/bulb.svg" width={40} height={20} alt="Bulb" />
                    <div>
                      <h3 className="font-semibold text-black">Blog</h3>
                      <p className="text-gray-600 mt-2">
                        Original lessons about making the internet work for your
                        business
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <img
                      src="/guides.svg"
                      width={40}
                      height={20}
                      alt="Guides"
                    />
                    <div>
                      <h3 className="font-semibold text-black">Guides</h3>
                      <p className="text-gray-600 mt-2">
                        Big Ideas in payment explained in simple English
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <img
                      src="/tutorials.svg"
                      width={40}
                      height={20}
                      alt="Tutorials"
                    />
                    <div>
                      <h3 className="font-semibold text-black">
                        Video Tutorials
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Quick video tutorials on how to use DuraPay and grow
                        your business.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <img
                      src="/decode_fintech.svg"
                      width={40}
                      height={20}
                      alt="Decode Fintech"
                    />
                    <div>
                      <h3 className="font-semibold text-black">
                        Decode FIntech
                      </h3>
                      <p className="text-gray-600 mt-2">
                        The trade email newsletter and podcasts for leaders in
                        African fintech
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-55 bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold mb-4">Company</h3>

                  <ul className="space-y-3 text-sm text-gray-700">
                    <li>About Us</li>
                    <li>Changelog</li>
                    <li>Subscribe</li>
                    <li>Compliance</li>
                    <li>Careers</li>
                    <li>Brand</li>
                    <li>Media Kit</li>
                  </ul>
                </div>
              </>
            )}

            {/* SMALL DROPDOWNS */}
            {small && (
              <div className="flex flex-col text-sm w-full">
                <p className="p-2 hover:bg-gray-100 rounded-md">Overview</p>
                <p className="p-2 hover:bg-gray-100 rounded-md">
                  Documentation
                </p>
                <p className="p-2 hover:bg-gray-100 rounded-md">Integration</p>
                <p className="p-2 hover:bg-gray-100 rounded-md">Status Page</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
