import React from "react";

export default function Input({ placeholder }) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="placeholder:text-[#8A8C99] text-gray-600 py-[14px] px-[16px] bg-white w-full"
      />
    </div>
  );
}
