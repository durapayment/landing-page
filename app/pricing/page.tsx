import CalculatorSection from "@/components/pricing-calculator";
import { TransfersSection } from "@/components/pricing-mid";
import { FAQSection } from "@/components/pricinglastpage";
import { PricingPage } from "@/components/pricingpage";

export default function Pricing() {
  return (
    <div>
      <PricingPage />
      <TransfersSection />
      <CalculatorSection />
      <FAQSection />
    </div>
  );
}
