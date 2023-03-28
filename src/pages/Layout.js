import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/UI/Navbar";
import Footer from "../Components/UI/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;