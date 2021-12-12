import { Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { articlesContext } from "../contexts/articles-context";
import { photos } from "../resources/resources";

const StoryBox = () => {
  const { articles } = useContext(articlesContext);
  return (
    <Container className='home-more-stories'>
      {articles.map((story) => (
        <Link className='home-story' key={story.id} to={`/stories/${story.id}`}>
          <img src={photos.munai} alt='' />
          <div className='home-story-text'>
            <span className='story-type'>{story.type}</span>
            <p>{story.headline}</p>
          </div>
        </Link>
      ))}
      ;
      <a href='/feed/stories'>
        <Button variant='contained' className='btn'>
          View latest news
        </Button>
      </a>
    </Container>
  );
};

export default StoryBox;
