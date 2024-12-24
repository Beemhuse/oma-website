'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";
import { HiXMark } from "react-icons/hi2";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import Button from "@/components/reusables/Button";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [activeSubmenu, setActiveSubmenu] = useState(null); // Track which submenu is open

  const menuItems = [
    { label: "About Us", href: "/about" },
    {
      label: "Projects",
      submenu: [
        { label: "E-Commerce", href: "/projects/e-commerce" },
        { label: "Agriculture", href: "/projects/agriculture" },
        { label: "Fashion & Event", href: "/projects/fashion-event" },
        { label: "Education & Mentorship", href: "/projects/education" },
        { label: "House", href: "/projects/house" },
        { label: "Women Empowerment", href: "/projects/women-empowerment" },
        { label: "Energy", href: "/projects/energy" },
        { label: "Tourism", href: "/projects/tourism" },
      ],
    },
    { label: "Get Involved", href: "/get-involved" },
    { label: "News & Updates", href: "/blog" },
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

  // Listen to window resize events and update state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust threshold for "mobile"
    };

    // Initialize state on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (label) => {
    setActiveSubmenu(activeSubmenu === label ? null : label); // Toggle active submenu
  };

  return (
    <>
      {isMobile && (
        <div className="md:hidden">
          {/* Hamburger Button */}
          <button onClick={toggleMenu} className="text-white text-2xl p-2">
            {isOpen ? <HiXMark size={30}/> : <BiMenuAltLeft size={30} />}
          </button>

          {/* Mobile Drawer */}
          {isOpen && (
            <div className="bg-green-700 text-white fixed top-0 left-0 w-full h-fit pb-10 z-50">
              <div className="flex justify-end p-4">
                <button onClick={toggleMenu} className="text-2xl">
                <HiXMark />
                </button>
              </div>
              <ul className="flex flex-col items-start space-y-6 mt-10 px-6">
                {menuItems.map((item) =>
                  item.submenu ? (
                    <div key={item.label} className="w-full">
                      <div
                        className="flex text-lg justify-start gap-4 items-center w-full cursor-pointer"
                        onClick={() => toggleSubmenu(item.label)}
                      >
                        <p className="font-normal">{item.label}</p>
                        <span className=" font-normal">{activeSubmenu === item.label ? <RxCaretUp size={25} /> : <RxCaretDown size={25} />}</span>
                      </div>
                      {activeSubmenu === item.label && (
                        <div className="space-y-2 mt-2 pl-4">
                          {item.submenu.map((subItem) => (
                            <Link
                              href={subItem.href}
                              key={subItem.label}
                              className="block text-lg"
                              onClick={toggleMenu}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <li key={item.label} className="w-full">
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className={`${
                          item.isButton
                            ? "bg-red-600 px-6 py-2 rounded hover:bg-red-700"
                            : "text-lg"
                        } w-full text-left`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
                   <Button
          onClick={() => push("/donations")}
          label={"Donate"}
          bgColor="bg-red-500"
        />
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
