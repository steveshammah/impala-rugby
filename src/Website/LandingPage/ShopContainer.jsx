import { photos } from "../../resources/resources";
import "./landing-page.scss";

const ShopContainer = () => {
  return (
    <div className='shop-container'>
      <a href='/shop'>
        <h2>Enter Store</h2>
      </a>
      <div className='product-wrapper'>
        <div className='product'>
          <img src={photos.tataRunning} alt='' />
        </div>
        <div className='product'>
          <img src={photos.tataRunning} alt='' />
        </div>
        <div className='product'>
          <img src={photos.tataRunning} alt='' />
        </div>
        <div className='product'>
          <img src={photos.tataRunning} alt='' />
        </div>
        <div className='product'>
          <img src={photos.tataRunning} alt='' />
        </div>
      </div>
    </div>
  );
};

export default ShopContainer;
