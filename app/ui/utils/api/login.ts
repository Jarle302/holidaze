"use server";
import { baseUrl } from "../../constants/constants";
import { cookies } from "next/headers";
import formDataToObject from "../formDataToObject";
import boolToYesNo from "../boolToYesNo";
import { z } from "zod";

const LoginSchema = z.object({
  email: z
    .string()
    .email("wrong email")
    .endsWith("stud.noroff.no", "email must end with stud.noroff.no"),
  password: z.string().min(4, "password must atleast be 4 characters long"),
});

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
  if (!LoginSchema.safeParse(formDataObject).success) {
    return LoginSchema.safeParse(formDataObject).error?.issues;
  }
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

if(!response.ok){
  throw new Error(`An error occured: ${response.status}`)
}

    const data: LoginResponse = await response.json();
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
    console.log("this is the error",error);
  }
}
