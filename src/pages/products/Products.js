import React from "react";

import Product from "./product/Product";

import "./products.style.css";

const Products = ({ products, handleAddToCart }) => {
  return (
    <div className="products container">
      {products.map((product) => (
        <div className="products-grid" key={product.id}>
          <Product product={product} handleAddToCart={handleAddToCart} />
        </div>
      ))}
    </div>
  );
};

export default Products;
