import React from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface IItem {
  title: string;
  linkName: string;
  url: string;
}
interface ICardNavProps {
  item: IItem;
  changePosition: (direction: string) => void;
  position?: number;
}

const CardNav = ({ item, changePosition }: ICardNavProps) => {
  return (
    <div className="container-nav flex justify-between w-5/6 h-12 items-center ">
      <div className="nav-title flex items-center text-blackX">
        <h2 className="uppercase font-semibold text-xl">{item.title}</h2>
        <Link href={`/${item.url}`}>
          <a className="font-thin hover:underline pl-8">{item.linkName}</a>
        </Link>
      </div>
      <div className="nav-btn h-full items-center flex ">
        <FaChevronLeft
          className="p-1 m-1 text-2xl font-bold cursor-pointer rounded-md text-whiteX bg-blackX"
          onClick={() => changePosition("-")}
        />
        <FaChevronRight
          className="p-1 m-1 text-2xl font-bold cursor-pointer rounded-md text-blackX bg-whiteX"
          onClick={() => changePosition("+")}
        />
      </div>
    </div>
  );
};

export default CardNav;
