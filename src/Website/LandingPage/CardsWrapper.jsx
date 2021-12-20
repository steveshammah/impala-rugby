import { useState, useEffect } from "react";
import CardNav from "./CardNav";
import MatchesContainer from "./MatchesContainer";
import ShopContainer from "./ShopContainer";

const CardsWrapper = ({ items }) => {
  const [container, setContainer] = useState();
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState(900);
  const shop = { title: "Shop", linkName: "Enter Shop", url: "shop" };
  const match = {
    title: "Match",
    linkName: "All Matches",
    url: "matchcenter",
  };

  useEffect(() => {
    setContainer(items);
  }, []);

  const changePosition = (direction) => {
    if (direction === "-") {
      console.log("Position", position);
      console.log("Count", count);

      setCount(count < 2 && count + 1);
      count === 2 ? setPosition(900) : setPosition(position - 1400);
    } else {
      console.log("Count", count);
      console.log("Position", position);
      setCount(count < 2 && count + 1);

      count === 2 ? setPosition(900) : setPosition(position + 1400);
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
