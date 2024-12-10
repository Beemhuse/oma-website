import React from "react";
import HeaderSection from "./home/HeaderSection";
import TrustedClients from "./home/TrustedClients";
import AboutUs from "./home/AboutUs";
import CoreValues from "./home/CoreValues";
import OurBlogs from "./home/OurBlog";
import Testimonies from "./home/Testimonies";
import Donation from "./home/Donate";

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

      {/* Blog Section */}
      <OurBlogs />
      
      {/* testimonies  */}
      <Testimonies />

      {/* Donation section  */}
      <Donation />

      {/* Footer Section */}
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-bold">One Map Africa</h3>
              <p>Erasing the lines that divide us.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Contact</h3>
              <p>Email: support@onemapafrica.com</p>
              <p>Phone: +123 456 789</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OneMapAfrica;
