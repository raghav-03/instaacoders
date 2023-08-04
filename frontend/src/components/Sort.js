import React, { useState } from "react";

const Sort = () => {
  const [selectedSort, setSelectedSort] = useState("");
  const [sortOrder, setSortOrder] = useState("Low to High");
  const [showOrderOptions, setShowOrderOptions] = useState(false);

  const handleSortSelection = (selected) => {
    setSelectedSort(selected);
  };

  const handleOrderSelection = (selected) => {
    setSortOrder(selected);
    setShowOrderOptions(false);
  };

  const sortOptions = ["Relevance", "Popular", "Most New"];

  return (
    <div className="mt-5">
      <div className="flex items-center mb-4">
        <span className="text-gray-500 text-sm font-medium">Sort</span>
        {sortOptions.map((option) => (
          <button
            key={option}
            className={`px-3 ml-2 py-1 text-gray-600 font-medium rounded-full border border-gray-300 focus:outline-none ${
              selectedSort === option ? "bg-customGreen text-white" : "bg-white"
            }`}
            onClick={() => handleSortSelection(option)}
          >
            {option}
          </button>
        ))}
        <div className="relative">
          <button
            className={`flex ml-2 items-center px-3 py-1 text-gray-600 font-medium rounded-full border border-gray-300 focus:outline-none ${
              showOrderOptions ? "bg-customGreen text-white" : "bg-white"
            }`}
            onClick={() => setShowOrderOptions(!showOrderOptions)}
          >
            Price
            <svg
              className={`w-4 h-4 ml-2 ${
                showOrderOptions ? "transform rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9.293 3.293a1 1 0 011.414 0l4 4a1 1 0 11-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L6.707 8.707a1 1 0 11-1.414-1.414l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showOrderOptions && (
            <ul className="absolute z-10 mt-2 w-24 py-2 bg-white border border-gray-200 rounded shadow-lg">
              <li
                className={`cursor-pointer px-4 py-2 hover:bg-gray-100 ${
                  sortOrder === "Low to High" ? "font-bold" : ""
                }`}
                onClick={() => handleOrderSelection("Low to High")}
              >
                Low to High
              </li>
              <li
                className={`cursor-pointer px-4 py-2 hover:bg-gray-100 ${
                  sortOrder === "High to Low" ? "font-bold" : ""
                }`}
                onClick={() => handleOrderSelection("High to Low")}
              >
                High to Low
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sort;
