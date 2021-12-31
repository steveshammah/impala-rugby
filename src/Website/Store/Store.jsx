import "./store.scss";
import { products } from "../../resources/resources";

import ProductWrapper from "./ProductWrapper";

const Store = () => {
  return (
    <div className='store-container'>
      <header>
        <ul>
          <li className='active'>
            <a href=''>Jerseys</a>
          </li>
          <li>
            <a href=''>Men</a>
          </li>
          <li>
            <a href=''>Women</a>
          </li>
          <li>
            <a href=''>Kids</a>
          </li>
          <li>
            <a href=''>Floodies</a>
          </li>
          <li>
            <a href=''>Accessories</a>
          </li>
          <li>
            <a href=''>Home & Office</a>
          </li>
        </ul>
      </header>
      {/* <h2>The Store</h2> */}
      <div className='shop-container' id='main'>
        <ProductWrapper title={"Men"} products={products} />
        <ProductWrapper title={"Women"} products={products} />

        <ProductWrapper title={"Kids"} products={products} />

        <ProductWrapper title={"Floodies"} products={products} />
        <ProductWrapper title={"Accessories"} products={products} />
        <ProductWrapper title={"Home & Office"} products={products} />
      </div>
    </div>
  );
};

export default Store;
