"use server";
import { baseUrl } from "../../constants/constants";
import { cookies } from "next/headers";
import formDataToObject from "../formDataToObject";
import boolToYesNo from "../boolToYesNo";

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
const loginEndpoint = "auth/login?_holidaze=true";

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
    const { accessToken: token, ...rest } = data?.data;
    console.log(rest.venueManager, "is venue manager");
    cookies().set({
      name: "token",
      value: token,
      httpOnly: true,
      sameSite: "none",
      secure: true,
      path: "/",
    });
    cookies().set({
      name: "name",
      value: rest?.name,
      sameSite: "none",
      secure: true,
      path: "/",
    });
    cookies().set({
      name: "email",
      value: rest?.email,
      sameSite: "none",
      secure: true,
      path: "/",
    });
    cookies().set({
      name: "isVenueManager",
      value: boolToYesNo(rest?.venueManager),
      sameSite: "none",
      secure: true,
      path: "/",
    });
    cookies().set({
      name: "avatar",
      value: rest?.avatar?.url,
      sameSite: "none",
      secure: true,
      path: "/",
    });
    cookies().set({
      name: "banner",
      value: rest?.banner?.url,
      sameSite: "none",
      secure: true,
      path: "/",
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
