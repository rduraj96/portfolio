import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  image: string;
};

const Avatar = ({ image }: Props) => {
  const [avatar, setAvatar] = useState<string>("");

  useEffect(() => {
    setAvatar(image);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const randomAvatar = () => {
    let avatars = [
      "beach",
      "chess",
      "dog",
      "duck",
      "flower",
      "horses",
      "moto",
      "msn",
      "palm",
      "rocket",
      "skate",
      "soccer",
    ];
    const otherAvatars = avatars.filter((avi) => avi !== avatar);
    let rand = Math.floor(Math.random() * 11);
    setAvatar(otherAvatars[rand]);
  };

  return (
    <div className="relative h-28 w-28 flex flex-col items-center justify-center border-[1px] border-[#586170] rounded-lg">
      <div className="relative h-24 w-24 border-[1px] border-[#586170] rounded-lg -translate-y-2">
        <Image
          src={`/msn/avatars/${avatar}.png`}
          alt={`${avatar}-avatar-picture`}
          height={0}
          width={0}
          sizes="100vh"
          className="w-full h-auto rounded-lg"
        />
        {/* <div className="flex justify-between items-center mt-1">
          <Image
            src={"/msn/webcam.png"}
            alt="webcam button"
            height={22}
            width={22}s
          /> */}
        <div
          className="absolute -bottom-4 right-0 transform scale-y-50 hover:cursor-pointer"
          onClick={randomAvatar}
        >
          ⯆
        </div>
        {/* </div> */}
      </div>
      <div className="absolute h-9 w-3 top-1 -right-[14px]">
        <Image
          src="/msn/expand-left.png"
          alt="expand-left-button"
          height={0}
          width={0}
          sizes="100vh"
          className="h-full w-auto"
        />
      </div>
    </div>
  );
};

export default Avatar;
