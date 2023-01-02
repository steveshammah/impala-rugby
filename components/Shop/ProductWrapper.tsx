import Link from "next/link";
import React, { useState, useEffect } from "react";
// import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";

const ProductWrapper = ({ title, products }: any) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {}, [open]);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={`product-wrapper  ${open && "open"}`} id={title}>
      <h2>{title}</h2>
      <div className="category-container">
        {products.map((product: any) => {
          return (
            <div className="product">
              <img src={product.img} alt="" />
              <div className="product-details">
                <button className="ship">
                  <Link href={`/store/${product.id}`}>
                    {product.inStock ? "Ready to Collect" : "Out of Stock"}
                  </Link>
                </button>
                <span className="price">Ksh. {product.price}</span>
                <p className="product-meta">{product.details}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="more" onClick={handleClick}>
        {open ? (
          <>
            <Link href={`#${title}`} onClick={handleClick}>
              Less
            </Link>

            {/* <ArrowDropUp className="icon" /> */}
          </>
        ) : (
          <>
            <Link href={`#${title}`}>More</Link>

            {/* <ArrowDropDown className="icon" /> */}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductWrapper;
