import "./store.scss";
import { products } from "../../public/resources/resources";

import ProductWrapper from "./ProductWrapper";

const Store = () => {
  const menProducts = products.filter((product) =>
    product.category.includes("men")
  );
  const womenProducts = products.filter((product) =>
    product.category.includes("women")
  );
  const floodiesProducts = products.filter((product) =>
    product.category.includes("floodies")
  );
  const kidsProducts = products.filter((product) =>
    product.category.includes("kids")
  );
  const accessoryProducts = products.filter((product) =>
    product.category.includes("accessories")
  );

  return (
    <div className='store-container'>
      <header>
        <ul>
          <li>
            <a href='#Men'>Men</a>
          </li>
          <li>
            <a href='#Women'>Women</a>
          </li>
          <li>
            <a href='#Kids'>Kids</a>
          </li>
          <li>
            <a href='#Floodies'>Floodies</a>
          </li>
          <li>
            <a href='#Accessories'>Accessories</a>
          </li>
        </ul>
      </header>

      <div className='shop-container' id='main'>
        <ProductWrapper title={"Men"} products={menProducts} />
        <ProductWrapper title={"Women"} products={womenProducts} />

        <ProductWrapper title={"Kids"} products={kidsProducts} />

        <ProductWrapper title={"Floodies"} products={floodiesProducts} />
        <ProductWrapper title={"Accessories"} products={accessoryProducts} />
      </div>
    </div>
  );
};

export default Store;
