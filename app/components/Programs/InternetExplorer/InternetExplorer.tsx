import React from "react";
import InternetExplorerWindow from "../../Window/InternetExplorerWindow";

type Props = {};

const InternetExplorer = (props: Props) => {
  return (
    <InternetExplorerWindow>
      <div className="h-[450px] w-[99%] m-[3px] overflow-auto">
        <iframe
          src="https://web.archive.org/web/20061031013901/http://www.google.com/"
          title="google wayback"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </div>
    </InternetExplorerWindow>
  );
};

export default InternetExplorer;
