import { groq } from "next-sanity";
import { client } from "@studio/client";
import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redisClient";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const cacheKey = `blog:${slug}`;
  const CACHE_TTL = 60 * 60 * 8;
  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }
  try {
    const cachedData = (await redis.get(cacheKey)) as unknown;
    if (typeof cachedData === "object" && cachedData !== null) {
      return NextResponse.json({ success: true, data: cachedData });
    }

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
    if (blog.length > 0) {
      await redis.set(cacheKey, blog[0], { ex: CACHE_TTL });
      return NextResponse.json({ success: true, data: blog[0] });
    }
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}
