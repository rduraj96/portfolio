import { useCallback, useEffect, useState } from "react";

const interval =
  (delay = 0) =>
  (callback: () => void) =>
    useEffect(() => {
      const id = setInterval(callback, delay);

      return () => clearInterval(id);
    }, [callback]);

const useSecondsInterval = interval(500);

export const useTimer = ({
  initialSeconds = 0,
  initiallyRunning = false,
} = {}) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(initiallyRunning);
  const tick = useCallback(
    () => (running ? setSeconds((seconds) => seconds + 0.5) : undefined),
    [running]
  );
  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => setSeconds(0);
  const stop = () => {
    pause();
    reset();
  };

  useSecondsInterval(tick);

  return { pause, reset, running, seconds, start, stop };
};
