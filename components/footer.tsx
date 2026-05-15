"use client";

import { IoMdArrowDropright } from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  // ✅ GRAPHIK TYPOGRAPHY SYSTEM CLASS
  const footerText =
    "font-graphik text-[16px] leading-[24px] font-normal text-[#011b33]";

  const linkClass = "cursor-pointer transition hover:text-black " + footerText;

  const arrowTitles = [
    "Why Durapayment",
    "Pricing",
    "Developers",
    "About",
    "Learn",
    "Community",
    "Support",
    "Customers",
  ];

  const Title = ({ text }: { text: string }) => {
    const showArrow = arrowTitles.includes(text);

    return (
      <h3 className="font-semibold mb-3 flex items-center justify-between text-[#011b33]">
        <span>{text}</span>
        {showArrow && (
          <IoMdArrowDropright className="w-4 h-4 block md:hidden" />
        )}
      </h3>
    );
  };

  const locations = [
    {
      name: "Lagos HQ",
      address: "Victoria Island",
      phone: "+234 801 234 5678",
    },
    { name: "Abuja", address: "CBD", phone: "+234 802 345 6789" },
    { name: "Accra", address: "Airport City", phone: "+233 201 234 567" },
    { name: "Nairobi", address: "Westlands", phone: "+254 712 345 678" },
    { name: "Cape Town", address: "Waterfront", phone: "+27 82 123 4567" },
    { name: "London", address: "Canary Wharf", phone: "+44 20 7946 0958" },
    { name: "New York", address: "Manhattan", phone: "+1 212 555 0198" },
  ];

  return (
    <footer className="w-full bg-white pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* COLUMN 1 */}
          <div className={footerText}>
            <Title text="Why Durapayment" />
            <ul className="hidden md:block space-y-2">
              <ul>
                <li className={linkClass}>
                  <Link href="/why-choose-durapayment">
                    Why Choose Durapayment
                  </Link>
                </li>

                <li className={linkClass}>
                  <Link href="/success-rates">Success rates</Link>
                </li>

                <li className={linkClass + " mt-6"}>
                  <Link href="/entrepreneurs">For Entrepreneurs</Link>
                </li>

                <li className={linkClass}>
                  <Link href="/corporates">For Corporates</Link>
                </li>

                <li className={linkClass}>
                  <Link href="/startups">For Startups</Link>
                </li>

                <li className={linkClass}>
                  <Link href="/global-brands">For International Companies</Link>
                </li>

                <li className={linkClass + " mt-6"}>
                  <Link href="/for-fintechs">For Fintechs</Link>
                </li>

                <li className={linkClass}>
                  <Link href="/for-agencies">For Agencies</Link>
                </li>

                <li className={linkClass}>
                  <Link href="/for-schools">For Schools</Link>
                </li>

                <li className={linkClass}>
                  <Link href="/for-bettings">For Bettings</Link>
                </li>
              </ul>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div className={footerText}>
            <Title text="Pricing" />
            <ul className="hidden md:block space-y-2">
              <li className={linkClass}>
                <Link href="/coming-soon">Nigeria</Link>
              </li>
              <li className={linkClass}>
                <Link href="/coming-soon">Ghana</Link>
              </li>
              <li className={linkClass}>
                <Link href="/coming-soon">South Africa</Link>
              </li>
              <li className={linkClass}>
                <Link href="/coming-soon">Kenya</Link>
              </li>

              <li className="mt-3 font-semibold text-[#011b33]">Learn</li>
              <li className={linkClass}>Blog</li>
              <li className={linkClass}>Guides</li>
              <li className={linkClass}>API Reference</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className={footerText}>
            <Title text="Developers" />
            <ul className="hidden md:block space-y-2">
              <li className={linkClass}>Documentation</li>
              <li className={linkClass}>Integrations</li>
              <li className={linkClass}>Status Page</li>

              <li className="mt-3 font-semibold text-[#011b33]">Community</li>
              <li className={linkClass}>Forum</li>
              <li className={linkClass}>Slack</li>
              <li className={linkClass}>Events</li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div className={footerText}>
            <Title text="About" />
            <ul className="hidden md:block space-y-2">
              <li>
                <Link href="/commerce">company</Link>
              </li>
              <li className={linkClass}>Careers</li>
              <li className={linkClass}>Media Kit</li>
              <li className={linkClass}>
                <Link href="/legal">Privacy & Terms</Link>
              </li>

              <li className="mt-3 font-semibold text-[#011b33]">Support</li>

              <li>
                <Link href="/why" className={linkClass}>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className={linkClass}>
                  Contact Support
                </Link>
              </li>

              <li className="mt-3 font-semibold text-[#011b33]">Customers</li>
              <li className={linkClass}>Testimonials</li>
              <li className={linkClass}>Case Studies</li>
            </ul>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* CONTACT */}
            <div className={footerText}>
              <h3 className="font-semibold mb-4 text-[#011b33]">Contact</h3>

              <p className={footerText}>hello@durapayment.com</p>

              <div className="flex gap-4 text-lg mt-4">
                <FaFacebookF className="cursor-pointer hover:text-black" />
                <FaTwitter className="cursor-pointer hover:text-black" />
                <FaInstagram className="cursor-pointer hover:text-black" />
                <FaLinkedinIn className="cursor-pointer hover:text-black" />
                <FaYoutube className="cursor-pointer hover:text-black" />
              </div>
            </div>

            {/* LOCATIONS COL 1 */}
            <div className="space-y-4">
              {locations.slice(0, 3).map((loc, i) => (
                <div key={i} className={footerText}>
                  <p className="font-semibold">{loc.name}</p>
                  <p>{loc.address}</p>
                  <p>{loc.phone}</p>
                </div>
              ))}
            </div>

            {/* LOCATIONS COL 2 */}
            <div className="space-y-4">
              {locations.slice(3, 5).map((loc, i) => (
                <div key={i} className={footerText}>
                  <p className="font-semibold">{loc.name}</p>
                  <p>{loc.address}</p>
                  <p>{loc.phone}</p>
                </div>
              ))}
            </div>

            {/* LOCATIONS COL 3 */}
            <div className="space-y-4">
              {locations.slice(5).map((loc, i) => (
                <div key={i} className={footerText}>
                  <p className="font-semibold">{loc.name}</p>
                  <p>{loc.address}</p>
                  <p>{loc.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-200 mt-10 pt-4">
          <p className={footerText}>
            © {new Date().getFullYear()} Durapay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
