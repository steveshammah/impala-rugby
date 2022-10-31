import Link from "next/link";
import React, { useState, useEffect } from "react";
// import { articlesContext } from "../../contexts/articles-context";
import { localArticles } from "../../public/resources/resources";
import { MdShare } from "react-icons/md";

const StoryFeed = () => {
  // const { articles, BASE_URL } = useContext(articlesContext);
  const [displayArticles, setDisplayArticles] = useState<any[]>([{}]);
  const [activeLink, setActiveLink] = useState("Latest");

  useEffect(() => {
    const filteredArticles = localArticles.filter((article) =>
      article.tags.includes(activeLink)
    );
    setDisplayArticles(
      activeLink === "Latest" ? localArticles : filteredArticles
    );
  }, [activeLink]);

  const handleClick = (details: any) => {
    setActiveLink(details);
  };

  const topics = [
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
        <div className="w-11/12">
          {/* <h2 className="w-full text-3xl font-semibold">Latest Stories</h2> */}
          <ul className="flex justify-around lg:w-1/3 sm:w-11/12 ">
            {topics.map((topic, index) => (
              <li onClick={() => handleClick(topic)} key={index}>
                <Link href={`#${topic}`}>
                  <a
                    className={`text-whiteX ${
                      activeLink === topic &&
                      "text-primaryRed border-b-2 border-primaryRed py-1"
                    } font-bold`}
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
            <div
              className={`h-96 w-80 my-4 overflow-hidden ${
                article.type === "update" ? "flex-row" : "flex-col"
              } rounded-md cursor-pointer flex shadow`}
              key={index}
            >
              <Link
                className=" overflow-hidden flex w-90 h-full"
                href={`/stories/${encodeURIComponent(article.id)}`}
              >
                <img
                  src={article.image_1?.src}
                  alt="Story Thumbnail"
                  className="h-full w-full aspect-video hover:scale-110 transition-all ease-in duration-300 object-cover  rounded-t-md flex-1"
                />
                {/* <img src={BASE_URL + article.image_1} alt='' /> */}
              </Link>
              <div className="flex-1 p-2 bg-white z-10 relative">
                <span className="text-xs text-primaryRed p-2 capitalize">
                  {article.type}
                </span>
                <h3 className="text-md uppercase font-bold text-blackX">
                  {article?.title}
                </h3>
                <p className="text-sm font-light">{article?.headline}</p>
                <span className="date-created absolute bottom-2 left-2 font-medium text-xs">
                  {article.dateCreated
                    ? article.dateCreated
                    : index + 1 + " Nov 2022"}
                </span>

                <span className="absolute bottom-2 right-2 font-bold text-md cursor-pointer">
                  <MdShare />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryFeed;
