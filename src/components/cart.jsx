import React from "react";

export const Cart = (props) => {
  const { selectedData, onAdd, onRemove } = props;
  {
    console.log(selectedData);
  }
  return (
    <div>
      <h2>Cart Items</h2>
      <div>{selectedData.length == 0 && <div>Cart is empty</div>}</div>
      {selectedData.map((item) => (
        <div key={item.id} className="row">
          <div>{item.name}</div>
          <div>
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div>
            {item.qty}X ${item.price}
          </div>
        </div>
      ))}
    </div>
  );
};
