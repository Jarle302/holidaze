"use server";

import { baseUrl } from "../../constants/constants";
import formDataToObject from "../formDataToObject";
import { registerUserSchema } from "../../constants/validationSchemas";
const endpoint = "auth/register";
const url = baseUrl + endpoint;
export default async function registerAction(state: any, formData: FormData) {
  const tempBody = formDataToObject(formData);
  if (!registerUserSchema.safeParse(tempBody).success) {
    return registerUserSchema.safeParse(tempBody).error?.issues;
  }
  const { avatarUrl, avatarAlt, bannerUrl, bannerAlt, ...rest } = tempBody;

  const requestBody = {
    ...rest,
    avatar: { url: avatarUrl, alt: avatarAlt },
    banner: { url: bannerUrl, alt: bannerAlt },
  };

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
