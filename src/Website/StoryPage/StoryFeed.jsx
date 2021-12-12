import { useState, useEffect, useContext } from "react";
import { articlesContext } from "../../contexts/articles-context";
// import { stories } from "../../resources/resources";
import "./stories.scss";

const StoryFeed = () => {
  const { articles } = useContext(articlesContext);
  // Initial state: Empty Array of objects --> Response from DB
  const [dbArticles, setDbArticles] = useState([{}]);
  useEffect(() => {
    setDbArticles(articles);
  }, []);

  // // Call to DB
  // const fetchArticles = async () => {
  //   const url = "http://localhost:8000/articles/";
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setArticles(data);
  //   } catch (error) {
  //     console.log("Error Occured:", error);
  //   }
  // };

  return (
    <div className='feeds-home'>
      <div className='feeds-container'>
        {/* <span className='story-type'>Feeds</span> */}
        <h2>Latest Stories</h2>

        <div className='feeds-section'>
          {articles.map((story) => (
            <a href={`/stories/${story.id}`} className='feed-story'>
              <div className='feed-img-wrapper'>
                <img src={story.img} alt='' />
              </div>
              <div className='feed-story-text'>
                <span className='story-type'>{story.type}</span>
                <h3>{story.title}</h3>
                <p>{story.headline}</p>
                <span className='date-created'>{story.dateCreated}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryFeed;
