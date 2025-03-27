import { NextResponse } from "next/server";
import { client } from "@studio/client";
import { redis } from "@/lib/redisClient";
import { groq } from "next-sanity";

export async function GET() {
  const cacheKey = "projects:all";
  const CACHE_TTL = 60 * 60 * 8; // 8 hours
  try {
    const cachedData = (await redis.get(cacheKey)) as unknown;
    if (typeof cachedData === "object" && cachedData !== null) {
      return NextResponse.json({ success: true, data: cachedData });
    }

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
    const blogs = await client.fetch(query);

    await redis.set(cacheKey, blogs, { ex: CACHE_TTL });
    return NextResponse.json({ success: true, data: blogs });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
