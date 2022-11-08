import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import "../styles/global.css";
import Footer from "../components/Footer/Footer";
import { useArticlesStore } from "../stores/articleStore";
import { useTeamStore } from "../stores/teamsStore";

function App({ Component, pageProps }: AppProps) {
  const getArticles = useArticlesStore((state) => state.getArticles);
  const getMembers = useTeamStore((state) => state.getMembers);

  useEffect(() => {
    getArticles();
    getMembers();
  }, []);

  return (
    <>
      <Header />
      <div className="pt-24">
        <Component {...pageProps} />
        <Footer />
      </div>{" "}
    </>
  );
}

export default App;
