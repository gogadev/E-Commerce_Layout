import React from "react";

import { Link } from "react-router-dom";

import CartItem from "./cart-item/CartItem";
import Spinner from "../../components/spinner/Spinner";

import { Button } from "@material-ui/core";

import emptyCartImg from "../../assets/empty-cart.png";

import "./cart.style.css";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const FilledCart = () => {
    return (
      <div className="filled-cart">
        <div className="filled-cart-container">
          {cart.line_items.map((item) => (
            <div className="item" key={item.id}>
              <CartItem
                cart={cart}
                item={item}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            </div>
          ))}
        </div>
        <div className="cart-details">
          Subtotal: {cart.subtotal.formatted_with_symbol}
          <div className="cart-buttons">
            <Button onClick={handleEmptyCart}>Empty Cart</Button>
          </div>
        </div>
      </div>
    );
  };

  if (!cart.line_items) return <Spinner />;

  return (
    <div className="cart container">
      <div className="cart-container">
        <h2 className="cart-title">Your Shopping Cart</h2>
        {!cart.line_items.length ? (
          <>
            {" "}
            <div className="empty-cart">
              <div className="empty-cart-img">
                <img src={emptyCartImg} alt="" />
              </div>
              ~You have no items in your shopping cart!~
              <div className="text">
                <Link to="/">Start adding some!</Link>
              </div>
            </div>
          </>
        ) : (
          <FilledCart />
        )}
      </div>
    </div>
  );
};

export default Cart;
