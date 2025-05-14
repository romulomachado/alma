import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username } = await req.json();

  if (username === "admin") {
    const token = `mock-token-for-${username}`;

    const response = NextResponse.json({ success: true });
  
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    return response;
  } else {
    return NextResponse.json({ success: false, message: "Invalid username"}, { status: 401 });
  }
}