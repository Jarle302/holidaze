import { cookieObject } from "../constants/types";
export default function getUserFromCookie(){
    if (typeof window.document !== "undefined") {
        const info = document.cookie.split("; ").reduce((prev, current) => {
          const [name, value] = current.split("=");
          prev[decodeURIComponent(name)] = decodeURIComponent(value);
          return prev;
        }, {} as cookieObject);
        const { user: tempUser } = info;
        let user;
        if (tempUser) {
  return tempUser
        }
      }
      return
}