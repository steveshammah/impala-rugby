import { Button } from "@material-ui/core";
import { stories } from "../../resources/resources";
// import Header from "../Header/Header";
import "./stories.scss";

const StoryPage = ({ match }) => {
  const storyId = match.params.id;
  const story = stories.filter((story) => story.id === parseInt(storyId))[0];
  const moreStories = stories.filter((story) => story.id != parseInt(storyId));

  return (
    <div className='story-section'>
      <div className='story-title-container'>
        <h2>{story.title}</h2>

        <div className='story-tags'>
          {story.tags.map((tag) => (
            <span>
              <Button>{tag}</Button>
            </span>
          ))}
        </div>
      </div>
      <div className='story-image'>
        <img src={story.img} alt='' />
      </div>

      <div className='story-wrapper'>
        <div className='story-container'>
          <div className='story-content'>
            <h3>{story.headline}</h3>

            <p>{story.story}</p>
          </div>

          <div className='more-stories'>
            <h3>Latest</h3>
            <div className='news-widgets-container'>
              {moreStories.map((story) => (
                <a href={`/stories/${story.id}`} className='latest-news-widget'>
                  <img src={story.img} alt='' /> <i>{story.title}</i>
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
