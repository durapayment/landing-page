"use client";

import { siteConfig } from "@/config/site";

export const WhyDurapayHero = () => {
  const stats = [
    { value: "99.4%", label: "Success rate" },
    { value: "4 min", label: "Avg. settlement time" },
    { value: "135+", label: "Currencies supported" },
    { value: "99.9%", label: "Uptime SLA" },
  ];

  return (
    <section className="w-full bg-[#f0f9f6] pt-24 pb-16 overflow-hidden">
      <div className="max-w-4xl mx-auto mt-10 px-5 sm:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-white/80 text-emerald-700 text-[11px] font-medium tracking-widest uppercase rounded-full px-3 py-1.5 mb-6 border border-emerald-100">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Why businesses choose us
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "Boing, Georgia, serif",
            fontWeight: 700,
            lineHeight: "1.08",
            color: "rgb(1, 27, 51)",
            letterSpacing: "-0.03em",
          }}
          className="text-[30px] sm:text-[38px] md:text-[48px] lg:text-[54px] mb-6 max-w-3xl mx-auto">
          Why businesses trust{" "}
          <span style={{ color: "#059669" }}>{siteConfig.name}</span> to power
          their payments
        </h1>

        {/* Subheadline */}
        <p className="text-gray-500 text-base md:text-lg lg:text-[20px] leading-relaxed font-light max-w-2xl mx-auto mb-14">
          From fast-moving startups to large enterprises, thousands of
          organisations rely on {siteConfig.name} for payments that just work —
          every time. Here are 12 reasons why.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl border border-emerald-50 px-4 py-5">
              <p
                style={{
                  fontFamily: "Boing, Georgia, serif",
                  letterSpacing: "-0.02em",
                  color: "rgb(1,27,51)",
                }}
                className="text-[26px] font-bold leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-gray-400 font-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
