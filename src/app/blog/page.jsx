import BlogCard from "@/components/component/card/BlogCard";
import React from "react";
import { fetchBlogs } from "@/services/apiService";

export default async function Page() {

  let data;
  try {
    data = await fetchBlogs();
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
  return (
    <section className="xl:px-10 px-4">
      <div className="text-center my-10">
        <h1 className="text-[32px] mb-4 font-[600]">Recent Blog</h1>
        <p>
          Stay updated with articles on recent events, project updates, and
          industry news.
        </p>
      </div>
      <div className="flex justify-start gap-8">
        {data.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
}
