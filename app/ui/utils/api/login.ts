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
  password: z.string().min(8, "password must be at least be 8 characters long"),
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
    bio: string;
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

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    });

    const data: LoginResponse = await response.json();
    if (!response.ok) {
      return data;
    }
    const { accessToken: token, ...rest } = data?.data;
    cookies().set({
      name: "token",
      value: token,
      httpOnly: true,
      sameSite: "none",
      secure: true,
      path: "/",
    });
    cookies().set({
      name: "user",
      value: JSON.stringify({
        name: rest?.name,
        email: rest?.email,
        venueManager: boolToYesNo(rest?.venueManager) === "yes"?true:false,
        avatar: rest?.avatar,
        banner: rest?.banner,
      }),
      sameSite: "none",
      secure: true,
      path: "/",
    });
    return rest;
  } catch (error) {
    console.log("this is the error", { error });
  }
}
