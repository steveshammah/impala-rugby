import ArticleForm from "../../../../components/Articles/ArticleForm";
import { useState } from "react";
import Shell from "../../../../components/DashboardShell";
import { useArticlesStore } from "../../../../contexts/articleStore";
import { MdAddBox, MdArrowBackIos, MdDocumentScanner } from "react-icons/md";

const AddMember = () => {
  const [article, setArticle] = useState({});
  const createArticle = useArticlesStore((state) => state.createArticle);

  const links = [
    {
      label: "Back",
      url: "/dashboard/articles",
      icon: MdArrowBackIos,
    },
    {
      label: "Writing...",
      url: "#",
      icon: MdDocumentScanner,
    },
  ];
  return (
    <Shell links={links}>
      <ArticleForm
        article={article}
        setArticle={setArticle}
        submitHandler={createArticle}
        label={"New Article"}
      />
    </Shell>
  );
};

export default AddMember;
