import { NextRequest, NextResponse } from "next/server";

const CF_SECRET = process.env.CF_ACCESS_SECRET;
const ENFORCE = process.env.CF_ENFORCE_ORIGIN === "true";

export function middleware(request: NextRequest) {
  if (!CF_SECRET) return NextResponse.next();

  const incoming = request.headers.get("x-origin-verify");
  if (incoming === CF_SECRET) return NextResponse.next();

  if (!ENFORCE) return NextResponse.next();

  return new NextResponse("Forbidden", { status: 403 });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|pgp-key.asc|robots.txt|sitemap.xml).*)",
  ],
};
