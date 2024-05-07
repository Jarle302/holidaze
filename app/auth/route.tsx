import { type NextRequest } from "next/server";
import { baseUrl } from "../ui/constants/constants";

export async function GET(request: NextRequest) {
  const key = process.env.APIKEY;
  if (!key) {
    throw new Error("Missing API KEY!");
  }
  const token = request.cookies.get("token")||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFybGV0ZXN0IiwiZW1haWwiOiJqdGVzdDAyQHN0dWQubm9yb2ZmLm5vIiwiaWF0IjoxNzE1MTAzMTc2fQ.lOBOdsj0RHs8EGH2msweZciGszv0zCP5YCcoaACfu7E";

  if (!token) {
    throw new Error("Missing accessToken");
  }
  console.log(token, "TOOOOOOOOOOOKEN");
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
      Authorization: `Bearer ${token.value}`,
      "X-Noroff-API-Key": key,
      "Content-Type": !isGet ? "application/json" : "",
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
