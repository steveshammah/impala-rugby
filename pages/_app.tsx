import type { AppProps } from "next/app";

import Header from "../components/Header/Header";
import "../styles/app.scss";
import "../styles/chart.scss";
import "../styles/dashboard.scss";
import "../styles/footer.scss";
import "../styles/global.scss";
import "../styles/groups.scss";
import "../styles/header.scss";
import "../styles/home.scss";
import "../styles/landing-page.scss";
import "../styles/login.scss";
import "../styles/matchcenter.scss";
import "../styles/profile.scss";
import "../styles/sidebar.scss";
import "../styles/sponsors.scss";
import "../styles/squad.scss";
import "../styles/store.scss";
import "../styles/stories.scss";
import "../styles/team.scss";


import ArticlesState from "../src/contexts/articles-context";
import TeamState from "../src/contexts/team-context";
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