import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Rating } from "@material-ui/lab";
import Data from "../Assets/Data/Data.json";

const DetailedCard = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [inwishlist, setinwishlist] = useState(false);

  const images = [...Data[props.id]["images"]];
  const handlePrevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  const handleClose = () => {
    setShowMore(false);
  };

  return (
    <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg bg-white relative">
      <div className="relative">
        <div className="absolute top-4 right-4">
          <button
            className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 focus:outline-none"
            onClick={() => {
              props.clickhandler(false);
            }}
          >
            <Close />
          </button>
        </div>
        <img
          src={images[currentImage].src}
          alt="Product"
          className="w-full h-48 object-contain"
        />
        <div className="absolute bottom-0 left-0 mb-2 ml-2">
          <button
            className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 focus:outline-none"
            onClick={handlePrevImage}
          >
            &lt;
          </button>
        </div>
        <div className="absolute bottom-0 right-0 mb-2 mr-2">
          <button
            className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 focus:outline-none"
            onClick={handleNextImage}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="px-4 py-2">
        <h3 className="text-black font-bold text-lg mb-2">
          {Data[props.id]["name"]}
        </h3>
        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
          volutpat justo, vitae suscipit neque. Sed eu elit id velit luctus
          rhoncus.
        </p>
        {showMore && (
          <div>
            <p className="text-gray-700 text-sm">
              More content Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Duis at volutpat justo, vitae suscipit neque. Sed eu elit id
              velit luctus rhoncus.
            </p>
          </div>
        )}
        <button
          className="text-customGreen cursor-pointer focus:outline-none"
          onClick={handleReadMore}
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
      <div className="">
        <div className="flex items-center ml-3 mb-2">
          <Rating
            value={parseFloat(props.rating)}
            size="large"
            readOnly={true}
            precision={0.5}
          />
          <span>{props.review}</span>
        </div>
        <div className="flex justify-between mb-4">
          <div className="m-2 ml-4" onClick={() => setinwishlist(!inwishlist)}>
            {inwishlist ? (
              <FavoriteOutlinedIcon className="text-red-500" />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </div>
          <div className="px-4 py-2 flex items-center justify-between">
            <button className=" border border-gray-300 bg-customGreen text-white font-bold text-sm py-1 px-3 rounded-lg focus:outline-none">
              ${Data[props.id]["price"]} - Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
