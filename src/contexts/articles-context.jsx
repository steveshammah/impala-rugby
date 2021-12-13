import { createContext, useState, useEffect } from "react";

export const articlesContext = createContext();

const ArticlesState = (props) => {
  const [articles, setArticles] = useState([{}]);
  useEffect(() => {
    fetchArticles();
  }, []);

  // Call to DB
  const fetchArticles = async () => {
    const url = "http://localhost:8000/api/articles/";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.log("Error Occured:", error);
    }
  };
  return (
    <articlesContext.Provider value={{ articles }}>
      {props.children}
    </articlesContext.Provider>
  );
};

export default ArticlesState;
