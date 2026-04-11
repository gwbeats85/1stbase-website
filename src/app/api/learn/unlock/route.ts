import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { password } = await request.json();

  if (password === process.env.LEARN_PASSWORD) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("learn_access", password, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  return NextResponse.json({ error: "Wrong password" }, { status: 401 });
}
