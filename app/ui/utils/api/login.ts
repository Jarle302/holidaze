"use server";
import { baseUrl } from "../../constants/constants";
import { cookies } from "next/headers";
import formDataToObject from "../formDataToObject";

type Image = {
  url: string;
  alt: string;
};

type LoginResponse = {
  data: {
    name: string;
    email: string;
    avatar: Image;
    banner: Image;
    accessToken: string;
    venueManager: boolean;
  };
  meta: Record<string, unknown>;
};
const loginEndpoint = "auth/login";

const url = baseUrl + loginEndpoint;

export default async function loginAction(state: any, formData: FormData) {
  const formDataObject = formDataToObject(formData);
  console.log(formData, "formData");
  console.log(formDataObject, "formDataOBJECT");
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    });
    const data: LoginResponse = await response.json();
    console.log("this is the log", data, "test:", formDataObject);
    const { accessToken: token } = data?.data;
    cookies().set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: true,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
