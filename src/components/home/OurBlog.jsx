"use client";
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import BlogCard from "../component/card/BlogCard";
import useSlideIn from "@/hooks/useSlideIn";
import { blogQuery } from "@/sanity/queries";
import useSWR from "swr";

const OurBlogs = () => {
  const slideInRef = useSlideIn(); 
  const cardsRef = useRef([]);
  const {data: blogData} = useSWR(blogQuery)
  
  useEffect(() => {

    anime({
      targets: cardsRef.current,
      translateX: [-100, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
      delay: anime.stagger(200), // Stagger each card animation
    });
  }, []);

  // Hover animation
  const handleMouseEnter = (index) => {
    anime({
      targets: cardsRef.current[index],
      scale: 1.05,
      // boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      duration: 300,
      easing: "easeOutExpo",
    });
  };

  const handleMouseLeave = (index) => {
    anime({
      targets: cardsRef.current[index],
      scale: 1,
      // boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
      duration: 300,
      easing: "easeOutExpo",
    });
  };
  return (
    <section ref={slideInRef} className="xl:px-10 px-10 my-10 container m-auto">
      <div>
        <div className="text-left my-10">
          <h1 className="text-[32px] mb-4 font-[600] capitalize ">Our Blog</h1>
          <p className="capitalize text-red-500">Our recent blogs</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {blogData?.map((blog, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="relative overflow-hidden   duration-300"
            >
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
