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
  runningTasks: Program[],
  setRunningTasks: Dispatch<SetStateAction<Program[]>>
) {
  console.log("Minimized Pressed");
  setRunningTasks(
    runningTasks.map((task, i) => {
      if (task.id === program.id) {
        return { ...task, isMinimized: !program.isMinimized };
      }
      return task;
    })
  );
}

export function checkVisibility(
  program: Program,
  runningTasks: Program[]
): boolean {
  return (
    runningTasks.find((task) => task.id === program.id)!.isMinimized || true
  );
}
