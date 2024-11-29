import { NextRequest, NextResponse } from "next/server";

interface Routes {
  [key: string]: boolean;
}

const publicOnlyUrls: Routes = {
  "/": true,
  "/login": true,
  "/sms": true,
  "/create-account": true,
  "/github/start": true,
  "/github/complete": true,
};

export async function middleware(request: NextRequest) {
  // const session = await getSession();
  const exists = publicOnlyUrls[request.nextUrl.pathname];
  console.log("middleware :: exists : ", exists);
  return NextResponse.next();
  // if (!session.id) {
  //   if (!exists) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  // } else {
  //   if (exists) {
  //     return NextResponse.redirect(new URL("/home", request.url));
  //   }
  // }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};