import React from "react";
import { Cart } from "./cart";
import productDetails from "./productDetails.json";
import Card from "react-bootstrap/Card";
import "./styles/product.css";

export const Product = (props) => {
  const { setSelectedData, selectedData } = props;
  return (
    <div className="product">
      <div className="card">
        {productDetails.map((productDetail) => {
          return (
            <Card className="card_create">
              <Card.Img className="card_image" src={productDetail.img} />
              <Card.Title className="card_title">
                {productDetail.name}
              </Card.Title>
              <Card.Body className="card_body">{productDetail.price}</Card.Body>
              <Card.Link
                className="card_link"
                href="#"
                onClick={() => {
                  let newArray = selectedData.push(productDetail);
                  setSelectedData(newArray);
                }}
              >
                Add to Cart
              </Card.Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
