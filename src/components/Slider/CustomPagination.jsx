import React from "react";

export default function CustomPagination({ total, current }) {
  return (
    <div className="flex items-center justify-center gap-3 translate-y-[-40px]">
      <button className="rotate-0">
        <img src="/assets/icons/arrow.svg" alt="" />
      </button>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          className={`btn-paginate ${current === index ? "active" : ""}`}
        ></button>
      ))}
      <button className="rotate-180">
        <img src="/assets/icons/arrow.svg" alt="" />
      </button>
    </div>
  );
}
