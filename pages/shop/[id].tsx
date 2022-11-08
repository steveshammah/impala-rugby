import { products } from "../../public/resources/resources";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import React, { useState } from "react";
import SuggestedProducts from "../../components/Shop/SuggestedProducts";
import { useRouter } from "next/router";
import Summary from "../../components/Shop/Summary";

const Product = () => {
  const router = useRouter();
  const productId = String(router.query.id);
  // const [activeImage, setActiveImage] = useState("");
  const [cartItem, setCartItem] = useState<any>({});
  const [selectSize, setSelectSize] = useState("");
  const [addToList, setAddToList] = useState(false);
  const product = products.filter((product) => {
    return product.id === parseInt(productId);
  });

  return (
    <div className="product-container">
      {product.map((item) => {
        return (
          <div className="product-details-wrapper">
            <div className="image-container">
              <div className="more-images">
                <img src={item?.img} alt="" />
                <img src={item?.img} alt="" />
                <img src={item?.img} alt="" />
              </div>
              <img src={item?.img} alt="PRODUCT-IMG" />
            </div>
            <div className="right-wrapper">
              <div className="product-details">
                <h2>{item.details}</h2>
                <h4>Ksh. {item.price}</h4>
                <span>
                  <strong>Color: </strong>
                  <h4> {item.color}</h4>
                </span>
                <div className="sizes">
                  {item.sizes.map((size) => (
                    <span
                      onClick={() => setSelectSize(size)}
                      className={selectSize === size ? "active" : undefined}
                    >
                      {size}
                    </span>
                  ))}
                </div>

                <div className="add-to-cart">
                  <button onClick={() => setCartItem(product)}>
                    ADD TO BAG
                  </button>
                  <div
                    className="like"
                    onClick={() => setAddToList(!addToList)}
                  >
                    {addToList ? <MdFavorite /> : <MdFavoriteBorder />}
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
      <SuggestedProducts activeProductId={productId} />
    </div>
  );
};

export default Product;
