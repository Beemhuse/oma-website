import BlogCard from "@/components/component/card/BlogCard";
import React from "react";
import { fetchBlogs, fetchEvents } from "@/services/apiService";
// import EventCard from "@/components/component/card/EventCard";
// import { LoaderIcon } from "react-hot-toast";
import CircularLoader from "@/components/component/loaders/CircularLoader";
import { SmallEventCard } from "@/components/component/card/EventCard";

export const metadata = {
  title: "Blog | One Map Africa",
  description: "Stay updated with articles on recent events, project updates, and industry news."
};

export default async function Page() {
  let data = await fetchBlogs();
  const event = await fetchEvents();

  if (!data) {
    return <CircularLoader />;
  }

  return (
    <>
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 text-white"
        style={{
          backgroundImage: "url(/landingPage/class.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay with mix-blend-mode */}
        <div
          className="absolute inset-0 bg-black opacity-60"
          style={{ mixBlendMode: "multiply" }}
        ></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-center xl:text-4xl text-xl">Blog</h1>
        </div>
      </section>
      
      <section className="xl:px-10 px-4 container m-auto">
        <div className=" my-10">
          <h2 className="text-[32px] mb-4 font-[600]">Recent News & Updates</h2>
          <p>
            Stay updated with articles on recent events, project updates, and industry news.
          </p>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-3 my-10">
  {/* Main Content for Blogs */}
  <div className="col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
    {data?.map((blog, index) => (
      <BlogCard key={index} {...blog} />
    ))}
  </div>

  {/* Aside for Events */}
  <aside className="col-span-1 w-full mt-10 xl:mt-0">
    <div className=" my-10">
      <h2 className="text-xl mb-4 font-[600]">All Events</h2>
      <p>
        Stay updated with articles on recent events, project updates, and industry news.
      </p>
    </div>
    <div className="grid grid-cols-2">
    {event?.map((eventItem, index) => (
      <SmallEventCard key={index} {...eventItem} />
    ))}

    </div>
  </aside>
</div>

      </section>
    </>
  );
}
