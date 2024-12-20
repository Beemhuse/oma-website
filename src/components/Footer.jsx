'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const {push} = useRouter()
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-normal w-full xl:w-[300px] m-auto">Erasing the lines that divide us</h1>
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={()=> push("/subscription")} className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-green-800 transition">
              JOIN US
            </button>
            <button onClick={()=> push("/donations")} className="px-6 py-2 bg-white text-green-800 rounded-md hover:bg-opacity-80 transition">
              DONATE
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div>
            <h3 className="font-semibold mb-4">NAVIGATION</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Project</li>
              <li>Get Involved</li>
              <li>News & Update</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">WHAT WE DO</h3>
            <ul className="space-y-2">
              <li>Encouraging Testing</li>
              <li>Strengthening Advocacy</li>
              <li>Sharing Information</li>
              <li>Building Leadership</li>
              <li>Engaging With Global Fund</li>
              <li>Shining a Light</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li>General Info</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">TALK TO US</h3>
            <ul className="space-y-2">
              <li>support@ercom.com</li>
              <li>+66 2399 1145</li>
              <li>Contact Us</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-t border-white pt-6">
          <div className="flex items-center space-x-3">
            <Image
            width={200}
            height={200}
              src="/one_map.svg"
              alt="One Map Africa Logo"
              className="w-24 h-auto object-contain"
            />
            <span>© 2024 One Map Africa. All Rights Reserved.</span>
          </div>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
