"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/reusables/Button";
import arrowRight from "../../public/arrowRight.svg";
import { useRouter, usePathname } from "next/navigation";
import MobileNavbar from "./MobileNavbar";
import { FaAngleDown } from "react-icons/fa6";

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
  },
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
      {
        label: (
          <p className="flex items-center gap-5">
            Agribusiness & Food Security
            {/* <Image src={arrowRight} alt="arrow right" /> */}
          </p>
        ),
        href: "/projects/agribusiness",
      },
      { label: "Renewable Energy", href: "/projects/renewable-energy" },

      { label: "Digitalization", href: "/projects/digitalization" },
      {
        label: "Education and Mentorship",
        href: "/projects/education-mentorship",
      },

      // { label: "Education & Mentorship", href: "/projects/education" },
      // { label: "E-commerce", href: "/projects/ecommerce" },
      {
        label: "Women & Youth Empowerment",
        href: "/projects/women-youth-empowerment",
      },
      {
        label: "Leadership Development",
        href: "/projects/leadership-development",
      },
      {
        label: "Culture & Heritage",
        href: "/projects/culture-heritage",
      },
    ],
  },
  { label: "Get Involved", href: "/get-involved" },
  { label: "News & Updates", href: "/blog" },
  {
    label: "Our Team",
    href: "/team",
  },

  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const { push } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const pathname = usePathname();

  const [openSubmenu, setOpenSubmenu] = useState(null);

  // Toggle submenu visibility on click
  const toggleSubmenu = (label) => {
    setOpenSubmenu((prev) => (prev === label ? null : label));
  };
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
      setIsScrolled(currentScrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`bg-white   w-full text-white px-6 py-4 fixed top-0 z-50  transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}
    >
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
        <div className="hidden lg:flex  md:hidden space-x-6 ">
          {menuItems.map((item, index) =>
            item.submenu ? (
              <div
                className="group "
                key={item.label}
                onClick={() => toggleSubmenu(item.label)} // Toggle on click
              >
                <button
                  className={`hover:text-[#FFD700] flex items-center gap-4 ${
                    openSubmenu === item.label || pathname.startsWith(item.href)
                      ? "text-[#FFD700] "
                      : "text-green-500"
                  }`}
                >
                  {item.label}
                  {item.submenu && <FaAngleDown />}
                </button>
                {/* Submenu */}
                {item.label === "Projects" ? (
                  <div
                    className={`absolute ${
                      openSubmenu === item.label ? "block" : "hidden"
                    } bg-white text-gray-700 text-xs shadow-lg w-full  top-full z-50 transition-all duration-300 absolute left-0 flex`}
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
                          className={`flex items-center gap-2 text-sm ${
                            pathname === subItem.href
                              ? "text-[#FFD700] font-bold"
                              : "text-black"
                          } group`}
                        >
                          {subItem.label}
                          <div className="relative">
                            <Image
                              src={arrowRight}
                              alt="arrow right"
                              className={`absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                                pathname === subItem.href ? "hidden" : ""
                              }`}
                            />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : item.label === "About Us" ? (
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
                          className={`flex items-center gap-2 text-sm ${
                            pathname === subItem.href
                              ? "text-[#FFD700] font-bold"
                              : "text-black"
                          } group`}
                        >
                          {subItem.label}
                          <div className="relative">
                            <Image
                              src={arrowRight}
                              alt="arrow right"
                              className={`absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                                pathname === subItem.href ? "hidden" : ""
                              }`}
                            />
                          </div>
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
                    {item.submenu.map((subItem, index) => (
                      <Link
                        href={subItem.href}
                        key={index}
                        className={`block text-sm hover:text-black/50 ${
                          pathname === subItem.href
                            ? "text-gold-500 font-bold"
                            : ""
                        }`}
                      >
                        {subItem.label}
                        <FaAngleDown />
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
                className={`hover:text-[#FFD700]  ${
                  pathname === item.href ? "text-[#FFD700] " : "text-green-500"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            className="text-green-500 hover:text-[#FFD700]"
            target="_blank"
            href="https://www.events.onemapafrica.org"
          >
            Events
          </Link>
        </div>

        {/* Donate Button */}
        <span className="hidden lg:flex">
          <Button
            onClick={() => push("/donations")}
            label={"Donate"}
            bgColor="bg-red-500"
            className="hidden md:hidden lg:block"
          />
        </span>
        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
