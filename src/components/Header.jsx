import MobileNavbar from "@/layout/MobileNavbar";
import Navbar from "@/layout/Navbar";
import React from "react";

const Header = () => {
  return (
    <header>
      <Navbar />
      <MobileNavbar />
    </header>
  );
};

export default Header;
