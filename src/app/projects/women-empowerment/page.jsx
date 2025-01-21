import GetInvolved from "@/components/GetInvolved";
import Image from "next/image";
import React from "react";
const imageArray = ["/energy-1.png", "/energy-2.png", "/energy-3.png"];
export const metadata = {
  title: "Projects | One Map Africa",
  description:
    "Energy: To promote sustainable energy solutions that improve access to electricity and reduce environmental impact.",
};
export default function Page() {
  return (
    <section className="bg-[#FFFFFFB2] dark:bg-inherit font-[inter]">
      <div className="p-3 md:p-[60px] flex  md:flex-row flex-col-reverse justify-between items-start gap-4">
        <div className="w-full md:w-[30%] ">
          <div>
            <h3 className="font-[inter] 2xl:text-[60px] leading-tight lg:text-[50px] font-bold">
              Women Empowerment
            </h3>
            <p className="text-[15.5px]">
              We offer education and mentorship programs to people with
              disabilities, to promote social inclusion, equity and sustainable
              growth.
            </p>
          </div>
        </div>
        <div className="w-full md:w-2/4">
          <Image
            src={"/women.jpg"}
            width={500}
            height={500}
            alt=""
            className="w-full object-cover h-auto"
          />
        </div>
      </div>

      <div className="bg-[#F6F4F4B2] dark:bg-inherit">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="my-6 text-[40px]  font-[600]">Get Involved</h3>
          <p>
            Join us in empowering women by supporting education initiatives,
            mentorship programs, and community projects that enable women to
            achieve their fullest potential.
          </p>
        </div>
        <GetInvolved images={imageArray} />
      </div>
    </section>
  );
}
