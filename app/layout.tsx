import type { Metadata } from "next";
import "./globals.css";
import { kadwa } from "./fonts";
import { Header } from "./ui/components/Header";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kadwa.className} bg--gradient`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
