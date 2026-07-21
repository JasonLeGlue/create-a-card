import { useEffect, useState } from "react";
import { Card } from "../card/Card.jsx";
import { getRecentCards } from "../../services/cardService.js";

export const Explore = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getRecentCards().then(setCards);
  }, []);

  return (
    <>
      <h2>Explore</h2>
      <div className="cardsDisplayContainer">
        {cards.map((cardObj) => {
          return (
            <div className="cardContainer">
              <Card cardObj={cardObj} key={cardObj.id} />;
            </div>
          );
        })}
      </div>
    </>
  );
};
