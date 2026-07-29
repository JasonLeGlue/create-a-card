import { Card } from "../card/Card.jsx";
import { useState, useEffect } from "react";
import { getRecentCards } from "../../services/cardService.js";
import { Link } from "react-router-dom";
import "./Welcome.css";

export const Welcome = () => {
  const [sampleCards, setSampleCards] = useState([]);

  useEffect(() => {
    getRecentCards(3).then(setSampleCards);
  }, []);

  return (
    <>
      <h1>Welcome!</h1>
      <h3>
        <Link to="/login">Log in</Link> or <Link to="/register">Register</Link>
      </h3>
      <h3>to join the fun!</h3>
      <div className="cardHolder">
        {sampleCards.map((cardObj) => {
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
