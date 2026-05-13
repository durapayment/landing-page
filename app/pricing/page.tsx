import CalculatorSection from "@/components/pricing-calculator";
import { TransfersSection } from "@/components/pricing-mid";
import { PricingPage } from "@/components/pricingpage";

export default function Pricing() {
  return (
    <div>
      <main>
        <PricingPage />
        <TransfersSection />
        <CalculatorSection />
      </main>
    </div>
  );
}
