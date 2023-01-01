import React from "react";
import { Link } from "react-router-dom";
import "./search-input.css";
import mysheetsIcon from "../assets/images/my_sheets_icon.svg";
const SearchInput = () => {
  return (
    <div className="search-input__container">
      <Link to="/">
        <img src={mysheetsIcon} alt="icon" />
      </Link>
    </div>
  );
};

export default SearchInput;
