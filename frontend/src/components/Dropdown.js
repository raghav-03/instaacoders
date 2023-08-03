import React, { useState } from "react";
import CustomCheckbox from "./CustomCheckbox";
import { Icon } from "@chakra-ui/react";

const Dropdown = () => {
  const [showCheckboxes, setShowCheckboxes] = useState(false);

  const handleArrowClick = () => {
    setShowCheckboxes(!showCheckboxes);
  };

  return (
    <div>
      <div className="flex cursor-pointer ml-7" onClick={handleArrowClick}>
        <p>Others</p>
        <div className="items-center justify-center ">
          <Icon
            viewBox="0 0 24 24"
            fill="none"
            className={`h-8 w-5 ml-2 ${showCheckboxes ? "rotate-180" : ""} `}
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Icon>
        </div>
      </div>
      {showCheckboxes && (
        <div className="mt-2 space-y-2">
          <CustomCheckbox name="Gardening" />
          <CustomCheckbox name="Seeds" />
          <CustomCheckbox name="Plants" />
        </div>
      )}
    </div>
  );
};

export default Dropdown;
