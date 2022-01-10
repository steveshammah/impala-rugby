import { useState, useEffect } from "react";
import { products } from "../../resources/resources";

const SuggestedProducts = ({ activeProductId }) => {
  const [suggested, setSuggested] = useState([]);
  const suggestedProducts = products.filter(
    (product) => product.id != activeProductId
  );
  useEffect(() => {
    setSuggested(suggestedProducts);
  }, []);
  return (
    <div className='suggested-products'>
      <h2>Suggested Products</h2>
      <div className='products'>
        {suggested.map((product) => (
          <a href={`/shop/${product.id}`} className='product' key={product.id}>
            <img src={product.img} alt='' />
            <h3>{product.name}</h3>
          </a>
        ))}
      </div>
      
    </div>
  );
};

export default SuggestedProducts;
