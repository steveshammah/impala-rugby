import React from "react";

// import { useContext } from "react";
// import { articlesContext } from "../../../contexts/articles-context";

const ArticleCard = ({ article, handleOpen, setActiveArticle }) => {
  // const { BASE_URL } = useContext(articlesContext);
  const handleClick = (id) => {
    handleOpen();
    setActiveArticle(id);
  };
  console.log(article);
  return (
    <div sx={{ maxWidth: 300 }} className="article">
      {/* <CardHeader
        avatar={<Avatar aria-label="recipe">{article.author[0]}</Avatar>}
        title={article.title}
        subheader={article.created}
      />
      <CardMedia
        component="img"
        height="150"
        // image={BASE_URL + article.image_1}
        image={article.image_1}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {article.headline}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <a href={`/admin/edit-article/${article.id}`}>
            <Edit />
          </a>
        </IconButton>
        <IconButton aria-label="share" onClick={() => handleClick(article.id)}>
          {<Delete />}
        </IconButton>
      </CardActions> */}
    </div>
  );
};

export default ArticleCard;
