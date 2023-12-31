import React from "react";
import Left from "./Left.js";
import Content from "./Content.js";
const Body = () => {
  return (
    <div className="flex">
      <div className="flex w-1/5 ml-12 mr-5">
        <Left />
      </div>
      <div className="w-px bg-gray-100"></div>
      <div className="flex w-4/5">
        <Content />
      </div>
    </div>
  );
};

export default Body;
