// import SEO from "@/components/component/SEO";
import DisplayFormattedArticle from "@/components/component/card/DisplayFormattedArticle";
import { client } from "@/sanity/client";
import { fetchBlogs } from "@/services/apiService";
import { formatDate } from "@/utils/formatDate";
import { getFirstLetter } from "@/utils/getFirstLetter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

export default async function Page({ params }) {
  const { slug } = params;

  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      title,
      "imageSrc": mainImage.asset->url,
      "author": author->name,
      publishedAt,
      content,
              "categories": categories[]->title // Fetch category titles

    }`,
    { slug } // Correct parameter binding
  );
  const blogs = await fetchBlogs();
  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <>
      {/* <SEO title={blog.title} image={blog.imageSrc} /> */}
      <section className="grid xl:grid-cols-4 grid-cols-1 px-10 py-8">
        <div className="xl:col-span-3 col-span-1">
          <span className="bg-[#F2F8F7] rounded-xl mb-3 p-2 text-xs">
            {blog?.categories}
          </span>
          <h2 className="text-3xl font-bold mt-3">{blog?.title}</h2>
          <div className="flex mt-3 items-center">
            <div className="flex items-center gap-3">
              <div className="uppercase w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full">{getFirstLetter(blog?.author)}</div>
              <p className="capitalize">{blog?.author}</p>
            </div>
            <p className="flex items-center gap-2"> <FaRegCalendarAlt /> {formatDate(blog?.publishedAt)}</p>
          </div>
          <div className="flex justify-center ">
            <Image
              src={blog?.imageSrc}
              alt=""
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <article>
            <DisplayFormattedArticle description={blog?.content} />
          </article>
        </div>
        <div className="col-span-1">
          {/* Sidebar */}
          <aside className="w-full  mt-10 lg:mt-0">
            {/* Recent Posts */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-4">
                {blogs?.slice(0, 3).map((recentBlog) => (
                  <li key={recentBlog._id}>
                    <Link href={`/blog/${recentBlog?.slug.current}`}>
                      <div className="flex items-center gap-4">
                        <Image
                          src={recentBlog?.imageSrc}
                          alt=""
                          width={50}
                          height={50}
                          className="object-cover"
                        />{" "}
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {recentBlog?.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatDate(recentBlog?.date)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Search With Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Travel", "Lifestyle", "Ghana", "USA Visa"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>{" "}
        </div>
      </section>
    </>
  );
}
