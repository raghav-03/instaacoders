import React from "react";
import Logo from "../Assets/Images/logo.png";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./Header.css";
const Header = () => {
  return (
    <div className="flex">
      <div className="flex w-1/5 ml-12">
        <img src={Logo} alt="logo" className="h-14 w-16" />
        <p className="flex items-center justify-center font-bold ml-5">
          OYOTEE
        </p>
      </div>
      <div className="flex w-3/5">
        <a className="nav-link nav-link-ltr" href="#">
          Shop
        </a>
        <a className="nav-link nav-link-ltr" href="#">
          Plant Care
        </a>
        <a className="nav-link nav-link-ltr" href="#">
          Workshops
        </a>
        <a className="nav-link nav-link-ltr" href="#">
          Blogs
        </a>
      </div>
      <div className="flex w-1/6 items-center justify-evenly font-bold ml-5 ">
        <ShoppingBagOutlinedIcon className="h-10 w-10" />
        <FavoriteBorderOutlinedIcon className="h-10 w-10" />
        <PersonOutlineOutlinedIcon className="h-10 w-10" />
      </div>
    </div>
  );
};

export default Header;
