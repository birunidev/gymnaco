import React from "react";

export default function Button({ color, children, className }) {
  return (
    <button
      className={[
        `bg-primary py-3 px-8 font-semibold text-white rounded-md md:text-[20px]`,
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
