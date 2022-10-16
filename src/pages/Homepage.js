import React from "react";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <CTA />
      <FAQ />
      <ContactUs />
    </div>
  );
};

export default HomePage;
