"use client";
import React, { useEffect, useRef } from "react";
import anime from "animejs";
import BlogCard from "../component/card/BlogCard";
import blog1 from "../../../public/landingPage/blog1.svg";
import blog2 from "../../../public/landingPage/blog2.svg";
import blog3 from "../../../public/landingPage/blog3.svg";
import useSlideIn from "@/hooks/useSlideIn";

const OurBlogs = () => {
  const slideInRef = useSlideIn(); 
  const cardsRef = useRef([]);

  const blogData = [
    {
      imageSrc: blog1,
      title: "Fashion Project Launch: African Heritage Exhibition Day",
      description:
        "Join us at the Castle of Good Hope, Cape Town, on September 23rd-24th, 2024, for the launch of One Map Africa's Fashion Project...",
      author: "Event",
      date: "19 OCT 2022",
    },
    {
      imageSrc: blog2,
      title: "Unity in Action: Realizing Nkrumah's Vision for Africa",
      description:
        "A virtual conference in Commemoration of the legacy of Dr. Kwame Nkrumah, a pioneering figure in Pan-Africanism and a key architect in the movement toward African unity...",
      author: "Event",
      date: "19 OCT 2022",
    },
    {
      imageSrc: blog3,
      title: "Kwame Nkrumah Memorial Day 2024",
      description:
        "Join us on September 21st, 2024, as we celebrate the legacy of Dr. Kwame Nkrumah, a pioneer of Pan-Africanism and the first President of Ghana...",
      author: "Event",
      date: "19 OCT 2022",
    },
  ];

  // Trigger slide-in effect on mount
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
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      duration: 300,
      easing: "easeOutExpo",
    });
  };

  const handleMouseLeave = (index) => {
    anime({
      targets: cardsRef.current[index],
      scale: 1,
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
      duration: 300,
      easing: "easeOutExpo",
    });
  };

  return (
    <section ref={slideInRef} className="px-10 flex my-10 md:justify-center">
      <div>
        <div className="text-left my-10">
          <h1 className="text-[32px] mb-4 font-[600] capitalize">Our Blog</h1>
          <p className="capitalize">Our recent blogs</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {blogData.map((blog, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="relative overflow-hidden rounded-lg shadow-md transition-shadow duration-300"
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
