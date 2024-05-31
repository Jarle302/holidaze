"use client";

import formDataToObject from "../formDataToObject";

const base = process.env.NEXT_PUBLIC_BASE_URL;

const endpoint = "holidaze/bookings";
const url = base + "/auth" + "?endpoint=" + endpoint;
export default async function bookVenueAction(formData: FormData) {
  const temp = formDataToObject(formData);
  const dateFrom = new Date(String(temp.dateFrom));
  const dateTo = new Date(String(temp.dateTo));
  if (!temp.guests) {
    return;
  }
  const requestBody: {
    dateFrom: string;
    dateTo: string;
    guests: number;
    venueId: string;
  } = {
    dateFrom: dateFrom.toISOString(),
    dateTo: dateTo.toISOString(),
    guests: +temp.guests,
    venueId: temp.venueId as string,
  };
  console.log(requestBody, "this is the req b");

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}
