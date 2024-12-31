"use client";
import React from "react";

import Image from "next/image";
import { urlFor } from "@/sanity/client";
import { motion } from "motion/react";
import useSWR from "swr";
import { clientsQuery } from "@/sanity/queries";

const TrustedClients = ({}) => {
  const { data: trustedClients } = useSWR(clientsQuery);

  return (
    <div className="flex flex-col gap-5 items-center overflow-x-hidden whitespace-nowrap dark:bg-white container m-auto  py-10">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        className="flex flex-shrink-0 "
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex" }} // Ensure container is wide enough
      >
        {trustedClients?.map((client, index) => (
          <Image
            alt={`Trusted Client ${client?.name}`}
            src={urlFor(client?.imageSrc)}
            height={120}
            width={150}
            key={index}
            className=" h-36 w-52 pr-20 aspect-square"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TrustedClients;
