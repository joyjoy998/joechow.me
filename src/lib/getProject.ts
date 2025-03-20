import { groq } from "next-sanity";
import { client } from "@studio/client";

export const getProjects = async () => {
  const query = groq`
    *[_type == "project"] | order(_updatedAt desc) {
      _id,
      title,
      description,
      "imageUrl": image.asset->url,
      link,
      tags
    }
  `;

  const projects = await client.fetch(query);
  return projects;
};
