import React from "react";
import Link from "next/link";

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
    { label: "Donate", href: "/donate", isButton: true },
  ];
  
const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/logo.png" // Replace with your logo
            alt="One Map Africa"
            className="w-10 h-10"
          />
          <h1 className="font-bold text-xl">ONE MAP AFRICA</h1>
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
            ) : item.isButton ? (
              <Link
                href={item.href}
                key={item.label}
                className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700"
              >
                {item.label}
              </Link>
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

        {/* Mobile Menu Button */}
        <button className="block md:hidden text-2xl">
          <span className="material-icons">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
