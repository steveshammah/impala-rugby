import React from "react";
import Banner from "@components/LandingPage/Banner";
import LandingSection from "@components/LandingPage/LandingSection";
import MoreStories from "@components/LandingPage/MoreStories";
import VideoContainer from "@components/VideoContainer";
import Carousel from "@components/Carousel";
import { products } from "@public/resources/resources";
import Link from "next/link";
import { useFixtureStore } from "@stores/gamesStore";
import { formatDate } from "@utils/utils";
import { logos } from "@public/resources/resources";

const Home = () => {
  const title = "Impala Vs DU Falcons | Match Highlights";
  const videoUrl = "https://www.youtube.com/embed/jUTpV6Ullfg";
  const fixtures = useFixtureStore((state) => state.fixtures);

  const shopDetails = {
    title: "Shop",
    linkName: "Enter Shop",
    url: "shop",
  };

  const matchesDetails = {
    title: "Matches",
    linkName: "All Matches",
    url: "fixtures",
  };
  const shop = products.map((product, index) => {
    return (
      <div
        key={index}
        className="product container-card h-80 flex flex-col shadow-md hover:shadow-xl rounded-md m-auto"
        style={{ width: 300 }}
      >
        <img
          src={product.img.src}
          alt="Product"
          className="aspect-video w-full h-5/6 rounded-t-md"
        />
        <div className="p-2 flex justify-between">
          <span className="flex">{product.name}</span>

          <Link href={`#shop#${product.id}`}>
            <button className="bg-primaryRed p-1 text-white text-sm rounded-md">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    );
  });
  const matches = fixtures.map((match, index) => {
    return (
      <div
        key={index}
        className="carousel-item flex flex-col h-[300px] shadow-lg hover:shadow-2xl m-4 rounded-md p-1"
        style={{ width: 300 }}
      >
        <div className="flex-1 flex flex-col items-center w-full ">
          <h4 className="uppercase font-bold">{match.competition}</h4>
          {formatDate(match?.kickOff.seconds * 1000, "long")}

          <span className="capitalize">
            {formatDate(match?.kickOff.seconds * 1000, "time")}{" "}
          </span>

          <span className="capitalize italic">{match.venue}</span>
        </div>
        {!match?.home ? (
          <div className="flex items-center justify-between">
            <div className="flex flex-col justify-between items-center">
              <img
                src={match?.logo ? match.logo.src : logos.kruLogo.src}
                alt="Logo"
                className="h-14 w-16 object-contain rounded-full object-center mb-1"
              />
              <h3 className="font-semibold text-sm capitalize">
                {match.opponent}
              </h3>
            </div>
            {match.played ? (
              <span className="bg-blackX p-2 mx-4 rounded-md text-whiteX">
                {match.opponentScores.ft}-{match.impalaScores.ft}
              </span>
            ) : (
              <span className="bg-blackX p-2  rounded-md text-whiteX">
                {formatDate(match?.kickOff.seconds * 1000, "time")}
              </span>
            )}
            <div className="flex flex-col justify-between items-center">
              <img
                src={logos.impalaLogo.src}
                alt="Impala Logo"
                className="h-14 w-16 object-contain rounded-full object-center mb-1"
              />
              <h3 className="font-semibold text-sm">Impala</h3>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-between w-full">
            <div className="flex flex-1 flex-col justify-between items-center">
              <img
                src={logos.impalaLogo.src}
                alt="Impala Logo"
                className="h-14 w-16 object-contain rounded-full object-center mb-1"
              />
              <h3 className="font-semibold text-sm w-18">Impala</h3>
            </div>
            {match.played ? (
              <span className="bg-blackX p-2 mx-4 rounded-md text-whiteX">
                {match.impalaScores.ft}-{match.opponentScores.ft}
              </span>
            ) : (
              <span className="bg-blackX p-2  rounded-md text-whiteX">
                {formatDate(match?.kickOff.seconds * 1000, "time")}
              </span>
            )}
            <div className="flex flex-1 flex-col">
              <img
                src={match?.logo ? match.logo.src : logos.kruLogo.src}
                alt="Logo"
                className="h-14 w-16 object-contain rounded-full object-center mb-1"
              />
              <h3 className="font-semibold text-sm capitalize w-18 text-ellipsis">
                {match.opponent}
              </h3>
            </div>
          </div>
        )}
        <div className="teams flex flex-1 items-center  justify-center flex-col h-28">
          {
            <Link href={`/fixtures/${match.uId}`}>
              <button
                className={` font-thin p-2 rounded-full px-4 ${
                  match?.played
                    ? "bg-primaryRed text-white"
                    : "bg-white border border-gray-400"
                }`}
              >
                {match?.played ? "Match Report" : "  Match Details"}
              </button>
            </Link>
          }
        </div>
      </div>
    );
  });

  return (
    <div className="website-home">
      <LandingSection />
      <Banner />
      <br />
      <br />
      <Carousel items={shop} details={shopDetails} />
      <VideoContainer title={title} videoUrl={videoUrl} />
      <MoreStories />
      <br />
      <Carousel items={matches} details={matchesDetails} />
    </div>
  );
};

export default Home;
