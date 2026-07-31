import { useEffect, useState } from "react";
import { Card } from "../card/Card.jsx";
import { getRecentCards } from "../../services/cardService.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Explore.css";

export const Explore = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getRecentCards(20).then(setCards);
  }, []);

  return (
    <>
      <h2>Explore</h2>
      <div className="exploreCards">
        {cards.map((cardObj) => {
          return (
            <div
              onClick={() => {
                navigate(`/card/${cardObj.id}`);
              }}
              key={cardObj.id}
            >
              <Card cardObj={cardObj} />
            </div>
          );
        })}
      </div>
    </>
  );
};
