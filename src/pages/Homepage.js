import React from "react";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import CustomMarquee from "../components/CustomMarquee";
import CookieConsent from "react-cookie-consent";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <CTA />
      <CustomMarquee />
      <FAQ />
      <ContactUs />
      <CookieConsent
        location='bottom'
        buttonText='Accept'
        cookieName='myAwesomeCookieName2'
        style={{ background: "#DC2625" }}
        buttonStyle={{
          color: "#0a0a0a",
          fontSize: "16px",
          backgroundColor: "#fff",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
      </CookieConsent>
    </div>
  );
};

export default HomePage;
