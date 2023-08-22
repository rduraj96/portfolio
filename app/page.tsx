import Image from "next/image";
import Counter from "./components/Counter";
import TaskBar from "./components/TaskBar";
import Icons from "./components/Icons";

export default function Home() {
  return (
    <main className="relative h-[100vh] overflow-hidden">
      <Image
        src={"/background.jpg"}
        alt="background-image"
        quality={100}
        layout="fill"
        className="-z-10"
      />
      <div className="mt-10 ml-10 w-fit">
        <Icons />
      </div>
      <Counter />
      <TaskBar />
    </main>
  );
}
