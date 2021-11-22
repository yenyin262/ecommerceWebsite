import React from "react";
import NavBar from "../NavBar/NavBar";

import PropTypes from "prop-types";
import Footer from "../Footer/Footer";
export default function Layout({ children }) {
  console.log(typeof children, "type child child ");
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};
