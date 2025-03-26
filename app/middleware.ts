import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Remove X-Robots-Tag: noindex if it's still being set
  res.headers.set("X-Robots-Tag", "index, follow");

  return res;
}

export const config = {
  matcher: '/', // Apply this only to the main page (or change for all)
};
