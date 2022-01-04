import { Button } from "@mui/material";
// import { Link } from "react-router-dom";
import { logos, localArticles } from "../../resources/resources";
import { useState, useEffect, useContext } from "react";
// import { articlesContext } from "../../contexts/articles-context";

// import Header from "../Header/Header";
import "./stories.scss";

const StoryPage = ({ match }) => {
  const storyId = match.params.id;
  // const { articles, BASE_URL } = useContext(articlesContext);

  const [article, setArticle] = useState({});
  const [tags, setTags] = useState([]);

  const data = localArticles.filter((story) => {
    return story.id === parseInt(storyId);
  });

  useEffect(() => {
    setArticle(...data);

    // fetchArticle();
  }, []);

  // Call to DB
  // eslint-disable-next-line
  const fetchArticle = async () => {
    const url = `${"BASE_URL"}/api/articles/${storyId}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log("Data", data);
      setArticle(data);

      // Seperate String from DB to list of tags
      const tags = data.tags.split(",");
      setTags(tags);
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
          <i>{article.caption_1}</i>
        </div>
      </div>

      <div className='story-wrapper'>
        <div className='story-tags'>
          <strong>Tags:</strong>
          {/* 
          {article.tags.split(",").map((tag) => (
            <span>
              <Button>{tag}</Button>
            </span>
          ))} */}

          <i>{article.tags}</i>
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
              tempore atque unde eum quo! Quod assumenda quos sunt repellat
              itaque delectus! Labore laborum necessitatibus impedit consectetur
              voluptates tempore quia, fugit atque recusandae fuga adipisci ut
              mollitia modi, earum nostrum porro. Quasi deleniti, quaerat ea
              officiis veritatis architecto ad quod, hic, odio praesentium totam
              dignissimos! Similique laboriosam cumque perspiciatis pariatur est
              numquam eum ad consequuntur, maiores quas! Dicta minus nemo ipsa,
              rem sint sed pariatur minima aut laborum repellat eveniet!
            </p>

            <div className='story-image small'>
              <div className='shadow-container'></div>

              {/* <img src={BASE_URL + article.image_2} alt='' /> */}
              <img src={article.image_2} alt='' />
              <i>{article.caption_2}</i>
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
          </div>

          <div className='more-stories'>
            <h3>More Stories</h3>
            <div className='news-widgets-container'>
              {moreStories.map((article) => (
                <a
                  href={`/stories/${article.id}`}
                  className='latest-news-widget'>
                  <img src={article.image_1} alt='' />
                  {/* <img src={BASE_URL + article.image_1} alt='' /> */}
                  <i>{article.title}</i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
