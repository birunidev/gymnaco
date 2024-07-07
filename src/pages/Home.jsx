import BaseLayout from "../layouts/BaseLayout";

import Header from "../components/Header";
import ComingSoon from "../components/UI/ComingSoon";
import Slider from "../components/Slider";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <BaseLayout>
      <div className="space-y-6 custom-container">
        <Header />
        <ComingSoon />
        <Slider />
        <CallToAction />
      </div>
    </BaseLayout>
  );
}
