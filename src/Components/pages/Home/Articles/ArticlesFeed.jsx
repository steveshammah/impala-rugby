import { useContext } from "react";
import { articlesContext } from "../../../../contexts/articles-context";
import "./articles-admin.scss";
import ArticlesHeader from "./ArticlesHeader";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material/";
import { photos } from "../../../../resources/resources";
import { Delete, Edit, EditOutlined } from "@material-ui/icons";

const ArticlesFeed = () => {
  const { articles } = useContext(articlesContext);
  return (
    <div className='container'>
      <ArticlesHeader />
      <h2>Admin Articles Feed</h2>
      <div className='articles-admin'>
        <div className='all-articles'>
          {articles.map((article) => (
            <Card sx={{ maxWidth: 300 }} className='article'>
              <CardHeader
                avatar={<Avatar aria-label='recipe'>{article.author}</Avatar>}
                title={article.title}
                subheader={article.created}
              />
              <CardMedia component='img' height='150' image={photos.onsomu} />
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  {article.headline}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label='add to favorites'>
                  <Edit />
                </IconButton>
                <IconButton aria-label='share'>{<Delete />}</IconButton>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesFeed;
