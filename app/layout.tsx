import type { Metadata } from "next";
import "./globals.css";
import { kadwa } from "./fonts";
import { UserInfoProvider } from "./ui/components/UseInfoProvider";
import { Header } from "./ui/components/Header";
export const metadata: Metadata = {
  title: "Holidaze | Homepage",
  description:
    "Discover and book your next holiday with Holidaze. Explore our wide range of holiday homes, hotels, and experiences, tailored to make your vacation unforgettable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kadwa.className} bg--gradient`}>
        <UserInfoProvider>
          <Header />
          <div className="flex justify-center max-w-[1300px] m-auto px-5 sm:px-10">
            {children}
          </div>
        </UserInfoProvider>
      </body>
    </html>
  );
}
