"use client";

import React from "react";
import { useGlobalContext } from "@/app/context/store";
import ProgramWindow from "../../Window/ProgramWindow";

type Props = {};

const Paint = (props: Props) => {
  const { paint, setPaint } = useGlobalContext();

  return (
    <ProgramWindow program={paint} setProgram={setPaint} className="w-fit">
      <div
        className="window-body w-[600px] h-[500px]"
        style={{
          margin: "0px 3px 3px 3px",
        }}
      >
        <iframe
          src="https://jspaint.app"
          title="paint"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </div>
    </ProgramWindow>
  );
};

export default Paint;
