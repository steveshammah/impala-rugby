// import { Button } from "@mui/material";

import { logos, localArticles } from "../../public/resources/resources";
import { useState, useEffect, useContext } from "react";
// import { articlesContext } from "../../contexts/articles-context";

// import Header from "../Header/Header";
// import "./stories.scss";
import { useRouter } from 'next/router'

const StoryPage = () => {
  const router = useRouter()
  const storyId = router && parseInt(router.query.id);
  console.log({ router })
  // const { articles, BASE_URL } = useContext(articlesContext);

  const [article, setArticle] = useState({});
  // const [tags, setTags] = useState([]);

  const data = localArticles.filter((story) => {
    return story.id === storyId
  });

  useEffect(() => {
    setArticle(...data);

    // fetchArticle();
  }, [storyId]);

  // Call to DB
  // eslint-disable-next-line
  const fetchArticle = async () => {
    const url = `${"BASE_URL"}/api/articles/${storyId}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      // setArticle(data);

      // Seperate String from DB to list of tags
      const tagsList = data.tags.split(",");
      // setTags(tagsList);
    } catch (error) {
      console.log("Error Occured:", error);
    }
  };

  // const moreStories = articles.filter(
  //   (story) => story.id !== parseInt(storyId)
  // );
  const moreStories = localArticles.filter(
    (story) => story.id !== parseInt(storyId)
  );

  return (
    <div className='story-section'>
      <div className='heading-wrapper'>
        <div className='story-title-container'>
          <h2>{article.title}</h2>
        </div>
        <div className='story-image'>
          <div className='shadow-container'></div>

          {/* <img src={BASE_URL + article.image_1} alt='' /> */}
          <img src={article.image_1} alt='' />
          <i>Caption goes here</i>
          {/* <i>{article.caption_1}</i> */}
        </div>
      </div>

      <div className='story-wrapper'>
        <div className='story-tags'>
          <strong>Tags: </strong>
          {/* 
          {article.tags.split(",").map((tag) => (
            <span>
              <Button>{tag}</Button>
            </span>
          ))} */}
          &nbsp;&nbsp;
          <i> {article.tags}</i>
        </div>
        <div className='story-author'>
          <div className='author-image'>
            <img src={logos.impalaLogo1} alt='' />
            <strong>{article.author}</strong>
            {/* UTC time conversion to string */}
            <i className='author-meta'>
              {new Date(article.created).toUTCString().slice(0, 16)}
            </i>
          </div>
        </div>
        <div className='story-container'>
          <div className='story-content'>
            <h3>{article.headline}</h3>

            {/* <p>{article.content_1}</p> */}
            <p>
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

            <div className='story-image small'>
              <div className='shadow-container'></div>

              {/* <img src={BASE_URL + article.image_2} alt='' /> */}
              <img src={article.image_2} alt='' />
              {/* <i>{article.caption_2}</i> */}
              <i>Caption goes here</i>
            </div>

            {/* <p>{article.content_2}</p> */}
            <p>
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

          <div className='more-stories'>
            <h3>More Stories</h3>
            <div className='news-widgets-container'>
              {moreStories.map((article) => (
                <div

                  className='latest-news-widget'
                  onClick={() => { router.push(`/stories/${encodeURIComponent(article.id)}`) }}
                >
                  <img src={article.image_1} alt='' />
                  {/* <img src={BASE_URL + article.image_1} alt='' /> */}
                  <i>{article.title}</i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
