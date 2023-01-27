import React from "react";
import "./styles/nav.css";

export const Nav = () => {
  return (
    <div className="nav">
      <div className="navHeader">Shopping Cart</div>
      <div className="navSubHeader">
        <a className="navLink" href="#">
          Cart
        </a>
      </div>
    </div>
  );
};
