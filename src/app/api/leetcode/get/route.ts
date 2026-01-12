import { NextResponse } from "next/server";
import { redis } from "@/lib/redisClient";

export async function GET() {
  const userName = "joyjoy998";
  const cacheKey = `leetcode:user:${userName}`;
  const CACHE_TTL = 60 * 60 * 48; // 48 hours

  try {
    const cachedData = (await redis.get(cacheKey)) as unknown;
    if (typeof cachedData === "object" && cachedData !== null) {
      return NextResponse.json({ success: true, data: cachedData });
    }

    const response = await fetch(
      `https://alfa-leetcode-api.onrender.com/${userName}/solved`
    );
    if (!response.ok) {
      return NextResponse.json(
        { error: `API responded with status: ${response.status}` },
        { status: response.status }
      );
    }
    const json = await response.json();

    const extractedData = {
      solvedProblems: json.solvedProblem,
      easy: json.easySolved,
      medium: json.mediumSolved,
      hard: json.hardSolved,
    };

    await redis.set(cacheKey, extractedData, { ex: CACHE_TTL });

    return NextResponse.json({ success: true, data: extractedData });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
