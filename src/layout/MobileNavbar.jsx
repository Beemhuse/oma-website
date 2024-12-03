'use client';
import React, { useState } from "react";
import Link from "next/link";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl p-2">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="bg-green-700 text-white fixed top-0 left-0 w-full h-screen z-50">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-2xl">
              ✖
            </button>
          </div>
          <ul className="flex flex-col items-center space-y-6 mt-10">
            {menuItems.map((item) =>
              item.submenu ? (
                <div key={item.label} className="text-center">
                  <p className="font-semibold">{item.label}</p>
                  <div className="space-y-2">
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
                </div>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className={`${
                      item.isButton
                        ? "bg-red-600 px-6 py-2 rounded hover:bg-red-700"
                        : "text-lg"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
