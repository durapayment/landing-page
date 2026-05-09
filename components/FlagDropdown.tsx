"use client";

import { useEffect, useRef, useState } from "react";

export const FlagDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {/* FLAG TRIGGER */}
      <div
        className="flex items-center gap-1 cursor-pointer py-2"
        onClick={toggleDropdown}
      >
        <img src="/ng.svg" alt="Nigeria" width={16} height={15} />
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 top-full w-56 bg-white shadow-xl rounded-lg border z-9999">
          <div className="flex flex-col text-sm">
            <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50">
              <img src="/cote.svg" alt="Côte d'Ivoire" width={16} height={15} />
              Côte d'Ivoire
            </div>

            <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50">
              <img src="/eg.svg" alt="Egypt" width={16} height={15} />
              Egypt
            </div>

            <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50">
              <img src="/gh.svg" alt="Ghana" width={16} height={15} />
              Ghana
            </div>

            <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50">
              <img src="/ke.svg" alt="Kenya" width={16} height={15} />
              Kenya
            </div>

            <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50">
              <img src="/rw.svg" alt="Rwanda" width={16} height={15} />
              Rwanda
            </div>

            <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50">
              <img src="/za.svg" alt="South Africa" width={16} height={15} />
              South Africa
            </div>

            <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 border-t">
              <img src="/paystack.svg" alt="Others" width={16} height={15} />
              Others
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
