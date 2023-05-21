import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const ProductWrapper = ({ title, products }: any) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {}, [open]);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`product-wrapper flex flex-col justify-center  ${
        open && "bg-blackX"
      } lg:p-4 p-2 `}
      id={title}
    >
      <h2 className="capitalize text-xl font-[600] my-4">{title}</h2>
      <div className="category-container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 row-span-5 gap-8">
        {products.map((product: any) => {
          return (
            <div className="product flex flex-col h-full w-full relative rounded-t-lg shadow-lg ">
              <div className="h-[270px] w-[100%] relative rounded-t-lg">
                <Image src={product.img} fill alt="" />
              </div>
              <div className="product-details bg-blackX text-white p-2">
                <button className="ship bg-primaryRed p-1 rounded-sm mr-2 text-sm">
                  <Link href={`/shop/${product.id}`}>
                    {product.inStock ? "Ready to Collect" : "Out of Stock"}
                  </Link>
                </button>
                <span className="price">Ksh. {product.price}</span>
                <p className="product-meta mt-2 font-[600] ">
                  {product.details}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="more flex items-center justify-between w-[6ch] my-6"
        onClick={handleClick}
      >
        {open ? (
          <>
            <Link href={`#${title}`} onClick={handleClick}>
              Less
            </Link>

            {/* <FaArrowUp className="icon" /> */}
            <FaChevronUp />
          </>
        ) : (
          <>
            <Link href={`#${title}`}>More</Link>

            <FaChevronDown className="icon" />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductWrapper;
