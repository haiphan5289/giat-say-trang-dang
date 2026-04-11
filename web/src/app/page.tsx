import HeroBanner from "@/components/sections/HeroBanner";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import BranchCarousel from "@/components/sections/BranchCarousel";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import NewsSection from "@/components/sections/NewsSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ServicesGrid />
      <ProcessSteps />
      <BranchCarousel />
      <Testimonials />
      <Gallery />
      <NewsSection />
    </>
  );
}
