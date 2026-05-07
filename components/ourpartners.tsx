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

  const mobileLogos = logos.slice(0, 6);

  return (
    <section className="w-full bg-white px-8 md:px-12 mb-20">
      {/* CENTERED CONTAINER ALIGNED WITH PADDING */}
      <div className="max-w-310 mx-auto pt-12 sm:pt-16 md:pt-20">
        {/* TEXT SECTION */}
        <div className="w-full text-left mb-10 sm:mb-12 md:mb-14">
          <h1
            style={{
              fontFamily:
                'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 800,
              lineHeight: "1.2",
              color: "rgb(1, 27, 51)",
            }}
            className="mb-4 sm:mb-6 text-[30px] sm:text-[48px] md:text-[42px] max-w-[30ch]">
            Powering growth for amazing businesses
          </h1>

          <p
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              lineHeight: "34px",
              color: "rgb(1, 27, 51)",
            }}
            className="text-[16px] sm:text-[18px] md:text-[22px]  max-w-[56ch]">
            Durapayment is a growth engine for a new generation of innovative,
            forward-looking organizations operating in Africa.
          </p>
        </div>

        {/* MOBILE GRID (ONLY 6 LOGOS) */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:hidden">
          {mobileLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-start w-full">
              <img
                src={logo}
                alt="partner logo"
                className="w-14 h-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* DESKTOP GRID (ALL LOGOS - ALIGNED WITH TEXT) */}
        <div className="hidden md:grid w-full grid-cols-6 gap-x-10 gap-y-16 items-center justify-items-start">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-start w-full">
              <img
                src={logo}
                alt="partner logo"
                className="w-28 h-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
