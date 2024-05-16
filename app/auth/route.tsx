import { type NextRequest } from "next/server";
import { baseUrl } from "../ui/constants/constants";

export async function GET(request: NextRequest) {
  const key = process.env.APIKEY;
  if (!key) {
    throw new Error("Missing API KEY!");
  }
  const token = request.cookies.get("token");
  console.log({ token });
  let requestBody = {};
  if (request.headers.get("content-type")?.includes("application/json")) {
    requestBody = await request.json();
  }
  const searchParams = request.nextUrl.searchParams;
  const url = baseUrl + searchParams.get("endpoint");
  const isGet = Object.keys(requestBody).length === 0;
  const fetchOptions = {
    method: isGet ? "GET" : "POST",
    headers: {
      ...(token ? { Authorization: `Bearer ${token.value}` } : {}),
      "X-Noroff-API-Key": key,
      ...(isGet ? {} : { "Content-Type": "application/json" }),
    },
    body: isGet ? undefined : JSON.stringify(requestBody),
  };
  try {
    const response = await fetch(url, fetchOptions);
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
}
