import { useEffect, useState } from "react";
import ArticleCard from "../../../components/Articles/ArticleCard";
import DeleteModal from "../../../components/Articles/DeleteModal";
import Shell from "../../../components/DashboardShell";
import { useArticlesStore } from "../../../contexts/articleStore";
import { MdAddBox, MdPeople, MdArticle, MdStyle } from "react-icons/md";

const ArticlesFeed = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState();
  const handleOpen = () => setModalOpen(true);

  const getArticles = useArticlesStore((state) => state.getArticles);
  const articles = useArticlesStore((state) => state.articles);
  const deleteArticle = useArticlesStore((state) => state.deleteArticle);

  const links = [
    {
      label: "All",
      url: "/dashboard/articles",
      icon: MdArticle,
    },
    {
      label: "Create",
      url: "/dashboard/articles/create",
      icon: MdAddBox,
    },
    {
      label: "Tags",
      url: "/dashboard/articles",
      icon: MdStyle,
    },
    {
      label: "Authors",
      url: "/dashboard/articles",
      icon: MdPeople,
    },
  ];

  const handleDelete = (articleId) => {
    setModalOpen(false);
    deleteArticle(articleId);
    getArticles();
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Shell links={links}>
      <div>
        <h2 className="text-3xl pl-4 font-bold">Articles Feed</h2>

        <div className="flex items-center justify-around flex-wrap w-full">
          {articles.map((article, index) => (
            <ArticleCard
              article={article}
              handleOpen={handleOpen}
              setActiveArticle={setActiveArticle}
              key={index}
            />
          ))}

          <DeleteModal
            modalOpen={modalOpen}
            activeArticle={activeArticle}
            handleDelete={handleDelete}
            setModalOpen={setModalOpen}
          />
        </div>
      </div>
    </Shell>
  );
};

export default ArticlesFeed;
