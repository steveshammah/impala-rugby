import React, { FC, useContext, useEffect } from "react";
import { articlesContext, IArticles } from "../../contexts/articles-context";
import Link from "next/link";

const LandingSection: FC = () => {
  const { articles, BASE_URL } = useContext(articlesContext);
  const latestArticle: IArticles = articles[0];
  // useEffect(() => {}, []);

  return (
    <div className="flex w-screen p-4">
      <div className="flex w-full sm:flex-col md:flex-col lg:flex-row flex-col p-2 rounded-md">
        {/* Main story */}
        <Link href={`/stories/${encodeURIComponent(latestArticle.id)}`}>
          <div className="flex-1 cursor-pointer rounded-t-md bg-blackX ">
            <div className="flex flex-col rounded-t-md p-1">
              <span className="text-xs text-primaryRed p-2 capitalize">
                {latestArticle.type}
              </span>
              <h2 className="font-bold sm:p-3 p-0 text-whiteX sm:text-4xl text-2xl text-center w-full capitalize">
                {latestArticle.title}
              </h2>
            </div>
            <div className="flex justify-center px-2 overflow-hidden">
              <img
                className="aspect-video w-11/12 h-full hover:scale-110 transition-all ease-in duration-300 object-cover overflow-hidden"
                // src={BASE_URL + latestArticle.image_2} alt=''
                src={latestArticle.image_2?.src}
                alt={latestArticle.caption_1}
              />
            </div>
          </div>
        </Link>

        <div className="flex flex-col flex-1 h-full justify-between">
          <div className="flex flex-wrap justify-between items-center">
            {articles.map((article, index) => {
              if (index < 7 && index != 0) {
                return (
                  <Link
                    key={article.id}
                    href={`/stories/${encodeURIComponent(article.id)}`}
                  >
                    <div className="shadow-md h-60 sm:w-56 w-full bg-white-400 m-4 rounded-md flex flex-col hover:shadow-lg cursor-pointer overflow-hidden">
                      <div className="flex flex-1 overflow-hidden">
                        <img
                          src={article.image_1?.src}
                          alt={"Thumbnail"}
                          className="aspect-video rounded-t-md h-full w-full transition-all ease-in duration-300 hover:scale-110 "
                        />
                      </div>{" "}
                      {/* <img src={BASE_URL + article.image_1} alt='' /> */}
                      <div className="flex-1 w-full ">
                        <span className="text-xs text-primaryRed p-2 capitalize">
                          {article.type}
                        </span>
                        <p className="p-2">{article.headline}</p>
                      </div>
                    </div>
                  </Link>
                );
              }
              return <></>;
            })}
          </div>
          <Link href={"/stories"}>
            <button className="self-end px-4 underline text-primaryRed">
              More Stories
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
