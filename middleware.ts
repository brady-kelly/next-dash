import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse, NextRequest } from 'next/server'
 
export default NextAuth(authConfig).auth;

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  runtime: 'nodejs',
};