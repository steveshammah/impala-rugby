import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdShare } from "react-icons/md";
import { useArticlesStore } from "../../stores/articleStore";
import { logos } from "../../public/resources/resources";
import { formatDate } from "../../utils";
import Image from "../../components/Image";

const StoryFeed = () => {
  const [displayArticles, setDisplayArticles] = useState<any[]>([{}]);
  const [activeLink, setActiveLink] = useState("Latest");

  const articles = useArticlesStore((state) => state.articles);

  useEffect(() => {
    const filteredArticles = articles.filter((article) =>
      article?.tags?.includes(activeLink)
    );
    setDisplayArticles(activeLink === "Latest" ? articles : filteredArticles);
  }, [activeLink, articles]);

  const handleClick = (details: any) => {
    setActiveLink(details);
  };

  const subMenu = [
    "Latest",
    "Men",
    "Women",
    "Swaras",
    "Academy",
    "Floodies",
    "Club",
  ];

  return (
    <div className="text-blackX flex items-center justify-around">
      <div className="w-full flex flex-wrap items-center m-4 justify-around ">
        <div className="w-11/12 py-2">
          <ul className="flex justify-between sm:justify-around lg:w-1/3 sm:w-full">
            {subMenu.map((topic, index) => (
              <li onClick={() => handleClick(topic)} key={index}>
                <Link href={`#${topic}`}>
                  <a
                    className={`text-light ${
                      activeLink === topic &&
                      "text-primaryRed border-b-2 border-primaryRed "
                    }  text-xs sm:text-lg font-semibold`}
                  >
                    {topic}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-11/12 flex flex-wrap items-center p-4 justify-around">
          {displayArticles.map((article, index) => (
            <Link
              key={index}
              className=" overflow-hidden flex w-90 h-full"
              href={`/stories/${encodeURIComponent(article.id)}`}
            >
              <div
                className={`h-96 w-80 my-4 overflow-hidden ${
                  article.type === "update" ? "flex-row" : "flex-col"
                } rounded-md cursor-pointer flex shadow`}
              >
                <Image
                  src={article.tags ? article.tags : "impalaLogo"}
                  alt="Story Thumbnail"
                  className="h-full w-full aspect-video hover:scale-110 transition-all ease-in duration-300 object-fill  rounded-t-md flex-1"
                />
                <div className="flex-1 p-2 bg-white z-10 relative">
                  <span className="text-xs text-primaryRed p-2 capitalize">
                    {article.type}
                  </span>
                  <h3 className="text-md uppercase font-bold text-blackX">
                    {article?.title}
                  </h3>
                  <p className="text-sm font-light capitalize">
                    {article?.headline}
                  </p>
                  <i className="date-created absolute bottom-2 left-2 font-medium text-xs">
                    {article?.created &&
                      formatDate(article?.created?.seconds * 1000)}
                  </i>

                  <span className="absolute bottom-2 right-2 font-bold text-md cursor-pointer">
                    <MdShare />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryFeed;
