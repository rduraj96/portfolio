"use client";

import { Dispatch, SetStateAction } from "react";
import { emoticons } from "./data/emoticons";

export function openProgram(
  program: Program,
  setProgram: Dispatch<SetStateAction<Program>>,
  setFocused: Dispatch<SetStateAction<string>>
) {
  setProgram((prevState) => ({
    ...prevState,
    isOpen: true,
    zIndex: getMaxZIndex() + 1,
  }));
  setFocused(program.id);
}

export function closeProgram(
  program: Program,
  setProgram: Dispatch<SetStateAction<Program>>,
  setFocused: Dispatch<SetStateAction<string>>
) {
  setProgram((prevState) => ({
    ...prevState,
    isOpen: false,
  }));
  setFocused("");
}

export function minimizeProgram(
  program: Program,
  setProgram: Dispatch<SetStateAction<Program>>,
  setFocused: Dispatch<SetStateAction<string>>
) {
  setProgram((prevState) => ({
    ...prevState,
    isMinimized: !prevState.isMinimized,
    zIndex: -1,
  }));
  setFocused("");
}

export function focusProgram(
  program: Program,
  setProgram: Dispatch<SetStateAction<Program>>,
  setFocused: Dispatch<SetStateAction<string>>
) {
  setProgram((prevState) => ({
    ...prevState,
    isFocused: true,
    zIndex: getMaxZIndex() + 1,
  }));
  setFocused(program.id);
}

export function getMaxZIndex(): number {
  return Math.max(
    ...Array.from(document.querySelectorAll("body *"), (el) =>
      parseFloat(window.getComputedStyle(el).zIndex)
    ).filter((zIndex) => !Number.isNaN(zIndex)),
    0
  );
}

export function getPattern(): RegExp {
  const escape = (s: string) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  const pattern = new RegExp(Object.keys(emoticons).map(escape).join("|"), "g");
  console.log(pattern);
  return pattern;
}
