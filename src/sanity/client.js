import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "10ra4h2l",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_SECRET_TOKEN,

});