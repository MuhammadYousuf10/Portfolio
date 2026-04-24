"use client";

import Hero from "@/components/sections/Hero";
import WorkingProcess from "@/components/sections/WorkingProcess";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import LatestProjects from "@/components/sections/LatestProjects";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import ProvenResults from "@/components/sections/ProvenResults";
import Pricing from "@/components/sections/Pricing";
import WhyUs from "@/components/sections/WhyUs";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";
import Comparison from "@/components/sections/Comparison";

const page = () => {
  return (
    <>
      <Hero />
      <WorkingProcess />
      <WhatWeOffer />
      <LatestProjects />
      <About />
      <Testimonials />
      <ProvenResults />
      <WhyUs />
      <Comparison />
      <Pricing />
      <FAQ />
      <Blog />
    </>
  );
};
export default page;
