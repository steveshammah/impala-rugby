import { products } from "../../public/resources/resources";
import Link from "next/link";
import React from "react";

const ShopContainer = ({ position }: any) => {
  return (
    <div
      className="products container-md-wrapper flex justify-evenly  items-center transition-all ease-in-out duration-700 overflow-y-hidden"
      style={{ transform: `translateX(${position}%)` }}
    >
      {products.map((product, index) => {
        return (
          <div
            key={index}
            className="product container-card  w-64 h-80 flex flex-col shadow-md hover:shadow-xl m-4 rounded-md"
          >
            <img
              src={product.img.src}
              alt="Product"
              className="aspect-video w-full h-5/6 rounded-t-md"
            />
            <div className="p-2 flex justify-between">
              <span className="flex">{product.name}</span>

              <Link href={`/store/${product.id}`}>
                <button className="bg-primaryRed p-1 text-white text-sm rounded-md">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopContainer;
