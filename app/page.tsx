import Image from "next/image";
import Counter from "./components/Programs/Messenger/Counter";
import TaskBar from "./components/Footer/TaskBar";
import Icons from "./components/Icons/Icons";
import Winamp from "./components/Programs/Winamp/Winamp";
import Paint from "./components/Programs/Paint/Paint";
import Messenger from "./components/Programs/Messenger/Messenger";
import MessengerWindow from "./components/Programs/Messenger/MessengerWindow";
import Projects from "./components/Programs/MyProjects/Projects";
import InternetExplorer from "./components/Programs/InternetExplorer/InternetExplorer";

export default function Home() {
  return (
    <main className="relative h-[100vh] overflow-hidden bg-[url('/wallpapers/background.jpg')] bg-no-repeat bg-cover">
      <div className="mt-10 ml-10 w-fit">
        <Icons />
      </div>
      <Projects />
      <InternetExplorer />
      {/* <MessengerWindow /> */}
      <Winamp />
      <Paint />
      <Messenger />
      <TaskBar />
    </main>
  );
}
