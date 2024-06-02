"use client";
import {
  useState,
  createContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  useEffect,
} from "react";
import { UserInfo } from "@/app/ui/constants/types";
import Cookies from "js-cookie";
export const userInfoContext = createContext<
  | {
      userInfo: UserInfo;
      setUserInfo: Dispatch<SetStateAction<UserInfo>>;
    }
  | undefined
>(undefined);
export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    email: "",
    avatar: { url: "", alt: "" },
    banner: { url: "", alt: "" },
    venueManager: false,
    bio: "",
  });
  useEffect(() => {
    if (document !== undefined) {
      const userCookie = Cookies.get("user"); // => 'value'
      console.log(userCookie);
      if (typeof userCookie === "string") setUserInfo(JSON.parse(userCookie));
    }
  }, []);
  return (
    <userInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </userInfoContext.Provider>
  );
};
