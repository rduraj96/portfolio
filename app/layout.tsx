import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { GlobalContextProvider } from "./context/store";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rei Duraj's Portfolio",
  description: "Personal portfolio of Rei Duraj",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
