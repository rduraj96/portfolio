import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  icon: string;
  title: string;
  link: string;
};

const ProjectItem = (props: Props) => {
  return (
    <Link
      target="_blank"
      href={props.link}
      rel="noopener noreferrer"
      className="text-white"
    >
      <div
        className="flex w-56 items-center text-center group cursor-pointer"
        tabIndex={-1}
      >
        <Image
          src={`/windowsIcons/${props.icon}.png`}
          alt={`${props.title} project Icon`}
          height={58}
          width={58}
          className="group-hover:scale-110"
        />

        <span className="mx-2 px-0.5 text-sm font-bold font-sans group-hover:scale-110 whitespace-normal">
          {props.title}
        </span>
      </div>
    </Link>
  );
};

export default ProjectItem;
