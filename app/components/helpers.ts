import { Dispatch, SetStateAction } from "react";

export function openProgram(
  program: Program,
  setProgram: Dispatch<SetStateAction<Program>>
) {
  setProgram((prevState) => ({
    ...prevState,
    isOpen: true,
  }));
}

export function closeProgram(
  program: Program,
  setProgram: Dispatch<SetStateAction<Program>>
) {
  setProgram((prevState) => ({
    ...prevState,
    isOpen: false,
  }));
}

export function minimizeProgram(
  program: Program,
  setProgram: Dispatch<SetStateAction<Program>>
) {
  if (program.isMinimized === true) {
    setProgram((prevState) => ({
      ...prevState,
      zIndex: getMaxZIndex() + 1,
    }));
  }
  setProgram((prevState) => ({
    ...prevState,
    isMinimized: !prevState.isMinimized,
  }));
}

export function focusProgram(setProgram: Dispatch<SetStateAction<Program>>) {
  setProgram((prevState) => ({
    ...prevState,
    zIndex: getMaxZIndex() + 1,
  }));
}

export function getMaxZIndex(): number {
  return Math.max(
    ...Array.from(document.querySelectorAll("body *"), (el) =>
      parseFloat(window.getComputedStyle(el).zIndex)
    ).filter((zIndex) => !Number.isNaN(zIndex)),
    0
  );
}
