import Lottie from "react-lottie-player";
import * as comingSoon from "../../assets/animation/coming-soon.json";

export default function ComingSoon() {
  return (
    <div className="max-w-[300px] md:max-w-lg xl:max-w-2xl 2xl:max-w-3xl mx-auto">
      <Lottie
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        loop
        className="w-full h-full mx-auto"
        animationData={comingSoon}
        play
      />
    </div>
  );
}
