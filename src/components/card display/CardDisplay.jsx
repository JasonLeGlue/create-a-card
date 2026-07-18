import "./CardDisplay.css";
import { useState, useEffect } from "react";
import { deleteCardById, getCardById } from "../../services/cardService.js";
import { addCardToBinder } from "../../services/binderService.js";
import { addCardToFaves } from "../../services/faveService.js";
import { Card } from "../card/Card.jsx";

export const CardDisplay = () => {
  const [cardObj, setCardObj] = useState({});

  //getCardById hardcoded right now
  useEffect(() => {
    getCardById(3).then(setCardObj);
  }, []);

  const handleDelete = (event) => {
    let userResponse = confirm("Are you sure you want to delete this card?");

    if (userResponse) {
      deleteCardById(cardObj.id);
    } else {
      return;
    }
  };

  const handleSave = (event) => {
    const user = JSON.parse(localStorage.getItem("card_user"));
    console.log(user);
    const data = { userId: user.id, cardId: cardObj.id };

    if (user.id === cardObj.userId) {
      let binderResponse = confirm(
        "Do you want to add this card to your binder?",
      );
      if (binderResponse) {
        addCardToBinder(data);
      } else {
        return;
      }
    } else {
      console.log("Not made by this user.");
      let faveResponse = confirm(
        "Do you want to add this card to your favorites?",
      );
      if (faveResponse) {
        console.log("add to faves");
        addCardToFaves(data);
      } else {
        return;
      }
    }
  };
  // make sure users can only delete their own cards
  return (
    <>
      <div className="displayButtons">
        <button type="button" className="delButton" onClick={handleDelete}>
          X
        </button>
        <button type="button" className="saveButton" onClick={handleSave}>
          Star
        </button>
      </div>
      <div className="displayCenterContent">
        <Card cardObj={cardObj}></Card>
        <p className="description">Description box</p>
        <button type="button" className="removeButton">
          Remove
        </button>
      </div>
    </>
  );
};
