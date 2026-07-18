import "./CardDisplay.css";
import { useState, useEffect } from "react";
import { deleteCardById, getCardById } from "../../services/cardService.js";
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
  // make sure users can only delete their own cards
  return (
    <>
      <div className="displayButtons">
        <button type="button" className="delButton" onClick={handleDelete}>
          X
        </button>
        <button type="button" className="saveButton">
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
