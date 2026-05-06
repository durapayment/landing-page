"use client";

export const OurPartners = () => {
  const logos = [
    "/Ariiya.svg",
    "/mtn-group-grayscale.svg",
    "/piggyvest.svg",
    "/Ibom.svg",
    "/Kuda.svg",
    "/bolt.svg",
    "/Dominos-Plain.svg",
    "/mtn-group-grayscale.svg",
    "/Lagos-Internal.svg",
    "/bolt.svg",
    "/Betway-Plain.svg",
    "/Carbon-dark.svg",
    "/Axa.svg",
    "/Abia-State-University.svg",
    "/GIGM.svg",
    "/bolt.svg",
    "/Smile.svg",
    "/Cowrywise.svg",
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center gap-20 bg-white px-4 sm:px-6 md:px-16 mb-20">
      <div className="w-full max-w-6xl pt-12 sm:pt-16 md:pt-20">
        {/* TEXT SECTION */}
        <div className="max-w-2xl text-center md:text-left mb-10 sm:mb-12 md:mb-14">
          <h1
            style={{
              fontFamily:
                'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 800,
              lineHeight: "1.2",
              color: "rgb(1, 27, 51)",
            }}
            className="mb-4 sm:mb-6 text-[24px] sm:text-[32px] md:text-[48px]">
            Powering growth for amazing businesses
          </h1>

          <p
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              lineHeight: "30px",
              color: "rgb(1, 27, 51)",
            }}
            className="text-sm sm:text-base md:text-[20px]">
            Durapayment is a growth engine for a new generation of innovative,
            forward-looking organizations operating in Africa.
          </p>
        </div>

        {/* LOGO GRID */}
        <div className="max-w-310 mx-auto grid grid-cols-2 pb-30 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 sm:gap-y-12 lg:gap-y-16 gap-x-6 sm:gap-x-10 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full">
              <img
                src={logo}
                alt="partner logo"
                className="w-27.5 sm:w-30 md:w-32.25 h-6.5 sm:h-7 md:h-7.5 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
