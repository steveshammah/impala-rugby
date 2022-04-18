import { Button } from "@mui/material";
import { products } from "../../../public/resources/resources";
import "./landing-page.scss";
// import CardNav from "./CardNav";
// import { useState } from "react";

const ShopContainer = ({ position }) => {
  return (
    <div
      className="products container-md-wrapper"
      style={{ transform: `translateX(${position}%)` }}
    >
      {products.map((product) => {
        return (
          <div className="product container-card">
            <img src={product.img} alt="" />
            <span>
              {product.name}
              <Button variant="outlined">
                <a href={`/store/${product.id}`}>Shop Now</a>
              </Button>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ShopContainer;
