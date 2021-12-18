import { useContext, useState } from "react";
import { articlesContext } from "../../contexts/articles-context";
import "./stories.scss";

const StoryFeed = () => {
  const { articles, BASE_URL } = useContext(articlesContext);
  const [activeLink, setActiveLink] = useState("Latest");
  return (
    <div className='feeds-home'>
      <div className='feeds-container'>
        <div className='feeds-nav'>
          <h2>Latest Stories</h2>
          <ul>
            <li
              className={activeLink === "Latest" && "active"}
              onClick={() => setActiveLink("Latest")}>
              <a href='#'>Latest</a>
            </li>
            <li
              className={activeLink === "Men" && "active"}
              onClick={() => setActiveLink("Men")}>
              <a href='#'>Men</a>
            </li>
            <li
              className={activeLink === "Women" && "active"}
              onClick={() => setActiveLink("Women")}>
              <a href='#'>Women</a>
            </li>
            <li
              className={activeLink === "Swaras" && "active"}
              onClick={() => setActiveLink("Swaras")}>
              <a href='#'>Swaras</a>
            </li>
            <li
              className={activeLink === "Age Grade" && "active"}
              onClick={() => setActiveLink("Age Grade")}>
              <a href='#'>Age Grade</a>
            </li>
            <li
              className={activeLink === "Club" && "active"}
              onClick={() => setActiveLink("Club")}>
              <a href='#'>Club</a>
            </li>
          </ul>
        </div>
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
