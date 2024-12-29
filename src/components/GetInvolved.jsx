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


  const getInvolved = [
    {
      title: 'Innovators',
      description: 'Share and develop new sustainable energy solutions.',
    },
    {
      title: 'Donors',
      description: 'Support the installation and maintenance of energy systems.',
    },
    {
      title: 'Volunteers',
      description: 'Educate communities on sustainable energy practices.',
    }
  ]

  return (
    <div>
      {/* Left Column - Images */}
      <div>
        {images?.map((imgSrc, index) => (
          <div
          key={index}
          className="w-full flex  xl:flex-row justify-center items-center gap-8 p-8">
            <div
              onMouseEnter={(e) =>
                handleMouseEnter(e.currentTarget.querySelector('img'))
              }
              onMouseLeave={(e) =>
                handleMouseLeave(e.currentTarget.querySelector('img'))
              }
              className="relative flex border border-red-500 w-64 h-48 lg:w-72 lg:h-56"
            >
              <Image
                src={imgSrc}
                alt={`Agriculture Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            <div className='flex flex-col items-center md:items-start gap-3'>
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <FaRegCircleCheck className="text-[#FFC90C]" /> {getInvolved[index]?.title}:
              </h3>
              <p className="text-gray-600 text-center md:text-left">
              {getInvolved[index]?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
