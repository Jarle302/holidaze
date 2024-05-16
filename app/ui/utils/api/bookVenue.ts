"use server";

import { baseUrl } from "../../constants/constants";
import formDataToObject from "../formDataToObject";
const endpoint = "holidaze/bookings";
const url = baseUrl + endpoint;
export default async function bookVenueAction(id: string, formData: FormData) {
  const temp = formDataToObject(formData);
  const dateFrom = new Date(String(temp.dateFrom));
  const dateTo = new Date(String(temp.dateTo));
  const requestBody: {
    dateFrom: Date;
    dateTo: Date;
    maxGuests: number;
    venueId: string;
  } = {
    dateFrom,
    dateTo,
    maxGuests: parseInt(temp.maxGuests as string),
    venueId: id,
  };

  requestBody.venueId = id;

  console.log(requestBody, "THIS IS THE REQ");
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then((data) => {
      data.json();
      console.log(data);
    });
  } catch (error) {
    console.log("error", error);
  }
}
