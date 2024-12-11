import ProgramCard from "@/components/component/card/ProgramCard";
import Button from "@/components/reusables/Button";
import Image from "next/image";
import React from "react";
const programs = [
  {
    src: "/energy.png",
    title: "Agriculture",
    description:
      "To enhance agricultural productivity and sustainability, ensuring food security and economic growth.",
  },
  {
    src: "/healthcare.png",
    title: "Healthcare",
    description:
      "Improving access to healthcare services and promoting public health initiatives for better community wellbeing.",
  },
  {
    src: "/education.png",
    title: "Education",
    description:
      "Providing quality education and learning resources to empower individuals for a brighter future.",
  },
];
export default function Page() {
  return (
    <section className="py-10">
      <div className="flex justify-around">
        <div className="xl:w-[545px] w-full flex flex-col items-start gap-5">
          <h1 className="text-[64px]">Together We Will Re-Unite Africa</h1>
          <p className="text-[18px] xl:w-[505px]">
            We aim to empower communities, drive sustainable growth, and
            contribute to the long-term prosperity of the continent.
          </p>
          <Button
            bgColor="bg-[#DB101C]"
            hoverColor="bg-[#DB101C]"
            rounded={false}
            label={"Join Now"}
          />
        </div>

        <Image src={"/unite.png"} alt="united World" height={500} width={500} />
      </div>

      <div className="mt-[70px]">
        <div className="text-center my-5">
          <h2 className="text-[45px] font-[500]">Our Programs</h2>
          <p className="text-[18px] text-[#525560]">Some of our Project Areas</p>
        </div>
        <div className="w-[70%]  m-auto ">
          <div className="justify-center gap-6 flex">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                src={program.src}
                title={program.title}
                description={program.description}
              />
            ))}
          </div>
          <div className="mt-4">
            <Button
              bgColor="bg-[#DB101C]"
              hoverColor="bg-[#DB101C]"
              href={"/donate"}
              label={"Donate Now"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
