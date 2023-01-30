import React from "react";
import "./styles/cart.css";

export const Cart = (props) => {
  const { selectedData, onAdd, onRemove } = props;
  {
    console.log(selectedData);
  }
  return (
    <div className="cart">
      <h2 className="cartHeader">Cart Items</h2>
      <div className="productDetails">
        {selectedData.length == 0 && <div>Cart is empty</div>}
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
    </div>
  );
};
