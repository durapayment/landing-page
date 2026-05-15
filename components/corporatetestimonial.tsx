"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

/* =========================
   STYLES
========================= */
const HEADING_CLASS =
  "text-[48px] sm:text-[30px] md:text-[40px] font-bold text-[rgb(1,27,51)] leading-[1.15] mb-4";

const PARAGRAPH_CLASS =
  "text-[16px] md:text-[18px] text-[rgb(1,27,51)] leading-7";

const SECTION_WRAPPER =
  "w-full max-w-310 mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-16";

/* =========================
   ANIMATION
========================= */
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AnimatedTick = () => (
  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
);

/* =========================
   GROWTH SECTION
========================= */
const GrowthSection = () => {
  const logos = [
    "/mtn.svg",
    "/axa-coloured.svg",
    "/blue.png",
    "/carbon-dark.svg",
    "/ariiya.svg",
    "/betway-plain.svg",
  ];

  return (
    <section className="w-full px-6 mt-24 overflow-hidden">
      <div className="max-w-310 mx-auto flex flex-col text-left">
        <h3 className={HEADING_CLASS}>
          We power growth for amazing businesses
        </h3>

        <p className={PARAGRAPH_CLASS + " mt-2 max-w-2xl"}>
          {siteConfig.name} is a growth engine for a new generation of
          innovative, forward-looking organizations operating in Nigeria.
        </p>

        <div className="mt-20 pb-20  pt-10">
          <div className="flex items-center justify-between gap-16 flex-wrap">
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                className="h-6 md:h-7 w-auto object-contain opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const CorpTestimonial = () => {
  /* =========================
     ORIGINAL DATA (UNCHANGED)
  ========================= */

  const sections = [
    {
      image: "/sellcommerce.png",
      title: "Sell more online with free, powerful commerce tools",
      text: "Bring your ideas to market beautifully and boost sales with our toolkit of free commerce tools.",
      points: [
        "No website? No problem. Collect payments with customisable selling links",
        "Manage incoming orders on web and mobile",
        "Simple, powerful inventory management",
        "Easy plugins and integrations with thousands of world-class seller platforms",
      ],
      ctaText: "Sell more online with Durapayment Commerce",
    },
  ];

  const cards = [
    {
      image: "/mtn.svg",
      text: "The feedback with working with Durapayment has always been speed, execution excellence and innovation!",
      footerImage: "/olubayo.jpg",
      name: "Olubayo Adekanmbi",
      role: "Chief Transformation Officer, MTN",
    },
    {
      image: "/axa-coloured.svg",
      text: "Payment failures reduced and customers now have more options.",
      footerImage: "/bayo.jpg",
      name: "Bayo Adesanya",
      role: "Chief Digital Officer, AXA Mansard",
    },
    {
      image: "/blue.png",
      text: "We needed a scalable payment platform and chose Durapayment.",
      footerImage: "/maria.jpg",
      name: "Maria Keshinro Rotilu",
      role: "Country Manager, Branch Nigeria",
    },
  ];

  const paymentSections = [
    {
      image: "/collect.gif",
      title: "Delight customers with a seamless payments experience",
      text: "Give your customers the gift of modern, frictionless, painless payments. Integrate Durapayment once and let your customers pay you however they want.",
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
    },
    {
      image: "/detailed.png",
      title: "Detailed reporting for accounting, reconciliation, and audits",
      text: "Export your payments data however you want, whenever you want.",
      points: [
        "Download granular transaction, customer, and error rate data",
        "Receive daily and weekly automated email reports",
        "Pull in your payments data into your internal dashboards and accounting/reporting tools",
      ],
    },
    {
      image: "/videoframe_1.png",
      title:
        "Protect yourself and your customers with advanced fraud detection",
      text: "Durapayment’s combination of automated and manual fraud systems protect you from fraudulent transactions and associated chargeback claims.",
      points: [
        "PCI-DSS-certified systems",
        "Automated fraud monitoring",
        "When a fraud attempt is discovered with any Paystack merchant, ALL Paystack merchants become protected from further attempts",
      ],
    },
    {
      image: "/videoframe_2.png",
      title: "Get settled within 24 hours",
      text: "Receive payments automatically in your corporate bank account within 24 hours.",
      points: [
        "We settle all merchants before 10 AM, every morning",
        "Split payments into different bank accounts",
      ],
    },
    {
      image: "/slash.jpg",
      title: "Slash revenue loss to chargebacks and refunds",
      text: "The traditional chargeback process can be slow and expensive. Paystack is the only payment gateway that lets you manage chargebacks efficiently from your Dashboard.",
      points: [
        "Chargebacks automatically reflect on the Paystack Dashboard",
        "Reject chargebacks and upload supporting evidence quickly",
        "Issue partial or full refunds right from your Paystack Dashboard",
        "Your Dashboard maintains an exportable record of transaction disputes and refunds",
      ],
    },
    {
      image: "/insights.jpg",
      title: "Understand customer purchase patterns",
      text: "Your Paystack Dashboard surfaces useful customer insights from your payments data",
      points: [
        "See who your top customers are, both in terms of number of purchases and total amount spent",
        "See your new and returning customers over any date range",
        "See your busiest average time of day, and day of the week",
      ],
    },
    {
      image: "/user.jpg",
      title: "Control access to data with User Permissions",
      text: "Give specific members of your team exactly the permissions they need to do their jobs, and control exactly what they can see and do on your Paystack Dashboard.",
      points: [],
    },
    {
      image: "/twohands.gif",
      title: "Get paid by customers from anywhere in the world",
      text: [
        "The internet has no borders, and neither should your business. With Durapayment, you can accept payments from international customers, wherever they are in the world.",
        "You can accept payments from internationally-issued cards or via Apple Pay, display prices in USD, and also get settled in USD.",
        "We also make available localized payment options - such as mobile money - that are popular in certain regions of the world.",
      ],
      points: [
        "We settle all merchants before 10 AM, every morning",
        "Split payments into different bank accounts",
      ],
    },
    {
      image: "/videoframe_2.png",
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
      image: "/paystack.png",
      title: "Monitor your business performance while on the move",
      text: "Sign up for {siteConfig.name} and track your most important business metrics on your mobile device. Monitor info such as sales, customer information, success rates, and more!",
      points: [
        "Sign up for {siteConfig.name} in minutes",
        "Send invoices from your phone",
        "Look up transactions",
        "Get alerts for important updates",
        "Get instant support",
      ],
    },
    {
      image: "/customer.jpg",
      title: "World-class support from a dedicated Relationship Manager",
      text: "Large volume merchants receive a dedicated Relationship Manager able to support in a vast range of ways. Your Relationship Manager will:",
      points: [
        "Monitor transactions to ensure minimal downtime",
        "Share insight and seek input into the Durapayment Product Roadmap",
        "Ensure prompt resolution within SLA",
        "Provide strategic guidance concerning industry trends",
      ],
    },
    {
      image: "/fair.png",
      title: "Fair, transparent pricing",
      text: "{siteConfig.name} only charges a tiny fee per transaction, which means we literally only make money when you do, and we work hard to ensure every transaction succeeds.",
      points: [
        "Zero integration fee",
        "Zero maintenance fee",
        "Bulk volume discounts",
      ],
    },
  ];

  return (
    <>
      {/* TESTIMONIAL */}
      <section className="w-full px-6 py-16 mt-20">
        <div className="max-w-310 mx-auto">
          <h1 className={HEADING_CLASS}>Customer Testimonials</h1>

          <p className={PARAGRAPH_CLASS + " mb-10"}>
            Over 40,000 businesses trust {siteConfig.name}.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white shadow-md rounded-2xl p-6">
                <img src={card.image} className="w-20 mb-6" />

                <p className="text-sm text-center mb-6 text-[rgb(1,27,51)]">
                  {card.text}
                </p>

                <div className="flex items-center gap-3 border-t pt-4">
                  <img
                    src={card.footerImage}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-sm text-[rgb(1,27,51)]">
                      {card.name}
                    </p>
                    <p className="text-xs text-gray-500">{card.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT SECTIONS */}
      <section className="w-full max-w-310 mx-auto px-6">
        {paymentSections.map((item, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn}
              className={SECTION_WRAPPER}>
              {isImageLeft && (
                <div className="flex-1">
                  <img src={item.image} className="w-full rounded-2xl" />
                </div>
              )}

              <div className="flex-1 max-w-xl">
                <h3 className={HEADING_CLASS}>{item.title}</h3>

                {Array.isArray(item.text) ? (
                  <div className="flex flex-col gap-4 mb-6">
                    {item.text.map((t, i) => (
                      <p key={i} className={PARAGRAPH_CLASS}>
                        {t}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className={PARAGRAPH_CLASS + " mb-6"}>{item.text}</p>
                )}

                <ul
                  className={
                    index === 0
                      ? "grid grid-cols-2 grid-rows-4 gap-4"
                      : "space-y-4"
                  }>
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className={
                        index === 0
                          ? "flex items-center gap-3"
                          : "flex items-center gap-3"
                      }>
                      <AnimatedTick />

                      <span className="text-[rgb(1,27,51)] font-medium">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {!isImageLeft && (
                <div className="flex-1">
                  <img src={item.image} className="w-full rounded-2xl" />
                </div>
              )}
            </motion.div>
          );
        })}
      </section>

      {/* GROWTH SECTION */}
      <GrowthSection />
    </>
  );
};
