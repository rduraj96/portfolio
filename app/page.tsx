import TaskBar from "./components/Footer/TaskBar";
import Icons from "./components/Icons/Icons";
import Paint from "./components/Programs/Paint/Paint";
import Messenger from "./components/Programs/Messenger/Messenger";
import Projects from "./components/Programs/MyProjects/Projects";
import InternetExplorer from "./components/Programs/InternetExplorer/InternetExplorer";
import dynamic from "next/dynamic";
import Monitor from "./components/Monitor";
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
