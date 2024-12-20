import GetInvolved from "@/components/GetInvolved";
import Image from "next/image";
import React from "react";

const imageArray = [
  '/agric-1.png',
  '/agric-2.png',
  '/agric-3.png',
];
export default function Page() {
  return (
    <section className="bg-[#FFFFFFB2] font-[inter]">
      <div className="xl:p-[60px] p-4 flex justify-between items-start gap-4">
        <div className="w-[30%] ">
          <div>
            <h3 className="font-[inter] 2xl:text-[95px] lg:text-[60px] font-bold">
              Agriculture
            </h3>
            <p className="text-[15.5px]">
              Objective: To enhance agricultural productivity and
              sustainability, ensuring food security and economic growth.
            </p>
          </div>
          <div className="mt-10">
            <h5 className="font-[inter] text-[32px] font-bold">
              Impact Stories
            </h5>
            <ul className="list-disc">
              <li className="mb-7">
                Sustainable Farming in South Sudan: Farmers adopted sustainable
                practices, resulting in a 30% increase in crop yields.
              </li>
              <li>
                Biogas Projects in Uganda: Implemented biogas systems that offer
                a sustainable energy source for cooking and heating.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/4">
          <Image
            src={"/agric.png"}
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
    <GetInvolved images={imageArray} />
    
      </div>
    </section>
  );
}
