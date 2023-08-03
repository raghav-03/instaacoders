import React from "react";
import "./Left.css";
import Dropdown from "./Dropdown";
const Left = () => {
  return (
    <div className="mt-3">
      <div>
        <p className="font-bold text-xl">Filter</p>
      </div>
      <div className="w-full h-px bg-gray-100 mt-3"></div>
      {/* Categories */}
      <div>
        <p className=" text-xl mt-3">Categories</p>
        <div className="space-y-4 pt-5">
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5" />
            <span className="text-gray-800">Gardening</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 " />
            <span className="text-gray-800">Plants</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 " />
            <span className="text-gray-800">Seeds</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5" />
            <span className="text-gray-800">Bulbs</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5" />
            <span className="text-gray-800">Planters</span>
          </label>
          <Dropdown />
        </div>
      </div>
      <div className="w-full h-px bg-gray-100 mt-3"></div>
      {/* Price Range */}
      <div>
        <p className="text-xl mt-3">Price Range</p>
        <div className="flex pt-5 grid-cols-2 gap-4">
          <input
            type="number"
            className=" bg-gray-50 p-2 border border-gray-300 rounded-lg w-1/2"
            placeholder="Min"
          />
          <input
            type="number"
            className="bg-gray-50 p-2  border border-gray-300 rounded-lg w-1/2"
            placeholder="Max"
          />
        </div>
        <button className="bg-green-500 text-white mt-4 px-4 py-2 focus:outline-none rounded-lg w-full">
          Set Price
        </button>
      </div>
      <div className="w-full h-px bg-gray-100 mt-3"></div>
      {/* Rating */}
      <div>
        <p className=" text-xl mt-3">Rating</p>
        <div className="space-y-4 pt-5">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="fourStars"
              className="form-checkbox h-5 w-5"
            />
            <label for="fourStars" className="flex items-center cursor-pointer">
              <span className="stars-icon text-2xl text-yellow-400">
                ★ ★ ★ ★
              </span>
              <span className="stars-icon text-2xl text-gray-400 ml-1">★</span>
              <span className="text-gray-600 ml-1">and above</span>
            </label>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="threeStars"
              className="form-checkbox h-5 w-5"
            />
            <label
              for="threeStars"
              className="flex items-center cursor-pointer"
            >
              <span className="stars-icon text-2xl text-yellow-400">
                ★ ★ ★{" "}
              </span>
              <span className="stars-icon text-2xl text-gray-400 ml-1">
                ★ ★
              </span>

              <span className="text-gray-600 ml-1">and above</span>
            </label>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="twoStars"
              className="form-checkbox h-5 w-5"
            />
            <label for="twoStars" className="flex items-center cursor-pointer">
              <span className="stars-icon text-2xl text-yellow-400">★ ★ </span>
              <span className="stars-icon text-2xl text-gray-400 ml-1">
                ★ ★ ★
              </span>
              <span className="text-gray-600 ml-1">and above</span>
            </label>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="oneStars"
              className="form-checkbox h-5 w-5"
            />
            <label for="oneStars" className="flex items-center cursor-pointer">
              <span className="stars-icon text-2xl text-yellow-400">★ </span>
              <span className="stars-icon text-2xl text-gray-400 ml-1">
                ★ ★ ★ ★
              </span>

              <span className="text-gray-600 ml-1">and above</span>
            </label>
          </label>
        </div>
      </div>
      <div className="w-full h-px bg-gray-200 mt-2.5"></div>
    </div>
  );
};

export default Left;
