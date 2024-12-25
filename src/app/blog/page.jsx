import BlogCard from "@/components/component/card/BlogCard";
import React from "react";
import { fetchBlogs, fetchEvents } from "@/services/apiService";
import EventCard from "@/components/component/card/EventCard";

export default async function Page() {
  let data = await fetchBlogs();
  const event = await fetchEvents();

  return (
    <section className="xl:px-10 px-4 container m-auto">
      <div className="text-center my-10">
        <h1 className="text-[32px] mb-4 font-[600]">Recent Blog</h1>
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
  );
}
