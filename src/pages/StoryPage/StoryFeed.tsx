import {  useState, useEffect } from "react";
// import { articlesContext } from "../../contexts/articles-context";
import { localArticles } from "../../resources/resources";
import "./stories.scss";

const StoryFeed = () => {
  // const { articles, BASE_URL } = useContext(articlesContext);
  const [displayArticles, setDisplayArticles] = useState([{}]);
  const [activeLink, setActiveLink] = useState("Latest");

  useEffect(() => {
    const filteredArticles = localArticles.filter((article) =>
      article.tags.includes(activeLink)
    );
    setDisplayArticles(
      activeLink === "Latest" ? localArticles : filteredArticles
    );
  }, [activeLink]);

  const handleClick = (details) => {
    setActiveLink(details);
  };

  return (
    <div className='feeds-home'>
      <div className='feeds-container'>
        <div className='feeds-nav'>
          <h2>Latest Stories</h2>
          <ul>
            <li
              className={activeLink === "Latest" && "active"}
              onClick={() => handleClick("Latest")}>
              <a href='#'>Latest</a>
            </li>
            <li
              className={activeLink === "Men" && "active"}
              onClick={() => handleClick("Men")}>
              <a href='#'>Men</a>
            </li>
            <li
              className={activeLink === "Women" && "active"}
              onClick={() => handleClick("Women")}>
              <a href='#'>Women</a>
            </li>
            <li
              className={activeLink === "Swaras" && "active"}
              onClick={() => handleClick("Swaras")}>
              <a href='#'>Swaras</a>
            </li>
            <li
              className={activeLink === "Academy" && "active"}
              onClick={() => handleClick("Academy")}>
              <a href='#'>Academy</a>
            </li>
            <li
              className={activeLink === "Club" && "active"}
              onClick={() => handleClick("Club")}>
              <a href='#'>Club</a>
            </li>
          </ul>
        </div>
        <div className='feeds-section'>
          {displayArticles.map((article) => (
            <a href={`/stories/${article.id}`} className='feed-story'>
              <div className='feed-img-wrapper'>
                <img src={article.image_1} alt='' />
                {/* <img src={BASE_URL + article.image_1} alt='' /> */}
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
