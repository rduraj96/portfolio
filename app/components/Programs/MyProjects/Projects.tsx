import React from "react";
import ExplorerWindow from "../../Window/ExplorerWindow";
import Image from "next/image";
import SideCardItem from "../../Window/SideCardItem";
import SideCard from "../../Window/SideCard";

type Props = {};

const Projects = (props: Props) => {
  return (
    <ExplorerWindow>
      <div className="h-96 flex ml-[3px] mr-[3px]">
        <div className="h-full w-56 bg-gradient-to-b from-[#748aff] to-[#4057d3] overflow-auto px-3 py-2">
          <SideCard title="File and Folder Tasks">
            <SideCardItem icon="newfolder" title="Make a new folder" />
            <SideCardItem icon="explorer" title="Publish to the Web" />
            <SideCardItem icon="sharefolder" title="Share the folder" />
          </SideCard>
          <SideCard title="Other Places">
            <SideCardItem icon="networkplaces" title="My Network Places" />
            <SideCardItem icon="documents" title="My Documents" />
            <SideCardItem icon="shared" title="Shared Documents" />
            <SideCardItem icon="controlpanel" title="Control Panel" />
          </SideCard>
          <SideCard title="Details" />
        </div>
        <div className="h-full w-full flex-grow-0 bg-[#f1f1f1]"></div>
      </div>
    </ExplorerWindow>
  );
};

export default Projects;
