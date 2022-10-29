import React from "react";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import CustomMarquee from "../components/CustomMarquee";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <div className='relative max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        <Services />
      </div>
      <CTA />

      <CustomMarquee />
      <FAQ />
      <ContactUs />
    </div>
  );
};

export default HomePage;
