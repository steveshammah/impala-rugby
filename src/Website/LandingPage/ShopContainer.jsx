import { Button } from "@mui/material";
import { products, photos } from "../../resources/resources";
import "./landing-page.scss";

const ShopContainer = () => {
  return (
    <div
      className='shop-container '
      // style={{ backgroundImage: `url(${photos.impalaBlazeSunny})` }}
    >
      <div className='products container-md-wrapper'>
        {products.map((product) => {
          return (
            <div className='product container-card '>
              <img src={product.img} alt='' />
              <span>
                {product.name}
                <Button variant='outlined'>Shop Now</Button>
              </span>
            </div>
          );
        })}
      </div>
      <a href='/shop'>
        <h4>Enter Store</h4>
      </a>
    </div>
  );
};

export default ShopContainer;
