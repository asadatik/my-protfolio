// src/components/lightswind/smokey-cursor.jsx
"use client";
import  { useEffect, useRef } from "react";
import PropTypes from "prop-types"; // Add PropTypes import

// fluid sim logic using WebGL shaders
function initFluid(canvas) {
  const gl = canvas.getContext("webgl2");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  gl.viewport(0, 0, canvas.width, canvas.height);
}

function SmokeyCursor({
  SIM_RESOLUTION,
  DYE_RESOLUTION,
  DENSITY_DISSIPATION,
  VELOCITY_DISSIPATION,
  PRESSURE,
  PRESSURE_ITERATIONS,
  CURL,
  SPLAT_RADIUS,
  SPLAT_FORCE,
  SHADING,
  COLOR_UPDATE_SPEED,
  BACK_COLOR,
  TRANSPARENT,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const params = {
      SIM_RESOLUTION,
      DYE_RESOLUTION,
      DENSITY_DISSIPATION,
      VELOCITY_DISSIPATION,
      PRESSURE,
      PRESSURE_ITERATIONS,
      CURL,
      SPLAT_RADIUS,
      SPLAT_FORCE,
      SHADING,
      COLOR_UPDATE_SPEED,
      BACK_COLOR,
      TRANSPARENT,
    };
    initFluid(canvas, params);

    return () => {
      const gl = canvas.getContext("webgl2");
      if (gl) gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    SIM_RESOLUTION,
    DYE_RESOLUTION,
    DENSITY_DISSIPATION,
    VELOCITY_DISSIPATION,
    PRESSURE,
    PRESSURE_ITERATIONS,
    CURL,
    SPLAT_RADIUS,
    SPLAT_FORCE,
    SHADING,
    COLOR_UPDATE_SPEED,
    BACK_COLOR.r,
    BACK_COLOR.g,
    BACK_COLOR.b,
    TRANSPARENT,
  ]);

  return (
    <canvas
      ref={canvasRef}
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

// Add prop types validation
SmokeyCursor.propTypes = {
  SIM_RESOLUTION: PropTypes.number.isRequired,
  DYE_RESOLUTION: PropTypes.number.isRequired,
  DENSITY_DISSIPATION: PropTypes.number.isRequired,
  VELOCITY_DISSIPATION: PropTypes.number.isRequired,
  PRESSURE: PropTypes.number.isRequired,
  PRESSURE_ITERATIONS: PropTypes.number.isRequired,
  CURL: PropTypes.number.isRequired,
  SPLAT_RADIUS: PropTypes.number.isRequired,
  SPLAT_FORCE: PropTypes.number.isRequired,
  SHADING: PropTypes.bool.isRequired,
  COLOR_UPDATE_SPEED: PropTypes.number.isRequired,
  BACK_COLOR: PropTypes.shape({
    r: PropTypes.number.isRequired,
    g: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
  TRANSPARENT: PropTypes.bool.isRequired,
};

export default SmokeyCursor;
