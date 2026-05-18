"use client";

import { Check, ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

/* ── DESIGN TOKENS ── */
const SECTION =
  "w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 py-20 px-6 xl:px-0";
const IMG =
  "w-full max-w-[520px] h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0";
const H2 =
  "text-[26px] sm:text-[32px] md:text-[36px] font-bold text-[rgb(1,27,51)] leading-tight";
const BODY =
  "text-[15px] md:text-[17px] text-[rgba(1,27,51,0.65)] leading-[28px] mt-4";
const TAG =
  "text-[11px] font-black tracking-[0.22em] uppercase text-green-500 mb-3";

const Accent = () => (
  <div className="mt-8 w-10 h-1 rounded-full bg-green-400/50" />
);

const Fade = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay }}
    className={className}>
    {children}
  </motion.div>
);

const List = ({ items, grid = false }: { items: string[]; grid?: boolean }) => (
  <ul className={`mt-6 ${grid ? "grid grid-cols-2 gap-3" : "space-y-3"}`}>
    {items.map((item, i) => (
      <motion.li
        key={i}
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.07 }}
        className="flex items-start gap-3">
        <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
          <Check className="w-3 h-3 text-green-600" />
        </span>
        <span className="text-[14px] text-[rgb(1,27,51)] leading-6">
          {item}
        </span>
      </motion.li>
    ))}
  </ul>
);

const ImgBox = ({ src, alt }: { src: string; alt: string }) => (
  <div className={IMG}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
    />
  </div>
);

/* ── TESTIMONIAL DATA ── */
const cards = [
  {
    logo: "/mtn.svg",
    logoWidth: "w-[60px]",
    text: "The feedback with working with Durapayment has always been speed, execution excellence and innovation!",
    avatar: "/olubayo.jpg",
    name: "Olubayo Adekanmbi",
    role: "Chief Transformation Officer, MTN",
  },
  {
    logo: "/axa-coloured.svg",
    logoWidth: "w-[60px]",
    text: "Payment failures reduced and customers now have more options.",
    avatar: "/bayo.jpg",
    name: "Bayo Adesanya",
    role: "Chief Digital Officer, AXA Mansard",
  },
  {
    logo: "/blue.png",
    logoWidth: "w-[60px]",
    text: "We needed a scalable payment platform and chose Durapayment.",
    avatar: "/maria.jpg",
    name: "Maria Keshinro Rotilu",
    role: "Country Manager, Branch Nigeria",
  },
];

