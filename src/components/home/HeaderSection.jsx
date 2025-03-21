"use client";
import React from "react";
import img1 from "../../../public/landingPage/img1.jpg";
import pics2 from "../../../public/landingPage/img2.jpg";
import pics1 from "../../../public/landingPage/unity.jpg";
import useSlideInAnimation from "@/hooks/slideAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRouter } from "next/navigation";

const HeaderSection = () => {
  const leftRef = useSlideInAnimation("left", 1000);
  const { push } = useRouter();
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop
      autoplay={{ delay: 8000 }}
      modules={[Autoplay]}
      className=""
    >
      <SwiperSlide>
        <section
          className="h-[50rem] relative grid grid-cols-1 md:grid-cols-2"
          style={{
            backgroundImage: `url(${pics2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <div
            ref={leftRef}
            className="container mx-auto text-center md:px-28 relative"
          >
            <div className="h-full w-full md:w-4/5 text-left flex flex-col items-center md:items-start justify-center gap-10 static p-2 md:absolute">
              <h1 className="text-4xl md:text-6xl text-center md:text-left text-white font-semibold">
                Erasing the Lines that Divide us
              </h1>
              <p className="text-lg capitalize text-center md:text-left text-white mb-6 md:pr-16">
                Uniting Africa for sustainable development and economic
                empowerment.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => push("/about")}
                  className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600"
                >
                  Learn More
                </button>
                <button
                  onClick={() => push("/get-involved")}
                  className="border border-red-500 text-red-500 px-6 py-3 rounded-md hover:bg-red-500 hover:text-white"
                >
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section
          className="h-[50rem] relative grid grid-cols-1 md:grid-cols-2"
          style={{
            backgroundImage: `url(${pics1.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <div
            ref={leftRef}
            className="container mx-auto text-center md:px-28 relative"
          >
            <div className="h-full w-full md:w-4/5 text-left flex flex-col items-center md:items-start justify-center gap-10 static p-2 md:absolute">
              <h2 className="text-4xl md:text-6xl text-center md:text-left text-white font-semibold">
              Facilitating open communication and
              encourage cooperative efforts.               </h2>
              <p className="text-lg text-center md:text-left text-white mb-6 md:pr-16">
                One Map Africa is a non-governmental organization (NGO) and a specialized consulting firm
                committed to advancing socio-economic development and global trade, we are also
                dedicated to uniting Africa through fostering dialogue,
                collaboration, and integration among nations.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => push("/subscription")}
                  className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600"
                >
                  Join us
                </button>
                <button
                  onClick={() => push("/get-involved")}
                  className="border border-red-500 text-red-500 px-6 py-3 rounded-md hover:bg-red-500 hover:text-white"
                >
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section
          className="h-[50rem] relative grid grid-cols-1 md:grid-cols-2 p-2"
          style={{
            backgroundImage: `url(${img1.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          {/* Repeat content or modify as needed */}
          <div
            ref={leftRef}
            className="container mx-auto text-center md:px-28 relative"
          >
            <div className="h-full w-full md:w-4/5 text-left flex flex-col items-center md:items-start justify-center gap-10 static md:absolute">
              <h2 className="text-4xl md:text-6xl text-center md:text-left text-white font-semibold">
                A united and borderless Africa
              </h2>
              <p className="text-lg text-center md:text-left text-white mb-6 md:pr-16">
              To see a united Africa that champions socio-economic development and sustainable growth.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => push("/about")}
                  className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600"
                >
                  Learn More
                </button>
                <button
                  onClick={() => push("/get-involved")}
                  className="border border-red-500 text-red-500 px-6 py-3 rounded-md hover:bg-red-500 hover:text-white"
                >
                  Get Involved
                </button>
              </div>
            </div>
          </div>

          {/* <div
          // ref={rightRef}
          >
            <Image 
            src={africa}
            alt=''
            width={500}
            height={500}
            className='w-full h-auto'/>

          </div> */}
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeaderSection;
