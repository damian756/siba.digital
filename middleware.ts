import { NextRequest, NextResponse } from "next/server";

const CF_SECRET = process.env.CF_ACCESS_SECRET;

export function middleware(request: NextRequest) {
  if (!CF_SECRET) return NextResponse.next();

  const incoming = request.headers.get("x-origin-verify");
  if (incoming === CF_SECRET) return NextResponse.next();

  return new NextResponse(
    JSON.stringify({
      hasSecret: !!CF_SECRET,
      hasHeader: !!incoming,
      secretLen: CF_SECRET?.length,
      headerLen: incoming?.length,
    }),
    { status: 403, headers: { "content-type": "application/json" } }
  );
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|pgp-key.asc|robots.txt|sitemap.xml).*)",
  ],
};
