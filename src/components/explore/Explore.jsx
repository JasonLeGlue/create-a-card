import { useEffect, useState } from "react";
import { Card } from "../card/Card.jsx";
import { getRecentCards } from "../../services/cardService.js";
import "./Explore.css";

export const Explore = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getRecentCards().then(setCards);
  }, []);

  useEffect(() => {
    const foundCards = cards.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredCards(foundCards);
  }, [searchTerm, cards]);

  return (
    <>
      <h2>Explore</h2>
      <FilterBar setSearchTerm={setSearchTerm} />
      <div className="exploreCards">
        {cards.map((cardObj) => {
          return <Card cardObj={cardObj} key={cardObj.id} />;
        })}
      </div>
    </>
  );
};
