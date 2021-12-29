import { useContext, useEffect, useState } from "react";
import { articlesContext } from "../../../../contexts/articles-context";
import ArticlesHeader from "./ArticlesHeader";
import "./articles-admin.scss";
import { TextField, Button, Alert } from "@mui/material/";
import ArticleForm from "./ArticleForm";

const EditArticle = ({ match }) => {
  const articleId = match.params.id;
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
  const [editArticle, setEditArticle] = useState([{}]);
  const author = 2; //for DB user object
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
    <div className='container'>
      <ArticlesHeader />
      <ArticleForm action={"Editing..."} editPost={editPost} />
    </div>
  );
};

export default EditArticle;

//  <div className='create-post '>
//    <div className='left-wrapper'>
//      <h2>Edit Article</h2>
//      <div className='article-meta'>
//        <TextField
//          name='Title'
//          id='standard-helperText'
//          multiline
//          defaultValue={editArticle.title}
//          helperText='Have a better Title?'
//          variant='standard'
//          className='article-field'
//          onChange={handleChange}
//        />

//        <TextField
//          name='Headline'
//          id='standard-helperText'
//          fullWidth
//          id='fullWidth'
//          multiline
//          defaultValue={editArticle.headline}
//          helperText=''
//          variant='standard'
//          className='article-field'
//          onChange={handleChange}
//        />
//      </div>
//      <div className='article-content'>
//        <TextField
//          name='Content'
//          id='standard-helperText'
//          fullWidth
//          id='fullWidth'
//          multiline
//          defaultValue={editArticle.content}
//          helperText='Changing the story. Hmmm...'
//          variant='standard'
//          className='article-field'
//          onChange={handleChange}
//        />
//        {wordCount && (
//          <span>
//            <strong
//              style={wordCount > 400 ? { color: "red" } : { color: "green" }}>
//              Word Count: <i>{wordCount}</i>
//            </strong>
//            <i>{parseInt(wordCount / 100)} mins read.</i>
//          </span>
//        )}
//      </div>
//      <div className='article-tags'>
//        <span>
//          <TextField
//            name='Type'
//            id='standard-helperText'
//            fullWidth
//            id='fullWidth'
//            multiline
//            defaultValue={editArticle.type}
//            helperText=''
//            variant='standard'
//            onChange={handleChange}
//            className='tag-input'
//          />
//        </span>
//        <span>
//          <TextField
//            name='Tags'
//            id='standard-helperText'
//            fullWidth
//            id='fullWidth'
//            multiline
//            defaultValue={editArticle.tags}
//            helperText=''
//            variant='standard'
//            onChange={handleChange}
//            className='tag-input'
//          />
//        </span>
//      </div>

//      <div className='article-buttons'>
//        <Button
//          variant='contained'
//          color='primary'
//          name='Save'
//          onClick={handleSubmit}>
//          Save
//        </Button>
//        <Button variant='contained' color='error' name='Post'>
//          <a href='/dashboard/articles'>Cancel</a>
//        </Button>
//      </div>

//      <div className='article-disclaimer'>
//        <Alert severity='info'>
//          All information and resources provided on &nbsp;
//          <a href='#'>impalarugbyke.com</a> are based on your opinions as the
//          author (unless otherwise noted). All information is intended to
//          motivate readers to want to be part of the Impala Fraternity.
//        </Alert>
//      </div>
//    </div>
//    <div className='right-wrapper'>Right Panel</div>
//  </div>;
