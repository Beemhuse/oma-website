"use client";
import anime from "animejs";
import Image from "next/image";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function GetInvolved({ images }) {
  const handleMouseEnter = (target) => {
    anime({
      targets: target,
      scale: 1.1,
      duration: 500,
      easing: "easeOutQuad",
    });
  };

  const handleMouseLeave = (target) => {
    anime({
      targets: target,
      scale: 1,
      duration: 500,
      easing: "easeOutQuad",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 p-8">
      {/* Left Column - Images */}
      <div className="flex flex-wrap items-center gap-y-7 justify-center xl:w-2/4 w-full gap-4">
        {images
          ?.filter((imgSrc) => typeof imgSrc === "string") 
          .map((imgSrc, index) => (
            <div
              key={index} 
              onMouseEnter={(e) =>
                handleMouseEnter(e.currentTarget.querySelector("img"))
              }
              onMouseLeave={(e) =>
                handleMouseLeave(e.currentTarget.querySelector("img"))
              }
              className="relative w-64 xl:h-48 lg:w-72 lg:h-56"
            >
              <Image
                src={imgSrc}
                alt={`Agriculture Image ${index + 1}`}
                height={400}
                width={400}
                className="rounded-lg h-52 w-full object-cover"
              />
            </div>
          ))}
      </div>

      {/* Right Column - Text */}
      <div className="flex flex-col dark:text-white gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
            <FaRegCircleCheck className="text-[#FFC90C]" /> Innovators:
          </h3>
          <p className="text-gray-600 dark:text-white">
            Share and develop new sustainable energy solutions.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
            <FaRegCircleCheck className="text-[#FFC90C]" /> Donors:
          </h3>
          <p className="text-gray-600 dark:text-white">
            Support the installation and maintenance of energy systems.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
            <FaRegCircleCheck className="text-[#FFC90C]" /> Volunteers:
          </h3>
          <p className="text-gray-600 dark:text-white">
            Educate communities on sustainable energy practices.
          </p>
        </div>
      </div>
    </div>
  );
}
