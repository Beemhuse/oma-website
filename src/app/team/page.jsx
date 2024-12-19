import TeamCard from "@/components/component/card/TeamCard";
import React from "react";
import { fetchTeam } from "@/services/apiService";



export default async function Page() {
  const teamMembers = await fetchTeam()
  if(!teamMembers){
    return "Not found"
  }
  console.log(teamMembers)
  return (
    <section className="py-10 px-[80px]">
      <div className="text-center my-10">
        <h2 className="text-[16px]">OUR TEAM</h2>
        <h3 className="text-[54px] font-[600]">Staff</h3>
        <p className="text-[16px]">Get to know the team members working behind the scenes.</p>
      </div>

      <div className="flex gap-8">
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

    </section>
  );
}
