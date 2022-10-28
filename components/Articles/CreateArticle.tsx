import ArticlesHeader from "./ArticlesHeader";
import ArticleForm from "./ArticleForm";
import "./articles-admin.scss";
import { useContext, useEffect, useState } from "react";

import { articlesContext } from "../../contexts/articles-context";

const CreateArticle = () => {
  const { getCookie, BASE_URL } = useContext(articlesContext);

  const [wordCount1, setWordCount1] = useState("");
  const [wordCount2, setWordCount2] = useState("");
  const [title, setTitle] = useState("");
  const [headline, setHeadline] = useState("");
  const [content_1, setContent1] = useState("");
  const [content_2, setContent2] = useState("");
  const [image_1, setImage1] = useState("");
  const [image_2, setImage2] = useState("");
  const [caption_1, setCaption1] = useState("");
  const [caption_2, setCaption2] = useState("");
  const [type, setType] = useState("");
  const [tags, setTags] = useState("");
  const author = 2; //for DB user object

  const createPost = async () => {
    const url = `${BASE_URL}/api/article-create/`;
    const newArticle = {
      title,
      headline,
      content_1,
      content_2,
      image_1,
      caption_1,
      image_2,
      caption_2,
      type,
      tags,
      author,
    };
    console.log(newArticle);
    let csrftoken = getCookie("csrftoken");

    try {
      const article = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify(newArticle),
      });
      // console.log("Article Promise: ", article);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <ArticlesHeader />
      <ArticleForm createPost={createPost} action={"New Article"} />
    </div>
  );
};

export default CreateArticle;
