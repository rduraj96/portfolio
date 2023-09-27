import TaskBar from "./components/Footer/TaskBar";
import Icons from "./components/Icons/Icons";
import Paint from "./components/Programs/Paint/Paint";
import Messenger from "./components/Programs/Messenger/Messenger";
import Projects from "./components/Programs/MyProjects/Projects";
import InternetExplorer from "./components/Programs/InternetExplorer/InternetExplorer";
import dynamic from "next/dynamic";

const Winamp = dynamic(() => import("./components/Programs/Winamp/Winamp"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative h-[100vh] overflow-hidden bg-[url('/wallpapers/background.jpg')] bg-no-repeat bg-cover">
      <div className="mt-10 ml-10 w-fit">
        <Icons />
      </div>
      <Winamp />
      <Projects />
      <InternetExplorer />
      <Paint />
      <Messenger />
      <TaskBar />
    </main>
  );
}
