"use server";

import { baseUrl } from "../../constants/constants";
import formDataToObject from "../formDataToObject";
const endpoint = "auth/register";
const url = baseUrl + endpoint;
export default async function registerAction(state: any, formData: FormData) {
  const reqBody = formDataToObject(formData);
  const { imageUrl, ...rest } = reqBody;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rest),
  });
  const data = await response.json();
  console.log(rest);
  console.log(data, "this is the log");
}
