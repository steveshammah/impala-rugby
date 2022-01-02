import "./store.scss";
import { products, photos } from "../../resources/resources";

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

      <div className='store-sticker'>
        {/* <img src={photos.billGithinji} alt='' /> */}
        <img src={photos.spanner} alt='' />
        {/* <img src={photos.mato} alt='' /> */}

        <button>
          <a href='#main'>Shop Now</a>
        </button>
      </div>
      {/* <h2>The Store</h2> */}
      <div className='shop-container' id='main'>
        <ProductWrapper title={"Men"} products={menProducts} />
        <ProductWrapper title={"Women"} products={womenProducts} />

        <ProductWrapper title={"Kids"} products={kidsProducts} />

        <ProductWrapper title={"Floodies"} products={floodiesProducts} />
        <ProductWrapper title={"Accessories"} products={accessoryProducts} />
        {/* <ProductWrapper title={"Home & Office"} products={products} /> */}
      </div>
    </div>
  );
};

export default Store;
