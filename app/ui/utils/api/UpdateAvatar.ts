"use client";
import createProxyUrl from "./createProxyUrl";
import configureFetch from "../configureFetch";
import formDataToObject from "../formDataToObject";

export default async function UpdateAvatarAction(
  state: any /*fix state*/,
  formData: FormData
) {
  const temp = formDataToObject(formData);
  console.log({ temp });
  const { name, ...rest } = temp;
  const reqBody = { avatar: { url: rest.url, alt: rest.alt } };
  const url = createProxyUrl(`holidaze/profiles/${name}`);
  const body: any /*fix type*/ = configureFetch("PUT", reqBody);
  const response = await fetch(url, body);
  const data = await response.json();
  console.log(data);
  return data;
}
