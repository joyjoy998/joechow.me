import { groq } from "next-sanity";
import { client } from "@studio/client";

export const getAllBlogs = async () => {
  const query = groq`
    *[_type == "blog"] | order(_updatedAt desc) {
      _id,
      title,
      "publishedAt": _createdAt,
      "updatedAt": _updatedAt,
      slug,
      summary,
      "imageUrl": image.asset->url,
      author,
      content,
      tag,
    }
  `;
  const blogs = await client.fetch(query);

  return blogs;
};

export const getBlogBySlug = async (slug: string) => {
  const query = groq`
    *[_type == "blog" && slug.current == $slug] {
      _id,
      title,
      "publishedAt": _createdAt,
      "updatedAt": _updatedAt,
      slug,
      summary,
      "imageUrl": image.asset->url,
      author,
      content,
      tag,
    }
  `;
  const blog = await client.fetch(query, { slug });

  return blog.length > 0 ? blog[0] : null;
};
