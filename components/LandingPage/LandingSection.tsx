import React, { FC } from "react";
import Link from "next/link";
import { useArticlesStore, IArticle } from "@stores/articleStore";
import Image from "@components/Image";
import LoadingScreen from "@components/Loader";

const LandingSection: FC = () => {
  const articles = useArticlesStore((state) => state.articles);

  const latestArticle: IArticle = articles[0];

  return (
    <div className="flex w-screen p-4">
      <div className="flex w-full sm:flex-col md:flex-col lg:flex-row flex-col p-2 rounded-md">
        {/* Main story */}
        {articles.length > 0 ? (
          <>
            <Link
              href={`/stories/${encodeURIComponent(latestArticle?.id)}`}
              className="flex-1 cursor-pointer rounded-t-md bg-blackX "
            >
              <div className="flex flex-col rounded-t-md p-1">
                <span className="text-xs text-primaryRed p-2 capitalize">
                  {latestArticle?.type}
                </span>
                <h2 className="font-bold sm:p-3 p-0 text-whiteX sm:text-4xl text-2xl text-center w-full capitalize">
                  {latestArticle?.title}
                </h2>
              </div>
              <div className="flex justify-center px-2 overflow-hidden">
                <Image
                  className="aspect-video w-11/12 h-full hover:scale-110 transition-all ease-in duration-300 object-fill overflow-hidden"
                  src={latestArticle?.tags ? latestArticle.tags : "impalaLogo"}
                  alt={latestArticle?.caption_1}
                />
              </div>
            </Link>

            <div className="flex flex-col flex-1 h-full justify-between">
              <div className="grid grid-cols-2 gap-10">
                {/* <div className="flex flex-wrap justify-between items-center"> */}
                {articles?.map((article, index) => {
                  if (index < 5 && index != 0) {
                    return (
                      <Link
                        key={index}
                        href={`/stories/${encodeURIComponent(article.id)}`}
                        className="shadow-md  h-72  bg-white-400 sm:m-4 m-1 rounded-md flex sm:flex-col flex-row hover:shadow-lg cursor-pointer overflow-hidden"
                      >
                        <div className="flex flex-1 overflow-hidden">
                          <Image
                            src={article?.tags ? article.tags : "impalaLogo"}
                            alt={"Thumbnail"}
                            className="aspect-video object-cover rounded-t-md h-full w-full transition-all ease-in duration-300 hover:scale-110 "
                          />
                        </div>
                        <div className="h-[40%] w-full ">
                          <span className="text-xs text-primaryRed p-2 capitalize">
                            {article.type}
                          </span>
                          <p className="p-2 capitalize font-semibold text-lg">
                            {article.headline}
                          </p>
                        </div>
                      </Link>
                    );
                  }
                  return null;
                })}
              </div>
              <Link href={"/stories"}>
                <button className="text-md self-end px-4 underline text-primaryRed">
                  More Stories
                </button>
              </Link>
            </div>
          </>
        ) : (
          <LoadingScreen />
        )}
      </div>
    </div>
  );
};

export default LandingSection;
