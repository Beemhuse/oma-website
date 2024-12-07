import BlogCard from "@/components/component/card/BlogCard";
import React from "react";
import { blogData } from "../../../blogData";

export default function Page() {
  return (
    <section className="px-10">
      <div className="text-center my-10">
        <h1 className="text-[32px] mb-4 font-[600]">Recent Blog</h1>
        <p>
          Stay updated with articles on recent events, project updates, and
          industry news.
        </p>
      </div>
      <div className="flex  gap-8">
        {blogData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
}
