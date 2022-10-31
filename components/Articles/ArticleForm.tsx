import React, { useContext, useState, useRef } from "react";
import { articlesContext } from "../../contexts/articles-context";

import "./articles-admin.scss";

const ArticleForm = ({ createPost, editPost, action }) => {
  const [wordCount1, setWordCount1] = useState(0);
  const [wordCount2, setWordCount2] = useState(0);
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
  const { getCookie, BASE_URL } = useContext(articlesContext);

  const articleForm = useRef<HTMLFormElement>(null);

  const handleChange = (e) => {
    // console.log("Name", e);
    console.log("Input", e.target.value);
    const input = e.target.value;
    let textCount;
    switch (e.target.name) {
      case "Title":
        return setTitle(input);
      case "Headline":
        return setHeadline(input);
      case "Content1":
        textCount = input.split(" ").length;
        setWordCount1(textCount);
        return setContent1(input);
      case "Content2":
        textCount = input.split(" ").length;
        setWordCount2(textCount);
        return setContent2(input);
      case "image_1":
        console.log("Images 1: ", e.target.files[0]);
        return setImage1(e.target.files[0]);
      case "image_2":
        console.log("Images 2: ", e.target.files[0]);
        return setImage2(e.target.files[0]);
      case "Caption1":
        return setCaption1(input);
      case "Caption2":
        return setCaption2(input);
      case "Type":
        return setType(input);
      case "Tags":
        return setTags(input);
      default:
        textCount = input.split(" ").length;
        setWordCount1(textCount);
        return setContent1(input);
    }
  };

  const handleSubmit = (e) => {
    switch (e.target.name) {
      case "Save":
        createPost();
        articleForm && articleForm.current.reset();

        console.log("Save");
        return;
      case "Post":
        console.log(createPost());
        return;
      default:
        console.log("Post");
        return;
    }
  };

  const Input = styled("input")({
    display: "none",
  });

  let csrftoken = getCookie("csrftoken");
  // console.log("Token", csrftoken);
  return (
    <form className="create-post" ref={articleForm}>
      <div className="left-wrapper">
        <h2>{action}</h2>
        <div className="article-meta">
          <input
            id="standard-multiline-flexible"
            name="Title"
            aria-label="Title"
            onChange={handleChange}
            required
          />
          <input
            id="standard-textarea"
            name="Headline"
            aria-label="Headline"
            placeholder="Impala time"
            onChange={handleChange}
            required
          />
        </div>
        <div className="article-content">
          <input
            name="Content1"
            aria-label="Article Content"
            placeholder="Impala all the way"
            id="fullWidth"
            className="article-field"
            onChange={handleChange}
          />
          {wordCount1 && (
            <span>
              <strong
                style={wordCount1 > 400 ? { color: "red" } : { color: "green" }}
              >
                Word Count: <i>{wordCount1}</i>
              </strong>
              <i>{wordCount1 / 100} mins read.</i>
            </span>
          )}
        </div>
        <div className="article-content">
          <TextField
            fullWidth
            multiline
            name="Content2"
            label="Article Content"
            placeholder="Part 2"
            id="fullWidth"
            className="article-field"
            onChange={handleChange}
          />
          {wordCount2 && (
            <span>
              <strong
                style={wordCount2 > 400 ? { color: "red" } : { color: "green" }}
              >
                Word Count: <i>{wordCount2}</i>
              </strong>
              <i>{parseInt(wordCount2 / 100)} mins read.</i>
            </span>
          )}
        </div>
        <div className="article-tags">
          <span>
            <TextField
              id="standard-multiline-flexible"
              label="Type"
              name="Type"
              placeholder="Article, Feature, Update, News"
              variant="standard"
              className="tag-input"
              onChange={handleChange}
            />
          </span>
          <span>
            <TextField
              id="standard-multiline-flexible"
              label="Tags: Seperate with commas"
              name="Tags"
              placeholder="Kenya Cup, Ess, Nationwide, e.t.c."
              variant="standard"
              className="tag-input"
              onChange={handleChange}
            />
          </span>

          {/* <span>
              <label htmlFor='contained-button-file'>
                <Input
                  accept='image/*'
                  id='contained-button-file'
                  multiple
                  type='file'
                />
                <Button variant='contained' component='span'>
                  Upload
                </Button>
              </label>
            </span> */}
        </div>
        <div className="images-upload">
          <div className="image">
            <span>
              {/* <Stack direction='row' alignItems='center' spacing={2}> */}
              <label htmlFor="contained-button-file">
                {/* <Input
                      accept='image/*'
                      id='contained-button-file'
                      multiple
                      type='file'
                      onChange={handleChange}
                      name='Image1'
                    /> */}
                <input
                  type="file"
                  name="image_1"
                  accept="image/*"
                  id="contained-button-file-2"
                  onChange={handleChange}
                  // id="id_image_1"
                ></input>
                {/* <Button variant='contained' component='span'>
                      Cover Image
                    </Button> */}
              </label>
              <input
                id="standard-multiline-flexible"
                aria-label="Caption One"
                name="Caption1"
                onChange={handleChange}
                required
              />
              {/* </Stack> */}
            </span>

            <span>
              {/* <Stack direction='row' alignItems='center' spacing={2}> */}
              <label htmlFor="contained-button-file-2">
                {/* <Input
                      accept='image/*'
                      id='contained-button-file-2'
                      multiple
                      type='file'
                      onChange={handleChange}
                      name='Image2'
                    /> */}
                {/* <input type='file' accept='image/*' name='Image2' /> */}
                <input
                  type="file"
                  name="image_2"
                  accept="image/*"
                  id="contained-button-file-2"
                  onChange={handleChange}
                  // id="id_image_1"
                ></input>

                {/* <Button variant='contained' component='span'>
                      Second Image
                    </Button> */}
              </label>
              <input
                id="standard-multiline-flexible"
                aria-label="Caption Two"
                name="Caption2"
                onChange={handleChange}
                required
              />
              {/* </Stack> */}
            </span>
          </div>
        </div>
        <div className="article-buttons">
          <button className="bg-green-300" name="Save" onClick={handleSubmit}>
            Save
          </button>
          <button className="bg-blue-400" name="Post" onClick={handleSubmit}>
            Post
          </button>
        </div>

        <div className="article-disclaimer">
          <p className="bg-blue-200 text-blackX">
            All information and resources provided on
            <a href="#"> impalarugby.com</a> are based on your opinions as the
            author (unless otherwise stated). All information is intended to
            grow the audience and make them want to be part of the Impala
            Fraternity.
          </p>
        </div>
      </div>
      {/* <div className='right-wrapper'>Right Panel</div> */}
    </form>
  );
};

export default ArticleForm;
