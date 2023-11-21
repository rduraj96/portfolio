import React from "react";
import ExplorerWindow from "../../Window/ExplorerWindow";
import SideCardItem from "../../Window/SideCardItem";
import SideCard from "../../Window/SideCard";
import ProjectItem from "./ProjectItem";
import Image from "next/image";

type Props = {};

const Projects = (props: Props) => {
  return (
    <ExplorerWindow>
      <div className="h-96 flex ml-[3px] mr-[3px]">
        <div className="h-full w-56 bg-gradient-to-b from-[#748aff] to-[#4057d3] overflow-auto px-3 py-4">
          <SideCard title="Project Panel" highlighted={true}>
            <SideCardItem icon="bgcontrol" title="Switch to Classic View" />
          </SideCard>
          <SideCard title="See Also">
            <SideCardItem icon="winearth" title="GitHub Page" />
            <SideCardItem icon="help" title="Resume" />
            <SideCardItem icon="bgcontrol" title="Other Projects" />
          </SideCard>
          {/* <SideCard title="File and Folder Tasks">
            <SideCardItem icon="newfolder" title="Make a new folder" />
            <SideCardItem icon="explorer" title="Publish to the Web" />
            <SideCardItem icon="sharefolder" title="Share the folder" />
          </SideCard>
          <SideCard title="Other Places">
            <SideCardItem icon="networkplaces" title="My Network Places" />
            <SideCardItem icon="documents" title="My Documents" />
            <SideCardItem icon="shared" title="Shared Documents" />
            <SideCardItem icon="controlpanel" title="Control Panel" />
          </SideCard> */}
          {/* <SideCard title="Details" /> */}
        </div>
        <div className="h-full w-full flex-grow-0 bg-[#6374d5]">
          <Image
            src={"/windowsIcons/bgcontrol.png"}
            alt="background control panel"
            height={325}
            width={325}
            className="opacity-5 absolute bottom-0 right-0"
          />
          <div className="ml-6 mt-7 text-[#d6dff7] text-opacity-95 text-3xl font-bold tracking-wider font-sans">
            Pick a project
          </div>
          <div className=" w-full mt-5 ml-5 grid grid-cols-2 gap-y-5">
            <ProjectItem
              icon="portfolio"
              title="WinXP Portfolio"
              link="https://github.com/rduraj96/portfolio"
            />
            <ProjectItem
              icon="mazefit"
              title="MazeFit"
              link="https://github.com/rduraj96/mazefit"
            />
            <ProjectItem
              icon="reiz"
              title="Reiz.live"
              link="https://github.com/rduraj96/reiz.live"
            />
            <ProjectItem
              icon="chat"
              title="ChatGPT Chat"
              link="https://github.com/rduraj96/chat-gpt-app"
            />
            <ProjectItem
              icon="performance"
              title="MazeFin"
              link="https://github.com/rduraj96/mazefin-dashboard"
            />
          </div>
        </div>
      </div>
    </ExplorerWindow>
  );
};

export default Projects;
