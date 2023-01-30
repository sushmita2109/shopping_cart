import React from "react";
import { Cart } from "./cart";
import Card from "react-bootstrap/Card";
import "./styles/product.css";

export const Product = (props) => {
  const { productDetails, onAdd } = props;
  return (
    <div className="product">
      <div className="card">
        {productDetails.map((productDetail) => {
          return (
            <Card key={productDetail.id} className="card_create">
              <Card.Img className="card_image" src={productDetail.img} />
              <Card.Title className="card_title">
                {productDetail.name}
              </Card.Title>
              <Card.Body className="card_body">{productDetail.price}</Card.Body>
              <button
                onClick={() => onAdd(productDetail)}
                className="card_link"
              >
                Add to Cart
              </button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
