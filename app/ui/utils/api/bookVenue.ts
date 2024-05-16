"use server";

import { baseUrl } from "../../constants/constants";
import formDataToObject from "../formDataToObject";
const endpoint = "holidaze/bookings";
const url = baseUrl + endpoint;
export default async function bookVenueAction(id: string, formData: FormData) {
  const requestBody = formDataToObject(formData);
  requestBody.venueId = id;

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
