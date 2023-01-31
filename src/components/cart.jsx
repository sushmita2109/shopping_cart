import React from "react";
import "./styles/cart.css";

export const Cart = (props) => {
  const { selectedData, onAdd, onRemove } = props;
  const itemPrice = selectedData.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemPrice * 0.14;
  const shippingPrice = itemPrice > 20000 ? 0 : 50;
  const totalPrice = itemPrice + taxPrice + shippingPrice;

  return (
    <div className="cart">
      <h2 className="cartHeader">Cart Items</h2>
      <div className="productDetails">
        {selectedData.length === 0 && <div>Cart is empty</div>}
      </div>
      {selectedData.map((item) => (
        <div key={item.id} className="row">
          <div className="itemName">{item.name}</div>
          <div className="btn">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="itemPrice">
            {item.qty}X ${item.price}
          </div>
        </div>
      ))}
      {selectedData.length !== 0 && (
        <>
          <hr></hr>

          <div className="shippingPrice">
            <div>Item Price</div>
            <div>${itemPrice}</div>
          </div>

          <div className="shippingPrice">
            <div>Tax Price</div>
            <div>${taxPrice.toFixed(2)}</div>
          </div>
          <div className="shippingPrice">
            <div>Shipping Price</div>
            <div>${shippingPrice}</div>
          </div>
          <hr></hr>
          <div className="shippingPrice">
            <div>Total Price</div>
            <div>${totalPrice}</div>
          </div>
        </>
      )}
    </div>
  );
};
