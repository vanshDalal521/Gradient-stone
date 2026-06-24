import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { WhySundaram } from "@/components/home/WhySundaram";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { ManufacturingPreview } from "@/components/home/ManufacturingPreview";
import { GlobalPresencePreview } from "@/components/home/GlobalPresencePreview";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustedBy } from "@/components/home/TrustedBy";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Marquee } from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutPreview />
      <FeaturedCollections />
      <WhySundaram />
      <ManufacturingPreview />
      <GlobalPresencePreview />
      <Testimonials />
      <TrustedBy />
      <ContactCTA />
    </>
  );
}
