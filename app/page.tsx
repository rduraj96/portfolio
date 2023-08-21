import Image from "next/image";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Counter />
      <Footer />
    </main>
  );
}
