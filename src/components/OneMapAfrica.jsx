import React from "react";
import HeaderSection from "./home/HeaderSection";
import TrustedClients from "./home/TrustedClients";
import AboutUs from "./home/AboutUs";
import CoreValues from "./home/CoreValues";

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
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img src="blog-image-1.jpg" alt="Blog 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Fashion Project Launch</h3>
                <p>Join us at the Castle of Good Hope...</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img src="blog-image-2.jpg" alt="Blog 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Unity in Action</h3>
                <p>A virtual conference in commemoration...</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img src="blog-image-3.jpg" alt="Blog 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Kwame Nkrumah Memorial</h3>
                <p>Join us in honoring the legacy of Dr...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
