import { Container } from "@mui/material";
import StoryBox from "./StoryBox";
import { FC, useContext } from "react";
import { articlesContext, IArticles } from "../../contexts/articles-context";
import { useRouter } from "next/router";
// import { articlesContext } from "../../contexts/articles-context";

const LandingSection: FC = () => {
  const { articles, BASE_URL } = useContext(articlesContext);
  const router = useRouter();
  const latestArticle: IArticles = articles[0]



  return (
    <div className="website-landing-section">
      {/* @ts-ignore: next-line */}
      <Container mxWidth="sm" className="main-story">
        <div onClick={() => router.push(`/stories/${encodeURIComponent(latestArticle.id)}`)}>
          <div className="title-wrapper">
            <span className="story-type">{latestArticle.type}</span>
            <h2>{latestArticle.title}</h2>
          </div>
          <div className="main-story-image">
            <img src={latestArticle.image_2} alt="" />
            {/* <img src={BASE_URL + latestArticle.image_2} alt='' /> */}
          </div>
        </div>
      </Container>
      <StoryBox />
    </div>
  );
};

export default LandingSection;
