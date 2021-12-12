import React, { useState } from "react";
import ArticlesHeader from "./ArticlesHeader";
import "./articles-admin.scss";
import { TextField, Button, Alert } from "@mui/material/";

const CreateArticle = () => {
  const [wordCount, setWordCount] = useState("");
  const handleChange = (e) => {
    const textCount = e.target.value.split(" ").length;
    setWordCount(textCount);
  };
  return (
    <div className='container'>
      <ArticlesHeader />

      <div className='create-post '>
        <div className='left-wrapper'>
          <h2>+New Article</h2>
          <div className='article-meta'>
            <TextField
              id='standard-multiline-flexible'
              label='Title'
              multiline
              maxRows={4}
              variant='standard'
            />
            <TextField
              id='standard-textarea'
              label='Headline'
              placeholder='Impala time'
              multiline
              variant='standard'
            />
          </div>
          <div className='article-content'>
            <TextField
              fullWidth
              multiline
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
                placeholder='Article, Feature, Update, News'
                variant='standard'
                className='tag-input'
              />
            </span>
            <span>
              <TextField
                id='standard-multiline-flexible'
                label='Tags: Seperate with commas'
                placeholder='Kenya Cup, Ess, Nationwide, e.t.c.'
                variant='standard'
                className='tag-input'
              />
            </span>
          </div>

          <div className='article-buttons'>
            <Button variant='contained' color='success'>
              Save
            </Button>
            <Button variant='contained'>Post</Button>
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
      </div>
    </div>
  );
};

export default CreateArticle;
