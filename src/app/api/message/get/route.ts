import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { redis } from "@/lib/redisClient";

export async function GET() {
  const cacheKey = "messages:all";
  const CACHE_TTL = 60 * 10; // 10 minutes
  try {
    const cachedMessages = (await redis.get(cacheKey)) as unknown;
    if (typeof cachedMessages === "object" && cachedMessages !== null) {
      return NextResponse.json({ success: true, data: cachedMessages });
    }

    const messages = await prisma.message.findMany({
      orderBy: { createdAt: "desc" },
    });

    await redis.set(cacheKey, messages, { ex: CACHE_TTL });
    return NextResponse.json({ success: true, data: messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
