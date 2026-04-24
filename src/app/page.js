"use client";

import Hero from "@/components/sections/Hero";
import WorkingProcess from "@/components/sections/WorkingProcess";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import LatestProjects from "@/components/sections/LatestProjects";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import WhyUs from "@/components/sections/WhyUs";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";

const page = () => {
  return (
    <>
      <Hero />
      <WorkingProcess />
      <WhatWeOffer />
      <LatestProjects />
      <WhyUs />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Blog />
    </>
  );
};
export default page;
