"use client";

import React, { ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Html,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
import Messenger from "./Programs/Messenger/Messenger";

type Props = {
  children?: ReactNode;
};

const Monitor = (props: Props) => {
  const monitor = useGLTF("./models/laptop.gltf");

  return (
    <Canvas
      camera={{
        fov: 55,
        position: [0, 1.5, 4],
      }}
    >
      <>
        <Environment preset="warehouse" />
        {/* <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.4, 0.2]}> */}
        <primitive object={monitor.scene} position-y={-1.2}>
          <Html
            position={[0, 1.5, -1.5]}
            transform
            distanceFactor={1.16}
            rotation-x={-0.25}
            className="w-[1024px] h-[678px] p-0"
          >
            {props.children}
          </Html>
        </primitive>
        {/* </PresentationControls> */}
      </>
    </Canvas>
  );
};

export default Monitor;
