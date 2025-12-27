import { NextRequest, NextResponse, ProxyConfig } from "next/server";
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}
export async function proxy(request:NextRequest){
//   console.log("request.url",request.url)
//   const cookies = request.cookies.get('token');
//   if(cookies){
//     return NextResponse.next();
//   }
//   return NextResponse.redirect(new URL('/login',request.url));
//跨域
const response = NextResponse.next();
Object.entries(corsHeaders).forEach(([key, value]) => {
  response.headers.set(key, value);
});
}

export const config:ProxyConfig = {
  //matcher: '/about/:path*',
  matcher: ['/about/:path*'],
}
