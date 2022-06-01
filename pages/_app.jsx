// import type { AppProps } from "next/app";

import Header from "../components/Header/Header";
import "../styles/header.scss";
import "../styles/dashboard.scss";
import "../styles/global.scss";
import "../styles/landing-page.scss";
import "../styles/login.scss";
import "../styles/matchcenter.scss";
import "../styles/profile.scss";
import ArticlesState from "../src/contexts/articles-context";
import TeamState from "../src/contexts/team-context";

function MyApp({ Component, pageProps }) {
  return (
    <TeamState>
      <ArticlesState>
        <Header />
        <Component {...pageProps} />
      </ArticlesState>
    </TeamState>
  );
}

export default MyApp;
