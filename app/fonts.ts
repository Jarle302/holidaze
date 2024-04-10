import { Kadwa, Courier_Prime } from "next/font/google";
import "./globals.css";

export const kadwa = Kadwa({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kadwa",
});
export const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-Courier",
});
