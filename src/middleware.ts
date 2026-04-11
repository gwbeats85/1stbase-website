import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Don't gate the unlock page or API routes
  if (
    pathname.startsWith("/learn/unlock") ||
    pathname.startsWith("/api/learn")
  ) {
    return NextResponse.next();
  }

  // Password gate — uncomment when ready to lock it down
  // const token = request.cookies.get("learn_access")?.value;
  // const password = process.env.LEARN_PASSWORD;
  // if (!password || token !== password) {
  //   return NextResponse.redirect(new URL("/learn/unlock", request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/learn/:path*"],
};
