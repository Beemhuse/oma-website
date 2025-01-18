import GetInvolved from "@/components/GetInvolved";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Projects | One Map Africa",
  description: "Agriculture: To enhance agricultural productivity and sustainability, ensuring food security and economic growth."
}
const imageArray = [
  '/agric-1.png',
  '/agric-2.png',
  '/agric-3.png',
];
export default function Page() {
  return (
    <section className="bg-[#FFFFFFB2] dark:bg-[#0a0a0a] font-inter">
      <div className="xl:p-[60px] p-4 flex xl:flex-row flex-col-reverse justify-between items-start gap-4">
        <div className="xl:w-[30%] w-full ">
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
            <ul className="list-disc p-4">
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
        <div className="xl:w-2/4 w-full">
          <Image
            src={"/agric.png"}
            width={500}
            height={500}
            alt=""
            className="w-full object-cover h-auto"
          />
        </div>
      </div>

      <div className="bg-[#F6F4F4B2] dark:bg-inherit">
        <div className="text-center ">
          <h3 className="my-6 text-[40px] dark:text-white   font-[600]">Get Involved</h3>
          <p className="dark:text-white">
            Join us to boost agricultural sustainability through farmer
            training, impactful investments, and hands-on volunteer projects.
          </p>
        </div>
    <GetInvolved images={imageArray} />
    
      </div>
    </section>
  );
}
