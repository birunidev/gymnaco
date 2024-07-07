import React from "react";
import Input from "./Input";
import CountrySelect from "./CountrySelect";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <div className="space-y-8">
      <Input placeholder="Name" />
      <Input placeholder="Business Name" />
      <Input placeholder="Email Address" />
      <div className="flex gap-4 w-full">
        <CountrySelect />
        <Input placeholder="Mobile Number" />
      </div>
      <Button>Let’s Connect</Button>
      <Link className="flex gap-2 text-white" to="/">
        <img src="/assets/icons/arrow.svg" alt="" />
        Back to Landing Page
      </Link>
    </div>
  );
}
