"use client";

import { useGlobalContext } from "@/app/context/store";
import React, { useEffect, useRef, useState } from "react";
import Webamp from "webamp";

type Props = {};

const Winamp = (props: Props) => {
  const ref = useRef(null);
  const webamp = useRef<Webamp | null>(null);
  const { winamp, setWinamp } = useGlobalContext();

  useEffect(() => {
    const target = ref.current;
    if (!target) {
      return;
    }
    webamp.current = new Webamp({});
    webamp.current.renderWhenReady(target);
    return () => {
      if (webamp.current) {
        webamp.current.dispose();
        webamp.current = null;
      }
    };
  }, [ref, winamp]);

  useEffect(() => {
    if (webamp.current) {
      webamp.current.onClose(() => {
        setWinamp((prevState) => ({
          ...prevState,
          isOpen: false,
        }));
      });
      webamp.current.onMinimize(() => {
        setWinamp((prevState) => ({
          ...prevState,
          isMinimized: true,
        }));
      });
    }
  });

  if (!Webamp.browserIsSupported()) {
    return <div>Not supported</div>;
  }

  return (
    winamp.isOpen === true && (
      <div
        // style={{ position: "fixed", left: 0, top: 0, right: 0, bottom: 0 }}
        ref={ref}
      />
    )
  );
};

export default Winamp;
