import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import Header from "@components/Header/Header";
import "@styles/global.css";
import Footer from "@components/Footer/Footer";
import { useArticlesStore } from "@stores/articleStore";
import { useFixtureStore } from "@stores/gamesStore";
import { loadAnalytics } from "@utils/firebase";
import { eventLogger } from "@utils/utils";

function App({ Component, pageProps }: AppProps) {
  const { getArticles } = useArticlesStore();
  const { getFixtures } = useFixtureStore();

  useEffect(() => {
    loadAnalytics();
    getArticles();
    getFixtures();
    eventLogger({
      event: "Open Application",
    });
  }, []);

  return (
    <>
      <Header />
      <div className="pt-24">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default App;
