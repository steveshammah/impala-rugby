import { products } from "@public/resources/resources";
import React from "react";
import ProductWrapper from "@components/Shop/ProductWrapper";
import Link from "next/link";

const Store = () => {
  const categories = ["men", "women", "kids", "floodies", "accessories"];
  const productFxn = (category: string) =>
    products.filter((product) => product.category.includes(category));

  return (
    <div className="store-container w-full">
      <header className="h-12 bg-blackX sticky top-20 z-10">
        <ul className="flex justify-around items-center h-full">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                href={`#${category}`}
                className="flex items-center text-whiteX capitalize"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </header>

      <div className="shop-container" id="main">
        {categories.map((category, index) => (
          <ProductWrapper
            title={category}
            products={productFxn(category)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Store;
