import { useState, useEffect } from "react";
import { getCollectionByUserId } from "../../services/cardService.js";
import { Card } from "../card/Card.jsx";
import "./Collection.css";

export const Collection = () => {
  const [collectionCards, setCollectionCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    const foundCards = collectionCards.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredCards(foundCards);
  }, [searchTerm, collectionCards]);

  return (
    <>
      {collectionCards ? (
        <>
          <h2>Collection</h2>
          <FilterBar setSearchTerm={setSearchTerm} />
          <div className="favoriteCards">
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
