"use client";
import {
  useState,
  createContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";
import { UserInfo } from "@/app/ui/constants/types";

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
  return (
    <userInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </userInfoContext.Provider>
  );
};
