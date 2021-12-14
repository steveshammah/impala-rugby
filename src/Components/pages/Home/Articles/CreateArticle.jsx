import { useContext, useState, useRef } from "react";
import ArticlesHeader from "./ArticlesHeader";
import "./articles-admin.scss";
import { TextField, Button, Alert } from "@mui/material/";
import { articlesContext } from "../../../../contexts/articles-context";

const CreateArticle = () => {
  const [wordCount, setWordCount] = useState("");
  const [title, setTitle] = useState("");
  const [headline, setHeadline] = useState("");
  const [story, setStory] = useState("");
  const [type, setType] = useState("");
  const [tags, setTags] = useState("");
  const [author, setAuthor] = useState(2);
  const { getCookie, BASE_URL } = useContext(articlesContext);

  const articleForm = useRef();

  const handleChange = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "Title":
        return setTitle(e.target.value);
      case "Headline":
        return setHeadline(e.target.value);
      case "Content":
        const textCount = e.target.value.split(" ").length;
        setWordCount(textCount);
        return setStory(e.target.value);
      case "Type":
        return setType(e.target.value);
      case "Tags":
        return setTags(e.target.value);
      default:
        return "";
    }
  };

  const handleSubmit = (e) => {
    switch (e.target.name) {
      case "Save":
        createPost();
        articleForm.current.reset();

        console.log("Save");
        return;
      case "Post":
        console.log(createPost());

        console.log("Post");
        return;
    }
  };

  let csrftoken = getCookie("csrftoken");
  // console.log("Token", csrftoken);

  const createPost = async () => {
    const url = `${BASE_URL}/article-create/`;
    const newArticle = {
      title,
      headline,
      story,
      type,
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

  return (
    <div className='container'>
      <ArticlesHeader />

      <form className='create-post' ref={articleForm}>
        <div className='left-wrapper'>
          <h2>+New Article</h2>
          <div className='article-meta'>
            <TextField
              id='standard-multiline-flexible'
              label='Title'
              name='Title'
              multiline
              maxRows={4}
              variant='standard'
              onChange={handleChange}
              required
            />
            <TextField
              id='standard-textarea'
              name='Headline'
              label='Headline'
              placeholder='Impala time'
              multiline
              variant='standard'
              onChange={handleChange}
              required
            />
          </div>
          <div className='article-content'>
            <TextField
              fullWidth
              multiline
              name='Content'
              label='Article Content'
              placeholder='Impala all the way'
              id='fullWidth'
              className='article-field'
              onChange={handleChange}
            />
            {wordCount && (
              <span>
                <strong
                  style={
                    wordCount > 400 ? { color: "red" } : { color: "green" }
                  }>
                  Word Count: <i>{wordCount}</i>
                </strong>
                <i>{parseInt(wordCount / 100)} mins read.</i>
              </span>
            )}
          </div>
          <div className='article-tags'>
            <span>
              <TextField
                id='standard-multiline-flexible'
                label='Type'
                name='Type'
                placeholder='Article, Feature, Update, News'
                variant='standard'
                className='tag-input'
                onChange={handleChange}
              />
            </span>
            <span>
              <TextField
                id='standard-multiline-flexible'
                label='Tags: Seperate with commas'
                name='Tags'
                placeholder='Kenya Cup, Ess, Nationwide, e.t.c.'
                variant='standard'
                className='tag-input'
                onChange={handleChange}
              />
            </span>
          </div>

          <div className='article-buttons'>
            <Button
              variant='contained'
              color='success'
              name='Save'
              onClick={handleSubmit}>
              Save
            </Button>
            <Button variant='contained' name='Post' onClick={handleSubmit}>
              Post
            </Button>
          </div>

          <div className='article-disclaimer'>
            <Alert severity='info'>
              All information and resources provided on &nbsp;
              <a href='#'>impalarugbyke.com</a> are based on your opinions as
              the author (unless otherwise noted). All information is intended
              to motivate readers to want to be part of the Impala Fraternity.
            </Alert>
          </div>
        </div>
        <div className='right-wrapper'>Right Panel</div>
      </form>
    </div>
  );
};

export default CreateArticle;
