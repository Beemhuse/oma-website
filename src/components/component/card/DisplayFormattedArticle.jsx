import React from "react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import Link from "next/link";

const builder = imageUrlBuilder(client);

// Helper function to build the image URL
function urlFor(source) {
  return builder.image(source).url();
}

const components = {
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value.asset)}
        alt={value.alt || " "}
        loading="lazy"
        width={500}
        height={500}
      />
    ),

    code: ({ value }) => (
      <pre>
        <code>{value.code}</code>
      </pre>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link href={value.href} rel={rel}>
          {children}
        </Link>
      );
    },
  },
  block: {
    normal: ({ children }) => <p className="my-2">{children}</p>,
    h1: ({ children }) => <h1 className="my-2">{children}</h1>,
    h2: ({ children }) => <h2 className="my-2">{children}</h2>,
  },
};

export default function DisplayFormattedArticle({ description }) {
  console.log(description);
  return <PortableText value={description} components={components} />;
}
