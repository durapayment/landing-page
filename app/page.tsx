import { FlagDropdown } from "@/components/FlagDropdown";
import { Hero } from "@/components/Hero";
import { MidSection } from "@/components/midsection";
import { MobileMenu } from "@/components/MobileDrawer";
import { NavDropdown } from "@/components/NavDropdown";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <MidSection />
    </div>
  );
}
