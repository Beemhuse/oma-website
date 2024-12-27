"use client";
import React from "react";
import Button from "../reusables/Button";
import ProgramCard from "../component/card/ProgramCard";
import Image from "next/image";
import useSlideInAnimation from "@/hooks/slideAnimation";
import WhatWeDo from "./WhatWeDo";
import anime from "animejs";
import core1 from "../../../public/landingPage/core1.svg";
import core2 from "../../../public/landingPage/core2.svg";
import core3 from "../../../public/landingPage/core3.svg";
import core4 from "../../../public/landingPage/core4.svg";
import { useRouter } from "next/navigation";

const programs = [
  {
    src: "/energy.png",
    title: "Agriculture",
    description:
      "To enhance agricultural productivity and sustainability, ensuring food security and economic growth.",
  },
  {
    src: "/energy.png",
    title: "Healthcare",
    description:
      "Improving access to healthcare services and promoting public health initiatives for better community wellbeing.",
  },
  {
    src: "/energy.png",
    title: "Education",
    description:
      "Providing quality education and learning resources to empower individuals for a brighter future.",
  },
];
export default function AboutPage() {
  const leftRef = useSlideInAnimation("left", 1000);
  const rightRef = useSlideInAnimation("right", 1000, 200);
  const {push} = useRouter()
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
    <section className="py-10 xl:w-[70%] mt-20 w-full px-4 mx-auto">
      <div
        ref={leftRef}
        className="flex xl:flex-row flex-col-reverse gap-6 justify-between"
      >
        <div className="xl:w-[545px] w-full flex flex-col items-start gap-5">
          <h1 className="xl:text-[64px] text-4xl leading-snug">
            Together We Will Re-Unite Africa
          </h1>
          <p className="text-[18px] xl:w-[505px]">
            We aim to empower communities, drive sustainable growth, and
            contribute to the long-term prosperity of the continent.
          </p>
          <Button
            bgColor="bg-[#DB101C]"
            hoverColor="bg-[#DB101C]"
            rounded={false}
            label={"Join Now"}
            href={"/get-involved"}
            isButton={false}
          />
        </div>

        <Image
          src={"/unite.png"}
          alt="united World"
          height={500}
          width={500}
          className="w-full object-cover aspect-auto"
        />
      </div>

      <div className="mt-[70px]">
        <div className="text-center my-5">
          <h2 className="text-[45px] font-[500]">Our Programs</h2>
          <p className="text-[18px] text-[#525560]">
            Some of our Project Areas
          </p>
        </div>
        <div className=" m-auto flex flex-col gap-2 ">
          <div className="justify-center  gap-6 flex xl:flex-row flex-col">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                src={program.src}
                title={program.title}
                description={program.description}
                mouseEnter={handleMouseEnter}
                mouseLeave={handleMouseLeave}
              />
            ))}
          </div>
          <div className="mt-4">
            <Button
              bgColor="bg-[#DB101C]"
              hoverColor="bg-[#DB101C]"
              href={"/donations"}
              label={"Donate Now"}
              isButton={false}
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className="bg-white text-black py-16  ">
          <div className=" flex flex-col justify-between lg:flex-row items-center">
            {/* Text Content */}
            <div className=" lg:w-1/3 mb-8 lg:mb-0">
              <div className="text-black text-sm uppercase gap-10 font-semibold flex  mb-5 justify-left items-center transform ">
                <div className=""> About us</div>{" "}
                <p className="bg-black w-[50px]  h-[2px]"></p>
              </div>
              <h3 className="text-5xl font-semibold text-black mb-6">
                Our Mission
              </h3>

              <p className="text-black/70 mb-6">
                One Map Africa is dedicated to promoting dialogue,
                collaboration, and integration among African nations, to create
                a unified continent with a common purpose. We facilitate open
                communication and encourage cooperative efforts to
                achieve this vision.
              </p>
              <button onClick={()=> push ('/donations')} className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
                Donate
              </button>
            </div>

            {/* Image Content */}
            <div
              ref={rightRef}
              className="lg:w-1/2"
              onMouseEnter={(e) =>
                handleMouseEnter(e.currentTarget.querySelector("img"))
              }
              onMouseLeave={(e) =>
                handleMouseLeave(e.currentTarget.querySelector("img"))
              }
            >
              <Image
                src={"/agric-1.png"}
                alt="Donation Box"
                width={500}
                height={500}
                className="rounded-tr-[80px] rounded-bl-[80px] shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <WhatWeDo />

      <div className=" text-black flex justify-center py-20 md:py-10 flex-col px-8 md:px-20 h-screen md:h-[70vh]">
        <h1 className="text-4xl font-bold mb-4 pl-24">Core Value</h1>
        <div className="max-w-6xl mx-auto flex h-full gap-5">
          {/* sliding animated circle */}
          <div className="h-[60%]  w-[50px] flex justify-center relative ">
            <p className="bg-[#000] w-[2px] h-full"></p>
            <div className="bg-[#fff] rounded-[50%] p-[7px] flex justify-center items-center absolute anim">
              <p className="w-[10px] h-[10px]  bg-[#DB101C] rounded-[50%]"></p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:coreBox gap-8 overflow-scroll no-scrollbar">
            {/* sub topics */}
            <div className="text-black p-6 pr-12 tracking-[2px]  md:core1">
              <h3 className="text-xl font-semibold mb-2">
                Our Work is guided by four core values
              </h3>
            </div>
            {/* Integrity */}
            <div className="bg-white text-black rounded-2xl border p-6  md:core2">
              <Image src={core1} width={24} alt="core1" />
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest standards of honesty and transparency in
                all our actions.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-white text-black rounded-2xl p-6 border  md:core3">
              <Image src={core2} width={24} alt="core2" />
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of working together and building
                partnerships to achieve our common goals.
              </p>
            </div>

            {/* Respect */}
            <div className="bg-white text-black border rounded-2xl p-6  md:core4">
              <Image src={core3} width={24} alt="core3" />
              <h3 className="text-xl font-bold mb-2">Respect</h3>
              <p className="text-gray-600">
                We honor the diverse cultures and perspectives within Africa,
                fostering an environment of mutual respect and understanding.
              </p>
            </div>

            {/* Empowerment */}
            <div className="bg-white text-black border rounded-2xl p-6  md:core5">
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
    </section>
  );
}