/* ── PAYMENT SECTIONS DATA (built inside component to use siteConfig.name) ── */
const buildPaymentSections = (name: string) => [
  {
    tag: "Payment Channels",
    image: "/collect.gif",
    title: "Delight customers with a seamless payments experience",
    text: `Give your customers the gift of modern, frictionless, painless payments. Integrate ${name} once and let your customers pay you however they want.`,
    points: [
      "Card",
      "Bank Account",
      "Bank Transfer",
      "USSD",
      "Apple Pay",
      "Visa QR",
      "Mobile Money",
      "POS",
    ],
    grid: true,
  },
  {
    tag: "Reporting",
    image: "/detailed.png",
    title: "Detailed reporting for accounting, reconciliation, and audits",
    text: "Export your payments data however you want, whenever you want.",
    points: [
      "Download granular transaction, customer, and error rate data",
      "Receive daily and weekly automated email reports",
      `Pull in your payments data into your internal dashboards and accounting/reporting tools`,
    ],
  },
  {
    tag: "Security",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=900&auto=format&fit=crop",
    title: "Protect yourself and your customers with advanced fraud detection",
    text: `${name}'s combination of automated and manual fraud systems protect you from fraudulent transactions and associated chargeback claims.`,
    points: [
      "PCI-DSS-certified systems",
      "Automated fraud monitoring",
      `When a fraud attempt is discovered with any ${name} merchant, ALL ${name} merchants become protected`,
    ],
  },
  {
    tag: "Fast Settlement",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=900&auto=format&fit=crop",
    title: "Get settled within 24 hours",
    text: "Receive payments automatically in your corporate bank account within 24 hours.",
    points: [
      "We settle all merchants before 10 AM, every morning",
      "Split payments into different bank accounts",
    ],
  },
  {
    tag: "Chargebacks",
    image: "/slash.jpg",
    title: "Slash revenue loss to chargebacks and refunds",
    text: `The traditional chargeback process can be slow and expensive. ${name} is the only payment gateway that lets you manage chargebacks efficiently from your Dashboard.`,
    points: [
      `Chargebacks automatically reflect on the ${name} Dashboard`,
      "Reject chargebacks and upload supporting evidence quickly",
      `Issue partial or full refunds right from your ${name} Dashboard`,
      "Your Dashboard maintains an exportable record of transaction disputes and refunds",
    ],
  },
  {
    tag: "Customer Insights",
    image: "/insights.jpg",
    title: "Understand customer purchase patterns",
    text: `Your ${name} Dashboard surfaces useful customer insights from your payments data.`,
    points: [
      "See who your top customers are, both by purchases and total amount spent",
      "See your new and returning customers over any date range",
      "See your busiest average time of day, and day of the week",
    ],
  },
  {
    tag: "Access Control",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop",
    title: "Control access to data with User Permissions",
    text: `Give specific members of your team exactly the permissions they need to do their jobs, and control exactly what they can see and do on your ${name} Dashboard.`,
    points: [],
  },
  {
    tag: "Global Payments",
    image: "/twohands.gif",
    title: "Get paid by customers from anywhere in the world",
    text: [
      `The internet has no borders, and neither should your business. With ${name}, you can accept payments from international customers, wherever they are in the world.`,
      "You can accept payments from internationally-issued cards or via Apple Pay, display prices in USD, and also get settled in USD.",
      "We also make available localized payment options - such as mobile money - that are popular in certain regions of the world.",
    ],
    points: [],
  },
  {
    tag: "In-Person Payments",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop",
    title: "Delight customers with memorable, in-person payment experiences",
    text: "Build custom, in-person payment experiences that increase customer loyalty and lifetime value.",
    points: [
      "Multiple payment channels (Card, Bank Transfer, USSD)",
      "Delight customers with self-checkout experiences",
      "Reinforce your brand with customized receipts",
      "Build loyalty programs with deals and discounts customised for each customer",
      "Easy and straightforward reconciliation",
    ],
  },
  {
    tag: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&auto=format&fit=crop",
    title: "Monitor your business performance while on the move",
    text: `Sign up for ${name} and track your most important business metrics on your mobile device.`,
    points: [
      `Sign up for ${name} in minutes`,
      "Send invoices from your phone",
      "Look up transactions",
      "Get alerts for important updates",
      "Get instant support",
    ],
  },
  {
    tag: "Support",
    image: "/customer.jpg",
    title: "World-class support from a dedicated Relationship Manager",
    text: "Large volume merchants receive a dedicated Relationship Manager able to support in a vast range of ways. Your Relationship Manager will:",
    points: [
      "Monitor transactions to ensure minimal downtime",
      `Share insight and seek input into the ${name} Product Roadmap`,
      "Ensure prompt resolution within SLA",
      "Provide strategic guidance concerning industry trends",
    ],
  },
  {
    tag: "Pricing",
    image: "/fair.png",
    title: "Fair, transparent pricing",
    text: `${name} only charges a tiny fee per transaction, which means we literally only make money when you do, and we work hard to ensure every transaction succeeds.`,
    points: [
      "Zero integration fee",
      "Zero maintenance fee",
      "Bulk volume discounts",
    ],
  },
];

/* ── GROWTH LOGOS ── */
const growthLogos = [
  "/mtn.svg",
  "/axa-coloured.svg",
  "/blue.png",
  "/carbon-dark.svg",
  "/ariiya.svg",
  "/betway-plain.svg",
];

