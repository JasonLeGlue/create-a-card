import "./CardDisplay.css";
import { useState, useEffect } from "react";
import { getCardById } from "../../services/cardService.js";
import { Card } from "../card/Card.jsx";

export const CardDisplay = () => {
  const [cardObj, setCardObj] = useState({});

  useEffect(() => {
    getCardById(2).then(setCardObj);
  });

  return (
    <>
      <div className="displayButtons">
        <button type="button" className="delButton">
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
