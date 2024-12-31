import React from "react";
import core1 from "../../../public/landingPage/core1.svg";
import core2 from "../../../public/landingPage/core2.svg";
import core3 from "../../../public/landingPage/core3.svg";
import core4 from "../../../public/landingPage/core4.svg";
import Image from "next/image";
import useSlideIn from "@/hooks/useSlideIn";

const CoreValues = () => {
  let slideinRef = useSlideIn();
  return (
    <div
      ref={slideinRef}
      className=" text-white flex justify-center py-20 md:py-10 flex-col px-8 md:px-20 "
      style={{
        backgroundImage: "url('/landingPage/bg.svg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Adds a black overlay
      }}
    >
      <h1 className="text-4xl font-bold mb-4 pl-24">Core Value</h1>
      <div className="max-w-6xl mx-auto flex h-full gap-5">
        {/* sliding animated circle */}
        <div className="h-[500px]  w-[50px] flex justify-center relative ">
          <p className="bg-[#FFFFFF] w-[2px] h-full"></p>
          <div className="bg-[#FFFFFF] rounded-[50%] p-[7px]  flex justify-center items-center absolute anim">
            <p className="w-[10px] h-[10px]  bg-[#DB101C] rounded-[50%]"></p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:coreBox gap-8 overflow-scroll no-scrollbar">
          {/* sub topics */}
          <div className="text-white rounded-lg p-6 pr-12 tracking-[2px] shadow-md md:core1">
            <h3 className="text-xl font-semibold mb-2">
              Our Work is guided by four core values
            </h3>
          </div>
          {/* Integrity */}
          <div className="bg-white text-black rounded-2xl p-6 shadow-md md:core2">
            <Image src={core1} width={24} alt="core1" />
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We uphold the highest standards of honesty and transparency in all
              our actions.
            </p>
          </div>

          {/* Collaboration */}
          <div className="bg-white text-black rounded-2xl p-6  md:core3">
            <Image src={core2} width={24} alt="core2" />
            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
            <p className="text-gray-600">
              We believe in the power of working together and building
              partnerships to achieve our common goals.
            </p>
          </div>

          {/* Respect */}
          <div className="bg-white text-black rounded-2xl p-6  md:core4">
            <Image src={core3} width={24} alt="core3" />
            <h3 className="text-xl font-bold mb-2">Respect</h3>
            <p className="text-gray-600">
              We honor the diverse cultures and perspectives within Africa,
              fostering an environment of mutual respect and understanding.
            </p>
          </div>

          {/* Empowerment */}
          <div className="bg-white text-black rounded-2xl p-6  md:core5">
            <Image src={core4} width={24} alt="core4" />
            <h3 className="text-xl font-bold mb-2">Empowerment</h3>
            <p className="text-gray-600">
              We are dedicated to empowering individuals and communities with
              the knowledge, skills, and resources needed to drive positive
              change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
