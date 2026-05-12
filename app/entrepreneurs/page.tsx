import { Entrepreneur } from "@/components/entrepreneur";
import { Testimonial } from "@/components/entrepreneur_customertestimonial";
import { EntrepreneurLast } from "@/components/entrepreneurlast";
import { EntrepreneurMid } from "@/components/entrepreneurmid";

export default function entrepreneur() {
  return (
    <div>
      <main>
        <Entrepreneur />
        <EntrepreneurMid />
        <EntrepreneurLast />
        <Testimonial />
      </main>
    </div>
  );
}
