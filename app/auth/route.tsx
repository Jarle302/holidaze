import { cookies } from "next/headers";
import { type NextRequest } from "next/server";
import { baseUrl } from "../ui/constants/constants";

export async function GET(request: NextRequest) {
  console.log("SE HER ", request.headers);
  const key = process.env.APIKEY;
  if (!key) {
    throw new Error("Missing API KEY!");
  }
  const token = request.cookies.get("token");
  console.log(request.cookies);
  if (!token) {
    throw new Error("Missing accessToken");
  }

  const requestBody = await request.json();
  const searchParams = request.nextUrl.searchParams;
  const url = baseUrl + searchParams.get("endpoint");
  const isGet = Object.keys(requestBody).length === 0;
  const fetchOptions = {
    method: isGet ? "GET" : "POST",
    headers: {
      Authorization: `Bearer ${token.value}`,
      "X-Noroff-API-Key": key,
      "Content-Type": !isGet ? "application/json" : "",
    },
    body: isGet ? undefined : JSON.stringify(requestBody),
  };
  const response = await fetch(url, fetchOptions);
  const data = await response.json();
  console.log(requestBody);
  return Response.json({ data });
}
