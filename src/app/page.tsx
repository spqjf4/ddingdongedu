import LayoutShell from "@/components/layout/LayoutShell";
import Footer from "@/components/layout/Footer";
import QuickMenu from "@/components/layout/QuickMenu";

import Hero from "@/components/sections/Hero";
import PartnerMarquee from "@/components/sections/PartnerMarquee";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import WhyUs from "@/components/sections/WhyUs";
import Instructors from "@/components/sections/Instructors";
import Facility from "@/components/sections/Facility";
import Process from "@/components/sections/Process";
import Reviews from "@/components/sections/Reviews";
import BigCTA from "@/components/sections/BigCTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <LayoutShell>
      <Hero />
      <PartnerMarquee />
      <About />
      <Programs />
      <WhyUs />
      <Instructors />
      <Facility />
      <Process />
      <Reviews />
      <BigCTA />
      <Contact />
      
      <Footer />
      <QuickMenu />
    </LayoutShell>
  );
}
