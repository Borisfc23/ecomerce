import React from "react";
import NavBar from "../components/partials/NavBar";
import Footer from "../components/partials/Footer";
import Newsletter from "../components/partials/Newsletter";

const FullWithLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Newsletter />
      <Footer />
    </>
  );
};

export default FullWithLayout;
