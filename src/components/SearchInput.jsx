import React from "react";
import { Link } from "react-router-dom";
import "./search-input.css";
const SearchInput = () => {
  return (
    <div className="search-input__container">
      <Link to="/">
        <div className="logo">mySheets</div>
      </Link>
    </div>
  );
};

export default SearchInput;
