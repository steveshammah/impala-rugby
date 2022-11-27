import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import "../styles/global.css";
import Footer from "../components/Footer/Footer";
import { useArticlesStore } from "../stores/articleStore";
import { useTeamStore } from "../stores/teamsStore";
import { useFixtureStore } from "../stores/gamesStore";
import { analytics, loadAnalytics } from "../utils";
import { logEvent } from "firebase/analytics";

function App({ Component, pageProps }: AppProps) {
  const getArticles = useArticlesStore((state) => state.getArticles);
  const getMembers = useTeamStore((state) => state.getMembers);
  const getFixtures = useFixtureStore((state) => state.getFixtures);

  useEffect(() => {
    loadAnalytics();
    getArticles();
    getMembers();
    getFixtures();
    logEvent(analytics, "app visit");
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
