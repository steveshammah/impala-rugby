import { Button } from "@mui/material";
import { products } from "../../resources/resources";
import "./landing-page.scss";
// import CardNav from "./CardNav";
// import { useState } from "react";

const ShopContainer = ({ position }) => {
  return (
    <div
      className='products container-md-wrapper'
      style={{ transform: `translateX(${position}px)` }}>
      {products.map((product) => {
        return (
          <div className='product container-card'>
            <img src={product.img} alt='' />
            <span>
              {product.name}
              <Button variant='outlined'>Shop Now</Button>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ShopContainer;
