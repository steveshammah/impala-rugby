import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ items, details }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipeToSlide: true,
    variableWidth: true,
    centerPadding: "60px",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:p-5 p-2 relative  flex flex-col items-center justify-center w-full">
      <div className="flex items-center w-full">
        <span className="uppercase font-semibold text-xl inline mx-4">
          {details.title}
        </span>
        <Link
          href={`/${details.url}`}
          className="font-thin hover:underline ml-8 inline"
        >
          {details.linkName}
        </Link>
      </div>
      <Slider {...settings} className="lg:w-[95%] w-full">
        {items}
      </Slider>
    </div>
  );
};

export default Carousel;

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <FaChevronRight
      className="p-1  text-2xl font-bold cursor-pointer rounded-md text-blackX bg-whiteX absolute -top-7 right-8"
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <FaChevronLeft
      className="p-1 text-2xl font-bold cursor-pointer rounded-md text-whiteX bg-blackX absolute -top-7 right-16"
      onClick={onClick}
    />
  );
};
