import { photos } from "../../resources/resources";

const style = {
  height: "80vh",
  backgroundColor: "black",
  backgroundAttachment: "fixed",
  color: "white",
  overflow: "hidden",
  cursor: "pointer",
  marginBottom: "50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const ShopContainer = () => {
  return (
    <div className='shop-container' style={style}>
      <h2>Shop Container</h2>
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
      </div>
    </div>
  );
};

export default ShopContainer;
