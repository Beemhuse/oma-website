'use client';
import useSlideIn from "@/hooks/useSlideIn";
import Image from "next/image";
import React from "react";

export default function TeamCard({ name, position, image, socials }) {
  const slideInRef = useSlideIn(); 

  return (
    <div
      ref={slideInRef}
      className="w-[310px] bg-white rounded-lg shadow-lg overflow-hidden opacity-0 transform"
    >
      {/* Team Member Image */}
      <Image
        src={image}
        alt={name}
        priority
        width={500}
        height={500}
        className="w-full"
      />

      {/* Details */}
      <div className="p-4 text-start">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">{position}</p>

        {/* Social Icons */}
        <div className="flex justify-start gap-4 mt-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300 transition"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
