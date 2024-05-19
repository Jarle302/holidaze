"use server";

import { proxyURL } from "../../constants/constants";
import formDataToObject from "../formDataToObject";
const endpoint = "holidaze/bookings";
const url = proxyURL + "?endpoint=" + endpoint;
//const url = `http://localhost:3000/auth` + "?endpoint=" + endpoint;
export default async function bookVenueAction(state: any, formData: FormData) {
  const temp = formDataToObject(formData);
  const dateFrom = new Date(String(temp.dateFrom));
  const dateTo = new Date(String(temp.dateTo));
  const requestBody: {
    dateFrom: string;
    dateTo: string;
    guests: number;
    venueId: string;
  } = {
    dateFrom: dateFrom.toString(),
    dateTo: dateTo.toString(),
    guests: +temp.guests,
    venueId: temp.venueId as string,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}
