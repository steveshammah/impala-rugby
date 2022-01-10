import { products } from "../../resources/resources";
import { Favorite, FavoriteBorderRounded } from "@material-ui/icons";
import { useState } from "react";
import Summary from "./Summary";
import SuggestedProducts from "./SuggestedProducts";

const Product = ({ match }) => {
  const productId = match.params.id;
  // const [activeImage, setActiveImage] = useState("");
  const [cartItem, setCartItem] = useState(false);
  const [selectSize, setSelectSize] = useState("");
  const [addToList, setAddToList] = useState(false);
  const product = products.filter((product) => {
    return product.id === parseInt(productId);
  });

  return (
    <div className='product-container'>
      {product.map((item) => {
        return (
          <div className='product-details-wrapper'>
            <div className='image-container'>
              <div className='more-images'>
                <img src={item.img} alt='' />
                <img src={item.img} alt='' />
                <img src={item.img} alt='' />
              </div>
              <img src={item.img} alt='' />
            </div>
            <div className='right-wrapper'>
              <div className='product-details'>
                <h2>{item.details}</h2>
                <h4>Ksh. {item.price}</h4>
                <span>
                  <strong>Color: </strong>
                  <h4> {item.color}</h4>
                </span>
                <div className='sizes'>
                  {item.sizes.map((size) => (
                    <span
                      onClick={() => setSelectSize(size)}
                      className={selectSize === size && "active"}>
                      {size}
                    </span>
                  ))}
                </div>

                <div className='add-to-cart'>
                  <button onClick={() => setCartItem(product)}>
                    ADD TO BAG
                  </button>
                  <div
                    className='like'
                    onClick={() => setAddToList(!addToList)}>
                    {addToList ? <Favorite /> : <FavoriteBorderRounded />}
                  </div>
                </div>
              </div>
              <Summary
                cartItem={cartItem}
                selectSize={selectSize}
                setCartItem={setCartItem}
                product={product}
              />
            </div>
          </div>
        );
      })}
      <SuggestedProducts activeProductId={productId}/>
    </div>
  );
};

export default Product;
