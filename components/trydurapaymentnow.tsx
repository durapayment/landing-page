export const TryDurapayNow = () => {
  return (
    <section className="w-full bg-[#f9fbfc] py-16 sm:py-20 md:py-28">
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        {/* LEFT SIDE */}
        <div className="text-left max-w-2xl">
          <p className="text-sm sm:text-base md:text-[20px] text-[#011B33] leading-8 mb-5">
            Try Durapay Now!
          </p>

          <h1
            style={{
              fontFamily:
                'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 700,
              lineHeight: "1.15",
              color: "rgb(1, 27, 51)",
            }}
            className="text-[28px] sm:text-[40px] md:text-[48px]">
            Start accepting payments in just 30 minutes
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-auto flex md:justify-end">
          <button className="w-full md:w-auto bg-accent cursor-pointer text-white px-7 py-3.5 rounded-md hover:bg-tertiary transition font-medium whitespace-nowrap">
            Create free account
          </button>
        </div>
      </div>
    </section>
  );
};
