import { products } from "../../resources/resources";

const Product = ({ match }) => {
  const productId = match.params.id;

  const product = products.filter((product) => {
    return product.id === parseInt(productId);
  });

  return (
    <div className='product-container'>
      {product.map((item) => {
        return (
          <>
            <div className='image-container'>
              <img src={item.img} alt='' />
            </div>
            <div className='product-details'>
              <p>{item.details}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};


export default Product;
