import React from "react";
import "./Button.css";

const Button = ({ answer }) => {
  return (
    <>
      <button
        className={` cursor-pointer first:before:bg-primary last:before:bg-secondary relative mt-4 w-full flex justify-center items-center gap-2 p-4 pl-8 pr-8 bg-transparent border-0 rounded-full origin-center  button`}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden z-[-10] rounded-full bg-transparent dots_border"></div>

        <span className="text-white text-2xl z-10 relative ">{answer}</span>
      </button>
    </>
  );
};

export default Button;
