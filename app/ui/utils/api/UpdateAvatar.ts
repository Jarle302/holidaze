"use client";
import createProxyUrl from "./createProxyUrl";
import configureFetch from "../configureFetch";
import formDataToObject from "../formDataToObject";
import { UpdateAvatarZod } from "@/app/ui/constants/validationSchemas";

export default async function UpdateAvatarAction(
  state: any /*fix state*/,
  formData: FormData
) {
  const temp = formDataToObject(formData);
  if (!UpdateAvatarZod.safeParse(temp).success) {
    return UpdateAvatarZod.safeParse(temp).error?.issues;
  }
  const { name, ...rest } = temp;
  const reqBody = { avatar: { url: rest.url, alt: rest.alt } };
  const url = createProxyUrl(`holidaze/profiles/${name}`);
  const body: RequestInit = configureFetch("PUT", reqBody);
  try {
    const response = await fetch(url, body);
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}
