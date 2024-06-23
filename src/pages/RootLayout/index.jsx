import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CustomizedSnackbar from "../../components/UI/CustomSnackbar";
import { Outlet } from "react-router";

const index = () => {
  return (
    <>
      <Navbar />
      <CustomizedSnackbar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default index;
