import React, { useEffect, useState } from "react";
import Image from "next/image";

type Props = {};

const StartupScreen = (props: Props) => {
  return (
    <div className="h-screen w-full">
      <Image
        src={"/startup.gif"}
        title={"startup"}
        alt={"Windows Startup"}
        height={0}
        width={0}
        unoptimized={true}
        className="h-full w-full"
      />
    </div>
  );
};

export default StartupScreen;
