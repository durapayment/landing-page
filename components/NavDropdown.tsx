"use client";

import { useRef } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const NavDropdown = ({
  label,
  id,
  openMenu,
  toggleMenu,
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
    }, 150);
  };

  // DEVELOPERS SHOULD BE A NORMAL LINK (NO DROPDOWN)
  if (id === "developers") {
    return (
      <li className="list-none">
        <Link
          href="/developers"
          className="font-bold hover:text-black transition cursor-pointer">
          Developers
        </Link>
      </li>
    );
  }

  return (
    <li
      className={`relative cursor-pointer ${
        focus ? "ring-2 ring-green-500 rounded-md" : ""
      }`}
      tabIndex={0}
      onClick={() => toggleMenu(open ? null : id)}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}>
      {/* TRIGGER */}
      <div className="flex items-center gap-1 hover:text-black transition">
        <p className="font-bold">{label}</p>
        <MdArrowDropDown />
      </div>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-12 left-0 bg-white shadow-2xl rounded-xl z-50 flex gap-6 p-6"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}>
            {/* ================= WHY DURAPAY ================= */}
            {id === "whydurapay" && (
              <>
                <div className="w-80 bg-gray-50 rounded-lg p-5 space-y-6">
                  {[
                    {
                      title: "Why Choose DuraPayment",
                      desc: "Powering modern payment infrastructure",
                    },
                    {
                      title: "Success Rates",
                      desc: "Industry-leading transaction performance",
                    },
                    {
                      title: "Demo",
                      desc: "See how DuraPay works in real time",
                    },
                  ].map((item) => (
                    <div key={item.title} className="space-y-1">
                      <Link
                        href={`/${item.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="font-semibold block hover:text-green-600">
                        {item.title}
                      </Link>

                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* RIGHT */}
                <div className="w-48 bg-green-50 rounded-lg p-5 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Your Growth Stage</h3>

                    {[
                      "Entrepreneurs",
                      "Corporates",
                      "Global Brands",
                      "Startups",
                    ].map((item) => (
                      <Link
                        key={item}
                        href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-sm text-gray-700 block hover:text-green-600">
                        {item}
                      </Link>
                    ))}
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Business Type</h3>

                    {["Fintechs", "Agencies", "Schools", "Betting"].map(
                      (item) => (
                        <Link
                          key={item}
                          href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-sm text-gray-700 block hover:text-green-600">
                          {item}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              </>
            )}

            {/* ================= LEARN ================= */}
            {id === "learn" && (
              <>
                <div className="w-80 bg-gray-50 rounded-lg p-5 space-y-6">
                  {[
                    {
                      img: "/bulb.svg",
                      title: "Blog",
                      desc: "Original lessons about making payments work",
                    },
                    {
                      img: "/guides.svg",
                      title: "Guides",
                      desc: "Big ideas explained simply",
                    },
                    {
                      img: "/tutorials.svg",
                      title: "Video Tutorials",
                      desc: "Learn DuraPay step-by-step",
                    },
                    {
                      img: "/decode_fintech.svg",
                      title: "Decode Fintech",
                      desc: "Insights for builders",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <img src={item.img} width={40} alt="" />

                      <div>
                        <Link
                          href={`/${item.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="font-semibold block hover:text-green-600">
                          {item.title}
                        </Link>

                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-48 bg-green-50 rounded-lg p-5 space-y-2">
                  <h3 className="font-semibold mb-2">Company</h3>

                  {["About", "Careers", "Brand"].map((item) => (
                    <Link
                      key={item}
                      href={item === "About" ? "/about" : "/coming-soon"}
                      className="cursor-pointer block hover:text-green-600">
                      {item}
                    </Link>
                  ))}
                </div>
              </>
            )}

            {/* ================= SUPPORT ================= */}
            {id === "support" && (
              <div className="flex flex-col text-sm space-y-3 min-w-25 w-full max-w-sm">
                {["Quick Help", "Contact Us", "Why was I debited?"].map(
                  (item) => (
                    <Link
                      key={item}
                      href="/coming-soon"
                      className="cursor-pointer block hover:text-green-600">
                      {item}
                    </Link>
                  ),
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
