"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/reusables/Button";
import arrowRight from "../../public/arrowRight.svg";
import { useRouter, usePathname } from "next/navigation";
import MobileNavbar from "./MobileNavbar";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Projects",
    submenu: [
      // {
      //   label: (
      //     <p className="flex items-center gap-5">
      //       E-Commerce
      //       <Image src={arrowRight} alt="arrow right" />
      //     </p>
      //   ),
      //   href: "/projects/e-commerce",
      // },
      { label: <p className="flex items-center gap-5">
        Agriculture
        <Image src={arrowRight} alt="arrow right" />
      </p>, href: "/projects/agriculture" },
      // { label: "Fashion & Event", href: "/projects/fashion-event" },
      // { label: "Education & Mentorship", href: "/projects/education" },
      // { label: "House", href: "/projects/house" },
      // { label: "Women Empowerment", href: "/projects/women-empowerment" },
      { label: <p className="flex items-center gap-5">
        Energy
        <Image src={arrowRight} alt="arrow right" />
      </p>, href: "/projects/energy" },
      // { label: "Tourism", href: "/projects/tourism" },
    ],
  },
  { label: "Get Involved", href: "/get-involved" },
  { label: "News & Updates", href: "/blog" },
  {
    label: "Our Team",
    href: "/team",
  },
  // {
  //   label: "Resources",
  //   submenu: [
  //     { label: "Resource 1", href: "/resources/resource1" },
  //     { label: "Resource 2", href: "/resources/resource2" },
  //   ],
  // },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const { push } = useRouter();
  const pathname = usePathname(); // Get current route

  const [openSubmenu, setOpenSubmenu] = useState(null);

  // Toggle submenu visibility on click
  const toggleSubmenu = (label) => {
    setOpenSubmenu((prev) => (prev === label ? null : label)); // Toggle the submenu
  };

  return (
    <nav className="bg-white   w-full text-white px-6 py-4 ">
      <div className="flex relative items-center justify-between">
        {/* Logo */}
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

        {/* Menu Links */}
        <div className="hidden md:flex space-x-6 ">
          {menuItems.map((item, index) =>
            item.submenu ? (
              <div
                className="group "
                key={item.label}

                onClick={() => toggleSubmenu(item.label)} // Toggle on click
              >
                <button className={`hover:text-[#FFD700] ${
                    openSubmenu === item.label || pathname.startsWith(item.href)
                      ? "text-[#FFD700] "
                      : "text-green-500"
                  }`}>{item.label}</button>
                {/* Submenu */}
                {item.label === "Projects" ? (
                  <div
                    className={`absolute ${
                      openSubmenu === item.label ? "block" : "hidden"
                    } bg-white text-gray-700 text-xs shadow-lg w-full  top-full z-10 transition-all duration-300 absolute left-0 flex`}
                  >
                    <div className="md:w-1/3 pr-20 bg-[#EBEBEB] p-10">
                      <p className="text-black/80 ">
                        At One Map Africa, our projects are driven by the
                        overarching goal of fostering unity and sustainable
                        development across the continent. We aim to empower
                        individuals and communities through strategic
                        initiatives in various sectors, including E-commerce,
                        Education, Agriculture, Energy, Housing, Tourism,
                        Fashion and Events, and Women Empowerment.
                      </p>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-3 w-full gap-6 p-10 text-sm font-semibold ">
                      {item.submenu.map((subItem, index) => (
                        <Link
                          href={subItem.href}
                          key={index}
                          className={`block text-sm hover:text-black/50 ${
                            pathname === subItem.href ? "text-[#FFD700] font-bold" : "text-green-500"
                          }`}                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div
                    className={`absolute ${
                      openSubmenu === item.label ? "block" : "hidden"
                    } bg-white text-gray-700 shadow-lg z-10 transition-all duration-300 absolute top-full flex flex-col gap-3 p-5 text-sm font-semibold `}
                  >
                    {item.submenu.map((subItem,index) => (
                      <Link
                        href={subItem.href}
                        key={index}
                        className={`block text-sm hover:text-black/50 ${
                          pathname === subItem.href ? "text-gold-500 font-bold" : ""
                        }`}                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.href}
                key={index}
                onMouseEnter={() => setOpenSubmenu(null)} // Close submenu on mouse leave
                className={`hover:text-[#FFD700] ${
                  pathname === item.href ? "text-[#FFD700] " : "text-green-500"
                }`}              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Donate Button */}
        <span className="hidden md:flex">
          <Button
            onClick={() => push("/donations")}
            label={"Donate"}
            bgColor="bg-red-500"
            className="hidden md:block"
          />
        </span>
        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
