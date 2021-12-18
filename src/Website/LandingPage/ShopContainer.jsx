import { Button } from "@mui/material";
import { photos } from "../../resources/resources";
import "./landing-page.scss";

const ShopContainer = () => {
  return (
    <div className='shop-container'>
      <div className='product-wrapper'>
        <div className='product'>
          <img src={photos.hoodieRed} alt='' />
          <span>
            Impala Hoodie - Red
            <Button variant='outlined'>Shop Now</Button>
          </span>
        </div>
        <div className='product'>
          <img src={photos.hoodieBlack} alt='' />
          <span>
            Impala Hoodie - Black
            <Button variant='outlined'>Shop Now</Button>
          </span>
        </div>
        <div className='product'>
          <img src={photos.eatRugby} alt='' />
          <span>
            Eat - Sleep - Rugby - Repeat - Black
            <Button variant='outlined'>Shop Now</Button>
          </span>
        </div>
        <div className='product'>
          <img src={photos.hoodieBlack} alt='' />
          <span>
            Impala Hoodie - Black
            <Button variant='outlined'>Shop Now</Button>
          </span>
        </div>
      </div>
      <a href='/shop'>
        <h2>Enter Store</h2>
      </a>
    </div>
  );
};

export default ShopContainer;
