import TeamCard from "@/components/component/card/TeamCard";
import React from "react";
import { fetchTeam } from "@/services/apiService";
import Image from "next/image";
import Button from "@/components/reusables/Button";
import Link from "next/link";
// import { Button } from "@/components/component/ui/button";

export default async function Page() {
  const teamMembers = await fetchTeam();
  if (!teamMembers) {
    return "Not found";
  }
  return (
    <>
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8  text-white"
        style={{
          backgroundImage: "url(/bg-layout.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-center xl:text-4xl text-xl">Team</h1>
      </section>
      <section className="py-8 xl:px-[80px] px-4">
        <div className="text-center my-5">
          <h2 className="text-[16px]">OUR TEAM</h2>
          <h3 className="text-[54px] font-[600]">Staff</h3>
          <p className="text-[16px]">
            Get to know the team members working behind the scenes.
          </p>
        </div>
        <div className="container m-auto">

        <div className="flex flex-wrap justify-start items-start gap-8  ">
          {!teamMembers?.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              position={member.role}
              image={member.imageSrc}
              socials={member.socialLinks}
            />
          ))}
        </div>
        </div>
        <div className="flex w-full flex-row   justify-center rounded-lg mt-10 h-28">
          <Image  src={'/team.svg'} alt="" width={400} height={400} className="w-fit rounded-tl-xl rounded-bl-xl"/>
          <div className="bg-black flex p-1 xl:flex-row flex-col items-center justify-between md:p-8 rounded-tr-xl rounded-br-xl xl:gap-7 md:gap-4 gap-2">
            <h3 className="text-white text-center xl:text-start text-xs">Join our team and help us achieve our vision of a united Africa. </h3>
            <Link className="xl:hidden md:hidden inline bg-red-600 text-white rounded-xl p-2 text-xs" href='/get-involved'>Join us now</Link>
            <div className="hidden md:inline xl:inline">

            <Button isButton={false} href={"/subscription"} hoverColor="bg-red-600" bgColor="bg-red-500" label={"Join us now"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
