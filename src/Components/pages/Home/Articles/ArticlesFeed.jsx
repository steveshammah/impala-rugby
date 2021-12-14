import { useContext, useState } from "react";
import { articlesContext } from "../../../../contexts/articles-context";
import "./articles-admin.scss";
import ArticlesHeader from "./ArticlesHeader";
import ArticleCard from "./ArticleCard";
import DeleteModal from "./DeleteModal";

const ArticlesFeed = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState();
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const { articles, getCookie, BASE_URL } = useContext(articlesContext);
  const deletePost = async (articleId) => {
    const url = `${BASE_URL}/api/article-delete/${articleId}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": getCookie("csrftoken"),
      },
    });
    console.log(response.json());
    return response;
  };
  const handleDelete = (id) => {
    deletePost(id);
    // console.log("Deleting Post: ", id);
    setModalOpen(false);
  };
  return (
    <div className='container'>
      <ArticlesHeader />
      <h2>Admin Articles Feed</h2>
      <div className='articles-admin'>
        <div className='all-articles'>
          {articles.map((article) => (
            <ArticleCard
              article={article}
              handleDelete={handleDelete}
              handleOpen={handleOpen}
              setActiveArticle={setActiveArticle}
              // handleClose={handleClose}
            />
          ))}

          <DeleteModal
            modalOpen={modalOpen}
            activeArticle={activeArticle}
            handleDelete={handleDelete}
            handleClose={handleClose}
            setModalOpen={setModalOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlesFeed;
