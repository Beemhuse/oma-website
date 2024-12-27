"use client";
import React from "react";
import HeaderSection from "./home/HeaderSection";
import TrustedClients from "./home/TrustedClients";
import AboutUs from "./home/AboutUs";
import CoreValues from "./home/CoreValues";
import OurBlogs from "./home/OurBlog";
import Testimonies from "./home/Testimonies";
import Donation from "./home/Donate";
import Events from "./home/Events";

const OneMapAfrica = () => {

  return (
    <div>
      {/* Hero Section */}
      <HeaderSection />

      {/* Trusted companies */}
      <TrustedClients />

      {/* about page */}
      <AboutUs />

      {/* our core values */}
      <CoreValues />
      <Events />
      {/* Blog Section */}
      <OurBlogs />

      {/* testimonies  */}
      <Testimonies />

      {/* Donation section  */}
      <Donation />
    </div>
  );
};

export default OneMapAfrica;
