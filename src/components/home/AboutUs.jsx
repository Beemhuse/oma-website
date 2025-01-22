"use client";
import useSlideInAnimation from "@/hooks/slideAnimation";
// import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
import "swiper/css";
const AboutUs = () => {
  const leftRef = useSlideInAnimation("left", 1000);
  const rightRef = useSlideInAnimation("right", 1000, 200);
  const { push } = useRouter();
  // const images = [
  //   { src: "/landingPage/img1.jpg", alt: "Image 1", width: 300, height: 200 },
  //   { src: "/landingPage/img2.jpg", alt: "Image 2", width: 300, height: 200 },
  //   { src: "/landingPage/img3.jpg", alt: "Image 3", width: 300, height: 200 },
  // ];

  return (
    <div className="bg-white dark:bg-black text-black py-16 px-8 md:px-20 lg:px-32 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div ref={leftRef}>
          <div className="flex gap-8 mb-2 items-center">
            <h3 className="text-[#1D2130]  dark:text-white font-bold uppercase text-lg tracking-wide mb-2">
              Introduction
            </h3>
            <p className="w-24 h-1 rounded-full bg-black  dark:bg-white"></p>
          </div>
          <h1 className="text-4xl text-[#1D2130] dark:text-white font-bold mb-6">
            Know about Us
          </h1>
          <p className="text-[#525560]  dark:text-white mb-8 leading-relaxed">
            One Map Africa is an international non-governmental organization
            (NGO) committed to fostering the unity and prosperity of Africa. Our
            mission is to promote dialogue, collaboration, and integration among
            African nations to create a continent that stands united in pursuit
            of common goals. By empowering individuals and communities, we
            strive to dissolve barriers and enhance the well-being of all
            Africans.
          </p>
          <button
            onClick={() => push("/donations")}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded transition-all"
          >
            Donate Now
          </button>
        </div>

        {/* Right Section */}
        <div ref={rightRef}>
          <div className="flex gap-8 mb-2 items-center">
            <h3 className="text-[#1D2130]  dark:text-white font-bold uppercase text-lg tracking-wide mb-2">
              Our Story
            </h3>
            <p className="w-24 h-1 rounded-full bg-black"></p>
          </div>
          <p className="text-[#525560]  dark:text-white leading-relaxed">
            Our journey began with a vision shared by seven individuals from
            diverse parts of Africa, including South Sudan, Ghana, Nigeria,
            Zambia, Uganda, and South Africa. These pioneers founded the
            organization under the name Africa&apos;s Eye Alliance, with the
            slogan &quot;Erasing the Lines that Divide Us.&quot; Formally
            incorporated in Ghana in 2022, the organization was renamed One Map
            Africa to reflect our enduring commitment to unity and integration.
            Inspired by our past slogan, we have developed strategic plans to
            ensure our sustainability and independence by implementing
            meaningful projects and fostering a robust African economy with
            lasting positive social impact. We believe that African unity must
            be supported by self-sustenance systems to be truly meaningful.
          </p>
        </div>
      </div>
      {/* <div className=" my-10">
        <h2 className="text-4xl mb-7 text-[#1D2130] dark:text-white font-bold">Culture & People</h2>
        <div className="flex">
          <Swiper
            breakpoints={{
              // Configure different breakpoints
              500: {
                slidesPerView: 1, // 1 slide on small screens
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2, // 2 slides on medium screens
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3, // 3 slides on large screens
                spaceBetween: 50,
              },
            }}
            loop
            autoplay={{ delay: 8000 }}
            modules={[Autoplay]}
            className=""
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="object-cover h-[18rem] w-full rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