/* ── COMPONENT ── */
export const CorpTestimonial = () => {
  const paymentSections = buildPaymentSections(siteConfig.name);

  return (
    <>
      {/* ══ TESTIMONIALS ══ */}
      <section className="w-full bg-[#011B33] py-24 px-6 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-white/[0.04]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

        <div className="w-full max-w-6xl mx-auto relative z-10">
          <Fade className="mb-14">
            <p className="text-[11px] font-black tracking-[0.22em] uppercase text-green-400 mb-4">
              Customer Testimonials
            </p>
            <h2
              className="text-white font-extrabold text-[28px] sm:text-[38px] md:text-[46px] leading-tight max-w-2xl mb-4"
              style={{
                fontFamily:
                  'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}>
              Trusted by{" "}
              <span className="text-green-400">40,000+ businesses</span>
            </h2>
            <p className="text-white/50 text-[15px] leading-[28px] max-w-xl">
              Over 40,000 businesses trust {siteConfig.name} to power their
              payments.
            </p>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col justify-between">
                <Quote className="w-6 h-6 text-green-400 opacity-60 mb-5" />
                <p className="text-white/70 text-[14px] leading-7 flex-1 mb-6">
                  {card.text}
                </p>
                <div className="w-full h-px bg-white/10 mb-5" />
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                      <img
                        src={card.avatar}
                        alt={card.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white text-[13px] font-semibold">
                        {card.name}
                      </h4>
                      <p className="text-white/40 text-[12px]">{card.role}</p>
                    </div>
                  </div>
                  <div
                    className={`${card.logoWidth} opacity-40 grayscale brightness-200`}>
                    <img
                      src={card.logo}
                      alt={card.name}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PAYMENT SECTIONS ══ */}
      <div className="w-full">
        {paymentSections.map((item, index) => {
          const isOdd = index % 2 === 0;
          const hasBg = !isOdd;

          return (
            <div
              key={index}
              className={hasBg ? "w-full bg-[#f4f6f9]" : "w-full bg-white"}>
              <Fade className={SECTION}>
                {isOdd ? (
                  <>
                    <div className="flex-1 max-w-xl">
                      <p className={TAG}>{item.tag}</p>
                      <h3 className={H2}>{item.title}</h3>
                      {Array.isArray(item.text)
                        ? item.text.map((t, i) => (
                            <p key={i} className={BODY}>
                              {t}
                            </p>
                          ))
                        : item.text && <p className={BODY}>{item.text}</p>}
                      {item.points && item.points.length > 0 && (
                        <List items={item.points} grid={item.grid} />
                      )}
                      <Accent />
                    </div>
                    <ImgBox src={item.image} alt={item.title} />
                  </>
                ) : (
                  <>
                    <ImgBox src={item.image} alt={item.title} />
                    <div className="flex-1 max-w-xl">
                      <p className={TAG}>{item.tag}</p>
                      <h3 className={H2}>{item.title}</h3>
                      {Array.isArray(item.text)
                        ? item.text.map((t, i) => (
                            <p key={i} className={BODY}>
                              {t}
                            </p>
                          ))
                        : item.text && <p className={BODY}>{item.text}</p>}
                      {item.points && item.points.length > 0 && (
                        <List items={item.points} grid={item.grid} />
                      )}
                      <Accent />
                    </div>
                  </>
                )}
              </Fade>
            </div>
          );
        })}
      </div>

      {/* ══ GROWTH SECTION ══ */}
      <section className="w-full bg-white px-6 py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <Fade className="mb-12">
            <p className={TAG}>Powering Growth</p>
            <h2
              className="text-[28px] sm:text-[36px] md:text-[42px] font-extrabold text-[#011B33] leading-tight max-w-2xl mb-4"
              style={{
                fontFamily:
                  'Boing, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}>
              We power growth for amazing businesses
            </h2>
            <p className="text-[rgba(1,27,51,0.6)] text-[16px] leading-[28px] max-w-xl">
              {siteConfig.name} is a growth engine for a new generation of
              innovative, forward-looking organizations operating in Nigeria.
            </p>
          </Fade>

          <div className="flex flex-wrap items-center gap-10">
            {growthLogos.map((logo, i) => (
              <motion.img
                key={i}
                src={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="h-7 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                alt="partner logo"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
