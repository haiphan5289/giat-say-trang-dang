import dynamic from "next/dynamic";
import HeroBanner from "@/components/sections/HeroBanner";
import PickupFlow from "@/components/sections/PickupFlow";

const ServicesGrid = dynamic(() => import("@/components/sections/ServicesGrid"));
const PricingTable = dynamic(() => import("@/components/sections/PricingTable"));
const ProcessSteps = dynamic(() => import("@/components/sections/ProcessSteps"));
const Gallery      = dynamic(() => import("@/components/sections/Gallery"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const NewsSection  = dynamic(() => import("@/components/sections/NewsSection"));
const FAQ          = dynamic(() => import("@/components/sections/FAQ"));
const Location     = dynamic(() => import("@/components/sections/Location"));

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <PickupFlow />
      <div className="section-lazy"><ServicesGrid /></div>
      <div className="section-lazy"><PricingTable /></div>
      <div className="section-lazy"><ProcessSteps /></div>
      <div className="section-lazy"><Gallery /></div>
      <div className="section-lazy"><Testimonials /></div>
      <div className="section-lazy"><NewsSection /></div>
      <div className="section-lazy"><FAQ /></div>
      <div className="section-lazy"><Location /></div>
    </>
  );
}
