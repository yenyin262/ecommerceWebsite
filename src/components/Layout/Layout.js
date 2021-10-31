import React from "react";
import NavBar from "../NavBar/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
