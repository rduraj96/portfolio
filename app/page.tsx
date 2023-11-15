"use client";

import dynamic from "next/dynamic";
import WindowsXp from "./components/WindowsXp";

const Winamp = dynamic(() => import("./components/Programs/Winamp/Winamp"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-screen w-full">
      {/* <Monitor> */}
      <WindowsXp />
      {/* </Monitor> */}
    </main>
  );
}
