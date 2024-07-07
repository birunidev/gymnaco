import React from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="text-white space-y-6 text-center pt-12">
      <div className="space-y-3">
        <h2 className="text-montserrat font-bold text-xl md:text-2xl xl:text-[40px] ">
          Game-Changer in Fitness Management Software
        </h2>
        <p className="xl:text-[20px]">
          Don't Miss Out! Fill in your details below to secure our
          groundbreaking management software at today's <br /> best price,
          before rates rise post-launch.
        </p>
      </div>
      <div className="relative w-full py-6 max-w-[980px] mx-auto">
        <Link to="/get-demo">
          <Button>Get Demo</Button>
        </Link>
        <div className="absolute items-start top-0 right-0 hidden 2xl:flex">
          <img className="w-[212px]" src="/assets/arrow.png" alt="" />
          <p className="translate-x-2 text-warning text-archi text-[18px]">
            Get ahead, save more!
          </p>
        </div>
      </div>
    </div>
  );
}
