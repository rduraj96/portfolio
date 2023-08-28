import Image from "next/image";
import Counter from "./components/Counter";
import TaskBar from "./components/Footer/TaskBar";
import Icons from "./components/Icons/Icons";
import Winamp from "./components/Programs/Winamp/Winamp";
import Paint from "./components/Programs/Paint/Paint";

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
      <Winamp />
      <Paint />
      <Counter />
      <TaskBar />
    </main>
  );
}
