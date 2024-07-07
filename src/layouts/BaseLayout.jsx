import React from "react";
import * as background from "../assets/animation/background.json";
import Lottie from "react-lottie-player";

export default function BaseLayout({ children }) {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <Lottie
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          loop
          style={{ width: "100%", height: "100%" }}
          animationData={background}
          play
        />
      </div>
      <div className="pb-12">{children}</div>
    </div>
  );
}
