"use client";

import formDataToObject from "../formDataToObject";
import createProxyUrl from "./createProxyUrl";
import configureFetch from "../configureFetch";
import {createBookingSchema} from "@/app/ui/constants/validationSchemas"

const endpoint = "holidaze/bookings";

const url = createProxyUrl(endpoint);

export default async function bookVenueAction(state:any,formData: FormData) {
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

  if(!createBookingSchema.safeParse(requestBody).success){
    return createBookingSchema.safeParse(requestBody).error?.issues
  }


  const options: RequestInit = configureFetch("POST", requestBody);
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}
