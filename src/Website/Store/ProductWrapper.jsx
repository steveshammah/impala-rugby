import { useState, useEffect } from "react";
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";

const ProductWrapper = ({ title, products }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {}, [open]);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={`product-wrapper  ${open && "open"}`} id={title}>
      <h2>{title}</h2>
      <div className='category-container'>
        {products.map((product) => {
          return (
            <div className='product'>
              <img src={product.img} alt='' />
              <div className='product-details'>
                <button className='ship'>
                  <a href={`/shop/${product.id}`}>
                    {product.inStock ? "Ready to Collect" : "Out of Stock"}
                  </a>
                </button>
                <span className='price'>Ksh. {product.price}</span>
                <p className='product-meta'>{product.details}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='more' onClick={handleClick}>
        {open ? (
          <>
            <h5 onClick={handleClick}>Less</h5>

            <ArrowDropUp className='icon' />
          </>
        ) : (
          <>
            <h5>More</h5>

            <ArrowDropDown className='icon' />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductWrapper;
