import React from "react";
import Spline from "@splinetool/react-spline";

const SplineBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Spline
        className="w-full h-full"
        scene="https://prod.spline.design/oAMD58t7MgXn0z8A/scene.splinecode"
      />
    </div>
  );
};

export default SplineBackground;
