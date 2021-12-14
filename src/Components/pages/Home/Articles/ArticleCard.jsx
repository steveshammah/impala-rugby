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
import { Delete, Edit } from "@material-ui/icons";

const ArticleCard = ({ article, handleOpen, setActiveArticle }) => {
  const handleClick = (id) => {
    handleOpen();
    setActiveArticle(id);
  };
  return (
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
          <a href={`/admin/edit-article/${article.id}`}>
            <Edit />
          </a>
        </IconButton>
        <IconButton aria-label='share' onClick={() => handleClick(article.id)}>
          {<Delete />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
