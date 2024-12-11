'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/reusables/Button";
import { FaCheck } from "react-icons/fa";

const menuItems = [
  { label: "About Us", href: "/about" },
  {
    label: "Projects",
    submenu: [
      { label: "E-Commerce", href: "/projects/e-commerce" },
      { label: "Education & Mentorship", href: "/projects/education" },
      { label: "Energy", href: "/projects/energy" },
      { label: "Agriculture", href: "/projects/agriculture" },
      { label: "House", href: "/projects/house" },
      { label: "Tourism", href: "/projects/tourism" },
      { label: "Fashion & Event", href: "/projects/fashion-event" },
      { label: "Women Empowerment", href: "/projects/women-empowerment" },
    ],
  },
  { label: "Get Involved", href: "/get-involved" },
  { label: "News & Updates", href: "/news-updates" },
  {
    label: "Our Team",
    submenu: [
      { label: "Member 1", href: "/team/member1" },
      { label: "Member 2", href: "/team/member2" },
    ],
  },
  {
    label: "Resources",
    submenu: [
      { label: "Resource 1", href: "/resources/resource1" },
      { label: "Resource 2", href: "/resources/resource2" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  // Toggle submenu visibility on click
  const toggleSubmenu = (label) => {
    setOpenSubmenu((prev) => (prev === label ? null : label)); // Toggle the submenu
  };

  return (
    <nav className="bg-green-700 relative w-full text-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image
            src="/one_map.svg"
            width={150}
            height={50}
            alt="One Map Africa"
            className="w-auto h-auto"
          />
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-6 ">
          {menuItems.map((item) =>
            item.submenu ? (
              <div
                className="group "
                key={item.label}
                onClick={() => toggleSubmenu(item.label)} // Toggle on click
              >
                <button className="hover:underline">{item.label}</button>
                {/* Submenu */}
                <div
                  className={`absolute ${
                    openSubmenu === item.label ? "block" : "hidden"
                  } bg-gray-800 text-white py-4 px-6 mt-2 m-auto rounded shadow-lg w-full  top-10 z-10 transition-all duration-300`}
                >
                  <div className="grid grid-cols-3 w-full gap-6">
                    {item.submenu.map((subItem) => (
                      <Link
                        href={subItem.href}
                        key={subItem.label}
                        className="block text-sm hover:text-red-500 hover:underline"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                href={item.href}
                key={item.label}
                className="hover:underline"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Donate Button */}
        <Button label={"Donate"} bgColor="bg-red-500" />

        {/* Mobile Menu Button */}
        <button className="block md:hidden text-2xl">
          <span className="material-icons">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
