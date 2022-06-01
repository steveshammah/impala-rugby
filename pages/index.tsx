// import type { NextPage } from "next";
import Head from "next/head";

import LandingSection from "../src/pages/LandingPage/LandingSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>Impala Rugby KE</title>
        <meta name="description" content="Impala Rugby KE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingSection />
    </>
  );
};

export default Home;
