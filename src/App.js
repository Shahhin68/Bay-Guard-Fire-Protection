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

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='about-us' element={<AboutUsPage />} />
        <Route path='locations' element={<LocationsPage />} />
        <Route path='contact-us' element={<ContactUsPage />} />
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
        {/* Error 404 */}
        <Route path='*' element={<NoMatchPage />} />
      </Route>
    </Routes>
  );
};

export default App;
