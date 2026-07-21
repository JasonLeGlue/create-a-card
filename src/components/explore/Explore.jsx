import { useEffect, useState } from "react";
import { Card } from "../card/Card.jsx";
import { getRecentCards } from "../../services/cardService.js";
import "./Explore.css";

export const Explore = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getRecentCards().then(setCards);
  }, []);

  return (
    <>
      <h2>Explore</h2>
      <div className="exploreCards">
        {cards.map((cardObj) => {
          return <Card cardObj={cardObj} key={cardObj.id} />;
        })}
      </div>
    </>
  );
};
