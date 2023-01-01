import React from "react";
import "./drop-down-menu.css";
import chevron_down from "../assets/images/chevron-down.svg";

const DropDownMenu = () => {
  return (
    <div class="dropdown">
      <div>
        <img className="cheveron-down" src={chevron_down} alt="CD" />
        <button class="dropbtn">Filter</button>
      </div>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
};

export default DropDownMenu;
