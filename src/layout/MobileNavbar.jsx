"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiMenuAltLeft } from "react-icons/bi";
import { HiXMark } from "react-icons/hi2";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import Button from "@/components/reusables/Button";
import Image from "next/image";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Track which submenu is open
  const pathname = usePathname(); // Get current path

  const menuItems = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      submenu: [
        { label: "About One Map Africa", href: "/about" },
        { label: "Our Mission", href: "/about/#mission" },
        { label: "Our Vision", href: "/about/#vision" },
        { label: "Get Involved", href: "/get-involved" },
        { label: "FAQ", href: "/faq" },
        { label: "Gallery", href: "/gallery" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },    {
      label: "Projects",
      submenu: [
        { label: "Agribusiness & Food Security", href: "/projects/agribusiness" },
      { label: "Digitalization", href: "/projects/digitalization" },
        
        // { label: "Fashion & Event", href: "/projects/fashion-event" },
        // { label: "Education & Mentorship", href: "/projects/education" },
        // { label: "E-commerce", href: "/projects/ecommerce" },
        // { label: "Women Empowerment", href: "/projects/women-empowerment" },
        // { label: "Energy", href: "/projects/energy" },
      ],
    },
    { label: "Get Involved", href: "/get-involved" },
    { label: "News & Updates", href: "/blog" },
    { label: "Our Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  // Listen to window resize events and update state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust threshold for "mobile"
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = (label) =>
    setActiveSubmenu(activeSubmenu === label ? null : label);

  const isActive = (href) =>
    pathname === href || (pathname.startsWith(href) && href !== "/");

  return (
    <>
      {isMobile && (
        <div className="md:hidden">
          {/* Hamburger Button */}
          <button onClick={toggleMenu} className="text-green-500 text-2xl p-2">
            {isOpen ? <HiXMark size={30} /> : <BiMenuAltLeft size={30} />}
          </button>

          {/* Mobile Drawer */}
          {isOpen && (
            <div className="bg-green-700 text-white fixed top-0 left-0 w-full h-fit pb-10 z-50">
              <div className="flex justify-between items-center p-4">
                <div
                  onClick={() => push("/")}
                  className="flex cursor-pointer  items-center space-x-4"
                >
                  <Image
                    src="/one_map.svg"
                    width={150}
                    height={50}
                    alt="One Map Africa"
                    className="w-auto h-auto"
                  />
                </div>
                <button onClick={toggleMenu} className="text-2xl">
                  <HiXMark />
                </button>
              </div>
              <ul className="flex flex-col items-start space-y-6 mt-10 px-6">
                {menuItems.map((item) =>
                  item.submenu ? (
                    <div key={item.label} className="w-full">
                      <div
                        className={`flex text-lg justify-start gap-4 items-center w-full cursor-pointer ${
                          activeSubmenu === item.label ? "text-gold" : ""
                        }`}
                        onClick={() => toggleSubmenu(item.label)}
                      >
                        <p className="font-normal">{item.label}</p>
                        <span className="font-normal">
                          {activeSubmenu === item.label ? (
                            <RxCaretUp size={25} />
                          ) : (
                            <RxCaretDown size={25} />
                          )}
                        </span>
                      </div>
                      {activeSubmenu === item.label && (
                        <div className="space-y-2 mt-2 pl-4">
                          {item.submenu.map((subItem) => (
                            <Link
                              href={subItem.href}
                              key={subItem.label}
                              className={`block text-lg ${
                                isActive(subItem.href) ? "text-gold" : ""
                              }`}
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
                        className={`block text-lg ${
                          isActive(item.href) ? "text-gold" : ""
                        }`}
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
