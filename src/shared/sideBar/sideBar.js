import React from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";
const sideBar = ({ toggle, size }) => {
  return (
    <div className="sideBar" style={{ width: `${size}px` }}>
      <div className="sideBar-logo">
        <span onClick={toggle}>x</span>
      </div>
      <div className="sideBarOption">
        <Link to="/">
          <p>home</p>
        </Link>
        <Link to="/fav">
          <p>favorite</p>
        </Link>
      </div>
    </div>
  );
};

export default sideBar;
