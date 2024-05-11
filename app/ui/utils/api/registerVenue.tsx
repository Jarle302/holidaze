"use server";
import formDataToObject from "../formDataToObject";
import formDataToVenue from "../formDataToVenue";
export default async function registerVenue(state: any, formData: FormData) {
  const endpoint = encodeURIComponent("/holidaze/venues");

  const payload = formDataToVenue(formDataToObject(formData));
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  try {
    const response = await fetch(
      `https://holidazejarle.netlify.app/auth?endpoint=${endpoint}`,
      options
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
