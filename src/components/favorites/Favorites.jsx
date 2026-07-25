import { useEffect, useState } from "react";
import { Card } from "../card/Card.jsx";
import { getFavesByUserId } from "../../services/faveService.js";
import { getCardById } from "../../services/cardService.js";
import "./Favorites.css";

export const Favorites = () => {
  const [faveCards, setFaveCards] = useState([]);

  // look into promise.all, await .
  //check 404 error in console
  // expand cardId in getFaves query *
  //optional chaining '?'

  const getAndSetFaves = () => {
    const cardUser = JSON.parse(localStorage.getItem("card_user"));
    getFavesByUserId(cardUser.id).then((favesArray) => {
      setFaveCards(favesArray);
      console.log("fave cards set");
      console.log(faveCards);
    });
  };

  useEffect(() => {
    getAndSetFaves();
  }, []);

  return (
    <>
      {faveCards ? (
        <>
          <h2>Favorites</h2>
          <div className="favoriteCards">
            {faveCards.map((faveObj) => {
              return <Card cardObj={faveObj.card} key={faveObj.card.id} />;
            })}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
