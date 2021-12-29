import { useState, useEffect } from "react";
import CardNav from "./CardNav";
import MatchesContainer from "./MatchesContainer";
import ShopContainer from "./ShopContainer";

const CardsWrapper = ({ items }) => {
  const [container, setContainer] = useState();
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState(30);
  const shop = { title: "Shop", linkName: "Enter Shop", url: "shop" };
  const match = {
    title: "Match",
    linkName: "All Matches",
    url: "match-center",
  };

  useEffect(() => {
    setContainer(items);
  }, []);

  const changePosition = (direction) => {
    if (direction === "+") {
      setCount(count < 2 && count + 1);
      count === 2
        ? setPosition(-60)
        : setPosition(position === -60 ? 30 : position - 30);
    } else {
      setCount(count < 2 && count + 1);

      count === 2
        ? setPosition(30)
        : setPosition(position === -30 ? 30 : position - 30);
    }
  };
  return (
    <>
      {container === "Shop" ? (
        <div className='shop-container card-lg-container '>
          <CardNav
            item={shop}
            position={position}
            changePosition={changePosition}
          />
          <ShopContainer position={position} />
        </div>
      ) : (
        <div className='matches-container card-lg-container '>
          <CardNav
            item={match}
            position={position}
            changePosition={changePosition}
          />
          <MatchesContainer position={position} />
        </div>
      )}
    </>
  );
};

export default CardsWrapper;
