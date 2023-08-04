import React, { useState } from "react";
import SearchBar from "./SearchBar.js";
import Sort from "./Sort.js";
import Card from "./Card.js";
import DetailedCard from "./DetailedCard.js";
import Data from "../Assets/Data/Data.json";
const Content = () => {
  const [search, setsearch] = useState("");
  const [isSelected, setisSelected] = useState(false);
  const [selectedproduct, setselectedproduct] = useState("");

  return (
    <div className="flex">
      <div className={`p-5 ${isSelected ? "w-[65%]" : "w-5/5"}`}>
        <SearchBar handler={setsearch} />
        {search && (
          <div className=" mt-5 text-gray-400 flex">
            Search results for{" "}
            <div className="text-black ml-2"> "{search}"</div>
          </div>
        )}
        <Sort />

        <div className="flex flex-wrap">
          {Data.map((item) => {
            return (
              <Card
                key={item.key}
                id={item.key}
                name={item.name}
                src={item.src}
                review={item.review}
                price={item.price}
                rating={item.rating}
                wishlisted={item.wishlisted}
                isSelected={isSelected}
                clickhandler={setisSelected}
                setproduct={setselectedproduct}
              />
            );
          })}
        </div>
      </div>
      {isSelected ? (
        <div className="w-[35%] pr-4 mt-5">
          <DetailedCard clickhandler={setisSelected} id={selectedproduct} />{" "}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Content;
