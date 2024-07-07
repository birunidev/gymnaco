import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import Partners from "../components/Partners";
import Form from "../components/Form";

export default function GetDemo() {
  return (
    <BaseLayout>
      <div className="custom-container flex items-center justify-center pt-12 lg:pt-0 lg:h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[500px_700px] gap-12 xl:gap-24">
          <div className="text-white space-y-12 lg:space-y-24">
            <div className="space-y-4">
              <h2 className="text-montserrat font-bold text-3xl lg:text-[40px] lg:leading-tight">
                Step into a New Era with Our Exclusive Pre-Launch Offer
              </h2>
              <p className="md:text-[20px]">
                Thank you for signing up! Elevate your business efficiency and
                be prepared to lead the change in the fitness and wellness
                industry.
              </p>
            </div>

            <Partners />
          </div>
          <div className="p-4 md:p-[40px] bg-white bg-opacity-[0.12] rounded-[12px] md:rounded-[40px] space-y-12">
            <h3 className=" text-xl lg:text-[32px] font-bold text-white md:leading-tight">
              How can we reach out to you?
            </h3>
            <Form />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
