import { client } from "@/sanity/client";

// Fetch blog data from Sanity
export const fetchBlogs = async () => {
    try {
        const data = await client.fetch(
            `*[_type == "blog" && !(_id in path("drafts.**"))]{
          title,
          slug,
          "imageSrc": mainImage.asset->url,
          "author": author->name,
        "description": content,
          "date":publishedAt,
        "categories": categories[]->title // Fetch category titles
        }`
        );
        console.log(data)
        return data;

    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error;
    }
};


// Fetch all team members
export const fetchTeam = async () => {
    try {
      const data = await client.fetch(
        `*[_type == "team"  && !(_id in path("drafts.**"))]{
          name,
          "imageSrc": image.asset->url,
          role,
          socialLinks
        }`
      );
      return data;
    } catch (error) {
      console.error("Error fetching team data:", error);
      throw error;
    }
  };