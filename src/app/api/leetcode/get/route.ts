import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://alfa-leetcode-api.onrender.com/userProfileUserQuestionProgressV2/joyjoy998"
    );
    if (!response.ok) {
      return NextResponse.json(
        { error: `API responded with status: ${response.status}` },
        { status: response.status }
      );
    }
    const json = await response.json();
    return NextResponse.json(json);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
