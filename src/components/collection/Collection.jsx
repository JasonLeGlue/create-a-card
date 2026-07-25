import { useState, useEffect } from "react";
import { getCollectionByUserId } from "../../services/cardService.js";
import { Card } from "../card/Card.jsx";
import "./Collection.css";

export const Collection = () => {
  const [collectionCards, setCollectionCards] = useState([]);

  const getAndSetCollection = () => {
    const cardUser = JSON.parse(localStorage.getItem("card_user"));
    getCollectionByUserId(cardUser.id).then((collectionArray) =>
      setCollectionCards(collectionArray),
    );
  };

  useEffect(() => {
    getAndSetCollection();
  }, []);

  return (
    <>
      {collectionCards ? (
        <>
          <h2>Collection</h2>
          <div className="collectionCards">
            {collectionCards.map((cardObj) => {
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
