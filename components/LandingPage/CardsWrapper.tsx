import React, { useState, useEffect } from "react";
import CardNav from "./CardNav";
import MatchesContainer from "./MatchesContainer";
import ShopContainer from "./ShopContainer";

interface ICardsWrapperProps {
  items: string;
}
{
  /* 
slider: boolean
flex
*/
}
const CardsWrapper = ({ items }: ICardsWrapperProps) => {
  const [container, setContainer] = useState("");
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState(30);
  const shop = { title: "Shop", linkName: "Enter Shop", url: "shop" };
  const match = {
    title: "Match",
    linkName: "All Matches",
    url: "fixtures",
  };

  useEffect(() => {
    setContainer(items);
  }, []);

  const changePosition = (direction: string) => {
    // Get direction and current position and build logic
    if (direction === "+") {
      setCount(count < 2 ? count + 1 : count);
      count === 2
        ? setPosition(-60)
        : setPosition(position === -60 ? 30 : position - 30);
    } else {
      setCount(count < 2 ? count + 1 : count);

      count === 2
        ? setPosition(30)
        : setPosition(position === -30 ? 30 : position - 30);
    }
  };
  return (
    <div className="shadow mt-12">
      {container === "Shop" ? (
        <div className="shop-container card-lg-container  flex flex-col w-screen items-center overflow-hidden">
          <CardNav
            item={shop}
            position={position}
            changePosition={changePosition}
          />
          <ShopContainer position={position} />
        </div>
      ) : (
        <div className="matches-container card-lg-container flex flex-col w-screen items-center overflow-hidden ">
          <CardNav
            item={match}
            position={position}
            changePosition={changePosition}
          />
          <MatchesContainer position={position} />
        </div>
      )}
    </div>
  );
};

export default CardsWrapper;
