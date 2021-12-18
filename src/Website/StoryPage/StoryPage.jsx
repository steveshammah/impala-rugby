import { Button } from "@mui/material";
// import { Link } from "react-router-dom";
import { stories, logos, photos } from "../../resources/resources";
import { useState, useEffect, useContext } from "react";
import { articlesContext } from "../../contexts/articles-context";

// import Header from "../Header/Header";
import "./stories.scss";

const StoryPage = ({ match }) => {
  const storyId = match.params.id;
  const { articles, BASE_URL } = useContext(articlesContext);

  const [article, setArticle] = useState({});
  const [tags, setTags] = useState([]);
  useEffect(() => {
    fetchArticle();
    console.log(article.tags);
  }, []);

  // Call to DB
  const fetchArticle = async () => {
    const url = `${BASE_URL}/api/articles/${storyId}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Data", data);
      setArticle(data);

      // Seperate String from DB to list of tags
      const tags = data.tags.split(",");
      setTags(tags);
    } catch (error) {
      console.log("Error Occured:", error);
    }
  };

  const moreStories = articles.filter(
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

          <img src={BASE_URL + article.image_1} alt='' />
          <i>{article.caption_1}</i>
        </div>
      </div>

      <div className='story-wrapper'>
        <div className='story-tags'>
          <strong>Tags:</strong>

          {tags.map((tag) => (
            <span>
              <Button>{tag}</Button>
            </span>
          ))}
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

            <p>{article.content_1}</p>

            <div className='story-image small'>
              <div className='shadow-container'></div>

              <img src={BASE_URL + article.image_2} alt='' />
              <i>{article.caption_2}</i>
            </div>

            <p>{article.content_2}</p>
          </div>

          <div className='more-stories'>
            <h3>Latest</h3>
            <div className='news-widgets-container'>
              {moreStories.map((article) => (
                <a
                  href={`/stories/${article.id}`}
                  className='latest-news-widget'>
                  <img src={BASE_URL + article.image_1} alt='' />{" "}
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
