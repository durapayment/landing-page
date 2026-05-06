"use client";
export const MobileMenu = ({ open }: any) => {
  if (!open) return null;

  return (
    <div className="md:hidden bg-white px-4 py-3 space-y-3">
      <p>Why DuraPay</p>
      <p>Customers</p>
      <p>Pricing</p>
      <p>Learn</p>
      <p>Developers</p>
      <p>Support</p>
      <p>Login</p>

      <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full">
        Create free account
      </button>
    </div>
  );
};
