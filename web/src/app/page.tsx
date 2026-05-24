import HeroBanner from "@/components/sections/HeroBanner";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Testimonials from "@/components/sections/Testimonials";
import NewsSection from "@/components/sections/NewsSection";
import Location from "@/components/sections/Location";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ServicesGrid />
      <ProcessSteps />
      <Testimonials />
      <NewsSection />
      <Location />
    </>
  );
}
