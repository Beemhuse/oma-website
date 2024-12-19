'use client'
import anime from 'animejs';
import Image from 'next/image';
import React from 'react';
import { FaRegCircleCheck } from 'react-icons/fa6';

export default function GetInvolved({ images }) {
  const handleMouseEnter = (target) => {
    anime({
      targets: target,
      scale: 1.1,
      duration: 500,
      easing: 'easeOutQuad',
    });
  };

  const handleMouseLeave = (target) => {
    anime({
      targets: target,
      scale: 1,
      duration: 500,
      easing: 'easeOutQuad',
    });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 p-8">
      {/* Left Column - Images */}
      <div className="flex flex-wrap items-center justify-center w-2/6 gap-4">
        {images?.map((imgSrc, index) => (
          <div
            key={index}
            onMouseEnter={(e) =>
              handleMouseEnter(e.currentTarget.querySelector('img'))
            }
            onMouseLeave={(e) =>
              handleMouseLeave(e.currentTarget.querySelector('img'))
            }
            className="relative w-64 h-48 lg:w-72 lg:h-56"
          >
            <Image
              src={imgSrc}
              alt={`Agriculture Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Right Column - Text */}
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FaRegCircleCheck className="text-[#FFC90C]" /> Innovators:
          </h3>
          <p className="text-gray-600">
            Share and develop new sustainable energy solutions.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FaRegCircleCheck className="text-[#FFC90C]" /> Donors:
          </h3>
          <p className="text-gray-600">
            Support the installation and maintenance of energy systems.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FaRegCircleCheck className="text-[#FFC90C]" /> Volunteers:
          </h3>
          <p className="text-gray-600">
            Educate communities on sustainable energy practices.
          </p>
        </div>
      </div>
    </div>
  );
}
