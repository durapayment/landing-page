import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ArrowRight, Zap, ShieldCheck, Globe } from "lucide-react";

const trust = [
  { icon: <Zap size={13} />, label: "Instant settlements" },
  { icon: <ShieldCheck size={13} />, label: "Bank-grade security" },
  { icon: <Globe size={13} />, label: "135 currencies" },
];

export const TryDurapayNow = () => {
  return (
    <section className="w-full bg-[#011B33] py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        {/* LEFT */}
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-emerald-400 text-[11px] font-medium tracking-widest uppercase rounded-full px-3 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Get started today
          </div>

          <h2
            style={{
              fontFamily: "Boing, Georgia, serif",
              fontWeight: 700,
              lineHeight: "1.1",
              color: "#fff",
              letterSpacing: "-0.025em",
            }}
            className="text-[28px] sm:text-[38px] md:text-[46px] mb-5">
            Start accepting payments in just{" "}
            <span style={{ color: "#34d399" }}>30 minutes</span>
          </h2>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-2">
            {trust.map((t) => (
              <div
                key={t.label}
                className="inline-flex items-center gap-1.5 bg-white/10 text-white/60 text-[11px] font-medium rounded-full px-3 py-1.5">
                <span className="text-emerald-400">{t.icon}</span>
                {t.label}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:shrink-0">
          <Link
            href={siteConfig.links.register}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-7 py-3.5 rounded-lg font-medium text-sm transition whitespace-nowrap">
            <ArrowRight size={15} />
            Create free account
          </Link>

          <Link
            href="/contactsales"
            className="inline-flex items-center gap-1 text-sm font-medium text-white/50 hover:text-white transition whitespace-nowrap">
            Talk to sales →
          </Link>
        </div>
      </div>
    </section>
  );
};
