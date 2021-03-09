import React from "react";

import { Button } from "@material-ui/core";

import "./cart-item.style.css";

const CartItem = ({
  cart,
  item,
  handleUpdateCartQty,
  handleRemoveFromCart,
}) => {
  return (
    <div
      className={cart.line_items.length === 1 ? "cart-item grid" : "container"}
    >
      <div className="cart-image">
        <img src={item.media.source} alt={item.name} />
      </div>
      <div className="cart-content">
        <h4>{item.name}</h4>
        <h5>{item.line_total.formatted_with_symbol}</h5>
      </div>
      <div className="buttons">
        <Button
          type="button"
          size="small"
          onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
        >
          -
        </Button>
        <div className="quantity">
          <h5>{item.quantity}</h5>
        </div>
        <Button
          type="button"
          size="small"
          onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
        >
          +
        </Button>
        <div className="remove-btn">
          <Button
            variant="contained"
            type="button"
            color="secondary"
            onClick={() => handleRemoveFromCart(item.id)}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
