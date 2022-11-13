import React, { useEffect, useMemo, useState } from "react";
import { logos, photos } from "../public/resources/resources";

interface Props {
  src: string;
  alt: string;
  className: string;
  onClick?: () => void;
}

const Image = ({ src, alt, className, onClick }: Props) => {
  const source = useMemo(() => {
    let tempSrc: string;
    if (src?.split(",").length >= 2) {
      tempSrc = String(src?.split(",")[0].toLowerCase());
      console.log(tempSrc, "Its an object");
    } else {
      tempSrc = src;
    }
    for (const item of Object.entries(photos)) {
      if (item[0].toLowerCase().includes(tempSrc)) {
        return item[1];
      }
    }
  }, [src, alt, className]);

  return (
    <img
      src={source?.src ? source.src : logos.impalaLogo.src}
      alt={alt ? alt : "impalarugbyke@gmail.com"}
      className={className ? className : "w-full h-full object-contain"}
      onClick={onClick ? () => onClick() : undefined}
    />
  );
};

export default Image;
