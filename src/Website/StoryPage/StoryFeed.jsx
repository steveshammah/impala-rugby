import { useContext } from "react";
import { articlesContext } from "../../contexts/articles-context";
import { photos } from "../../resources/resources";
// import { stories } from "../../resources/resources";
import "./stories.scss";

const StoryFeed = () => {
  const { articles, BASE_URL } = useContext(articlesContext);
  return (
    <div className='feeds-home'>
      <div className='feeds-container'>
        {/* <span className='story-type'>Feeds</span> */}
        <h2>Latest Stories</h2>

        <div className='feeds-section'>
          {articles.map((article) => (
            <a href={`/stories/${article.id}`} className='feed-story'>
              <div className='feed-img-wrapper'>
                <img src={BASE_URL + article.image_1} alt='' />
              </div>
              <div className='feed-story-text'>
                <span className='story-type'>{article.type}</span>
                <h3>{article.title}</h3>
                <p>{article.headline}</p>
                <span className='date-created'>{article.dateCreated}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryFeed;
