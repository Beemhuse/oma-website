import TeamCard from "@/components/component/card/TeamCard";
import React from "react";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";


const teamMembers = [
    {
      name: "John Doe",
      position: "CEO",
      image: "/john_doe.png",
      socials: [
        { icon: <FiFacebook />, href: "https://facebook.com/johndoe" },
        { icon: <FiTwitter />, href: "https://twitter.com/johndoe" },
        { icon: <FaInstagram />, href: "https://instagram.com/johndoe" },
      ],
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image: "/jane_smith.png",
      socials: [
        { icon: <FiFacebook />, href: "https://facebook.com/janesmith" },
        { icon: <FiTwitter />, href: "https://twitter.com/janesmith" },
        { icon: <FaInstagram />, href: "https://instagram.com/janesmith" },
      ],
    },
    {
      name: "Michael Brown",
      position: "CFO",
      image: "/michael_brown.png",
      socials: [
        { icon: <FiFacebook />, href: "https://facebook.com/michaelbrown" },
        { icon: <FiTwitter />, href: "https://twitter.com/michaelbrown" },
        { icon: <FaInstagram />, href: "https://instagram.com/michaelbrown" },
      ],
    },
  ];
  
export default function Page() {
  return (
    <section className="py-10 px-[80px]">
      <div className="text-center my-10">
        <h2 className="text-[16px]">OUR TEAM</h2>
        <h3 className="text-[54px] font-[600]">Staff</h3>
        <p className="text-[16px]">Get to know the team members working behind the scenes.</p>
      </div>

      <div className="flex gap-8">
      {teamMembers.map((member, index) => (
        <TeamCard
          key={index}
          name={member.name}
          position={member.position}
          image={member.image}
          socials={member.socials}
        />
      ))}
    </div>

    </section>
  );
}
