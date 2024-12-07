import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/reusables/Button";

const menuItems = [
    { label: "About Us", href: "/about" },
    {
      label: "Projects",
      submenu: [
        { label: "Project 1", href: "/projects/project1" },
        { label: "Project 2", href: "/projects/project2" },
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
  return (
    <nav className="bg-green-700 text-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center  space-x-4">
          <Image
            src="/one_map.svg"
            width={200}
            height={200}
            alt="One Map Africa"
            className="w-full h-auto"
          />
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) =>
            item.submenu ? (
              <div className="group relative" key={item.label}>
                <button className="hover:underline">{item.label}</button>
                <div className="absolute hidden group-hover:block bg-white text-black py-2 mt-2 rounded shadow-lg">
                  {item.submenu.map((subItem) => (
                    <Link
                      href={subItem.href}
                      key={subItem.label}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      {subItem.label}
                    </Link>
                  ))}
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
<Button label={"Donate"} bgColor="bg-red-500"/>
        {/* Mobile Menu Button */}
        <button className="block md:hidden text-2xl">
          <span className="material-icons">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
