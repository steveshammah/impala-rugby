import React from "react";
import { MdClose, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const ImageViewer = ({ img, setActiveImage }: any) => {
  return (
    <div
      id="slide"
      className={`w-full h-full justify-center bg-gradient-to-t from-blackX transition-all ease-in-out duration-100  ${
        img ? "flex" : "hidden"
      } absolute top-0`}
    >
      <span className="close" onClick={() => setActiveImage("")}>
        <MdClose className=" text-2xl cursor-pointer absolute top-2 right-4 bg-primaryRed h-8 w-8" />
      </span>
      <img
        src={img?.src}
        alt={img}
        className=" h-full object-contain w-2/3 rounded-md cursor-pointer"
      />

      <span className="arrow left absolute top-1/2 left-3 cursor-pointer text-4xl hover:text-white">
        <MdArrowBackIos className="icon" />
      </span>
      <span className="arrow right absolute top-1/2 right-3 cursor-pointer text-4xl hover:text-white">
        <MdArrowForwardIos className="icon" />
      </span>
    </div>
  );
};

export default ImageViewer;
