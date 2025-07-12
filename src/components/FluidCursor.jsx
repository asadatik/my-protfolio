
import React from "react";
import ReactFluidAnimation from "@usertive/react-fluid-animation";

export default function FluidCursor() {
  return (
    <ReactFluidAnimation
      config={{
        textureDownsample: 1,
        densityDissipation: 0.98,
        velocityDissipation: 0.99,
        pressureDissipation: 0.8,
        pressureIterations: 25,
        curl: 30,
        splatRadius: 0.25,
        splatForce: 6000,
        colorUpdateSpeed: 15,
        shading: true,
        backColor: { r: 0, g: 0, b: 0 },
        transparent: true,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
