import { useState, useEffect } from "react";
import { products } from "../../public/resources/resources";

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
        <h2>Suggested</h2>

        {suggested.map((product) => (
          <a href={`/store/${product.id}`} className="product" key={product.id}>
            <img src={product.img} alt="" />
            <h3>{product.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SuggestedProducts;
