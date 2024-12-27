import GetInvolved from "@/components/GetInvolved";
import Image from "next/image";
import React from "react";
const imageArray = ["/energy-1.png", "/energy-2.png", "/energy-3.png"];
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
              To promote sustainable energy solutions that improve access to
              electricity and reduce environmental impact.
            </p>
          </div>
          <div className="mt-10">
            <h5 className="font-[inter] text-[32px] font-bold">
              Impact Stories
            </h5>
            <ul className="list-disc">
              <li className="mb-7">
                Solar Power in Rural Nigeria: Installed solar panels in
                villages, providing reliable electricity to over 1,000
                households.
              </li>
              <li>
                Community Gardens in Ghana: Established community gardens that
                not only provide food but also create communal spaces and
                educational opportunities.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/4">
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
        <GetInvolved images={imageArray} />
      </div>
    </section>
  );
}
