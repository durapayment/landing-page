import { BusinessGrowth } from "@/components/businessgrowth";
import { FlagDropdown } from "@/components/FlagDropdown";
import { GlobalPartners } from "@/components/globalpartners";
import { Hero } from "@/components/Hero";
import { MidSection } from "@/components/midsection";
import { MobileMenu } from "@/components/MobileDrawer";
import { NavDropdown } from "@/components/NavDropdown";
import { OurPartners } from "@/components/ourpartners";
import Image from "next/image";

// test

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <MidSection />
        <BusinessGrowth />
        <OurPartners />
        <GlobalPartners />
      </main>
    </div>
  );
}
