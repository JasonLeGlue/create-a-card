import { useEffect, useState } from "react";
import { Card } from "../card/Card.jsx";
import { getFavesByUserId } from "../../services/faveService.js";
import { getCardById } from "../../services/cardService.js";
import "./Favorites.css";

export const Favorites = () => {
  const [faveCards, setFaveCards] = useState([]);
  // const [displayCards, setDisplayCards] = useState([]);

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

  // const getAndSetDisplayCards = () => {
  //   const cardArray = [];
  //   if (faveCards) {
  //     faveCards.map((card) => {
  //       getCardById(card.cardId).then((res) => {
  //         cardArray.push(res);
  //       });
  //     });
  //     if (faveCards.length === cardArray.length) {
  //       setDisplayCards(cardArray);
  //     }
  //   }
  //   console.log(cardArray);
  // setDisplayCards(cardArray);

  //   console.log("display cards set");
  //   console.log(displayCards);
  // };

  useEffect(() => {
    console.log("getAndSetFaves");
    getAndSetFaves();
  }, []);

  // useEffect(() => {
  //   console.log("faveCards");
  //   getAndSetDisplayCards();
  // }, [faveCards]);

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
