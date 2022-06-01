import { Container, Button } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
import { articlesContext } from "../../src/contexts/articles-context";

const StoryBox = () => {
  const { articles, BASE_URL } = useContext(articlesContext);
  return (
    <Container className='home-more-stories'>
      <a href='/feed/stories'>More Stories</a>
      <div className='more-stories'>
        {articles.map((article) => (
          <Link
            className='home-story'
            key={article.id}
            href={`/stories/${article.id}`}
            passHref>
            <>

              <div className='img-container'>
                <img src={article.image_1} alt='' />
              </div>{" "}
              {/* <img src={BASE_URL + article.image_1} alt='' /> */}
              <div className='home-story-text'>
                <span className='story-type'>{article.type}</span>
                <p>{article.headline}</p>
              </div>
            </>
          </Link>
        ))}
        <a href='/feed/stories'>
          <Button variant='contained' className='btn'>
            View latest news
          </Button>
        </a>
      </div>
    </Container>
  );
};

export default StoryBox;
