import { BusinessGrowth } from "@/components/businessgrowth";
import { FlagDropdown } from "@/components/FlagDropdown";
import { GlobalPartners } from "@/components/globalpartners";
import { Hero } from "@/components/Hero";
import { MidSection } from "@/components/midsection";
import { MobileMenu } from "@/components/MobileDrawer";
import { NavDropdown } from "@/components/NavDropdown";
import { OurPartners } from "@/components/ourpartners";
import { TryDurapayNow } from "@/components/trydurapaymentnow";
import { Footer } from "@/components/footer";
import Image from "next/image";

// testing

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <MidSection />
        <BusinessGrowth />
        <OurPartners />
        <GlobalPartners />n
        <TryDurapayNow />
      </main>
    </div>
  );
}
