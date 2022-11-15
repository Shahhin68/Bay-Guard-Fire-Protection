import React from "react";
import { Route, Routes } from "react-router";

import Layout from "./layout";
import HomePage from "./pages/Homepage";
import AboutUsPage from "./pages/AboutUsPage";
import NoMatchPage from "./pages/NoMatchPage";
import ContactUsPage from "./pages/ContactUsPage";
import LocationsPage from "./pages/LocationsPage";
import {
  ExitAndEmergencySignPage,
  FireExtinguishersPage,
  FireSprinklerSystemPage,
  KitchenFireSuppressionPage,
} from "./pages/services";
import ServicesPage from "./pages/ServicesPage";
import ThankYouPage from "./pages/ThankYouPage";
import CookieConsent from "react-cookie-consent";

// import ReactGA from "react-ga";
// const MEASUREMENT_ID = "G-WHFX41JQP0"; // OUR_MEASUREMENT_ID
// ReactGA.initialize(MEASUREMENT_ID);

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about-us' element={<AboutUsPage />} />
          <Route path='locations' element={<LocationsPage />} />
          <Route path='contact' element={<ContactUsPage />} />
          <Route path='thank-you' element={<ThankYouPage />} />
          {/* Services */}
          <Route path='services'>
            <Route index element={<ServicesPage />} />
            <Route
              path='exit-and-emergency-sign'
              element={<ExitAndEmergencySignPage />}
            />
            <Route
              path='fire-extinguishers'
              element={<FireExtinguishersPage />}
            />
            <Route
              path='fire-sprinkler-system'
              element={<FireSprinklerSystemPage />}
            />
            <Route
              path='kitchen-fire-suppression'
              element={<KitchenFireSuppressionPage />}
            />
          </Route>
          <Route path='*' element={<NoMatchPage />} />
        </Route>
      </Routes>
      <CookieConsent
        location='bottom'
        buttonText='Accept'
        cookieName='cookies'
        style={{ background: "#DC2625" }}
        buttonStyle={{
          color: "#0a0a0a",
          fontSize: "16px",
          backgroundColor: "#fff",
        }}
        expires={150}
      >
        <span className='text-sm w-3/4'>
          We use cookies, including third party cookies, for operational
          purposes, statistical analyses, to personalize your experience,
          provide you with targeted content tailored to your interests and to
          analyze the performance of our advertising campaigns. By clicking
          "Accept", you consent to our use of cookies.
        </span>
      </CookieConsent>
    </>
  );
};

export default App;
