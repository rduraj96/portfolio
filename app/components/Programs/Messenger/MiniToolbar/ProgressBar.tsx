import React from "react";

type Props = {
  progress: number;
};

const ProgressBar = ({ progress }: Props) => {
  let elapsed = (progress / 15) * 100;

  return (
    <div className="relative w-full translate-z-0 bg-white h-4 border-[1px] border-[#515c73] overflow-hidden">
      <div
        className="w-full h-full"
        style={{
          background: progress >= 15 ? "red" : "#3fcb46",
          transition: "transform 660ms cubic-bezier(0.65, 0, 0.35, 1)",
          transform: `translateX(-${100 - elapsed}%)`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
