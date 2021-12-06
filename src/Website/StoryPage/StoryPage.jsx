import { Button } from "@material-ui/core";
import { stories } from "../../resources/resources";
// import Header from "../Header/Header";
import "./stories.scss";

const StoryPage = ({ match }) => {
  const storyId = match.params.id;
  const story = stories.filter((story) => story.id === parseInt(storyId))[0];
  const moreStories = stories.filter((story) => story.id != parseInt(storyId));

  return (
    <div className='story-container'>
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

        <div className='more-stories'>
          <h3>Latest</h3>
          <ul>
            {moreStories.map((story) => (
              <li>
                <a href={`/stories/${story.id}`}>
                  <img src={story.img} alt='' /> <i>{story.title}</i>
                </a>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='story-wrapper'>
        <h3>{story.headline}</h3>
        <br />
        <div className='story-container'>
          <p>{story.story}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
