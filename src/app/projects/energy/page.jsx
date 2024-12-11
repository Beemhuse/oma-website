import Image from "next/image";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Page() {
  return (
    <section className="bg-[#FFFFFFB2] font-[inter]">
      <div className="p-[60px] flex justify-between items-start gap-4">
        <div className="w-[30%] ">
          <div>
            <h3 className="font-[inter] 2xl:text-[95px] lg:text-[60px] font-bold">
              Energy
            </h3>
            <p className="text-[15.5px]">
            To promote sustainable energy solutions that improve access to electricity and reduce  environmental impact.
            </p>
          </div>
          <div className="mt-10">
            <h5 className="font-[inter] text-[32px] font-bold">
              Impact Stories
            </h5>
            <ul className="list-disc">
              <li className="mb-7">
              Solar Power in Rural Nigeria: Installed solar panels in villages, providing reliable electricity to  over 1,000 households.
              </li>
              <li>
              Community Gardens in Ghana: Established community gardens that not only provide food but  also create communal spaces and educational opportunities.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/3">
          <Image
            src={"/energy.png"}
            width={500}
            height={500}
            alt=""
            className="w-full object-cover h-auto"
          />
        </div>
      </div>

      <div className="bg-[#F6F4F4B2]">
        <div className="text-center">
          <h3 className="my-6 text-[40px]  font-[600]">Get Involved</h3>
          <p>
            Join us to boost agricultural sustainability through farmer
            training, impactful investments, and hands-on volunteer projects.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 p-8">
      {/* Left Column - Images */}
      <div className="flex flex-wrap items-center justify-center w-2/6 gap-4">
        <div className="relative w-64 h-48 lg:w-72 lg:h-56">
          <Image
            src="/energy-1.png" // Replace with your actual image path
            alt="Innovative Building"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-64 h-48 lg:w-72 lg:h-56">
          <Image
            src="/energy-2.png" 
            alt="Wind Turbine"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-64 h-48 lg:w-72 lg:h-56">
          <Image
            src="/energy-3.png" 
            alt="Volunteers Hiking"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Right Column - Text */}
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FaRegCircleCheck className="text-[#FFC90C]" />  Innovators:
          </h3>
          <p className="text-gray-600">Share and develop new sustainable energy solutions.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FaRegCircleCheck className="text-[#FFC90C]"/>  Donors:
          </h3>
          <p className="text-gray-600">Support the installation and maintenance of energy systems.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FaRegCircleCheck className="text-[#FFC90C]"/> Volunteers:
          </h3>
          <p className="text-gray-600">Educate communities on sustainable energy practices.</p>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
}
