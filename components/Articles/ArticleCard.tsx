import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { formatDate } from "@utils/utils";
import Image from "@components/Image";

interface Props {
  article: any;
  handleOpen: () => void;
  setActiveArticle: Dispatch<SetStateAction<any>>;
}
const ArticleCard = ({ article, handleOpen, setActiveArticle }: Props) => {
  const handleClick = (id: any) => {
    handleOpen();
    setActiveArticle(id);
  };
  return (
    <div className=" h-56 w-52 mb-6 flex flex-col text-blackX bg-whiteX items-center rounded-md shadow-md">
      <Image
        src={article?.tags ? article.tags : "impalaLogo"}
        className="h-1/2 w-full object-fill aspect-video rounded-t-md bg-blackX text-whiteX"
        alt="Image Poster"
      />
      <div className="h-2/5 w-full p-0.5">
        <h2 className="font-bold text-xs uppercase">{article.title}</h2>
      </div>
      <div className="flex  p-4 justify-between w-full ">
        <button
          aria-label="share"
          onClick={() => handleClick(article)}
          className="flex justify-evenly items-center rounded-md bg-primaryRed text-xs leading-5 w-14 text-white"
        >
          <MdDelete />
          <span>Delete</span>
        </button>

        <Link
          href={`articles/edit/${article.id}`}
          aria-label="add to favorites"
        >
          <button className="flex justify-evenly items-center rounded-md bg-blackX leading-5   w-14 text-xs text-whiteX">
            <MdEdit />
            <span>Edit</span>
          </button>
        </Link>
      </div>

      <div className="flex w-full p-1 justify-between mt-2 text-xs font-thin  text-light">
        <i className="text-xs font-thin  text-light">
          {article?.created &&
            formatDate(article.created.seconds * 1000, "dd-MM-yyy")}
        </i>
        <div className="flex justify-between items-center px-2 font-thin">
          <div className="flex items-center mr-2">
            <FaEye className="mr-1" />
            <i>173</i>
          </div>

          <div className="flex items-center text-primaryRed">
            <FaHeart className="mr-1" />

            <i>29</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
