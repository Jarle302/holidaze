"use client";
import LogOut from "@/app/ui/utils/Logout";
import { useContext } from "react";
import { userInfoContext } from "../../UseInfoProvider";
import { useRouter } from "next/navigation";

export const LogOutButton = () => {
  const router = useRouter();
  const user = useContext(userInfoContext);
  if (user === undefined) {
    return;
  }
  const { setUserInfo } = user;
  return (
    <button
      onClick={() => {
        LogOut(),
          setUserInfo(() => ({
            name: "",
            email: "",
            avatar: { url: "", alt: "" },
            banner: { url: "", alt: "" },
            venueManager: false,
            bio: "",
          }));
        router.push("/auth/login");
      }}>
      Log out
    </button>
  );
};
