"use client";

import Link from "next/link";
const handleRedirect = () => {
  window.open("https://online.durapayment.com");
};

export const MobileMenu = ({ open }: any) => {
  if (!open) return null;

  return (
    <div className="lg:hidden bg-white text-black font-medium px-6 py-5 space-y-4 shadow-lg border-t">
      <Link
        href="/why-choose-durapayment"
        className="cursor-pointer block hover:text-green-600">
        Why DuraPay
      </Link>

      <Link
        href="/coming-soon"
        className="cursor-pointer block hover:text-green-600">
        Customers
      </Link>

      <Link
        href="/pricing"
        className="cursor-pointer block hover:text-green-600">
        Pricing
      </Link>

      <Link
        href="/coming-soon"
        className="cursor-pointer block hover:text-green-600">
        Learn
      </Link>

      <Link
        href="/coming-soon"
        className="cursor-pointer block hover:text-green-600">
        Developers
      </Link>

      <Link
        href="/coming-soon"
        className="cursor-pointer block hover:text-green-600">
        Support
      </Link>

      <Link href="/login" className="cursor-pointer block hover:text-green-600">
        Login
      </Link>

      <button
        onClick={handleRedirect}
        className="bg-green-500 text-white px-4 py-2 rounded-md w-full">
        Create free account
      </button>
    </div>
  );
};
