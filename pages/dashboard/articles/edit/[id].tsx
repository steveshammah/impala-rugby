import { useEffect, useState } from "react";
import ArticleForm from "../../../../components/Articles/ArticleForm";
import { useRouter } from "next/router";
import Shell from "../../../../components/DashboardShell";
import { useArticlesStore } from "../../../../contexts/articleStore";
import { MdAddBox, MdArrowBackIos, MdDocumentScanner } from "react-icons/md";

const EditArticle = () => {
  const router = useRouter();
  const articleId = router?.query?.id;

  const [toEditArticle, setToEditArticle] = useState({});
  const article = useArticlesStore((state) => state.article);
  const getArticle = useArticlesStore((state) => state.getArticle);
  const editArticle = useArticlesStore((state) => state.editArticle);

  useEffect(() => {
    getArticle(articleId);
    setToEditArticle(article);

    return () => {
      setToEditArticle({});
    };
  }, [article.label]);

  const links = [
    {
      label: "Back",
      url: "/dashboard/articles",
      icon: MdArrowBackIos,
    },
    {
      label: "Create",
      url: "/dashboard/members",
      icon: MdAddBox,
    },
    {
      label: "Editing...",
      url: "#",
      icon: MdDocumentScanner,
    },
  ];

  return (
    <Shell links={links}>
      <ArticleForm
        article={toEditArticle}
        setArticle={setToEditArticle}
        submitHandler={editArticle}
        label={"Edit Article"}
      />
    </Shell>
  );
};

export default EditArticle;
