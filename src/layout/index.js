import React from "react";
import { Outlet } from "react-router";
import Banner from "../components/Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
