import { useState, useEffect } from "react";
import { getCollectionByUserId } from "../../services/cardService.js";
import { Card } from "../card/Card.jsx";
import { FilterBar } from "../filter bar/FilterBar.jsx";
import { Link } from "react-router-dom";
import "./Collection.css";
import { useNavigate } from "react-router-dom";

export const Collection = () => {
  const [collectionCards, setCollectionCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [manaFilter, setManaFilter] = useState(0);
  const navigate = useNavigate();

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
    if (collectionCards.length > 0) {
      const foundCards = collectionCards.filter(
        (card) =>
          card.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (manaFilter == 0 ||
            card.colorCost1 === parseInt(manaFilter) ||
            card.colorCost2 === parseInt(manaFilter) ||
            card.colorCost3 === parseInt(manaFilter)),
      );
      setFilteredCards(foundCards);
    }
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
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
