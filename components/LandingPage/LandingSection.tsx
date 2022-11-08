import React, { FC } from "react";
import Link from "next/link";
import { useArticlesStore, IArticle } from "../../stores/articleStore";
import { logos } from "../../public/resources/resources";

const LandingSection: FC = () => {
  const articles = useArticlesStore((state) => state.articles);

  const latestArticle: IArticle = articles[0];

  return (
    <div className="flex w-screen p-4">
      <div className="flex w-full sm:flex-col md:flex-col lg:flex-row flex-col p-2 rounded-md">
        {/* Main story */}
        <Link href={`/stories/${encodeURIComponent(latestArticle?.id)}`}>
          <div className="flex-1 cursor-pointer rounded-t-md bg-blackX ">
            <div className="flex flex-col rounded-t-md p-1">
              <span className="text-xs text-primaryRed p-2 capitalize">
                {latestArticle?.type}
              </span>
              <h2 className="font-bold sm:p-3 p-0 text-whiteX sm:text-4xl text-2xl text-center w-full capitalize">
                {latestArticle?.title}
              </h2>
            </div>
            <div className="flex justify-center px-2 overflow-hidden">
              <img
                className="aspect-video w-11/12 h-full hover:scale-110 transition-all ease-in duration-300 object-fill overflow-hidden"
                src={
                  latestArticle?.image_2?.src
                    ? latestArticle.image_1.src
                    : logos?.impalaLogo?.src
                }
                alt={latestArticle?.caption_1}
              />
            </div>
          </div>
        </Link>

        <div className="flex flex-col flex-1 h-full justify-between">
          <div className="flex flex-wrap justify-between items-center">
            {articles?.map((article, index) => {
              if (index < 7 && index != 0) {
                return (
                  <Link
                    key={index}
                    href={`/stories/${encodeURIComponent(article.id)}`}
                  >
                    <div className="shadow-md sm:h-60 h-40 sm:w-56 w-full bg-white-400 sm:m-4 m-1 rounded-md flex sm:flex-col flex-row hover:shadow-lg cursor-pointer overflow-hidden">
                      <div className="flex flex-1 overflow-hidden">
                        <img
                          src={
                            article.image_1?.src
                              ? article.image_1.src
                              : logos.impalaLogo.src
                          }
                          alt={"Thumbnail"}
                          className="aspect-video object-contain rounded-t-md h-full w-full transition-all ease-in duration-300 hover:scale-110 "
                        />
                      </div>
                      <div className="flex-1 w-full ">
                        <span className="text-xs text-primaryRed p-2 capitalize">
                          {article.type}
                        </span>
                        <p className="p-2 capitalize">{article.headline}</p>
                      </div>
                    </div>
                  </Link>
                );
              }
              return null;
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
