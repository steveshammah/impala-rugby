import { products } from "@public/resources/resources";
import React from "react";
import ProductWrapper from "@components/Shop/ProductWrapper";
import Link from "next/link";

const Store = () => {
  const categories = ["men", "women", "kids", "floodies", "accessories"];
  const productFxn = (category: string) =>
    products.filter((product) => product.category.includes(category));

  return (
    <div className="store-containe relative flex flex-col w-full">
      <header className="h-12 bg-blackX sticky top-20 z-10">
        <ul className="flex justify-around items-center h-full">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                href={`#${category}`}
                className="flex items-center shadow-lg  text-whiteX capitalize"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </header>

      <div
        className="shop-container flex flex-col items-center w-full"
        id="main"
      >
        <div className="flex flex-col  w-[80%]">
          {categories.map((category, index) => (
            <ProductWrapper
              title={category}
              products={productFxn(category)}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
