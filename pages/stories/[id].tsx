import { logos } from "@public/resources/resources";
import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { MdShare } from "react-icons/md";
import { useArticlesStore } from "@stores/articleStore";
import { eventLogger, formatDate } from "@utils/utils";
import Link from "next/link";
import Image from "@components/Image";

const StoryPage = () => {
  const router = useRouter();
  const storyId = String(router.query.id);
  const articles = useArticlesStore((state) => state.articles);
  const getArticle = useArticlesStore((state) => state.getArticle);
  const article = useArticlesStore((state) => state.article);

  const moreStories = useMemo(
    () => articles?.filter((story) => story.label !== storyId),
    [storyId]
  );

  useEffect(() => {
    storyId && getArticle(storyId);
  }, [storyId]);

  useEffect(() => {
    eventLogger({
      event: `View story: ${storyId}`,
    });
  }, []);
  return (
    <div className="w-full flex-col h-full items-center sm:pt-0 pt-10">
      <div className="relative w-full sm:h-[calc(100vh-70px)] h-auto overflow-hidden">
        <div className="flex absolute bottom-6">
          <h2 className="p-2 text-center uppercase text-blackX sm:text-5xl text-3xl font-bold transition-all ease-in  bg-whiteX bg-opacity-50">
            {article?.title}
          </h2>
        </div>
        <div className="items-center w-full flex flex-col overflow-hidden ">
          <Image
            src={article?.tags ? article.tags : "floodies"}
            alt="Story Image"
            className="object-fill h-full w-full aspect-video bg-opacity-50"
          />

          <i>{article?.caption_1}</i>
        </div>
      </div>

      <div className="story flex flex-col items-center w-full p-4">
        <div className="sm:w-1/2 w-full flex items-center mb-2">
          <strong>Tags: </strong>
          {article?.tags?.split(",").map((tag: string, index: number) => (
            <span key={index}>
              <i className="rounded-md cursor-pointer bg-primaryRed text-white text-xs p-1 m-1 capitalize">
                {tag}
              </i>
            </span>
          ))}
        </div>
        <div className="h-full sm:w-1/2 w-full flex cursor-pointer">
          <div className="h-full w-full flex items-center justify-around">
            <img
              src={logos.impalaLogo1?.src}
              alt=""
              className="h-12 w-12 rounded-full shadow-lg"
            />
            <strong className="ml-3">
              {article?.author ? article.author : "Impala Media"}
            </strong>

            <i className="text-sm flex-1 text-right">
              {article?.created &&
                article?.created &&
                formatDate(article.created?.seconds * 1000, "dd-MM-yyyy")}
            </i>
          </div>
        </div>
        <div className="flex flex-col items-center sm:w-4/5 w-full mt-10">
          <div className="flex-grow items-start flex flex-col">
            <h3 className="mb-2  sm:text-4xl text-2xl font-semibold text-center capitalize">
              {article?.headline}
            </h3>

            <p
              className="mb-4 text-lg leading-9 tracking-widest"
              dangerouslySetInnerHTML={{ __html: article?.content_1 }}
            ></p>

            <div className="story-image small items-center w-full flex flex-col overflow-hidden mb-4">
              <img
                src={
                  article?.image_2?.src
                    ? article.image_2.src
                    : logos?.impalaLogo?.src
                }
                alt="Secondary Photo"
                className="object-fill h-90 w-3/5 aspect-video rounded-md"
              />
              <i className="shadow-lg w-full text-blackX">
                {article?.caption_2}
              </i>
            </div>

            <p
              className="mb-4 text-lg leading-9 tracking-widest"
              dangerouslySetInnerHTML={{ __html: article?.content_2 }}
            ></p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full  m-2 mt-10">
        <div className="w-[80%] flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-primaryRed w-full my-2">
            More Stories
          </h3>
          <div className="flex w-full h-full justify-around flex-wrap">
            {moreStories.map((article, index) => (
              <Link
                key={index}
                href={`/stories/${encodeURIComponent(article.id)}`}
                className={`${index > 5 && "hidden"}`}
              >
                <div className="w-80 h-32 flex rounded-md  m-2 shadow-md items-start">
                  <Image
                    src={article.tags ? article.tags : "impalaLogo"}
                    className="object-fill aspect-video w-[40%] rounded-l-md h-full"
                    alt={index + "story image"}
                  />

                  <div className="flex flex-col justify-between h-full  w-2/3 pt-1">
                    <div className="flex flex-col p-1">
                      <span className="text-[10px] text-primaryRed  capitalize">
                        {article.type}
                      </span>
                      <i className="text-blackX uppercase text-sm">
                        {article.title}
                      </i>
                    </div>
                    <div className="flex-1 p-2 z-10 relative text-blackX w-full">
                      <span className="date-created absolute bottom-2 left-2 font-medium text-xs">
                        {formatDate(article?.created?.seconds * 1000)}
                      </span>

                      <span className="absolute bottom-2 right-2 font-bold text-md cursor-pointer">
                        <MdShare />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
