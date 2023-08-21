import Image from "next/image";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative h-[100vh] overflow-hidden">
      <Image
        src={"/background.jpg"}
        alt="background-image"
        quality={100}
        layout="fill"
      />
      <Counter />
      <Footer />
    </main>
  );
}
