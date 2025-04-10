import React from "react";
import myvideo from "../../assets/island.mp4";

const VideoBg = () => {
  return (
    <video src={myvideo} autoPlay muted className="hero-video" loop>
      {" "}
    </video>
  );
};

export default VideoBg;
