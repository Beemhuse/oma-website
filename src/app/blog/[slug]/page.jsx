import DisplayFormattedArticle from "@/components/component/card/DisplayFormattedArticle";
import { client } from "@/sanity/client";
import { fetchBlogs } from "@/services/apiService";
import { extractText } from "@/utils/extractText";
import { formatDate } from "@/utils/formatDate";
import { getFirstLetter } from "@/utils/getFirstLetter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const currentUrl = `https://www.onemapafrica.org/blog/${slug}`; // Update with your domain

  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      title,
      "imageSrc": mainImage.asset->url,
      "author": author->name,
      publishedAt,
      content
    }`,
    { slug }
  );

  if (!blog) {
    return { title: "Blog not found" };
  }

  return {
    title: `${blog.title} | One Map Africa Blog`,
    description: extractText(blog.content),
    openGraph: {
      title: blog.title,
      description: extractText(blog.content),
      image: blog.imageSrc,
      url: currentUrl,
    },
    twitter: {
      title: blog.title,
      description: extractText(blog.content),
      image: blog.imageSrc,
      card: "summary_large_image",
    },
  };
}
export default async function Page({ params }) {
  const { slug } = params;
  const currentUrl = `https://www.onemapafrica.org/blog/${slug}`; // Update this to your blog's domain

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
        <div className="xl:col-span-3 xl:w-2/3 m-auto w-full col-span-1 flex-col justify-center">
          <span className="bg-[#F2F8F7] dark:bg-[#fff] dark:text-black rounded-xl mb-3 p-2 text-xs">
            {blog?.categories}
          </span>
          <h2 className="text-2xl font-bold mt-3">{blog?.title}</h2>
          <div className="flex mt-3 items-center">
            <div className="flex items-center gap-3">
              <div className="uppercase w-10 h-10 bg-gray-200 dark:bg-[#FFD700] dark:text-black flex items-center justify-center rounded-full text-sm">{getFirstLetter(blog?.author)}</div>
              <p className="capitalize text-sm">{blog?.author}</p>
            </div>
            <p className="flex text-sm items-center gap-2 ml-4"> <FaRegCalendarAlt /> {formatDate(blog?.publishedAt)}</p>
          </div>
          <div className=" mt-5">
            <Image
              src={blog?.imageSrc}
              alt=""
              width={500}
              height={500}
              className="object-cover  w-full aspect-auto"
            />
          </div>
          <article className=" m-auto">
            <DisplayFormattedArticle description={blog?.content} />
          </article>
        </div>
        <div className="col-span-1">
          {/* Sidebar */}
          <aside className="w-full  mt-10 lg:mt-0">
            {/* Recent Posts */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
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
                          <p className="text-sm font-medium text-gray-800 dark:text-white">
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
            <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Share this article
            </h3>
            <div className="flex items-center space-x-4">
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodeURIComponent(
                  blog?.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-400 text-white rounded-full"
              >
                <FaTwitter />
              </Link>
              <Link
                href={`https://www.linkedin.com/shareArticle?url=${currentUrl}&title=${encodeURIComponent(
                  blog?.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-700 text-white rounded-full"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href={`https://wa.me/?text=${encodeURIComponent(
                  `${blog?.title} - ${currentUrl}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-500 text-white rounded-full"
              >
                <FaWhatsapp />
              </Link>
            </div>
            </div>
          </aside>{" "}
        </div>
      </section>
    </>
  );
}
