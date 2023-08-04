import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

const SearchBar = ({ handler }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    handler("");
  };
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      handler(searchQuery);
    }
  };

  return (
    <div className="relative w-full bg-gray-100 rounded-full">
      <div className="flex items-center">
        <SearchIcon className="h-6 w-6 text-gray-700 mx-3" />
        <input
          type="text"
          className="w-full  py-3 text-gray-700 bg-gray-100 rounded-full focus:outline-none"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleSearch}
        />
        {searchQuery && (
          <button
            className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-gray-700"
            onClick={clearSearch}
          >
            <CancelIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
