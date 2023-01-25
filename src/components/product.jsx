import React from "react";
import { Cart } from "./cart";
import productDetails from "./productDetails.json";
import Card from "react-bootstrap/Card";

export const Product = () => {
  return (
    <div className="product">
      <div className="card">
        {productDetails.map((productDetail) => {
          return (
            <Card>
              <Card.Img src={productDetail.img} />
              <Card.Title>{productDetail.name}</Card.Title>
              <Card.Body>{productDetail.price}</Card.Body>
              <Card.Link href="#">Add to Cart</Card.Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
