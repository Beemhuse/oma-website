import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: "10ra4h2l",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_SECRET_TOKEN,

});



const builder = imageUrlBuilder(client);

// Helper function to build the image URL
export function urlFor(source) {
  return builder.image(source).url();
}