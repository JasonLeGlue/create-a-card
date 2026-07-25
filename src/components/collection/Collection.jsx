import { useState, useEffect } from "react";
import { getCollectionByUserId } from "../../services/cardService.js";
import { Card } from "../card/Card.jsx";
import { FilterBar } from "../filter bar/FilterBar.jsx";
import "./Collection.css";

export const Collection = () => {
  const [collectionCards, setCollectionCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [manaFilter, setManaFilter] = useState(0);

  const getAndSetCollection = () => {
    const cardUser = JSON.parse(localStorage.getItem("card_user"));
    getCollectionByUserId(cardUser.id).then((collectionArray) =>
      setCollectionCards(collectionArray),
    );
  };

  useEffect(() => {
    getAndSetCollection();
  }, []);

  useEffect(() => {
    const foundCards = collectionCards.filter(
      (card) =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (card.colorCost1 === parseInt(manaFilter) ||
          card.colorCost2 === parseInt(manaFilter) ||
          card.colorCost3 === parseInt(manaFilter)),
    );
    setFilteredCards(foundCards);
  }, [searchTerm, collectionCards, manaFilter]);

  return (
    <>
      {collectionCards ? (
        <>
          <h2>Collection</h2>
          <FilterBar
            setSearchTerm={setSearchTerm}
            setManaFilter={setManaFilter}
          />
          <div className="collectionCards">
            {filteredCards.map((cardObj) => {
              return <Card cardObj={cardObj} key={cardObj.id} />;
            })}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
