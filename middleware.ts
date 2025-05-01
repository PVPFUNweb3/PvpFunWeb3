import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware function for authentication, request logging, etc.
export function middleware(request: NextRequest) {
  // Log requests to console
  console.log(`Request: ${request.method} ${request.nextUrl.pathname}`);

  // Add custom headers to response
  const response = NextResponse.next();
  response.headers.set('x-app-version', '0.1.0');
  response.headers.set('x-powered-by', 'PVP.FUN');

  // Example: For future firewall or rate limiting features
  // if (isRateLimited(request.ip)) {
  //   return new NextResponse('Rate limit exceeded', { status: 429 });
  // }

  return response;
}

// Only run middleware on these paths
export const config = {
  matcher: [
    // Exclude all static resources
    '/((?!_next/static|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}; 