import TeamCard from "@/components/component/card/TeamCard";
import React from "react";
import { fetchTeam } from "@/services/apiService";

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
      <section className="py-10 xl:px-[80px] px-4">
        <div className="text-center my-10">
          <h2 className="text-[16px]">OUR TEAM</h2>
          <h3 className="text-[54px] font-[600]">Staff</h3>
          <p className="text-[16px]">
            Get to know the team members working behind the scenes.
          </p>
        </div>
        <div className="container m-auto">

        <div className="flex flex-wrap justify-start items-start gap-8  ">
          {teamMembers?.map((member, index) => (
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
      </section>
    </>
  );
}
