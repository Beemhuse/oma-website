import React from 'react'
import ProgramCard from '../component/card/ProgramCard'
import Button from '../reusables/Button'
import { urlFor } from "@/sanity/client";
import { programQuery } from "@/sanity/queries";
import useSWR from "swr";
import ProgramsSkeleton from '../component/loaders/skeletons/ProgramsSkeleton';
import anime from "animejs";
import { handleGenericError } from '@/utils/errorHandler';

export default function Programs() {
    const { data: programs, error, isLoading } = useSWR(programQuery);
    console.log(programs)

    const handleMouseEnter = (target) => {
        anime({
          targets: target,
          scale: 0.9,
          duration: 500,
          easing: "easeOutQuad",
        });
      };
    
      const handleMouseLeave = (target) => {
        anime({
          targets: target,
          scale: 1,
          duration: 500,
          easing: "easeOutQuad",
        });
      };
    
      if (error) {
        return <p>Error loading programs:{handleGenericError( error.message)}</p>;
      }

      
  return (
    <div className=" m-auto flex flex-col justify-center border border-red-500 gap-2 ">
    <div className="justify-center  gap-6 flex xl:flex-row flex-col">
        {isLoading && 
          <ProgramsSkeleton count={i} />
        }
      {programs?.map((program, index) => (
        <ProgramCard
          key={index}
          src={urlFor(program.image)}
          title={program.title}
          description={program.description}
          mouseEnter={handleMouseEnter}
          mouseLeave={handleMouseLeave}
        />
      ))}
    </div>
    <div className="mt-4">
      <Button
        bgColor="bg-[#DB101C]"
        hoverColor="bg-[#DB101C]"
        href={"/donations"}
        label={"Donate Now"}
        isButton={false}
      />
    </div>
  </div>  )
}
