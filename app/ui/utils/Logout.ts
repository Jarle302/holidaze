"use server";
import { cookies } from "next/headers";
export default async function LogOut() {
  try {
    const cookieStore = cookies();
     cookieStore.delete("user");
     cookieStore.delete("token");
    cookies().delete("user");
    cookies().delete("token");

} catch (error) {
    console.log(error);
  }
}
