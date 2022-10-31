import type { AppProps } from "next/app";
import React from "react";
import Header from "../components/Header/Header";
import "../styles/global.css";
import ArticlesState from "../contexts/articles-context";
import TeamState from "../contexts/team-context";
import Footer from "../components/Footer/Footer";

function App({ Component, pageProps }: AppProps) {
  return (
    <TeamState>
      <ArticlesState>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ArticlesState>
    </TeamState>
  );
}

export default App;
