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
  useEffect(() => {
    fetchArticle();
  }, []);

  // Call to DB
  const fetchArticle = async () => {
    const url = `${BASE_URL}/api/articles/${storyId}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Data", data);
      setArticle(data);
    } catch (error) {
      console.log("Error Occured:", error);
    }
  };
  // const story = stories.filter((story) => story.id === parseInt(storyId))[0];
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
        </div>
      </div>

      <div className='story-wrapper'>
        {/* <div className='story-tags'>
          <strong>Tags:</strong>
          {article.tags.map((tag) => (
            <span>
              <Button>{tag}</Button>
            </span>
          ))}
        </div> */}
        <div className='story-author'>
          <div className='author-image'>
            <img src={logos.impalaLogo1} alt='' />
            <strong>{article.author}</strong>
            <i className='author-meta'>{article.created}</i>
          </div>
        </div>
        <div className='story-container'>
          <div className='story-content'>
            <h3>{article.headline}</h3>
            <div className='story-image'>
              <div className='shadow-container'></div>

              <img src={BASE_URL + article.image_2} alt='' />
            </div>
            <p>{article.content}</p>
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
