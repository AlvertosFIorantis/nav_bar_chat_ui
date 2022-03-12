import React, { useState } from "react";
import "./navbar.css";

import Settings from "./icons/Settings";
import BookCover from "./icons/BookCover";
import HumanIcon from "./icons/HumanIcon";

function Navbar() {
  const [openNavBar, setOpenNavBar] = useState(false);

  const toggleNavbar = () => {
    console.log("navbar changed state");
    setOpenNavBar((prevCheck) => !prevCheck);
  };

  return (
    <div className={`navigation ${openNavBar ? "open" : ""}`}>
      <div onClick={toggleNavbar} className="menuToggle"></div>
      <ul>
        <li className="list active">
          <a href="#">
            <span className="icon">
              <Settings />
            </span>
            <span className="text">Home</span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span className="icon">
              <BookCover />
            </span>
            <span className="text">About</span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span className="icon">
              <HumanIcon />
            </span>
            <span className="text">Messages</span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span className="icon">
              <Settings />
            </span>
            <span className="text">Photos</span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span className="icon">
              <Settings />
            </span>
            <span className="text">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
