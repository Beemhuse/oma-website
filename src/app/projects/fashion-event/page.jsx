import GetInvolved from "@/components/GetInvolved";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Projects | One Map Africa",
  description:
    "Agriculture: To enhance agricultural productivity and sustainability, ensuring food security and economic growth.",
};
const imageArray = ["/agric-1.png", "/agric-2.png", "/agric-3.png"];
export default function Page() {
  return (
    <section className="bg-[#FFFFFFB2] dark:bg-[#0a0a0a] font-inter">
      <div className="xl:p-[60px] p-4 flex xl:flex-row flex-col-reverse justify-between items-start gap-4">
        <div className="xl:w-[30%] w-full ">
          <div>
            <h3 className="font-[inter] 2xl:text-[70px] lg:text-[50px] leading-snug font-bold">
              Events & Fashion
            </h3>
            <p className="text-[15.5px]">
            We organize fashion events to celebrate African heritage, promote African fabrics and businesses, and nurture young talents in the fashion industry.
            </p>
          </div>
          <div className="mt-10">
          <Link href="https://events.onemapafrica.org/" target="_blank" className="bg-red-500 rounded-xl p-4 text-white">Check our Events</Link>

          </div>
        </div>
        <div className="xl:w-2/4 w-full">
          <Image
            src={"/fashion.png"}
            width={500}
            height={500}
            alt=""
            className="w-full object-cover h-auto"
          />
        </div>
      </div>

      <div className="bg-[#F6F4F4B2] dark:bg-inherit">
        <div className="text-center ">
          <h3 className="my-6 text-[40px] dark:text-white   font-[600]">
            Get Involved
          </h3>
        </div>
        <GetInvolved images={imageArray} />
      </div>
    </section>
  );
}
