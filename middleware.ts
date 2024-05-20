import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const cookie = req.cookies.get("token");

  if (req.cookies.has("token")) {
    req.headers.set("token", cookie?.value ?? "No cookie");
  }

  return NextResponse.next();
}

//export const config = {
//matcher: "/auth",
//};
