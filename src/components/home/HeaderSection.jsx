'use client';
import React from 'react';
import pics1 from '../../../public/landingPage/ngo.jpg';
// import pics2 from '../../../public/landingPage/ngo2.jpg';
// import africa from '../../../public/landingPage/africa.png';
import Image from 'next/image';
import useSlideInAnimation from '@/hooks/slideAnimation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HeaderSection = () => {
  const leftRef = useSlideInAnimation('left', 1000);
  const rightRef = useSlideInAnimation('right', 1000, 200);


  return(
    <section
    className="h-full md:h-screen relative grid grid-cols-1 md:grid-cols-2"
    style={{
      backgroundImage: "url('/landingPage/unity.jpg')",
      backgroundSize: 'cover',
      backgroudPosition: "center",
      backgroundAttachment: 'fixed',
      backgroundBlendMode: 'overlay',
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black overlay
    }}
  >
    <div ref={leftRef} className="container mx-auto text-center md:px-28 relative">
    
      <div className="h-full w-full md:w-4/5 text-left flex flex-col items-center md:items-start justify-center gap-10 static md:absolute">
        <h1 className="text-4xl md:text-6xl text-center md:text-left text-white font-semibold">
          Erasing the Lines that Divide us
        </h1>
        <p className="text-lg text-center md:text-left text-white mb-6 md:pr-16">
          One Map Africa is a non-governmental organization (NGO) dedicated to uniting Africa through fostering dialogue, collaboration, and integration among nations.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600">
            Learn More
          </button>
          <button className="border border-red-500 text-red-500 px-6 py-3 rounded-md hover:bg-red-500 hover:text-white">
            Get Involved
          </button>
        </div>
      </div>
    </div>

    <div ref={rightRef} className="flex items-center w-full">
      {/* Swiper Section */}
      <Swiper spaceBetween={30} slidesPerView={1} loop autoplay>
        <SwiperSlide>
          <Image
            src={pics1}
            alt="Slide 1"
            className="w-full md:w-[80%] h-[80%] md:h-[65%] object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={pics1}
            alt="Slide 2"
            className="w-full md:w-[80%] h-[80%] md:h-[65%] object-cover rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  )
    

};

export default HeaderSection;
