import { useState, useEffect } from "react";
import { products } from "@public/resources/resources";
import Link from "next/link";
import Image from "next/image";

const SuggestedProducts = ({ activeProductId }: any) => {
  const [suggested, setSuggested] = useState<any[]>([]);
  const suggestedProducts = products.filter(
    (product) => product.id !== activeProductId
  );
  useEffect(() => {
    setSuggested(suggestedProducts);
  }, []);
  return (
    <div className="suggested-products">
      <div className="products">
        <h2 className="font-[600] text-xl">Suggested</h2>

        <div className="flex  m-4">
          {suggested.map((product, index) => (
            <Link
              href={`/shop/${product.id}`}
              className={`shadow-md flex-col mb-8 h-44 w-44 relative m-4 ${
                index < 7 ? "flex" : "hidden"
              }`}
              key={product.id}
            >
              <Image fill src={product.img} alt="" />
              <h3 className="absolute bottom-0  h-6 w-full bg-whiteX bg-opacity-60 text-blackX text-center font-[600]">
                {product.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestedProducts;
