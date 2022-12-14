import React, { Component } from "react";
import ProductName from "./productName";
import Price from "./price";

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <ProductName />
        <Price />
      </div>
    );
  }
}

export default Product;
