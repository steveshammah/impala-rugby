import { useContext, useEffect, useState } from "react";
import { articlesContext } from "../../../src/contexts/articles-context";
import ArticlesHeader from "./ArticlesHeader";
import "./articles-admin.scss";
// import { TextField, Button, Alert } from "@mui/material/";
import ArticleForm from "./ArticleForm";

const EditArticle = ({ match }) => {
  const articleId = match.params.id;

  const [editArticle, setEditArticle] = useState([{}]);
  // const author = 2; //for DB user object
  const { getCookie, BASE_URL } = useContext(articlesContext);

  const fetchArticle = async () => {
    const url = `${BASE_URL}/articles/${articleId}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Data", data);
      setEditArticle(data);
    } catch (error) {
      console.log("Error Occured:", error);
    }
  };

  useEffect(() => {
    fetchArticle();
    // eslint-disable-next-line
  }, []);

  let csrftoken = getCookie("csrftoken");
  // console.log("Token", csrftoken);

  const editPost = async (
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
    author
  ) => {
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
    // console.log(newArticle);
    try {
      const article = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify(newArticle),
      });
    } catch (error) {
      console.log(error);
    }
  };

  //   console.log("Article", editArticle.title);
  return (
    <div className="container">
      <ArticlesHeader />
      <ArticleForm action={"Editing..."} editPost={editPost} />
    </div>
  );
};

export default EditArticle;
