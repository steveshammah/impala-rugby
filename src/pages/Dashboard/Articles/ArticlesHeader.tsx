import { AddBox } from "@material-ui/icons";

const ArticlesHeader = () => {
  return (
    <div className='articles-header'>
      <ul>
        <li>
          <a href='/dashboard/articles'>
            {/* <ArticleIcon /> */}
            Articles
          </a>
        </li>

        <li>
          <a href='/dashboard/articles'>
            {/* <PeopleIcon />  */}
            Authors
          </a>
        </li>
        <li>
          <a href='/admin/create-article'>
            <AddBox />
            Article
          </a>
        </li>
        <li>
          <a href='/admin/create-article'>
            {/* <StyleIcon /> */}
            Tags
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ArticlesHeader;
