import React from "react";
import NavBar from "../NavBar/NavBar";

import PropTypes from "prop-types";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";

export default function Layout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Banner />
      <NavBar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
      <Banner />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};
