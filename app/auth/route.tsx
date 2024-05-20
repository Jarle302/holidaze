import { type NextRequest } from "next/server";
import { baseUrl } from "../ui/constants/constants";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const key = process.env.APIKEY;
  if (!key) {
    throw new Error("Missing API KEY!");
  }
  const token = request.cookies.get("token")?.value;
  console.log("this is the token", { token });
  let requestBody = {};
  if (request.headers.get("content-type")?.includes("application/json")) {
    requestBody = await request.json();
    console.log(requestBody, "this is the bod");
  }
  const searchParams = request.nextUrl.searchParams;
  const url = baseUrl + searchParams.get("endpoint");
  const isGet = Object.keys(requestBody).length === 0;
  const fetchOptions = {
    method: isGet ? "GET" : "POST",
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
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

export async function POST(request: NextRequest) {
  const key = process.env.APIKEY;
  if (!key) {
    throw new Error("Missing API KEY!");
  }

  console.log("HEADERS", request.headers, "HEADERS");

  //const token = request.headers.get("token");
  const token = request.cookies.get("token")?.value;
  console.log("this is the token", { token });
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
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      "X-Noroff-API-Key": key,
      ...(isGet ? {} : { "Content-Type": "application/json" }),
    },
    body: isGet ? undefined : JSON.stringify(requestBody),
  };
  try {
    const response = await fetch(url, fetchOptions);
    const data = await response.json();
    console.log(data);
    return new Response(JSON.stringify(data), {
      status: 200,

      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Credentials": "true",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
}
