import { logos } from "../../public/resources/resources";
import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from "react";
import { useRouter } from "next/router";
import { articlesContext } from "../../contexts/articles-context";
import { MdShare } from "react-icons/md";

const StoryPage = () => {
  const router = useRouter();
  const storyId = parseInt(router.query.id);
  const { articles, BASE_URL } = useContext(articlesContext);

  const [article, setArticle] = useState<any>({});
  // const [tags, setTags] = useState([]);

  const data = useMemo(() => {
    const article = articles.filter((story) => {
      return story.id === storyId;
    });
    return article;
  }, [articles, storyId]);

  // Call to DB
  // eslint-disable-next-line
  // const fetchArticle = useCallback(async () => {
  //   const url = `${"BASE_URL"}/api/articles/${storyId}`;
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();

  //     // Seperate String from DB to list of tags
  //     const tagsList = data.tags.split(",");
  //     // setTags(tagsList);
  //   } catch (error) {
  //     setArticle({ ...data });
  //     console.log("Error Occured:", error);
  //   }
  // }, [data, storyId]);

  useEffect(() => {
    // setArticle(articles.filter((story) => story.id === storyId)[0]);
    setArticle(data[0]);
    // fetchArticle();
  }, [storyId]);

  // const moreStories = articles.filter(
  //   (story) => story.id !== parseInt(storyId)
  // );
  const moreStories = articles.filter((story) => story.id !== storyId);

  return (
    <div className="w-full flex-col h-full items-center -mt-20">
      <div className="relative w-full h-screen overflow-hidden">
        <div className="flex absolute bottom-3">
          <h2 className="p-2 text-center uppercase text-whiteX text-5xl font-bold">
            {article?.title}
          </h2>
        </div>
        <div className="items-center w-full flex flex-col overflow-hidden ">
          {/* <div className="shadow-container"></div> */}

          {/* <img src={BASE_URL + article.image_1} alt='' /> */}
          <img
            src={article?.image_1?.src}
            alt="Story Image"
            className="object-cover h-full w-full aspect-video "
          />
          <i>Caption goes here</i>
          {/* <i>{article.caption_1}</i> */}
        </div>
      </div>

      <div className="flex flex-col items-center w-full p-4">
        <div className="w-1/2 flex items-center mb-2">
          <strong>Tags: </strong>
          {article?.tags?.split(",").map((tag) => (
            <span>
              <i className="rounded-md cursor-pointer bg-primaryRed text-white p-1 m-1">
                {tag}
              </i>
            </span>
          ))}
          &nbsp;&nbsp;
          {/* <i className="">{article.tags}</i> */}
        </div>
        <div className="h-full w-1/2 flex cursor-pointer">
          <div className="h-full w-full flex items-center justify-around">
            <img
              src={logos.impalaLogo1?.src}
              alt=""
              className="h-12 w-12 rounded-full shadow-lg"
            />
            <strong className="ml-3">{article?.author}</strong>
            {/* UTC time conversion to string */}
            <i className="text-sm flex-1 text-right">
              {new Date(article?.created).toUTCString().slice(0, 16)}
            </i>
          </div>
        </div>
        <div className="flex flex-col items-center w-4/5 mt-10">
          <div className="flex-grow items-start flex flex-col">
            <h3 className="mb-2  text-4xl font-semibold text-center">
              {article?.headline}
            </h3>

            {/* <p>{article.content_1}</p> */}
            <p className="mb-4 text-lg leading-9 tracking-widest">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
              distinctio aut reiciendis! Iste quae ut ratione deleniti dolore
              ipsa odio reprehenderit repellendus distinctio, ipsam ducimus.
              Sequi optio dolorem reiciendis cumque ad error doloribus neque!
              Odio deleniti ratione, illo dolor fuga consequuntur unde eos quod
              vel accusamus, totam consectetur veniam quidem eaque rem nam
              praesentium mollitia odit nostrum alias voluptate dolorum tenetur!
              Dolorum tenetur quasi sequi eaque voluptatum laborum quis eius!
              Alias et harum corrupti perferendis? Optio in error hic delectus
              molestiae excepturi aliquam. Ullam voluptas modi velit,
              consequatur quas obcaecati praesentium officiis numquam ut
              delectus consequuntur, maxime unde et cumque dolorum perferendis
              quae, quidem est commodi nihil similique! Impedit quasi quaerat,
              nam in minus, et explicabo corrupti voluptatibus architecto omnis
              enim ipsa nisi libero suscipit sequi? Harum atque ullam voluptates
              itaque sunt? Expedita repudiandae consequatur eligendi nisi
              recusandae blanditiis tempore modi. Reiciendis non sunt expedita
              laborum magni illo, quod natus harum at praesentium, architecto
              sint? Accusamus enim, fugiat ullam mollitia aut architecto.
              Aperiam enim distinctio architecto repellat? Inventore ratione
              explicabo totam quaerat rem placeat ipsum dolorem dignissimos
              repudiandae dicta, at cupiditate, incidunt eius nihil officiis
              aliquid et harum quasi? Exercitationem, dolorum. Odit cum quos
              illum modi molestias ipsa quisquam rerum et officia sapiente
              dicta, magnam eos eius ullam! Totam perspiciatis quaerat
              cupiditate, dolore quidem dignissimos neque ea veniam ex impedit
              rerum voluptates numquam ad possimus modi cumque hic, quis nam
              tempore atque unde eum quo!
            </p>

            <div className="story-image small items-center w-full flex flex-col overflow-hidden mb-4">
              {/* <div className="shadow-container"></div> */}

              {/* <img src={BASE_URL + article.image_2} alt='' /> */}
              <img
                src={article?.image_2?.src}
                alt="Secondary Photo"
                className="object-fill h-90 w-3/5 aspect-video rounded-md"
              />
              {/* <i>{article.caption_2}</i> */}
              <i className="shadow-lg w-full text-blackX">
                Caption about the post goes here
              </i>
            </div>

            {/* <p>{article.content_2}</p> */}
            <p className="mb-4 text-lg leading-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
              distinctio aut reiciendis! Iste quae ut ratione deleniti dolore
              ipsa odio reprehenderit repellendus distinctio, ipsam ducimus.
              Sequi optio dolorem reiciendis cumque ad error doloribus neque!
              Odio deleniti ratione, illo dolor fuga consequuntur unde eos quod
              vel accusamus, totam consectetur veniam quidem eaque rem nam
              praesentium mollitia odit nostrum alias voluptate dolorum tenetur!
              Dolorum tenetur quasi sequi eaque voluptatum laborum quis eius!
              Alias et harum corrupti perferendis? Optio in error hic delectus
              molestiae excepturi aliquam. Ullam voluptas modi velit,
              consequatur quas obcaecati praesentium officiis numquam ut
              delectus consequuntur, maxime unde et cumque dolorum perferendis
              quae, quidem est commodi nihil similique! Impedit quasi quaerat,
              nam in minus, et explicabo corrupti voluptatibus architecto omnis
              enim ipsa nisi libero suscipit sequi? Harum atque ullam voluptates
              itaque sunt? Expedita repudiandae consequatur eligendi nisi
              recusandae blanditiis tempore modi. Reiciendis non sunt expedita
              laborum magni illo, quod natus harum at praesentium, architecto
              sint. Accusamus enim, fugiat ullam mollitia aut architecto.
              Aperiam enim distinctio architecto repellat?
            </p>
          </div>

          <div className="flex w-full flex-col m-2">
            <h3 className="text-3xl font-bold text-primaryRed">More Stories</h3>
            <div className="flex w-full h-full justify-around flex-wrap">
              {moreStories.map(
                (article, index) =>
                  index < 9 && (
                    <div
                      key={index}
                      className="latest-news-widget w-80 h-32 flex rounded-md  m-2 flex-wrap shaddow-md bg-blackX items-start"
                      onClick={() => {
                        router.push(
                          `/stories/${encodeURIComponent(article.id)}`
                        );
                      }}
                    >
                      <img
                        src={article.image_1?.src}
                        alt={index + "story image"}
                        className="object-cover aspect-video w-1/3 rounded-l-md h-full"
                      />
                      {/* <img src={BASE_URL + article.image_1} alt='' /> */}
                      <div className="flex flex-col justify-between h-full  w-2/3 pt-1">
                        <div className="flex flex-col p-1">
                          <span className="text-xs text-primaryRed  capitalize">
                            {article.type}
                          </span>
                          <i className="text-whiteX">{article.title}</i>
                        </div>
                        <div className="flex-1 p-2 z-10 relative text-whiteX w-full">
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
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
