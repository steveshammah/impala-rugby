import { products } from "@public/resources/resources";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import React, { useState } from "react";
import SuggestedProducts from "@components/Shop/SuggestedProducts";
import { useRouter } from "next/router";
import Summary from "@components/Shop/Summary";
import Image from "next/image";
import Carousel from "@components/Carousel";
import Link from "next/link";

const Product = () => {
  const router = useRouter();
  const productId = String(router.query.id);
  // const [activeImage, setActiveImage] = useState("");
  const [cartItem, setCartItem] = useState<any>({});
  const [selectSize, setSelectSize] = useState("S");
  const [addToList, setAddToList] = useState(false);
  const product = products.filter((product) => {
    return product.id === parseInt(productId);
  });

  const shopDetails = {
    title: "You may also like",
    linkName: "",
    url: "#",
  };
  const shop = products.map((product, index) => {
    return (
      <div
        key={index}
        className="product container-card h-80 flex flex-col shadow-md hover:shadow-xl rounded-md m-auto"
        style={{ width: 300 }}
      >
        <img
          src={product.img.src}
          alt="Product"
          className="aspect-video w-full h-5/6 rounded-t-md"
        />
        <div className="p-2 flex justify-between">
          <span className="flex">{product.name}</span>

          <Link href={`/shop/${product.id}`}>
            <button className="bg-primaryRed p-1 text-white text-sm rounded-md">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="product-container flex flex-col p-4">
      {product.map((item) => {
        return (
          <div className="w-full ">
            <div className="flex justify-between w-full p-8">
              <div className="flex-1 flex lg:flex-row flex-col w-full items-center">
                <div className="flex-1 flex justify-center">
                  <div className="flex relative lg:h-[550px] h-[400px] lg:w-[450px] w-[320px]">
                    <Image src={item?.img} fill alt="PRODUCT-IMG" />
                  </div>
                </div>
                <div className="mt-5 h-full lg:min-w-[400px]">
                  <div className="product-details ">
                    <h2 className="font-bold text-2xl">{item.details}</h2>
                    <h4 className="text-primaryRed">Ksh. {item.price}</h4>
                    <span className="flex my-1">
                      <strong>Color: </strong>
                      <h4> {item.color}</h4>
                    </span>
                    <div className="flex justify-around items-center border border-whiteX h-9 my-2">
                      {item.sizes.map((size) => (
                        <span
                          onClick={() => setSelectSize(size)}
                          className={`${
                            selectSize === size
                              ? "bg-primaryRed text-white border border-white w-full"
                              : undefined
                          } flex justify-center items-center flex-1 h-full cursor-pointer`}
                        >
                          {size}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center my-6 shadow-md w-fit">
                      <button
                        onClick={() => setCartItem(product)}
                        className="bg-blackX w-[15ch] text-whiteX h-9"
                      >
                        ADD TO BAG
                      </button>
                      <div
                        className="h-9 w-10  flex items-center justify-center cursor-pointer text-red-600"
                        onClick={() => setAddToList(!addToList)}
                      >
                        {addToList ? <MdFavorite /> : <MdFavoriteBorder />}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-lg font-[600]">Description</h3>
                    <p className="max-w-[400px]">
                      This is the {item.details}, which is available in{" "}
                      {item.color}
                    </p>
                  </div>
                  {/* <Summary
                    cartItem={cartItem}
                    selectSize={selectSize}
                    setCartItem={setCartItem}
                    product={product}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* <SuggestedProducts activeProductId={productId} /> */}
      <Carousel items={shop} details={shopDetails} />
    </div>
  );
};

export default Product;
