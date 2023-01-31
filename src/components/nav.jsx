import React from "react";
import Badge from "react-bootstrap/Badge";
import "./styles/nav.css";

export const Nav = (props) => {
  const { selectedData } = props;
  return (
    <div className="nav">
      <div className="navHeader">Shopping Cart</div>
      <div className="navSubHeader">
        <button className="navLink">
          Cart <Badge bg="secondary">{selectedData.length}</Badge>
        </button>
      </div>
    </div>
  );
};
