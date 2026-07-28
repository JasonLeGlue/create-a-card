import { useEffect, useState } from "react";
import { Card } from "../card/Card.jsx";
import { getRecentCards } from "../../services/cardService.js";
import { Link } from "react-router-dom";
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
          return (
            <Link to={`/card/${cardObj.id}`}>
              <Card cardObj={cardObj} key={cardObj.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
