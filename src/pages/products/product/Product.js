import React from "react";

import { AddShoppingCart } from "@material-ui/icons";

import { IconButton } from "@material-ui/core";

import "./product.style.css";

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="product">
      <div className="product-card">
        <div className="product-image">
          <img src={product.media.source} alt="" />
        </div>
        <h4 className="product-title">{product.name}</h4>
        <h6 className="product-price">{product.price.formatted_with_symbol}</h6>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>
      <div className="card-actions">
        <IconButton
          aria-label="Add to Cart"
          onClick={() => handleAddToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </div>
    </div>
  );
};

export default Product;
