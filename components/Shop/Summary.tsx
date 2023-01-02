import Link from "next/link";
import React from "react";

const Summary = ({ cartItem, selectSize, setCartItem, product }: any) => {
  return (
    <div className="my-cart">
      <h2>Summary</h2>
      {cartItem ? (
        <div className="added-items">
          {product.map((item: any) => (
            <div className="item">
              <div className="img-holder">
                <img src={item.img} alt="" />
              </div>
              <div className="item-details">
                <div className="meta">
                  <h3>{item.details}</h3>
                  <h5>Size: {selectSize}</h5>
                </div>
                <span onClick={() => setCartItem("")}>
                  Remove
                  {/* <Close className='icon' /> */}
                </span>
              </div>
            </div>
          ))}
          <Link href="#ToCart" className="btn">
            View Bag
          </Link>
        </div>
      ) : (
        <strong>Your bag is empty</strong>
      )}
    </div>
  );
};

export default Summary;
