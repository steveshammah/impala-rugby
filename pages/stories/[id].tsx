import { logos } from "../../public/resources/resources";
import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { MdShare } from "react-icons/md";
import { useArticlesStore } from "../../stores/articleStore";
import { formatDate } from "../../utils";
import Link from "next/link";
import Image from "../../components/Image";

const StoryPage = () => {
  const router = useRouter();
  const storyId = String(router.query.id);
  const articles = useArticlesStore((state) => state.articles);
  const getArticle = useArticlesStore((state) => state.getArticle);
  const article = useArticlesStore((state) => state.article);
  const text = `
<p>
The weekend saw the commencement of the Kenya Cup, Championship and Nation-
Wide Leagues with various matches being played across the country. For Impala, 
the first challenge in the Championship saw them face Zetech Oaks at home for the 
season opener. This proved to be a day of mixed emotions for the home side as 
both side shared late penalties with the Thika Road side pulling off the late winner. 
Impala went ahead through a penalty from Johnson Waiganjo before number 8 
Aaron Adhanja went over the line with a powerful drive to extend the lead with 
Waiganjo adding the extra two.  The visitors were quick to respond with a try from 
the winger Mark Demba with the conversion being unsuccessful. This ensured a 13 –
5 lead for the home side at the break. </p>
<br />
<p>The resumption of the game would see Zetech come into the match with renewed vigor landing a quick try off the bat. 
Zetech second row Felix Ouma was on the spot with a drive to cut the lead to 13-10 
with fly-half Johnson Wafula adding the extra two points from the tee to make it a 
one point game. Relentless attack from the away side saw Oaks land a penalty 
which was converted successfully by the fly-half taking Zetech into the lead for the 
first time with a two point advantage. The battle for the supremacy would ensue 
with both teams putting in spirited attacks with no success. Impala second row Carl 
Siambe was sent to the bin with just over twenty minutes to play and upon his 
resumption, Zetech scrum-half Frank Oduor was also handed a yellow card.</p>
<p> The trend continued with Zetech fullback Brian Ombogo also being sent to the bin with 
five minutes to play. The battle for the win would get heated in the final stages as 
Impala landed a penalty in their opponents’ 40 with James Mwangi stepping up to 
take it. The subsequent kick was successful taking the home side into a one point 
lead. Jubilation, however, would be cut short as a mistake by Impala after the kickoff
would see them equally concede a penalty in their own 40 with replacement hooker 
Jayson Michael shown the yellow card. The Zetech kicker making no mistakes split 
the post to give his side their first win of the season. </p>

<br />
<p>For Impala it is a rocky start to a season in the Championship having ten more games to go until the end of the 
season to try and make a bid for their return to the Kenya Cup. With a youthful side 
Impala is going to have to make their case against opponents yet to come. Impala 
face Daystar Falcons in an away match, USIU at home and will conclude the first 
part of the season before the Christmas break with a tour to face Kisumu RFC. 
</p>

<br />

<div style={{display: 'flex'}}>

<strong>Impala</strong>
<br/>
1. Joseph Munyaka 2. Maxwell Otieno 3. Brian Ochieng 4. Victor Imela 5. Caleb 
Siambe 6. Evans Omondi 7. Cosmas Valentino 8. Aaron Adhanja 
9. James Mwangi 10. Johnson Waiganjo 11. Derrick Kinyari 12. Daniel Dindi 13. 
Churchill Obat 14. Samuel Maina 15. Patrick Mutuku 
16. Jayson Michael 17. Warren Akaranga 18. Eric Kiai 19. Richard Asante 20. 
Clinton Musonye 
21. Wilfred Odhiambo 22. Stephen Muisyo 23. Mofat Omondi

<br/><br/>


<strong>Zetech Oaks (Away)</strong>
<br/>
1. Evans Kilura 2. Hope Dihary 3. Eugene Odhiambo 4. Wyclif Ochoro 5. Felix Ouma
6. Augustine Simiyu 7. Mike Wekesa 8. Shaqil Ondogo 
9. Frank Oduor 10. Johnson Wafula 11. Ken Wafula 12. Rafael Wanga 13. Oliver 
Kilibwa 14. Mark Demba 15. Brian Ombogo 
16. Sammy Odhiambo 17. Wilson Mwangi 18. Isaac Odhiambo 19. Ian Adeya 20. 
Noah Tochora 
21. Goorgil Kodi 22. Jack Mangalo 23. Anderson Oduor
  `;

  const moreStories = useMemo(
    () => articles?.filter((story) => story.label !== storyId),
    [storyId]
  );

  useEffect(() => {
    storyId && getArticle(storyId);
  }, [storyId]);

  return (
    <div className="w-full flex-col h-full items-center sm:pt-0 pt-10">
      <div className="relative w-full sm:h-screen h-full overflow-hidden">
        <div className="flex absolute sm:bottom-28 bottom-6">
          <h2 className="p-2 text-center uppercase text-whiteX sm:text-5xl text-3xl font-bold transition-all ease-in">
            {article?.title}
          </h2>
        </div>
        <div className="items-center w-full flex flex-col overflow-hidden ">
          <Image
            src={article?.tags ? article.tags : "floodies"}
            alt="Story Image"
            className="object-fill h-full w-full aspect-video "
          />

          <i>{article?.caption_1}</i>
        </div>
      </div>

      <div className="flex flex-col items-center w-full p-4">
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
            <strong className="ml-3">{article?.author}</strong>

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

          <div className="flex w-full flex-col m-2">
            <h3 className="text-3xl font-bold text-primaryRed">More Stories</h3>
            <div className="flex w-full h-full justify-around flex-wrap">
              {moreStories.map(
                (article, index) =>
                  index < 9 && (
                    <Link
                      key={index}
                      href={`/stories/${encodeURIComponent(article.id)}`}
                    >
                      <div className="w-80 h-32 flex rounded-md  m-2 flex-wrap shaddow-md bg-blackX items-start">
                        <img
                          src={
                            article?.image_1?.src
                              ? article.image_1.src
                              : logos?.impalaLogo?.src
                          }
                          alt={index + "story image"}
                          className="object-contain aspect-video w-1/3 rounded-l-md h-full"
                        />

                        <div className="flex flex-col justify-between h-full  w-2/3 pt-1">
                          <div className="flex flex-col p-1">
                            <span className="text-xs text-primaryRed  capitalize">
                              {article.type}
                            </span>
                            <i className="text-whiteX uppercase text-sm">
                              {article.title}
                            </i>
                          </div>
                          <div className="flex-1 p-2 z-10 relative text-whiteX w-full">
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
