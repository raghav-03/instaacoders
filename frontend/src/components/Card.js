import React, { useEffect, useState } from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Rating } from "@material-ui/lab";
const Card = (props) => {
  const [inwishlist, setinwishlist] = useState(false);
  return (
    <div
      className={` ${
        props.isSelected ? "w-[47%]" : "w-[30%]"
      }  m-1 rounded-lg overflow-hidden shadow-lg bg-white relative`}
      onClick={() => {
        props.clickhandler(!props.isSelected);
        props.setproduct(props.id - 1);
      }}
    >
      <div
        className="absolute top-0 right-0 mt-2 mr-2"
        onClick={(e) => {
          e.stopPropagation();
          setinwishlist(!inwishlist);
        }}
      >
        {inwishlist ? (
          <FavoriteOutlinedIcon className="text-red-500" />
        ) : (
          <FavoriteBorderOutlinedIcon />
        )}
      </div>
      <img
        src={props.src}
        alt="Product"
        className="w-full h-48 object-contain"
      />
      <div className="px-4 py-2">
        <h3 className="text-black font-bold text-lg mb-2">{props.name}</h3>
        <div className="flex items-center mb-2">
          <Rating
            value={parseFloat(props.rating)}
            size="large"
            readOnly={true}
            precision={0.5}
          />
          <span className="ml-2">({props.review})</span>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-gray-500 text-xs">Price</p>
            <p className="text-gray-700 text-sm font-bold">${props.price}</p>
          </div>
          <div className="px-4 py-2 flex items-center justify-between">
            <button className=" border border-gray-300 font-bold text-sm py-1 px-3 rounded-lg focus:outline-none">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
