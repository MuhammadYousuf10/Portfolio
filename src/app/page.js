"use client";

import Hero from "@/components/sections/heroBanner";
import ProcessCards from "@/components/sections/processCards";
import ServicesSection from "@/components/sections/services";
import ProjectsSection from "@/components/sections/projects";
import TestimonialsSection from "@/components/sections/testimonials";
import PricingSection from "@/components/sections/pricing";
import WhyUsSection from "@/components/sections/whyUs";
import FAQSection from "@/components/sections/faq";
import BlogSection from "@/components/sections/blog";

const page = () => {
  return (
    <>
      <Hero />
      <ProcessCards />
      <ServicesSection />
      <ProjectsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <BlogSection />
    </>
  );
};
export default page;
