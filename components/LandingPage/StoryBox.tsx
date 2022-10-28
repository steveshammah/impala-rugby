import { Container, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { articlesContext } from "../../contexts/articles-context";

const StoryBox = () => {
  const { articles, BASE_URL } = useContext(articlesContext);
  const router = useRouter();
  return (
    <Container className='home-more-stories'>
      <div onClick={() => router.push('/stories')}>More Stories</div>
      <div className='more-stories'>
        {articles.map((article) => (
          <div
            className='home-story'
            key={article.id}
            onClick={() => router.push(`/stories/${encodeURIComponent(article.id)}`)}
          >
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
          </div>
        ))}
        <div onClick={() => router.push('/stories')}>
          <Button variant='contained' className='btn'>
            View latest news
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default StoryBox;
