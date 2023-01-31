import React from "react";
import { useState } from "react";
import { Nav } from "./nav";
import { Product } from "./product";
import { Cart } from "./cart";
import "./styles/homePage.css";
import productDetails from "./productDetails.json";

export const HomePage = () => {
  const [selectedData, setSelectedData] = useState([]);
  const onAdd = (productDetail) => {
    const exist = selectedData.find((x) => x.id === productDetail.id);
    if (exist) {
      setSelectedData(
        selectedData.map((x) =>
          x.id === productDetail.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setSelectedData([...selectedData, { ...productDetail, qty: 1 }]);
    }
  };
  const onRemove = (productDetail) => {
    const exist = selectedData.find((x) => x.id === productDetail.id);
    if (exist.qty === 1) {
      setSelectedData(selectedData.filter((x) => x.id !== productDetail.id));
    } else {
      setSelectedData(
        selectedData.map((x) =>
          x.id === productDetail.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="header">
      <Nav />
      <div className="main">
        <Product onAdd={onAdd} productDetails={productDetails} />
        <Cart onRemove={onRemove} onAdd={onAdd} selectedData={selectedData} />
      </div>
    </div>
  );
};
