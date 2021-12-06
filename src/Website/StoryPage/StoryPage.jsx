import { stories } from "../../resources/resources";
import "./stories.scss";

const StoryPage = ({ match }) => {
  console.log(match);
  const storyId = match.params.id;
  const story = stories.filter((story) => story.id === parseInt(storyId))[0];
  console.log(story);
  return (
    <div className='story-container'>
      <div className='story-image'>
        <img src={story.img} alt='' />
        <h2>{story.title}</h2>
      </div>
      <div className='story-wrapper'>
        <h3>{story.headline}</h3>
        <br />
        <div className='story-container'>
          <p>{story.story}</p>
        </div>
        .
      </div>
    </div>
  );
};

export default StoryPage;
