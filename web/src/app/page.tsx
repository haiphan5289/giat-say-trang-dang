import HeroBanner from "@/components/sections/HeroBanner";
// import ShirtPhysicsCanvas from "@/components/ui/ShirtPhysicsCanvas";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import NewsSection from "@/components/sections/NewsSection";
import Location from "@/components/sections/Location";

export default function HomePage() {
  return (
    <>
      {/* <ShirtPhysicsCanvas /> */}
      <HeroBanner />
<ServicesGrid />
      <ProcessSteps />
      <Testimonials />
      <Gallery />
      <NewsSection />
      <Location />
    </>
  );
}
