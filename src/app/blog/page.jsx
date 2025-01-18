import BlogCard from "@/components/component/card/BlogCard";
import React from "react";
import { fetchBlogs, fetchEvents } from "@/services/apiService";
import EventCard from "@/components/component/card/EventCard";
// import { LoaderIcon } from "react-hot-toast";
import CircularLoader from "@/components/component/loaders/CircularLoader";

export const metadata = {
  title: "Blog | One Map Africa",
  description: "Stay updated with articles on recent events, project updates, and industry news."
}
export default async function Page() {
  let data = await fetchBlogs();
  const event = await fetchEvents();
if(!data) {
  <CircularLoader />
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
        <h1 className="text-center  xl:text-4xl text-xl">
          Blog
        </h1>
      </section>
    <section className="xl:px-10 px-4 container m-auto">
      <div className="text-center my-10">
        <h1 className="text-[32px]  mb-4 font-[600]">Recent Blog</h1>
        <p>
          Stay updated with articles on recent events, project updates, and
          industry news.
        </p>
      </div>
      <div className="flex justify-start my-10 gap-8 flex-col xl:flex-row">
        {data?.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
      <div className="text-center my-10">
        <h1 className="text-[32px] mb-4 font-[600]">All Events</h1>
        <p>
          Stay updated with articles on recent events, project updates, and
          industry news.
        </p>
      </div>
      <div className="flex justify-start my-10 gap-8 flex-col xl:flex-row">
        {event?.map((blog, index) => (
          <EventCard key={index} {...blog} />
        ))}
      </div>
    </section>
    </>
  );
}
