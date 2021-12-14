import { createContext, useState, useEffect } from "react";

export const articlesContext = createContext();

const ArticlesState = (props) => {
  // const initialState = {};
  const [articles, setArticles] = useState([{}]);
  useEffect(() => {
    fetchArticles();
  }, []);

  // BASE URL
  const BASE_URL = "http://localhost:8000/api";

  // CSRF TOKEN
  const getCookie = (name) => {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };

  // CALL TO DATABASE TO FETCH ALL ARTICLES
  const fetchArticles = async () => {
    const url = BASE_URL + "/articles/";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.log("Error Occured:", error);
    }
  };
  return (
    <articlesContext.Provider value={{ articles, getCookie, BASE_URL }}>
      {props.children}
    </articlesContext.Provider>
  );
};

export default ArticlesState;


